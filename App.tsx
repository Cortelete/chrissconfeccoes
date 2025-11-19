
import React, { useState, useCallback } from 'react';
import { ModalType } from './types';
import { Modal } from './components/Modal';
import LinkButton from './components/LinkButton';
import Rating from './components/Rating';
import { 
  InstagramIcon, 
  MapPinIcon, 
  InfoIcon, 
  StarIcon, 
  WhatsAppIcon, 
  ClockIcon,
  DiamondIcon,
  UsersIcon,
  ScissorsIcon,
  TruckIcon
} from './components/icons';

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
      <div className="flex flex-col gap-3 text-gray-900">
        <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 text-center font-serif-display">Faça seu Orçamento</h3>
        <p className="text-center text-gray-500 text-xs md:text-sm mb-2">Preencha os campos abaixo para agilizar seu atendimento.</p>
        <input type="text" placeholder="Seu Nome" value={nome} onChange={(e) => setNome(e.target.value)} className="bg-gray-100 border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all text-black placeholder-gray-400 text-sm" />
        <textarea placeholder="O que você precisa? (ex: 20 camisetas personalizadas)" value={servico} onChange={(e) => setServico(e.target.value)} className="bg-gray-100 border border-gray-300 rounded-lg p-3 w-full h-20 resize-none focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all text-black placeholder-gray-400 text-sm"></textarea>
        <textarea placeholder="Observações (opcional)" value={obs} onChange={(e) => setObs(e.target.value)} className="bg-gray-100 border border-gray-300 rounded-lg p-3 w-full h-16 resize-none focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all text-black placeholder-gray-400 text-sm"></textarea>
        <button onClick={handleSendWhatsApp} className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 text-sm md:text-base">
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
        <div className="flex flex-col gap-4 text-gray-900 items-center">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 font-serif-display">Contato do Desenvolvedor</h3>
            <p className="text-center text-sm text-gray-500">Esta mensagem será enviada para o desenvolvedor do site.</p>
            <a href="https://www.instagram.com/inteligenciarte.ia" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors font-medium">
                @inteligenciarte.ia
            </a>
            <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} className="bg-gray-100 border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all mt-2 text-black placeholder-gray-400" />
            <button onClick={handleSendWhatsAppDev} className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-full shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40">
                <WhatsAppIcon /> Fale comigo!
            </button>
        </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-[100dvh] w-full flex flex-col items-center justify-center p-3 md:p-4 text-gray-900 overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 animate-gradient -z-10"></div>
      
      <main className="w-full max-w-md mx-auto flex flex-col items-center justify-center space-y-4 z-10 animate-slide-up">
        <div className="relative w-full bg-white/70 backdrop-blur-2xl border border-black/5 rounded-2xl shadow-2xl shadow-black/10 overflow-hidden ring-1 ring-white/40">
          {/* Elegant Reflection Effect (Shimmer) */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
             <div className="absolute top-0 left-0 w-1/2 h-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/10 to-transparent opacity-40 pointer-events-none z-0"></div>

          <div className="relative z-10 cursor-pointer" onClick={() => openModal(ModalType.QuemSomos)}>
            <img
              src="/logo.png"
              alt="Logo Chriss Confecções"
              className="w-full max-h-[250px] object-cover md:max-h-none"
            />
          </div>
          <div className="relative z-10 p-5 md:p-8 pt-4 md:pt-6">
            <header className="flex flex-col items-center text-center mb-6">
              <p className="text-sm text-gray-600 max-w-xs font-normal leading-relaxed">
                Uniformes escolares e empresariais, jalecos, jaquetas e personalizados.
              </p>
            </header>

            <section className="flex flex-col space-y-2.5">
              <LinkButton icon={<InfoIcon />} text="Quem Somos?" onClick={() => openModal(ModalType.QuemSomos)} />
              <LinkButton icon={<InstagramIcon />} text="Instagram" onClick={() => window.open('https://www.instagram.com/chrisconfc/', '_blank')} />
              <LinkButton icon={<MapPinIcon />} text="Localização" onClick={() => openModal(ModalType.Localizacao)} />
              <LinkButton icon={<ClockIcon />} text="Horário de Funcionamento" onClick={() => openModal(ModalType.Horario)} />
              <LinkButton icon={<WhatsAppIcon />} text="Faça seu Orçamento" onClick={() => openModal(ModalType.Orcamento)} />
              <LinkButton icon={<StarIcon />} text="Avalie nosso Atendimento" onClick={() => openModal(ModalType.Avaliacao)} />
            </section>
          </div>
        </div>
      </main>

      <footer className="text-center p-4 mt-6 z-10 animate-fade-in">
        <button onClick={() => openModal(ModalType.Developer)} className="text-[10px] md:text-xs text-gray-400 hover:text-black transition-colors duration-300 uppercase tracking-wider">
          Desenvolvido por InteligenciArte.IA ✨
        </button>
      </footer>
      
      {/* Modals */}
      <Modal isOpen={activeModal === ModalType.QuemSomos} onClose={closeModal}>
        <div className="text-gray-900 flex flex-col items-center text-center px-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 font-serif-display text-gray-800">Quem Somos</h3>
            <div className="w-16 h-0.5 bg-gray-300 mb-5"></div>
            
            <p className="text-gray-600 mb-6 font-light leading-relaxed max-w-sm text-sm md:text-base">
                Há mais de <span className="font-semibold text-gray-900">30 anos</span> transformando tecidos em uniformes e peças personalizadas com excelência em Ponta Grossa.
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-full">
                {/* Item 1 */}
                <div className="flex flex-col items-center gap-2">
                    <div className="p-2.5 bg-gray-50 rounded-full mb-0.5 shadow-sm">
                        <DiamondIcon className="w-5 h-5 text-gray-700" />
                    </div>
                    <h4 className="font-serif-display font-semibold text-sm md:text-base text-gray-800">Qualidade</h4>
                    <p className="text-[10px] md:text-xs text-gray-500 font-light tracking-wide uppercase">Materiais nobres</p>
                </div>

                {/* Item 2 */}
                 <div className="flex flex-col items-center gap-2">
                    <div className="p-2.5 bg-gray-50 rounded-full mb-0.5 shadow-sm">
                        <UsersIcon className="w-5 h-5 text-gray-700" />
                    </div>
                    <h4 className="font-serif-display font-semibold text-sm md:text-base text-gray-800">Atendimento</h4>
                    <p className="text-[10px] md:text-xs text-gray-500 font-light tracking-wide uppercase">Personalizado</p>
                </div>

                {/* Item 3 */}
                 <div className="flex flex-col items-center gap-2">
                    <div className="p-2.5 bg-gray-50 rounded-full mb-0.5 shadow-sm">
                        <ScissorsIcon className="w-5 h-5 text-gray-700" />
                    </div>
                    <h4 className="font-serif-display font-semibold text-sm md:text-base text-gray-800">Produção</h4>
                    <p className="text-[10px] md:text-xs text-gray-500 font-light tracking-wide uppercase">Confecção própria</p>
                </div>

                {/* Item 4 */}
                 <div className="flex flex-col items-center gap-2">
                    <div className="p-2.5 bg-gray-50 rounded-full mb-0.5 shadow-sm">
                        <TruckIcon className="w-5 h-5 text-gray-700" />
                    </div>
                    <h4 className="font-serif-display font-semibold text-sm md:text-base text-gray-800">Entrega</h4>
                    <p className="text-[10px] md:text-xs text-gray-500 font-light tracking-wide uppercase">Compromisso</p>
                </div>
            </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === ModalType.Localizacao} onClose={closeModal}>
        <div className="text-gray-900 text-center w-full max-w-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 font-serif-display">Nossa Localização</h3>
          <p className="mb-4 text-xs md:text-sm text-gray-600">Rua Barão do Ponce, 120 - Uvaranas, Ponta Grossa - PR</p>
          <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-black/10 shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.338133456648!2d-50.1150174!3d-25.0904128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81b6e993da005%3A0xa01ddc2a59e78de4!2zQ2hyaXNzIENvbmZlY8Onw7Vlcw!5e0!3m2!1spt-BR!2sbr!4v1763401207147!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <a href="https://maps.app.goo.gl/3f4A6dE5P9uJpX6r9" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 text-sm md:text-base">
            Ver no Google Maps
          </a>
        </div>
      </Modal>

      <Modal isOpen={activeModal === ModalType.Horario} onClose={closeModal}>
        <div className="text-gray-900 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 font-serif-display">Horário de Funcionamento</h3>
            <div className="text-gray-600 space-y-3 text-sm md:text-base">
                <div className="flex justify-between border-b border-gray-200 py-2">
                    <span>Segunda a Sexta</span>
                    <span className="font-semibold text-black">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2">
                    <span>Sábado</span>
                    <span className="font-semibold text-black">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between py-2">
                    <span>Domingo</span>
                    <span className="font-semibold text-gray-400">Fechado</span>
                </div>
            </div>
        </div>
      </Modal>
      
      <Modal isOpen={activeModal === ModalType.Orcamento} onClose={closeModal}>
        <OrcamentoModalContent />
      </Modal>

      <Modal isOpen={activeModal === ModalType.Avaliacao} onClose={closeModal}>
        <div className="text-gray-900 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 font-serif-display">Sua opinião é importante!</h3>
            <p className="text-gray-500 mb-6 text-sm">Como foi sua experiência conosco?</p>
            <Rating onRate={handleRatingSelect} />
        </div>
      </Modal>

      <Modal isOpen={activeModal === ModalType.FeedbackRuim} onClose={closeModal}>
        <div className="text-gray-900 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 font-serif-display">Que pena!</h3>
          <p className="text-gray-500 mb-6 text-sm">Conte-nos como podemos melhorar. Sua opinião é valiosa.</p>
          <form action="https://formsubmit.co/SEU_EMAIL_AQUI" method="POST" className="flex flex-col gap-4">
             {/* Replace SEU_EMAIL_AQUI with your actual email address */}
            <textarea name="feedback" placeholder="Deixe seu feedback..." className="bg-gray-100 border border-gray-300 rounded-lg p-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all text-black placeholder-gray-400 text-sm"></textarea>
            <button type="submit" className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 text-sm md:text-base">
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
