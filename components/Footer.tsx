import Link from "next/link";
import Container from "./Container";

export default function Footer() {
    return (
        <Container>
            <div className="flex min-h-56 py-16 justify-between">
                <div className="flex flex-col">
                    <p className="text-5xl font-bold text-black">Marble</p>
                    <p className="text-5xl font-bold text-black">Handicrafts</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-3xl">HELP & INFO</p>
                    <ul className="flex flex-col gap-1 pt-6">
                        <li>
                            <Link href={"/about"}>About Us</Link>
                        </li>
                        <li>
                            <Link href={"/terms"}>Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link href={"/privacy-policy"}>Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col w-1/4">
                    <p className="text-3xl">Get In Touch</p>
                    <div className="font-extralight pt-6 flex flex-col">
                        <p>
                            Address: Officers enclave, kalwar road, jhotwara,
                            jaipur, rajasthan, India - 302012
                        </p>
                        <span>Phone: +91-9955995599</span>
                        <span>Email: info@example.in</span>
                    </div>
                </div>
            </div>
        </Container>
    );
}
