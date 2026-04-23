import Link from "next/link";
import Card from "@/components/Card";

export default function CalculosTrabalhistasPage() {
    return (
        <div className="py-12">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="mb-8">
                    <Link href="/calculadoras" className="text-olive-600 hover:text-olive-800 flex items-center gap-2 mb-4 font-medium transition-colors w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Voltar para Calculadoras
                    </Link>
                    <h1 className="text-4xl font-bold text-olive-900 mb-4">Cálculos Trabalhistas</h1>
                    <p className="text-lg text-gray-600">
                        Ferramentas dedicadas para apuração de verbas trabalhistas e liquidação de sentenças.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center mb-12">
                    <div className="w-20 h-20 bg-olive-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive-500">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Calculadora em Desenvolvimento</h2>
                    <p className="text-gray-600 max-w-md mx-auto">
                        O aplicativo completo de cálculos está sendo preparado. Entre em contato para saber mais sobre o lançamento.
                    </p>
                    <div className="mt-8">
                        <Link
                            href="/contato"
                            className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-sm inline-block"
                        >
                            Falar com Consultor
                        </Link>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-olive-900 mb-6">Módulos Disponíveis</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card
                        title="Rescisão"
                        description="Cálculo detalhado de verbas rescisórias incluindo férias proporcionais, 13º e aviso prévio."
                        className="bg-gray-50 border-transparent shadow-none"
                    />
                    <Card
                        title="Horas Extras"
                        description="Apuração de horas extras com diferentes adicionais, DSR e reflexos nas demais verbas."
                        className="bg-gray-50 border-transparent shadow-none"
                    />
                    <Card
                        title="Liquidação"
                        description="Atualização monetária e juros de mora para liquidação de sentenças trabalhistas."
                        className="bg-gray-50 border-transparent shadow-none"
                    />
                </div>
            </div>
        </div>
    );
}
