import {IWorkItem} from "./types/IWorkItem.ts";
import adminPanel from '../src/assets/projects/admin-panel.png'
import configurator3D from '../src/assets/projects/3dconfigurator.png';

export const experiences: IWorkItem[] = [{
    title: "Fullstack Developer · HomeKlick GmbH ",
    description: `Build, style, and ship high-quality websites. Work closely with cross-functional teams, including 
    developers, designers, and product managers, to implement best approaches in web development.`,
    technologies: ['JavaScript', 'TypeScript', 'HTML & CSS', 'React', 'Next.js', 'Flask'],
    date: 'JULY 2023 — NOV 2024',
    id: 1,
    link: 'https://home-klick.de'
}]

export const projects: IWorkItem[] = [
    {
        title: "Admin panel",
        description: "Admin panel for complete management of buildings, apartments, requests, etc. Still under development.",
        technologies: ['Next.js', 'TypeScript', 'HTML & CSS', 'Flask', 'Docker', 'Redux'],
        id: 1,
        link: '',
        picture: adminPanel
    },
    {
        title: "3D Konfigurator",
        description: "The web-application designed for virtual exploration and customization of residential properties.",
            technologies: ['React', 'JavaScript', 'HTML & CSS', 'Flask', 'Docker', 'Nginx'],
        id: 2,
        link: 'https://demo.app.home-klick.dev/?key=AMS004-TH01',
        picture: configurator3D
    }
]