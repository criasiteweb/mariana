/* ------------------------------------------------------------------
   Biosite da Mariana Moura — monta as seções a partir do dados.js,
   faz os blocos surgirem ao rolar e cuida do mural e da calculadora.
------------------------------------------------------------------ */

(function () {
  "use strict";

  const $  = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));

  /* ---------- marcador de pendência: [ ... ] vira destaque visível ---------- */
  function marcar(texto) {
    return String(texto).replace(/\[([^\]]+)\]/g, '<span class="pendente">[$1]</span>');
  }

  /* ---------- WhatsApp ---------- */
  function linkZap(mensagem) {
    return "https://wa.me/" + DADOS.whatsapp + "?text=" + encodeURIComponent(mensagem);
  }

  const MSG = {
    topo: "Oi Mariana! Vi o seu site e quero saber como sair do aluguel. Pode me ajudar?",
    fim:  "Oi Mariana! Vim pelo seu site. Quero conversar sobre comprar meu imóvel.",
    conta: (total, anos) =>
      "Oi Mariana! Fiz a conta no seu site: já paguei cerca de " + total +
      " de aluguel em " + anos + ". Quero ver como parar com isso."
  };

  /* ---------- 1 e 2. Topo ---------- */
  $("#cargo").textContent          = DADOS.cargo;
  $("#creci").textContent          = DADOS.creci;
  $("#especialidade").textContent  = DADOS.especialidade;
  $("#chamada").textContent        = DADOS.chamada;

  $("#sobreTexto").innerHTML =
    DADOS.sobre.map((t) => '<p class="sobre__texto">' + t + "</p>").join("");

  $("#zapNumero").textContent      = DADOS.whatsappVisivel;
  $("#instaLink span").textContent = "@" + DADOS.instagram;
  $("#instaLink").href             = DADOS.instagramUrl;
  $("#atalhoInsta").href           = DADOS.instagramUrl;
  $("#atalhoTiktok").href          = DADOS.tiktokUrl;

  $("#zapTopo").href      = linkZap(MSG.topo);
  $("#zapFim").href       = linkZap(MSG.fim);
  $("#zapFlutuante").href = linkZap(MSG.topo);

  /* ---------- 3. Mural ---------- */
  $("#muralTitulo").innerHTML    = DADOS.mural.titulo.replace(/ ([^ ]+)$/, '\u00a0$1') + '\u00a0<i aria-hidden="true">✦</i>';
  $("#muralLegenda").textContent = DADOS.mural.legenda;

  const trilho = $("#trilho");
  // duas voltas da mesma lista: a animação volta ao início sem salto
  const fotos = DADOS.mural.fotos.concat(DADOS.mural.fotos);
  trilho.innerHTML = fotos.map((f, i) =>
    '<figure class="cartao cartao--' + f.formato + '" role="listitem">' +
      '<img src="assets/img/' + f.arquivo + '" alt="' + (i < DADOS.mural.fotos.length ? f.alt : "") + '"' +
      (i < 3 ? '' : ' loading="lazy"') + '>' +
    '</figure>'
  ).join("");


  /* ---------- trilho: anda sozinho e aceita arrastar com o dedo ---------- */
  const janela = $(".mural__janela");
  if (janela) {
    const devagar = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let pausa = 0;
    const segurar = () => { pausa = Date.now() + 2500; };
    ["pointerdown", "touchstart", "wheel", "mouseenter"].forEach((ev) =>
      janela.addEventListener(ev, segurar, { passive: true })
    );

    let anterior = 0;
    const passo = (agora) => {
      const dt = anterior ? Math.min(agora - anterior, 50) : 0;
      anterior = agora;
      const meio = janela.scrollWidth / 2;
      if (!devagar && Date.now() > pausa && meio > janela.clientWidth) {
        janela.scrollLeft += (dt * 0.024);
      }
      if (meio > 0 && janela.scrollLeft >= meio) janela.scrollLeft -= meio;
      requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
  }

  /* ---------- 4. Como eu te ajudo ---------- */
  $("#ajudaTitulo").textContent = DADOS.ajuda.titulo;
  $("#ajudaLista").innerHTML = DADOS.ajuda.itens.map((it) =>
    '<article class="item">' +
      '<span class="item__etiqueta">' + it.etiqueta + '</span>' +
      '<h3 class="item__titulo">' + it.titulo + '</h3>' +
      '<p class="item__texto">' + marcar(it.texto) + '</p>' +
    '</article>'
  ).join("");

  /* ---------- 5. Conta do aluguel ---------- */
  $("#contaTitulo").textContent   = DADOS.conta.titulo;
  $(".conta__texto").textContent  = DADOS.conta.texto;
  $(".conta__remate").textContent = DADOS.conta.remate;
  $("#zapConta b").textContent    = DADOS.conta.botao;

  const reais = new Intl.NumberFormat("pt-BR", {
    style: "currency", currency: "BRL", maximumFractionDigits: 0
  });

  const campoValor = $("#valorAluguel");
  const campoAnos  = $("#anosAluguel");

  function recalcular() {
    const valor = Number(campoValor.value);
    const anos  = Number(campoAnos.value);
    const total = valor * 12 * anos;
    const textoAnos = anos === 1 ? "1 ano" : anos + " anos";

    $("#valorSaida").textContent = reais.format(valor);
    $("#anosSaida").textContent  = textoAnos;
    $("#contaTotal").textContent = reais.format(total);
    $("#zapConta").href = linkZap(MSG.conta(reais.format(total), textoAnos));
  }

  campoValor.addEventListener("input", recalcular);
  campoAnos.addEventListener("input", recalcular);
  recalcular();

  /* ---------- 6. Dúvidas ---------- */
  $("#duvidasTitulo").textContent = DADOS.duvidas.titulo;
  $("#duvidasLista").innerHTML = DADOS.duvidas.itens.map((d, i) =>
    '<div class="duvida">' +
      '<button class="duvida__botao" type="button" aria-expanded="false" aria-controls="resp' + i + '">' +
        '<span>' + d.p + '</span>' +
        '<span class="duvida__mais" aria-hidden="true">+</span>' +
      '</button>' +
      '<div class="duvida__corpo" id="resp' + i + '"><div><p>' + marcar(d.r) + '</p></div></div>' +
    '</div>'
  ).join("");

  $$(".duvida__botao").forEach((botao) => {
    botao.addEventListener("click", () => {
      const caixa = botao.closest(".duvida");
      const abrindo = !caixa.classList.contains("aberta");
      $$(".duvida").forEach((c) => {
        c.classList.remove("aberta");
        c.querySelector(".duvida__botao").setAttribute("aria-expanded", "false");
      });
      if (abrindo) {
        caixa.classList.add("aberta");
        botao.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- 7. Fechamento e rodapé ---------- */
  $("#fimFrase").textContent      = DADOS.fechamento.frase;
  $("#zapFim b").textContent      = DADOS.fechamento.botao;
  $(".rodape__marca").textContent = DADOS.nome;
  $("#rodapeCreci").textContent   = DADOS.creci;
  $("#rodapeRegiao").innerHTML    = marcar(DADOS.regiao);

  /* ---------- blocos surgindo conforme rola ---------- */
  const blocos = $$("[data-revela]");
  if ("IntersectionObserver" in window) {
    const olho = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visivel");
          olho.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    blocos.forEach((b) => olho.observe(b));
  } else {
    blocos.forEach((b) => b.classList.add("visivel"));
  }

  /* ---------- botão flutuante do WhatsApp ---------- */
  const flutuante = $("#zapFlutuante");
  const gatilho   = $(".acao");
  if ("IntersectionObserver" in window && gatilho) {
    new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        flutuante.classList.toggle("aparece", !e.isIntersecting && e.boundingClientRect.top < 0);
      });
    }, { threshold: 0 }).observe(gatilho);
  }
})();
