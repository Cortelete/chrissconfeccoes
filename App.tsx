import React, { useState, useCallback } from 'react';
import { ModalType } from './types';
import { Modal } from './components/Modal';
import LinkButton from './components/LinkButton';
import CoinLogo from './components/CoinLogo';
import Rating from './components/Rating';
import { InstagramIcon, MapPinIcon, InfoIcon, StarIcon, WhatsAppIcon, ClockIcon } from './components/icons';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [rating, setRating] = useState(0);

  const handleRatingSelect = (rate: number) => {
    setRating(rate);
    if (rate === 5) {
      window.open('https://search.google.com/local/writereview?placeid=ChIJBaA9mW4b6JQR5I3nWSrcHaA', '_blank');
      setActiveModal(null);
    } else {
      setActiveModal(ModalType.FeedbackRuim);
    }
  };

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  const openModal = useCallback((modal: ModalType) => {
    setActiveModal(modal);
  }, []);

  const OrcamentoModalContent: React.FC = () => {
    const [nome, setNome] = useState('');
    const [servico, setServico] = useState('');
    const [obs, setObs] = useState('');

    const handleSendWhatsApp = () => {
      const numero = '554291461409';
      let mensagem = `Olá, gostaria de um orçamento!\n\n`;
      mensagem += `Nome: ${nome || 'Não informado'}\n`;
      mensagem += `Serviço/Produto: ${servico || 'Não informado'}\n`;
      mensagem += `Observações: ${obs || 'Nenhuma'}`;
      
      const link = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
      window.open(link, '_blank');
    };

    return (
      <div className="flex flex-col gap-4 text-white">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400 text-center">Faça seu Orçamento</h3>
        <p className="text-center text-slate-400 text-sm mb-4">Preencha os campos abaixo para agilizar seu atendimento.</p>
        <input type="text" placeholder="Seu Nome" value={nome} onChange={(e) => setNome(e.target.value)} className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all" />
        <textarea placeholder="O que você precisa? (ex: 20 camisetas personalizadas)" value={servico} onChange={(e) => setServico(e.target.value)} className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 w-full h-24 resize-none focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all"></textarea>
        <textarea placeholder="Observações (opcional)" value={obs} onChange={(e) => setObs(e.target.value)} className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 w-full h-20 resize-none focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all"></textarea>
        <button onClick={handleSendWhatsApp} className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 hover:shadow-green-500/40">
          <WhatsAppIcon /> Enviar pelo WhatsApp
        </button>
      </div>
    );
  };
  
  const DeveloperModalContent: React.FC = () => {
    const [nome, setNome] = useState('');
    const handleSendWhatsAppDev = () => {
        const devNumber = '5541988710303';
        const clientName = 'Chriss Confecções';
        const message = `Olá, vi o link da ${clientName} e quero um site incrível como esse! Meu nome é ${nome || 'visitante'}. 🚀`;
        const link = `https://api.whatsapp.com/send?phone=${devNumber}&text=${encodeURIComponent(message)}`;
        window.open(link, '_blank');
    };

    return (
        <div className="flex flex-col gap-4 text-white items-center">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">Contato do Desenvolvedor</h3>
            <p className="text-center text-sm text-slate-400">Esta mensagem será enviada para o desenvolvedor do site.</p>
            <a href="https://www.instagram.com/inteligenciarte.ia" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors font-medium">
                @inteligenciarte.ia
            </a>
            <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all mt-2" />
            <button onClick={handleSendWhatsAppDev} className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-full shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40">
                <WhatsAppIcon /> Fale comigo!
            </button>
        </div>
    );
  };

  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center justify-start p-4 text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-[#0d0d0d] via-black to-[#0d0d0d] animate-gradient -z-10"></div>
      
      <main className="w-full max-w-md mx-auto flex flex-col items-center justify-center space-y-6 z-10 mt-8 md:mt-12 animate-slide-up">
        <div className="w-full bg-black/20 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 shadow-2xl shadow-white/5">
          <header className="flex flex-col items-center text-center">
            <CoinLogo onZoomComplete={() => openModal(ModalType.QuemSomos)} />
            <h1 className="text-3xl md:text-4xl font-bold mt-4 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400">
              Chriss Confecções
            </h1>
            <p className="text-sm md:text-base text-slate-300 mt-2 max-w-xs font-normal">
              Uniformes escolares e empresariais, jalecos, jaquetas e personalizados.
            </p>
          </header>

          <section className="mt-8 flex flex-col space-y-3">
            <LinkButton icon={<InfoIcon />} text="Quem Somos?" onClick={() => openModal(ModalType.QuemSomos)} />
            <LinkButton icon={<InstagramIcon />} text="Instagram" onClick={() => window.open('https://www.instagram.com/chrisconfc/', '_blank')} />
            <LinkButton icon={<MapPinIcon />} text="Localização" onClick={() => openModal(ModalType.Localizacao)} />
            <LinkButton icon={<ClockIcon />} text="Horário de Funcionamento" onClick={() => openModal(ModalType.Horario)} />
            <LinkButton icon={<WhatsAppIcon />} text="Faça seu Orçamento" onClick={() => openModal(ModalType.Orcamento)} />
            <LinkButton icon={<StarIcon />} text="Avalie nosso Atendimento" onClick={() => openModal(ModalType.Avaliacao)} />
          </section>
        </div>
      </main>

      <footer className="text-center p-6 mt-auto z-10 animate-fade-in">
        <button onClick={() => openModal(ModalType.Developer)} className="text-xs text-slate-500 hover:text-white transition-colors duration-300">
          Desenvolvido por InteligenciArte.IA ✨
        </button>
      </footer>
      
      {/* Modals */}
      <Modal isOpen={activeModal === ModalType.QuemSomos} onClose={closeModal}>
        <div className="text-white text-center">
            <h3 className="text-3xl font-bold mb-4 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500">Quem Somos</h3>
            <p className="text-slate-300 mb-6">Há mais de <span className="font-bold text-white">30 anos</span> produzindo uniformes e peças personalizadas em Ponta Grossa.</p>
            <div className="space-y-4 text-left">
                <p className="font-semibold text-lg animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500">Nossos diferenciais:</p>
                <ul className="list-none space-y-4 pl-2">
                    <li className="flex items-start gap-4"><span className="text-xl pt-1">✨</span><div><span className="font-bold text-white">Qualidade e durabilidade</span><p className="text-sm text-slate-400 font-light">Materiais de primeira para peças que duram.</p></div></li>
                    <li className="flex items-start gap-4"><span className="text-xl pt-1">🤝</span><div><span className="font-bold text-white">Atendimento personalizado</span><p className="text-sm text-slate-400 font-light">Entendemos sua necessidade para entregar o melhor.</p></div></li>
                    <li className="flex items-start gap-4"><span className="text-xl pt-1">🏭</span><div><span className="font-bold text-white">Produção própria</span><p className="text-sm text-slate-400 font-light">Controle total do processo, do design à entrega.</p></div></li>
                    <li className="flex items-start gap-4"><span className="text-xl pt-1">🚚</span><div><span className="font-bold text-white">Prazo e entrega</span><p className="text-sm text-slate-400 font-light">Seu pedido no tempo certo, com responsabilidade.</p></div></li>
                </ul>
            </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === ModalType.Localizacao} onClose={closeModal}>
        <div className="text-white text-center w-full max-w-lg">
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">Nossa Localização</h3>
          <p className="mb-4 text-sm text-slate-300">Rua Barão do Ponce, 120 - Uvaranas, Ponta Grossa - PR</p>
          <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-white/10 shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.338133456648!2d-50.1150174!3d-25.0904128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81b6e993da005%3A0xa01ddc2a59e78de4!2zQ2hyaXNzIENvbmZlY8Onw7Vlcw!5e0!3m2!1spt-BR!2sbr!4v1763401207147!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <a href="https://maps.app.goo.gl/3f4A6dE5P9uJpX6r9" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40">
            Ver no Google Maps
          </a>
        </div>
      </Modal>

      <Modal isOpen={activeModal === ModalType.Horario} onClose={closeModal}>
        <div className="text-white text-center">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">Horário de Funcionamento</h3>
            <div className="text-slate-300 space-y-2">
                <div className="flex justify-between border-b border-slate-700/50 py-2">
                    <span>Segunda a Sexta</span>
                    <span className="font-semibold text-white">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between border-b border-slate-700/50 py-2">
                    <span>Sábado</span>
                    <span className="font-semibold text-white">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between py-2">
                    <span>Domingo</span>
                    <span className="font-semibold text-slate-500">Fechado</span>
                </div>
            </div>
        </div>
      </Modal>
      
      <Modal isOpen={activeModal === ModalType.Orcamento} onClose={closeModal}>
        <OrcamentoModalContent />
      </Modal>

      <Modal isOpen={activeModal === ModalType.Avaliacao} onClose={closeModal}>
        <div className="text-white text-center">
            <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">Sua opinião é importante!</h3>
            <p className="text-slate-400 mb-6 text-sm">Como foi sua experiência conosco?</p>
            <Rating onRate={handleRatingSelect} />
        </div>
      </Modal>

      <Modal isOpen={activeModal === ModalType.FeedbackRuim} onClose={closeModal}>
        <div className="text-white text-center">
          <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">Que pena!</h3>
          <p className="text-slate-400 mb-6 text-sm">Conte-nos como podemos melhorar. Sua opinião é valiosa.</p>
          <form action="https://formsubmit.co/SEU_EMAIL_AQUI" method="POST" className="flex flex-col gap-4">
             {/* Replace SEU_EMAIL_AQUI with your actual email address */}
            <textarea name="feedback" placeholder="Deixe seu feedback..." className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all"></textarea>
            <button type="submit" className="bg-slate-200 hover:bg-white text-black font-bold py-3 px-4 rounded-lg transition-all duration-300">
              Enviar Feedback
            </button>
          </form>
        </div>
      </Modal>
      
      <Modal isOpen={activeModal === ModalType.Developer} onClose={closeModal}>
        <DeveloperModalContent />
      </Modal>
    </div>
  );
};

export default App;