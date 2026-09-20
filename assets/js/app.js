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
  trilho.innerHTML = DADOS.mural.fotos.map((f, i) =>
    '<figure class="cartao cartao--' + f.formato + '" role="listitem">' +
      '<img src="assets/img/' + f.arquivo + '" alt="' + f.alt + '"' +
      (i < 2 ? '' : ' loading="lazy"') + '>' +
    '</figure>'
  ).join("");


  /* ---------- trilho: setas para clicar, e arrastar com o dedo ---------- */
  const janela = $(".mural__janela");
  const antes  = $("#muralAntes");
  const depois = $("#muralDepois");

  if (janela && antes && depois) {
    const passo = () => {
      const cartao = janela.querySelector(".cartao");
      return cartao ? cartao.getBoundingClientRect().width + 12 : janela.clientWidth * 0.8;
    };
    const andar = (lado) => {
      janela.scrollBy({ left: lado * passo(), behavior: "smooth" });
    };
    antes.addEventListener("click", () => andar(-1));
    depois.addEventListener("click", () => andar(1));

    // apaga a seta quando nao ha mais foto para aquele lado
    const conferir = () => {
      const fim = janela.scrollWidth - janela.clientWidth - 2;
      antes.classList.toggle("mural__seta--off", janela.scrollLeft <= 2);
      depois.classList.toggle("mural__seta--off", janela.scrollLeft >= fim);
    };
    janela.addEventListener("scroll", conferir, { passive: true });
    window.addEventListener("resize", conferir);
    setTimeout(conferir, 300);
    window.addEventListener("load", conferir);
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
