import Image from "next/image";

export default function Hero() {
    return (
        <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
            <div>
                <h1 className="mb-4 text-4xl font-semibold uppercase tracking-widest text-coral">
                    Michael Testut
                </h1>

                <h2 className="text-2xl font-bold tracking-tight">
                    Full-Stack Software Engineer
                </h2>

                <p className="mt-6 text-lg text-muted">
                    Full-stack engineer passionate about building useful products, solving
                    challenging problems, and continuously learning new technologies.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="rounded-full bg-coral px-6 py-3 font-semibold text-white"
                    >
                        View Projects
                    </a>
                    <a
                        href="/resume.pdf"
                        className="rounded-full border border-coral/30 bg-white/70 px-6 py-3 font-semibold text-charcoal"
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            <div className="flex justify-center md:justify-end">
                <Image
                    src="/images/headshot.jpg"
                    alt="Michael Testut headshot"
                    width={360}
                    height={360}
                    className="rounded-3xl border border-zinc-800 object-cover shadow-2xl"
                    priority
                />
            </div>
        </section>
    );
}