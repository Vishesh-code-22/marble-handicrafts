import CategoryItem from "@/components/home/extras/CategoryItem";
import Container from "../Container";

const categories = [
    {
        title: "Hindu Gods & Goddesses",
        subtitle: "Divine Art, Timeless Devotion",
        description:
            "Explore intricately handcrafted marble representations of Hindu deities, including Ganesha, Shiva, Krishna, Lakshmi, Saraswati, Hanuman, and more.",
        image: "https://images.unsplash.com/photo-1616377009507-c8111f07aced?auto=format&fit=crop&w=1400&q=80",
        imageAlt: "Stone Ganesha statue in a lush garden",
        href: "/hindu-gods",
    },
    {
        title: "Buddha Statues",
        subtitle: "Serenity Carved in Stone",
        description:
            "Discover beautifully carved Buddha sculptures, from peaceful meditation poses to standing and reclining forms, crafted to bring tranquility to any space.",
        image: "https://images.unsplash.com/photo-1529485726363-95c8d62f656f?auto=format&fit=crop&w=1400&q=80",
        imageAlt: "White Buddha statue seated in a tranquil garden",
        href: "/buddha-statues",
    },
    {
        title: "Jain Tirthankaras",
        subtitle: "Expressions of Peace and Spirituality",
        description:
            "Explore finely detailed marble sculptures of Mahavira and other Jain Tirthankaras, reflecting the timeless traditions of Jain craftsmanship.",
        image: "https://images.unsplash.com/photo-1743445483693-d45f8df11a48?auto=format&fit=crop&w=1400&q=80",
        imageAlt: "Marble Jain Tirthankara seated in an ornate shrine",
        href: "/jain-tirthankaras",
    },
    {
        title: "Animal Sculptures",
        subtitle: "Nature Brought to Life in Marble",
        description:
            "Discover handcrafted animal sculptures, including elephants, horses, lions, Nandi bulls, and other beautifully detailed creations.",
        image: "https://images.unsplash.com/photo-1544620462-93b43ffb6e00?auto=format&fit=crop&w=1400&q=80",
        imageAlt: "Stone elephant statue surrounded by greenery",
        href: "/animal-sculptures",
    },
    {
        title: "Home & Garden Decor",
        subtitle: "Art That Elevates Every Space",
        description:
            "Explore decorative marble sculptures, garden statues, and ornamental pieces designed to bring elegance and character to your surroundings.",
        image: "https://images.unsplash.com/photo-1533800790978-ab520ae73a68?auto=format&fit=crop&w=1400&q=80",
        imageAlt: "Marble garden statue in a formal garden",
        href: "/home-garden-decor",
    },
    {
        title: "Custom Marble Sculptures",
        subtitle: "Your Vision, Our Craftsmanship",
        description:
            "Bring your ideas to life with bespoke marble sculptures, handcrafted according to your preferred design, dimensions, and requirements.",
        image: "https://images.unsplash.com/photo-1721009714211-a4d1da7d05f4?auto=format&fit=crop&w=1400&q=80",
        imageAlt: "Sculptor carving a marble bust in a workshop",
        href: "/custom-marble-sculptures",
    },
];

export type Category = (typeof categories)[number]; //Indexes Access Types

export default function CategoryExploration() {
    return (
        <Container>
            <section
                aria-label="Explore our statue categories"
                className="w-full"
            >
                {categories.map((category, index) => (
                    <CategoryItem
                        key={category.href}
                        category={category}
                        index={index}
                    />
                ))}
            </section>
        </Container>
    );
}
