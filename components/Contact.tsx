import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiFileText } from "react-icons/fi";

export default function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
            <div className="rounded-3xl border border-coral/10 bg-white/80 p-8 text-center shadow-lg shadow-black/5 backdrop-blur-sm md:p-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-coral">
                    Contact
                </p>

                <h2 className="mt-3 text-3xl font-bold text-charcoal">
                    Let&apos;s build something together.
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted">
                    I am currently open to entry-level software engineer opportunities -- full-stack,
                    frontend, or backend
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                        href="mailto:michael.testut@gmail.com"
                        className="flex items-center gap-2 rounded-full bg-coral px-5 py-3 font-medium text-white transition hover:opacity-90"
                    >
                        <FiMail />
                        Email Me
                    </a>

                    <a
                        href="/resume.pdf"
                        className="flex items-center gap-2 rounded-full border border-coral/30 bg-white/70 px-5 py-3 font-medium text-charcoal transition hover:bg-white"
                    >
                        <FiFileText />
                        Resume
                    </a>

                    <a
                        href="https://github.com/mike-testut"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full border border-coral/30 bg-white/70 px-5 py-3 font-medium text-charcoal transition hover:bg-white"
                    >
                        <FaGithub />
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/michaeltestut"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full border border-coral/30 bg-white/70 px-5 py-3 font-medium text-charcoal transition hover:bg-white"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}