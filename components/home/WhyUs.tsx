import { Award, Gem, ShieldCheck } from "lucide-react";
import Container from "../Container";

export default function WhyUs() {
    return (
        <Container className="bg-black">
            <section className="bg-black min-h-128">
                <div className="flex flex-col items-center py-12">
                    <h2 className="text-gold text-5xl font-bold py-6">
                        Why choose Marble Handicrafts
                    </h2>
                    <div className="flex justify-between pt-16 gap-8">
                        <div className="flex flex-col items-center">
                            <Award color="white" size={60} />
                            <p className="text-marble text-xl text-center pt-4">
                                Years of experience and expertise in marble
                                craftsmanship.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Gem color="white" size={60} />
                            <p className="text-marble text-xl text-center pt-4">
                                Every detail carefully crafted with precision
                                and care.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <ShieldCheck color="white" size={60} />
                            <p className="text-marble text-xl text-center pt-4">
                                Premium-quality marble and fine finishing in
                                every sculpture.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}
