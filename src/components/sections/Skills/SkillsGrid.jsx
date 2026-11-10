import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiHtml5,
} from 'react-icons/si';
import { TbSeo, TbBug } from 'react-icons/tb';

const skillsData = [
  {
    id: 'react',
    title: 'React',
    category: 'INTERFACES',
    description: 'Composants, hooks & routage',
    icon: <SiReact className="size-6 text-brand" />,
  },
  {
    id: 'redux',
    title: 'Redux',
    category: 'ÉTAT',
    description: 'État global & flux de données',
    icon: <SiRedux className="size-6 text-brand" />,
  },
  {
    id: 'js',
    title: 'JavaScript ES6+',
    category: 'LANGAGE',
    description: 'Logique, modules & asynchrone',
    icon: <SiJavascript className="size-6 text-brand" />,
  },
  {
    id: 'tailwindcss',
    title: 'Tailwind CSS',
    category: 'STYLING',
    description: 'Utility-first, responsive & design system',
    icon: <SiTailwindcss className="size-6 text-brand" />,
  },
  {
    id: 'git',
    title: 'Git & GitHub',
    category: 'VERSIONING',
    description: 'Gestion de versions, branches & workflows',
    icon: <SiGit className="size-6 text-brand" />,
  },
  {
    id: 'seo',
    title: 'Optimisation SEO',
    category: 'VISIBILITÉ',
    description: 'Sémantique, métadonnées & performance',
    icon: <TbSeo className="size-6 text-brand" />,
  },
  {
    id: 'debug',
    title: 'Debugging',
    category: 'QUALITÉ',
    description: 'Diagnostic, DevTools & résolution de bugs',
    icon: <TbBug className="size-6 text-brand" />,
  },
  {
    id: 'html-css',
    title: 'HTML5 / CSS3',
    category: 'FONDATIONS',
    description: 'Structure sémantique & responsive design',
    icon: <SiHtml5 className="size-6 text-brand" />,
  },
];

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {skillsData.map((skill) => (
        <article
          key={skill.id}
          className="flex flex-col justify-between rounded-xl border border-line bg-surface p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1"
        >
          {/* Haut de la carte : Icône officielle + Catégorie */}
          <div className="mb-6 flex items-start justify-between">
            <div className="flex size-7 items-center justify-start">
              {skill.icon}
            </div>
            <span className="font-mono text-[11px] font-medium tracking-[0.06em] text-muted">
              {skill.category}
            </span>
          </div>

          {/* Corps de la carte : Titre + Description */}
          <div className="flex flex-col gap-2">
            <h3 className="font-mono text-xl font-bold tracking-[-0.02em] text-ink">
              {skill.title}
            </h3>
            <p className="font-sans text-sm leading-[1.6] text-muted">
              {skill.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
