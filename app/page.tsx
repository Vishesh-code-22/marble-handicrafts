import Categories from "@/components/home/Categories";
import CategoryExploration from "@/components/home/CategoryExploration";
import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
    return (
        <div>
            <Hero />
            <Categories />
            <CategoryExploration />
            <WhyUs />
        </div>
    );
}
