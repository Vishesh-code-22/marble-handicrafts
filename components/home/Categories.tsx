import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

export default function Categories() {
    const categories = [
        {
            name: "Hindu Gods",
            image: "https://images.unsplash.com/photo-1660855428134-3f92498d0dfd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            link: "/hindu-gods",
            alt: "Hindu God Statue",
        },
        {
            name: "Buddha Statues",
            image: "https://images.unsplash.com/photo-1629953031870-02be15a295ee?q=80&w=2692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            link: "/buddha-statues",
            alt: "Buddha Statue",
        },
        {
            name: "Jain Tirthankaras",
            image: "https://images.unsplash.com/photo-1598194809131-c1666cbd01c7?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            link: "/jain-tirthankaras",
            alt: "Jain Tirthankaras",
        },
        {
            name: "Animal Sculptures",
            image: "https://images.unsplash.com/photo-1705039340882-351744cf06e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            link: "/animal-sculptures",
            alt: "Stone Elephant Sculpture",
        },
        {
            name: "Home & Garden Decor",
            image: "https://images.unsplash.com/photo-1695893377311-078a8ca450b3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            link: "/home-garden-decor",
            alt: "Stone Statue in a Garden",
        },
        {
            name: "Custom Marble Sculptures",
            image: "https://images.unsplash.com/photo-1785566751862-efbc6e542a58?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            link: "/custom-marble-sculptures",
            alt: "Handcrafted Stone Sculpture",
        },
    ];
    return (
        <Container>
            <div className="flex flex-col items-center my-16 w-full">
                <h2 className="text-5xl py-8 mb-8">Categories</h2>
                <ul className="grid grid-cols-3 w-full gap-20">
                    {categories.map((category) => (
                        <li
                            key={category.name}
                            className="bg-black p-4 rounded-2xl"
                        >
                            <Link href={category.link}>
                                <Image
                                    src={category.image}
                                    alt={category.alt}
                                    width={300}
                                    height={400}
                                    className="mb-4 rounded-2xl w-full h-fit aspect-square object-cover"
                                />
                                <p className="text-lg text-marble">
                                    {category.name}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
}
