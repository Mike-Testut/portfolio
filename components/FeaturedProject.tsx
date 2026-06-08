"use client";

import { useState } from "react";
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

export default function FeaturedProject() {
    const [selectedImage, setSelectedImage] = useState<
        { src: string; alt: string } | null
    >(null);

    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Featured Project
            </p>

            <h2 className="mt-3 text-4xl font-bold">Sunset Daydreams</h2>

            <p className="mt-4 max-w-3xl text-zinc-300">
                A full-stack e-commerce platform with product browsing, cart management,
                JWT authentication, admin inventory tools, order management, Stripe
                embedded checkout, and webhook-based order finalization.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {screenshots.map((image) => (
                    <button
                        key={image.src}
                        type="button"
                        onClick={() => setSelectedImage(image)}
                        className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 text-left transition hover:scale-[1.02] hover:border-cyan-400 cursor-zoom-in"
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