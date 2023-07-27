import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return(
        <nav className="flex justify-between items-center p-4 mb-8 bg-slate-700 text-cyan-50">
            <div className="flex justify-center items-center">
                <Image 
                    src="/pokeball.png" 
                    width={20} 
                    height={30} 
                    alt="PokeNext" 
                />
                <h1 className="ml-2">PokeNext</h1>
            </div>
            <ul className="flex list-none">
                <li className="mr-5">
                    <Link href="/" className="decoration-cyan-50 border-b-2 border-solid border-b-transparent hover:border-white">Home</Link>
                </li>
                <li className="mr-5">
                    <Link href="/about" className="decoration-cyan-50 border-b-2 border-solid border-b-transparent hover:border-white">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}