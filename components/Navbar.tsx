import { FiFileText } from "react-icons/fi";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-coral/10 bg-white/70 backdrop-blur-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#" className="font-bold text-charcoal">
                    Michael Testut
                </a>

                <div className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
                    <a href="#projects" className="transition hover:text-coral">
                        Projects
                    </a>
                    <a href="#skills" className="transition hover:text-coral">
                        Skills
                    </a>
                    <a href="#about" className="transition hover:text-coral">
                        About
                    </a>
                    <a href="#contact" className="transition hover:text-coral">
                        Contact
                    </a>

                    <a
                        href="/resume.pdf"
                        className="flex items-center gap-2 rounded-full bg-coral px-4 py-2 font-semibold text-white transition hover:opacity-90"
                    >
                        <FiFileText />
                        Resume
                    </a>
                </div>
            </nav>
        </header>
    );
}