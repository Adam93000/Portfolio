export default function ProjectCard({ project }) {
    const { title, subtitle, coverImage, tags, content, links } = project;

    return (
        <article className="bg-slate-800 rounded-xl overflow-hidden shadow-lg flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {/* En-tête avec l'image */}
            <div className="h-48 w-full bg-slate-700">
                <img
                    src={coverImage}
                    alt={`Aperçu du projet ${title}`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Corps de la carte */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
                <h4 className="text-blue-400 text-sm font-semibold mb-4">{subtitle}</h4>

                {/* Badges pour les technos */}
                <ul className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, index) => (
                        <li key={index} className="bg-slate-700 text-slate-200 text-xs px-3 py-1 rounded-full">
                            {tag}
                        </li>
                    ))}
                </ul>

                {/* Les 6 points clés du projet */}
                <div className="text-slate-300 text-sm space-y-3 mb-8 flex-grow">
                    <p><strong className="text-white">Contexte :</strong> {content.context}</p>
                    <p><strong className="text-white">Objectifs :</strong> {content.objectives}</p>
                    <p><strong className="text-white">Stack :</strong> {content.stack}</p>
                    <p><strong className="text-white">Compétences :</strong> {content.skills}</p>
                    <p><strong className="text-white">Résultats :</strong> {content.results}</p>
                    <p><strong className="text-white">Améliorations :</strong> {content.improvements}</p>
                </div>

                {/* Boutons de redirection */}
                <div className="flex gap-4 mt-auto">
                    <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                        Code GitHub
                    </a>
                    {links.demo && (
                        <a
                            href={links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                        >
                            Voir le site
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}