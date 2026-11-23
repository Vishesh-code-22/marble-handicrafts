import Container from "./Container";

export default function Navbar() {
    return (
        <Container>
            <nav className="flex justify-between items-center h-20 w-full">
                <div>
                    <h2 className="text-2xl font-bold tracking-wider text-black">
                        Marble Handicrafts
                    </h2>
                </div>
                <ul className="flex space-x-8">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Categories</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}
