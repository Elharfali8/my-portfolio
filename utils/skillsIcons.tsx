import { FC, SVGProps } from 'react'
import { html, css, javascript, react, next, mongodb, express, nodejs, framer, tailwind, typescript, sass } from '@/public/assets/icons'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type Icons = {
    id: number;
    name: string;
    icon: StaticImport | string;
}

export const skillsIcons: Icons[] = [
    {
        id: 1,
        name: 'HTML',
        icon: html,
    },
    {
        id: 2,
        name: 'CSS',
        icon: css,
    },
    {
        id: 3,
        name: 'JavaScript',
        icon: javascript,
    },
    {
        id: 4,
        name: 'TypeScript',
        icon: typescript,
    },
    {
        id: 5,
        name: 'React',
        icon: react,
    },
    {
        id: 6,
        name: 'Next.js',
        icon: next,
    },
    {
        id: 7,
        name: 'Node.js',
        icon: nodejs,
    },
    {
        id: 8,
        name: 'Express.js',
        icon: express,
    },
    {
        id: 9,
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        id: 10,
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        id: 11,
        name: 'Framer Motion',
        icon: framer,
    },
    {
        id: 12,
        name: 'Sass',
        icon: sass,
    },
]