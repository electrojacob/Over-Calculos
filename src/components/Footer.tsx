import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-olive-900 text-olive-100 py-12 mt-auto">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive-400">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            (11) 99999-9999
                        </li>
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive-400">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            contato@seudominio.com
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Localização</h3>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive-400 mt-1 flex-shrink-0">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>
                                São Paulo - SP <br />
                                <span className="text-sm text-olive-300">Atendimento em todo o Brasil</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Parceiros</h3>
                    <ul className="space-y-2">
                        <li>Empresa 1</li>
                        <li>Empresa 2</li>
                        <li>Empresa 3</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-olive-800 flex flex-col md:flex-row justify-between items-center text-sm text-olive-400">
                <p>© {new Date().getFullYear()} Over Cálculos — Todos os direitos reservados</p>
                <div className="mt-4 md:mt-0 space-x-4">
                    <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">
                        Política de Privacidade
                    </Link>
                    <Link href="/termos-de-uso" className="hover:text-white transition-colors">
                        Termos de Uso
                    </Link>
                </div>
            </div>
        </footer>
    );
}
