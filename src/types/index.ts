import type { ImageInputFormat } from "astro";

export interface ImageMetadata {
    src: string;
    width: number;
    height: number;
    format: ImageInputFormat;
    orientation?: number;
}

export interface TechnologyGroupItem {
    name: string;
    icon: {
        src: ImageMetadata;
        size: number;
        applyBackground?: boolean
    };
}

export interface TechnologyGroup {
    name: string;
    items: TechnologyGroupItem[];
}

export interface Project {
    name: string;
    description: string;
    image: ImageMetadata;
    technologies: Array<TechnologyGroupItem>;
    repo: string;
    web?: string;
}

export interface Course {
    name: string;
    teachers: [string];
    certificateSrc: ImageMetadata;
    link: string;
}

export interface NavItems {
    title: string;
    label: string;
    url: string;
}