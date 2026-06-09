"use client";

import {useState} from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import ImageModal from "./ImageModal";

const screenshots = [
    {
        src: "/images/sunset-home.png",
        alt: "Sunset Daydreams storefront homepage",
    },
    {
        src: "/images/sunset-admin.png",
        alt: "Sunset Daydreams admin dashboard",
    },
    {
        src: "/images/sunset-checkout.png",
        alt: "Sunset Daydreams checkout flow",
    },
];

const techStack = [
    "React",
    "Redux Toolkit",
    "Node.js",
    "Express",
    "MongoDB",
    "Stripe",
    "JWT",
    "Tailwind CSS",
    "Vercel",
    "Render",
];

export default function FeaturedProject() {
    const [selectedImage, setSelectedImage] = useState<
        { src: string; alt: string } | null
    >(null);

    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-coral">
                Featured Project
            </p>

            <h2 className="mt-3 text-4xl font-bold text-charcoal">
                Sunset Daydreams
            </h2>

            <div className="mt-6 flex flex-wrap gap-4">
                <a
                    href="https://sunset-daydreams.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-coral px-5 py-2 font-medium text-white transition hover:opacity-90"
                >
                    <FiExternalLink />
                    Live Demo
                </a>

                <a
                    href="https://github.com/mike-testut/SunsetDaydreams-ECommerceStore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-coral/30 bg-white/70 px-5 py-2 font-medium text-charcoal transition hover:bg-white"
                >
                    <FaGithub />
                    Source Code
                </a>
            </div>

            <p className="mt-4 max-w-3xl text-muted">
                A full-stack e-commerce platform with product browsing, cart management,
                JWT authentication, admin inventory tools, order management, Stripe
                embedded checkout, and webhook-based order finalization.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full bg-peach/30 px-3 py-1 text-sm font-medium text-charcoal border border-coral/20"

                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {screenshots.map((image) => (
                    <button
                        key={image.src}
                        type="button"
                        onClick={() => setSelectedImage(image)}
                        className="
                            overflow-hidden
                            rounded-3xl
                            bg-white/80
                            backdrop-blur-sm
                            border border-coral/10
                            shadow-lg shadow-black/5
                            cursor-zoom-in"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={800}
                            height={500}
                            className="h-56 w-full object-cover"
                        />
                    </button>
                ))}
            </div>

            {selectedImage && (
                <ImageModal
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </section>
    );
}