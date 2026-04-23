"use client";
import React from "react";

export default function ContatoPage() {
    const whatsappNumber = "5511999999999";
    const whatsappMessage = encodeURIComponent("Olá, acessei o site da Over Cálculos e gostaria de mais informações.");

    return (
        <div className="py-16">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-olive-900 mb-4">Fale Conosco</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Nossa equipe de especialistas está pronta para analisar a sua demanda processual ou tirar dúvidas sobre nossas calculadoras.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

                    {/* Left Side - Info */}
                    <div className="bg-olive-800 text-white p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
                        {/* Background design */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-olive-700 rounded-full opacity-50 -mr-20 -mt-20 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-olive-900 rounded-full opacity-50 -ml-20 -mb-20 blur-2xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
                            <p className="text-olive-100 mb-10 text-lg">
                                Preencha o formulário ou entre em contato diretamente pelos nossos canais de atendimento.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive-200">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-olive-200 font-medium">Telefone / WhatsApp</p>
                                        <p className="text-lg font-bold">(11) 99999-9999</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive-200">
                                            <rect width="20" height="16" x="2" y="4" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-olive-200 font-medium">Email Institucional</p>
                                        <p className="text-lg font-bold">contato@seudominio.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive-200">
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-olive-200 font-medium">Localização</p>
                                        <p className="text-lg font-bold">São Paulo - SP</p>
                                        <p className="text-sm text-olive-300">Atendimento em todo o Brasil</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                            <h3 className="font-bold text-lg mb-2">Atendimento Imediato</h3>
                            <p className="text-sm text-olive-100 mb-4">Caso prefira, nossa equipe está online no WhatsApp agora mesmo.</p>
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full font-bold transition-colors shadow-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                Chamar no WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Form placeholder */}
                    <div className="p-10 md:p-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Envie uma Mensagem</h2>
                        <form className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Seu nome"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-olive-500 focus:border-olive-500 outline-none transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="seu@email.com"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-olive-500 focus:border-olive-500 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="(00) 00000-0000"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-olive-500 focus:border-olive-500 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-olive-500 focus:border-olive-500 outline-none transition-all text-gray-700 bg-white"
                                >
                                    <option value="">Selecione um assunto</option>
                                    <option value="duvida">Dúvida sobre Cálculos</option>
                                    <option value="orcamento">Orçamento de Perícia</option>
                                    <option value="parceria">Parceria</option>
                                    <option value="outros">Outros</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Sua Mensagem</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Como podemos ajudar?"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-olive-500 focus:border-olive-500 outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-olive-700 hover:bg-olive-800 text-white font-bold py-3.5 rounded-lg transition-colors mt-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert("Em um ambiente real, esta mensagem seria enviada.");
                                }}
                            >
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
