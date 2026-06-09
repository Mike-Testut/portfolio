type Project = {
    title: string;
    description: string;
    stack: string[];
    demo?: string;
    github?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article
            className="
        rounded-3xl
        bg-white/80
        backdrop-blur-sm
        border
        border-coral/10
        shadow-lg
        shadow-black/5
        p-6
        transition
        hover:-translate-y-1
        hover:shadow-xl
      "
        >
            <h3 className="text-xl font-bold text-charcoal">
                {project.title}
            </h3>

            <p className="mt-3 text-muted">
                {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                    <span
                        key={tech}
                        className="
              rounded-full
              border
              border-coral/20
              bg-peach/30
              px-3
              py-1
              text-sm
              font-medium
              text-charcoal
            "
                    >
            {tech}
          </span>
                ))}
            </div>
        </article>
    );
}