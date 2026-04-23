export default function FundamentacaoLegalPage() {
    const legislations = [
        {
            title: "Consolidação das Leis do Trabalho (CLT)",
            description: "Decreto-Lei nº 5.452, de 1º de maio de 1943. Aprova a Consolidação das Leis do Trabalho.",
            link: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm"
        },
        {
            title: "Lei do FGTS",
            description: "Lei nº 8.036, de 11 de maio de 1990. Dispõe sobre o Fundo de Garantia do Tempo de Serviço, e dá outras providências.",
            link: "https://www.planalto.gov.br/ccivil_03/leis/l8036cons.htm"
        },
        {
            title: "Constituição Federal",
            description: "Constituição da República Federativa do Brasil de 1988.",
            link: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
        },
        {
            title: "CPC - Novo Código de Processo Civil",
            description: "Lei nº 13.105, de 16 de março de 2015. Muito utilizado em apurações de liquidação de sentença e perícias.",
            link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm"
        }
    ];

    return (
        <div className="py-16">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-olive-900 mb-4">Fundamentação Legal</h1>
                    <p className="text-lg text-gray-600">
                        Acesso rápido aos principais textos legais que norteiam os cálculos trabalhistas e perícias em nosso sistema.
                    </p>
                </div>

                <div className="space-y-6">
                    {legislations.map((leg, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{leg.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {leg.description}
                                    </p>
                                </div>
                                <a
                                    href={leg.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0 flex items-center justify-center gap-2 bg-olive-50 hover:bg-olive-100 text-olive-700 px-5 py-2.5 rounded-lg font-medium transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" x2="21" y1="14" y2="3" />
                                    </svg>
                                    Acessar no Planalto
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-olive-800 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Precisa de auxílio normativo específico?</h3>
                        <p className="text-olive-100">Nossa equipe de consultores e peritos pode ajudar a esclarecer dúvidas sobre a aplicação da legislação em cálculos complexos.</p>
                    </div>
                    <a
                        href="/contato"
                        className="shrink-0 bg-white text-olive-800 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-colors shadow-sm"
                    >
                        Falar com Especialista
                    </a>
                </div>
            </div>
        </div>
    );
}
