import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/components/home/CategoryExploration";

interface CategoryItemProps {
    category: Category;
    index: number;
}

export default function CategoryItem({ category, index }: CategoryItemProps) {
    const imageOnRight = index % 2 === 1; // odd even

    return (
        <article
            aria-labelledby={`category-${index}-title`}
            className="flex min-h-[calc(100svh-5rem)] items-center py-12 md:py-16"
        >
            <div className="w-full flex justify-between items-center">
                <div
                    className={`relative aspect-4/5 w-full max-w-md overflow-hidden rounded-sm border border-stone ${
                        imageOnRight ? "md:order-2" : "md:order-1"
                    }`}
                >
                    <Image
                        src={category.image}
                        alt={category.imageAlt}
                        fill
                        sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1279px) 50vw, 42rem"
                        className="object-cover"
                    />
                </div>
                <div
                    className={`flex flex-col items-start ${
                        imageOnRight ? "md:order-1" : "md:order-2"
                    }`}
                >
                    <h2
                        id={`category-${index}-title`}
                        className="text-2xl font-medium uppercase tracking-[0.08em] text-bronze sm:text-3xl"
                    >
                        {category.title}
                    </h2>
                    <p className="mt-3 text-sm font-medium uppercase tracking-wide text-black sm:text-base">
                        {category.subtitle}
                    </p>
                    <p className="mt-7 max-w-xl text-base leading-7 text-charcoal">
                        {category.description}
                    </p>
                    <Link
                        href={category.href}
                        className="mt-8 inline-flex items-center gap-2 rounded-sm border border-gold bg-gold px-5 py-3 text-sm font-medium uppercase tracking-wide text-black transition-colors hover:border-bronze hover:bg-bronze hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
                    >
                        Explore Collection
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </article>
    );
}
