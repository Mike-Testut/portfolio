"use client";

import Image from "next/image";

type ImageModalProps = {
    src: string;
    alt: string;
    onClose: () => void;
};

export default function ImageModal({src, alt, onClose}: ImageModalProps) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-zoom-out"
            onClick={onClose}
        >
            <button
                className="absolute right-6 top-6 text-3xl text-white cursor-pointer"
                onClick={onClose}
                aria-label="Close image preview"
            >
                x
            </button>
            <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto rounded-2xl object-contain"
                onClick={(e) => {e.stopPropagation(); onClose()}}
            />
        </div>
    )
}
