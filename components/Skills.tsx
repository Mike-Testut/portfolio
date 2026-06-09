const skillGroups = [
    {
        title: "Frontend",
        skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "REST APIs", "MongoDB", "Mongoose", "JWT"],
    },
    {
        title: "Tools & Deployment",
        skills: ["Git", "GitHub", "Postman", "Vercel", "Render", "Stripe"],
    },
    {
        title: "Currently Learning",
        skills: ["Next.js", "Go", "Vue", "WebSockets"],
    },
];

export default function Skills() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-coral">
                Skills
            </p>

            <h2 className="mt-3 text-3xl font-bold text-charcoal">
                Technologies I work with
            </h2>

            <p className="mt-4 max-w-2xl text-muted">
                I focus on building full-stack applications with clean interfaces,
                reliable APIs, and practical tools that support real user workflows.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
                {skillGroups.map((group) => (
                    <div
                        key={group.title}
                        className="rounded-3xl border border-coral/10 bg-white/80 p-6 shadow-lg shadow-black/5 backdrop-blur-sm"
                    >
                        <h3 className="text-xl font-bold text-charcoal">{group.title}</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-coral/20 bg-peach/30 px-3 py-1 text-sm font-medium text-charcoal"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}