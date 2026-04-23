import Card from "@/components/Card";
import Link from "next/link";

export default function CalculadorasPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-olive-900 mb-4">Nossas Calculadoras</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Selecione a categoria da calculadora ou serviço desejado para iniciar. Nossas ferramentas são desenvolvidas para garantir máxima precisão.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Link href="/calculadoras/calculos-trabalhistas" className="block group">
                        <Card
                            title="Cálculos Trabalhistas"
                            description="Liquidação de sentenças, cálculo de rescisão, apuração de horas extras, adicionais periculosidade/insalubridade e mais."
                            actionText="Acessar Área"
                            className="group-hover:border-olive-300"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2v20" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            }
                        />
                    </Link>

                    <Link href="/calculadoras/pericias" className="block group">
                        <Card
                            title="Perícias Judiciais"
                            description="Ferramentas de suporte para elaboração de laudos periciais, análises contábeis complexas e cálculos financeiros."
                            actionText="Acessar Área"
                            className="group-hover:border-olive-300"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" x2="8" y1="13" y2="13" />
                                    <line x1="16" x2="8" y1="17" y2="17" />
                                    <line x1="10" x2="8" y1="9" y2="9" />
                                </svg>
                            }
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
