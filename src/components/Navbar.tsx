import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-olive-700 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    {/* Use a placeholder text instead of an image until provided */}
                    <div className="font-bold text-2xl tracking-tighter">
                        OVER <span className="text-olive-300">CÁLCULOS</span>
                    </div>
                </Link>
                <ul className="hidden md:flex space-x-8 items-center font-medium">
                    <li>
                        <Link href="/" className="hover:text-olive-200 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li className="group relative">
                        <span className="cursor-pointer hover:text-olive-200 transition-colors py-2">
                            Serviços
                        </span>
                        <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-olive-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 overflow-hidden">
                            <li>
                                <Link
                                    href="/servicos/design"
                                    className="block px-4 py-2 hover:bg-olive-50 transition-colors"
                                >
                                    Serviços Disponíveis
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="group relative">
                        <Link href="/calculadoras" className="cursor-pointer hover:text-olive-200 transition-colors py-2 block">
                            Calculadoras
                        </Link>
                        <ul className="absolute top-full left-0 mt-2 w-56 bg-white text-olive-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 overflow-hidden">
                            <li>
                                <Link
                                    href="/calculadoras/calculos-trabalhistas"
                                    className="block px-4 py-2 hover:bg-olive-50 transition-colors"
                                >
                                    Cálculos Trabalhistas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/calculadoras/pericias"
                                    className="block px-4 py-2 hover:bg-olive-50 transition-colors"
                                >
                                    Perícias
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/sobre" className="hover:text-olive-200 transition-colors">
                            Sobre nós
                        </Link>
                    </li>
                    <li>
                        <Link href="/fundamentacao-legal" className="hover:text-olive-200 transition-colors">
                            Fundamentação Legal
                        </Link>
                    </li>
                </ul>
                <div className="hidden md:block">
                    <Link
                        href="/contato"
                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-sm flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Contato
                    </Link>
                </div>
                {/* Mobile menu button */}
                <button className="md:hidden text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
