import Container from "../Container";

export default function Hero() {
    return (
        <Container
            style={{
                backgroundImage: "url('/buddha.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <section className="h-[calc(100svh-80px)]">
                <div className="mx-auto pt-52 flex flex-col gap-4">
                    <p className="text-7xl">Sculpting Timeless</p>
                    <p className="text-7xl">Art since</p>
                    <p className="text-8xl">1975</p>
                    <button className="bg-white border-2 border-black w-max px-4 py-2 rounded-2xl cursor-pointer">
                        Shop now
                    </button>
                </div>
            </section>
        </Container>
    );
}
