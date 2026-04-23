import Link from "next/link";

export default function SobrePage() {
    return (
        <div className="py-16">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-olive-900 mb-4">Sobre a Over Cálculos</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Referência nacional em liquidação de sentenças e perícias trabalhistas, unindo expertise contábil e profundo conhecimento jurídico.
                    </p>
                </div>

                {/* Content Section 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 md:order-1 space-y-6">
                        <h2 className="text-3xl font-bold text-olive-800">Nossa História</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Fundada com o propósito de descomplicar os intrincados cálculos exigidos pela Justiça do Trabalho, a Over Cálculos nasceu da necessidade de advogados e empresas por precisão técnica aliada à agilidade.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Nossa equipe é formada por peritos contábeis e especialistas em direito material, garantindo não apenas que a &quot;matemática feche&quot;, mas que as determinações legais e jurisprudenciais sejam estritamente aplicadas.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 bg-olive-100 rounded-3xl aspect-video md:aspect-square flex items-center justify-center">
                        {/* Placeholder for an office or team image */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-olive-300">
                            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            <rect width="20" height="14" x="2" y="6" rx="2" />
                        </svg>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-olive-800 text-white rounded-3xl p-10 md:p-16 mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Nossos Pilares</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="w-16 h-16 bg-olive-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive-300">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-olive-100">Precisão Absoluta</h3>
                            <p className="text-olive-200">Rigor técnico e matemático em cada centavo apurado.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-olive-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive-300">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-olive-100">Segurança Jurídica</h3>
                            <p className="text-olive-200">Cálculos fundamentados na legislação e jurisprudência atualizadas.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-olive-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive-300">
                                    <path d="M12 2v20" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-olive-100">Agilidade Prazos</h3>
                            <p className="text-olive-200">Compreendemos a urgência processual e entregamos laudos no prazo.</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Traga sua demanda processual para nossos especialistas</h2>
                    <Link
                        href="/contato"
                        className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg inline-block"
                    >
                        Fale com a Nossa Equipe
                    </Link>
                </div>
            </div>
        </div>
    );
}
