class ThemeButton extends HTMLElement {
  constructor() {
    super();

    const $themeMenuButton = this.querySelector<HTMLElement>(
      "#toggle-theme-button"
    );
    const $themeMenuButtonIcons = this.querySelectorAll(
      "[data-theme-button-icon]"
    );
    const $themesMenu = this.querySelector<HTMLElement>("#themes-menu");

    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

    const getTheme = () => {
      if (typeof localStorage !== "undefined") {
        return localStorage.getItem("theme") ?? "system";
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };

    const theme = getTheme();

    const toggleMenuVisibility = () => {
      $themesMenu!.classList.toggle("hidden");
      $themesMenu!.classList.toggle("open");
    };

    const updateThemeButtonContent = (theme: string) => {
      $themeMenuButtonIcons.forEach((icon) => {
        const id = icon.id;
        icon.classList.toggle("block", id === theme);
        icon.classList.toggle("hidden", id !== theme);
      });
    };

    const handleToggleMenuButtonClick = () => {
      toggleMenuVisibility();
    };

    const updateTheme = (theme: string) => {
      const element = document.documentElement;
      element.classList.toggle("dark", theme !== "light");

      localStorage.setItem("theme", theme);
      updateThemeButtonContent(theme);
    };

    updateTheme(theme);

    const handleToggleThemeButtonClick = (theme: string) => {
      updateTheme(theme);
    };

    const onClickOutside = (selector: string, cb: () => void) => {
      document.addEventListener("click", (event) => {
        const selectedElement = document.querySelector(selector);
        const targetElement = event.target;
        if (
          selectedElement &&
          targetElement &&
          targetElement instanceof HTMLElement
        ) {
          if (!selectedElement.contains(targetElement) && targetElement) cb();
        }
      });
    };

    // Using
    if ($themesMenu && $themeMenuButton) {
      onClickOutside("#themes-menu", () => {
        $themesMenu.classList.add("hidden");
        $themesMenu.classList.remove("open");
      });

      $themesMenu.addEventListener("click", (event) => {
        event.stopPropagation();
        if (
          event.target &&
          event.target instanceof HTMLElement &&
          event.target.tagName === "BUTTON"
        ) {
          const theme = event.target.getAttribute("data-theme");
          handleToggleThemeButtonClick(theme ?? "system");
          toggleMenuVisibility();
        }
      });

      $themeMenuButton.addEventListener("click", (event) => {
        event.stopPropagation();
        handleToggleMenuButtonClick();
      });

      matchMedia.addEventListener("change", () => {
        const theme = getTheme();
        updateTheme(theme);
      });
    }
  }
}

customElements.define("astro-theme-button", ThemeButton);
