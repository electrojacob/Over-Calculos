import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-olive-800 text-white pt-20 pb-32 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-olive-700 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-olive-600 opacity-30 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Excelência em <span className="text-olive-300">Cálculos Trabalhistas</span> e Perícias
            </h1>
            <p className="text-lg md:text-xl text-olive-100 mb-10 max-w-2xl leading-relaxed">
              Soluções precisas e confiáveis para advogados, empresas e profissionais do direito. Bem-vindo ao portal definitivo de ferramentas de cálculo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/calculadoras"
                className="bg-white text-olive-800 hover:bg-olive-50 px-8 py-3.5 rounded-full font-bold text-lg transition-colors shadow-lg text-center"
              >
                Acessar Calculadoras
              </Link>
              <Link
                href="/contato"
                className="bg-transparent border-2 border-olive-400 hover:bg-olive-700 hover:border-olive-300 text-white px-8 py-3.5 rounded-full font-bold text-lg transition-all text-center"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Features Preview */}
      <section className="py-20 bg-gray-50 -mt-16 z-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/40 transform transition-transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-olive-100 rounded-xl flex items-center justify-center mb-6 text-olive-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Cálculos Trabalhistas</h3>
              <p className="text-gray-600 mb-6">• Atividades de análises e liquidações em processos trabalhistas <br />• elaboração de cálculos de contingência como estimativas de condenação em inicial e liquidação de acordos <br />impugnação em diversas fases do processo como Inicial, Sentença, Acórdão. <br /> Confecção de cálculos e apresentação de valores controversos e incontroversos, contribuições previdenciárias e fiscais, apuração de verbas rescisórias, horas extras, comissões, adicional noturno, FGTS, correção monetária, e demais verbas acessórias. Confecção de cálculos em sistema PjeCalc atendendo a legislação do direito trabalhista.</p>
              <Link href="/calculadoras/calculos-trabalhistas" className="text-olive-600 font-semibold hover:text-olive-800 flex items-center gap-2 group">
                Saiba mais
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/40 transform transition-transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-olive-100 rounded-xl flex items-center justify-center mb-6 text-olive-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <line x1="10" x2="8" y1="9" y2="9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Perícias Judiciais</h3>
              <p className="text-gray-600 mb-6">Suporte técnico especializado em perícias contábeis e financeiras para processos judiciais complexos. Apresentação de parecer e subsídios para advocacias nas condenações, liquidações e execuções trabalhistas</p>
              <Link href="/calculadoras/pericias" className="text-olive-600 font-semibold hover:text-olive-800 flex items-center gap-2 group">
                Saiba mais
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/40 transform transition-transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-olive-100 rounded-xl flex items-center justify-center mb-6 text-olive-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Fundamentação Legal</h3>
              <p className="text-gray-600 mb-6">Acesso rápido aos principais textos legais que embasam nossos cálculos e ferramentas (CLT, FGTS, CF).</p>
              <Link href="/fundamentacao-legal" className="text-olive-600 font-semibold hover:text-olive-800 flex items-center gap-2 group">
                Consultar
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
