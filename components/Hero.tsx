
export default function Hero() {
    return (
        <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Junior Full-Stack Software Engineer
            </p>
            <h1 className="text-6xl max-w-4xl  font-bold text-white md:text-8xl">
                Michael Testut
            </h1>
            <h2 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
                I build practical web apps with real-world features.
            </h2>

            <p className="mt-6 max-w-2xl text-lg text-zinc-300">
                Full-stack developer focused on React, TypeScript, Node.js, Express,
                MongoDB, authentication, admin dashboards, payments, and clean user
                experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-zinc-950">
                    View Projects
                </a>
                <a href="/resume.pdf" className="rounded-full border border-zinc-700 px-6 py-3 font-semibold">
                    Download Resume
                </a>
            </div>
        </section>
    )
}
