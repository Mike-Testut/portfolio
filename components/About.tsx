export default function About() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-coral">
                About
            </p>

            <div className="mt-3 grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
                <h2 className="text-3xl font-bold text-charcoal">
                    Turning ideas into polished digital products
                </h2>

                <div className="space-y-5 text-lg leading-8 text-muted">
                    <p>
                        I am a full-stack software engineer focused on building useful,
                        polished applications that solve real problems. I enjoy working
                        across the stack, from designing intuitive interfaces to building
                        APIs, integrating third-party services, and deploying projects.
                    </p>

                    <p>
                        Before software engineering, I worked in hospitality management,
                        where I learned how to communicate clearly, stay calm under
                        pressure, prioritize quickly, and solve problems for real people in
                        real time. That experience continues to shape how I approach
                        engineering.
                    </p>

                    <p>
                        I am currently focused on growing into a junior software
                        engineering role where I can contribute to a team, continue learning,
                        and build products that people genuinely enjoy using.
                    </p>
                </div>
            </div>
        </section>
    );
}