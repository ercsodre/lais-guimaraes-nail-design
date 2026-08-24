const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navCta = document.getElementById('nav-cta');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navCta.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navCta.classList.remove('open');
  });
});

// ---------- Preços: seleção de serviços, total e orçamento pro WhatsApp ----------

const precoChecks = document.querySelectorAll('.preco-check');
const totalValor = document.getElementById('precos-total-valor');
const whatsappLink = document.getElementById('precos-whatsapp');
const WHATSAPP_NUMERO = '5514997321869';

function formatarReais(valor) {
  return `R$ ${valor.toLocaleString('pt-BR')}`;
}

function atualizarOrcamento() {
  const selecionados = Array.from(precoChecks).filter((c) => c.checked);
  const total = selecionados.reduce((soma, c) => soma + Number(c.dataset.price), 0);

  totalValor.textContent = formatarReais(total);

  if (selecionados.length === 0) {
    whatsappLink.href = `https://wa.me/${WHATSAPP_NUMERO}`;
    whatsappLink.textContent = 'Selecione os serviços pra continuar';
    whatsappLink.classList.add('is-disabled');
    return;
  }

  const lista = selecionados.map((c) => `- ${c.dataset.label} — ${formatarReais(Number(c.dataset.price))}`).join('\n');
  const mensagem = `Olá! Quero agendar os seguintes serviços:\n${lista}\n\nTotal: ${formatarReais(total)}`;
  whatsappLink.href = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
  whatsappLink.textContent = 'Continuar pelo WhatsApp';
  whatsappLink.classList.remove('is-disabled');
}

precoChecks.forEach((check) => check.addEventListener('change', atualizarOrcamento));

// ---------- Localização: rota automática a partir da posição do visitante ----------

const DESTINO = '-16.6959439,-49.2266178';
const mapaIframe = document.getElementById('mapa-iframe');
const btnComoChegar = document.getElementById('btn-como-chegar');

function abrirRota(origem) {
  const url = origem
    ? `https://www.google.com/maps/dir/?api=1&origin=${origem}&destination=${DESTINO}`
    : `https://www.google.com/maps/dir/?api=1&destination=${DESTINO}`;
  window.open(url, '_blank', 'noopener');
}

if (btnComoChegar) {
  btnComoChegar.addEventListener('click', () => {
    if (!navigator.geolocation) {
      abrirRota();
      return;
    }
    btnComoChegar.textContent = 'Calculando rota...';
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const origem = `${pos.coords.latitude},${pos.coords.longitude}`;
        abrirRota(origem);
        btnComoChegar.textContent = 'Como chegar da sua localização';
      },
      () => {
        abrirRota();
        btnComoChegar.textContent = 'Como chegar da sua localização';
      }
    );
  });
}

// Ao carregar a página, já tenta montar a rota da localização do visitante no mapa embutido.
if (navigator.geolocation && mapaIframe) {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const origem = `${pos.coords.latitude},${pos.coords.longitude}`;
      mapaIframe.src = `https://www.google.com/maps?saddr=${origem}&daddr=${DESTINO}&output=embed`;
    },
    () => {
      // sem permissão ou indisponível — mantém o mapa com o pin fixo, o botão "Como chegar" cobre esse caso
    }
  );
}
