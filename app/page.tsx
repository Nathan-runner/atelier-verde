export default function AtelierVerdeLandingPage() {
  return (
    <main className="bg-[#0B0B0B] text-[#EAE6DF] overflow-hidden font-[Inter]">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#9D8B6F]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D6C2A1]/10 blur-[140px] rounded-full" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 backdrop-blur-xl bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">
          <div>
            <h1 className="text-2xl tracking-[0.3em] font-light uppercase">
              Atelier Verde
            </h1>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#9D8B6F] mt-1">
              Alfaiataria Sustentável
            </p>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-[#D4D0CB]">
            <a href="#filosofia" className="hover:text-white transition-all duration-300">
              Filosofia
            </a>
            <a href="#processo" className="hover:text-white transition-all duration-300">
              Processo
            </a>
            <a href="#colecoes" className="hover:text-white transition-all duration-300">
              Coleções
            </a>
            <a href="#sustentabilidade" className="hover:text-white transition-all duration-300">
              Sustentabilidade
            </a>
            <a href="#contato" className="hover:text-white transition-all duration-300">
              Contato
            </a>
          </nav>

          <button className="border border-[#9D8B6F] px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-[#9D8B6F] hover:text-black transition-all duration-500">
            Agendar Consulta
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-10 pt-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1974&auto=format&fit=crop"
            alt="Luxury Tailoring"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center w-full">
          <div>
            <p className="uppercase tracking-[0.35em] text-[#9D8B6F] text-sm mb-6">
              Elegância sustentável
            </p>

            <h2 className="font-serif text-6xl md:text-7xl xl:text-8xl leading-[0.95] max-w-3xl mb-8">
              Elegância
              <br />
              com propósito.
            </h2>

            <p className="text-[#C8C2BB] text-lg leading-relaxed max-w-xl mb-12">
              Criamos um guarda-roupa que funciona de verdade,
              unindo o rigor clássico da alfaiataria com a
              praticidade contemporânea.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-[#9D8B6F] text-black px-8 py-4 uppercase tracking-[0.2em] text-sm hover:scale-[1.02] transition-all duration-500">
                Agendar Consultoria
              </button>

              <button className="border border-white/20 px-8 py-4 uppercase tracking-[0.2em] text-sm hover:border-[#9D8B6F] transition-all duration-500">
                Conheça Nossa Filosofia
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="relative w-[500px] h-[700px] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(157,139,111,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1974&auto=format&fit=crop"
                alt="Fashion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        id="filosofia"
        className="py-32 px-6 lg:px-10 bg-[#F2EEE8] text-[#111111]"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#8B7A61] mb-5">
              Nossa Filosofia
            </p>

            <h3 className="font-serif text-5xl leading-tight mb-8">
              Menos excesso.
              <br />
              Mais essência.
            </h3>

            <p className="text-[#444] text-lg leading-relaxed mb-6">
              Acreditamos que o verdadeiro luxo está na escolha
              consciente, no caimento impecável e na durabilidade
              das peças que acompanham sua rotina.
            </p>

            <p className="text-[#444] text-lg leading-relaxed mb-10">
              Não seguimos tendências passageiras. Criamos peças
              atemporais para pessoas que desejam vestir conforto,
              elegância e propósito.
            </p>

            <button className="uppercase tracking-[0.25em] border-b border-black pb-2 text-sm hover:text-[#9D8B6F] transition-all duration-300">
              Saiba mais
            </button>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="h-[500px] overflow-hidden rounded-[30px]">
              <img
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1887&auto=format&fit=crop"
                alt="Fabric"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
            </div>

            <div className="space-y-5 pt-20">
              <div className="h-[240px] overflow-hidden rounded-[30px]">
                <img
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1974&auto=format&fit=crop"
                  alt="Minimal fashion"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="h-[240px] bg-[#111111] rounded-[30px] p-10 flex flex-col justify-center text-white">
                <h4 className="font-serif text-3xl mb-4">
                  Luxo silencioso
                </h4>
                <p className="text-[#B8B8B8] leading-relaxed">
                  Sofisticação para quem prefere presença ao invés de ostentação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 px-6 lg:px-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              title: 'Tecidos Naturais',
              desc: 'Fibras premium, duráveis e certificadas.',
            },
            {
              title: 'Produção Ética',
              desc: 'Processos transparentes e responsáveis.',
            },
            {
              title: 'Sob Medida',
              desc: 'Modelagem construída para sua rotina.',
            },
            {
              title: 'Durabilidade',
              desc: 'Peças feitas para durar anos.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-white/5 bg-white/[0.02] p-10 rounded-[30px] hover:border-[#9D8B6F]/40 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full border border-[#9D8B6F]/40 mb-8 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#9D8B6F]" />
              </div>

              <h4 className="text-2xl font-serif mb-5">{item.title}</h4>

              <p className="text-[#A8A39D] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section id="colecoes" className="py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#9D8B6F] mb-4">
                Coleções
              </p>

              <h3 className="font-serif text-5xl max-w-2xl leading-tight">
                O guarda-roupa que trabalha para você.
              </h3>
            </div>

            <p className="text-[#B8B8B8] max-w-xl leading-relaxed text-lg">
              Peças versáteis, atemporais e inteligentes criadas para se adaptar à sua rotina e acompanhar sua vida por muitos anos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: 'Feminino',
                image:
                  'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1887&auto=format&fit=crop',
              },
              {
                title: 'Masculino',
                image:
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
              },
              {
                title: 'Essenciais',
                image:
                  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1974&auto=format&fit=crop',
              },
              {
                title: 'Tecidos',
                image:
                  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1974&auto=format&fit=crop',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative h-[600px] rounded-[35px] overflow-hidden group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 p-10">
                  <h4 className="font-serif text-4xl mb-3">{item.title}</h4>
                  <p className="uppercase tracking-[0.25em] text-sm text-[#D8C6A8]">
                    Ver coleção
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section
        id="sustentabilidade"
        className="py-32 px-6 lg:px-10 bg-[#F2EEE8] text-[#111111]"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="rounded-[40px] overflow-hidden h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1974&auto=format&fit=crop"
              alt="Sustainable luxury"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#8B7A61] mb-5">
              Sustentabilidade
            </p>

            <h3 className="font-serif text-5xl leading-tight mb-10">
              Nossa escolha.
              <br />
              Seu legado.
            </h3>

            <p className="text-[#444] text-lg leading-relaxed mb-12">
              Trabalhamos prioritariamente com tecidos naturais,
              fornecedores éticos e processos conscientes.
              Criamos peças feitas para durar no estilo e no tempo.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <h4 className="text-5xl font-serif mb-3">100%</h4>
                <p className="uppercase tracking-[0.2em] text-xs text-[#666]">
                  Tecidos Naturais
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-serif mb-3">0%</h4>
                <p className="uppercase tracking-[0.2em] text-xs text-[#666]">
                  Excesso Desnecessário
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-serif mb-3">∞</h4>
                <p className="uppercase tracking-[0.2em] text-xs text-[#666]">
                  Durabilidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="processo" className="py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <p className="uppercase tracking-[0.3em] text-sm text-[#9D8B6F] mb-5">
              Processo
            </p>

            <h3 className="font-serif text-5xl leading-tight max-w-3xl">
              Feito para você.
              <br />
              Do início ao detalhe final.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-10">
            {[
              'Consulta',
              'Escolhas',
              'Criação',
              'Prova',
              'Entrega',
            ].map((step, index) => (
              <div
                key={index}
                className="relative border-t border-white/10 pt-10"
              >
                <span className="text-6xl font-serif text-[#9D8B6F]/40 block mb-8">
                  0{index + 1}
                </span>

                <h4 className="font-serif text-3xl mb-5">{step}</h4>

                <p className="text-[#A8A39D] leading-relaxed">
                  Uma experiência personalizada construída para compreender sua rotina, estilo e conforto.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contato"
        className="relative py-40 px-6 lg:px-10 overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1974&auto=format&fit=crop"
            alt="Luxury"
            className="w-full h-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-[#9D8B6F] mb-6">
            Consultoria Privada
          </p>

          <h3 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-10">
            Pronto para transformar seu guarda-roupa?
          </h3>

          <p className="text-[#B8B8B8] text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Descubra uma nova forma de vestir: menos excesso,
            mais propósito, conforto e sofisticação.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-[#9D8B6F] text-black px-10 py-5 uppercase tracking-[0.25em] text-sm hover:scale-[1.02] transition-all duration-500">
              Agendar Consultoria
            </button>

            <button className="border border-white/10 px-10 py-5 uppercase tracking-[0.25em] text-sm hover:border-[#9D8B6F] transition-all duration-500">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-14 px-6 lg:px-10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <h4 className="text-2xl tracking-[0.3em] uppercase mb-4">
              Atelier Verde
            </h4>

            <p className="text-[#8D8D8D] leading-relaxed max-w-md">
              Alfaiataria sustentável que une rigor clássico,
              conforto contemporâneo e elegância silenciosa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm uppercase tracking-[0.2em] text-[#8D8D8D]">
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">LinkedIn</a>
            <a href="#">Coleções</a>
            <a href="#">Processo</a>
            <a href="#">Contato</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
