/* =========================================================
   Mariana Moura — MODO PRÉVIA (Criasiteweb)
   ---------------------------------------------------------
   O que este arquivo faz:
   1. Libera o site por 24 HORAS a partir da primeira vez que
      a pessoa abre o link. Passou disso, a página deixa de
      mostrar o site e exibe um aviso com o contato da
      Criasiteweb.
   2. Bloqueia os botões de ação (WhatsApp, Instagram, TikTok,
      telefone). Eles continuam aparecendo bonitos na tela,
      mas ao apertar aparece o aviso de que só funcionam
      depois de contratado. Assim ela não consegue usar o
      site com os clientes dela antes de fechar.
   3. O Matheus vê o site inteiro, sem prazo e sem bloqueio,
      abrindo o link com #criasiteweb no final.

   PARA DESLIGAR TUDO DEPOIS QUE ELA CONTRATAR:
      é só trocar a linha abaixo para  ATIVO = false
   ========================================================= */

var PREVIA = {
  ATIVO: true,

  HORAS: 24,                       // quanto tempo dura o acesso dela
  LIMITE: "2026-09-27T23:59:00",   // depois desta data acaba para todo mundo
  CHAVE_DONO: "criasiteweb",       // #criasiteweb no fim do link = acesso total
  ZAP_CRIASITEWEB: "5511988097416",// WhatsApp do Matheus no aviso de prazo vencido

  AVISO_BOTAO: "Este botão é ativado assim que o site for contratado.",
  BARRA: "Prévia exclusiva",
};

(function () {
  if (!PREVIA.ATIVO) return;

  var guarda = {
    ler: function (c) { try { return localStorage.getItem(c); } catch (e) { return null; } },
    gravar: function (c, v) { try { localStorage.setItem(c, v); } catch (e) {} }
  };

  /* ---- acesso do dono: #criasiteweb libera para sempre neste aparelho ---- */
  if (location.hash.replace("#", "") === PREVIA.CHAVE_DONO) {
    guarda.gravar("previa-dono", "1");
    history.replaceState(null, "", location.pathname + location.search);
  }
  if (guarda.ler("previa-dono") === "1") return;

  /* ---- quando a visita começou ---- */
  var inicio = parseInt(guarda.ler("previa-inicio") || "0", 10);
  if (!inicio) { inicio = Date.now(); guarda.gravar("previa-inicio", String(inicio)); }
  var fim = inicio + PREVIA.HORAS * 3600 * 1000;
  var limite = new Date(PREVIA.LIMITE).getTime();
  if (limite && limite < fim) fim = limite;

  /* ---- aparência do modo prévia ---- */
  var css = document.createElement("style");
  css.textContent = [
    ".previa-barra{position:fixed;top:0;left:0;right:0;z-index:9999;",
    "background:#4A3220;color:#F6E9D7;font:500 12px/1 'DM Sans',system-ui,sans-serif;",
    "letter-spacing:.02em;text-align:center;padding:10px 14px;box-sizing:border-box;}",
    ".previa-barra b{color:#E2BC7C;font-weight:600;}",
    "body.tem-previa{padding-top:34px;}",
    ".previa-aviso{position:fixed;left:50%;bottom:24px;transform:translate(-50%,16px);",
    "z-index:10000;background:#4A3220;color:#FDF7EE;border:1px solid #B9822F;",
    "font:500 13.5px/1.45 'DM Sans',system-ui,sans-serif;padding:13px 18px;border-radius:14px;",
    "max-width:min(340px,86vw);text-align:center;box-shadow:0 14px 34px rgba(40,26,14,.32);",
    "opacity:0;pointer-events:none;transition:opacity .22s ease,transform .22s ease;}",
    ".previa-aviso.ver{opacity:1;transform:translate(-50%,0);}",
    ".previa-fim{position:fixed;inset:0;z-index:100000;background:#FDF7EE;color:#4A3220;",
    "display:flex;align-items:center;justify-content:center;padding:28px;",
    "font-family:'DM Sans',system-ui,sans-serif;text-align:center;}",
    ".previa-fim__caixa{max-width:380px;}",
    ".previa-fim__selo{width:64px;height:64px;margin:0 auto 22px;border-radius:50%;",
    "border:2px solid #E2BC7C;display:flex;align-items:center;justify-content:center;",
    "font-size:28px;color:#B9822F;}",
    ".previa-fim h1{font:600 25px/1.25 'Fraunces',Georgia,serif;margin:0 0 12px;}",
    ".previa-fim p{font-size:15px;line-height:1.6;color:#6B4A2F;margin:0 0 26px;}",
    ".previa-fim a{display:inline-block;background:#4A3220;color:#F6E9D7;text-decoration:none;",
    "font-weight:600;font-size:15px;padding:15px 30px;border-radius:999px;}",
    ".previa-fim small{display:block;margin-top:22px;font-size:12px;color:#B9822F;",
    "letter-spacing:.08em;text-transform:uppercase;}"
  ].join("");
  document.head.appendChild(css);

  /* ---- tela de prazo encerrado ---- */
  function encerrar() {
    var tela = document.createElement("div");
    tela.className = "previa-fim";
    tela.innerHTML =
      '<div class="previa-fim__caixa">' +
        '<div class="previa-fim__selo"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.2V12l3 1.8"/></svg></div>' +
        "<h1>O prazo desta prévia terminou</h1>" +
        "<p>Este site foi liberado por 24 horas para visualização. " +
        "Para deixá-lo no ar de forma definitiva, é só falar com a gente.</p>" +
        '<a href="https://wa.me/' + PREVIA.ZAP_CRIASITEWEB +
        '?text=' + encodeURIComponent("Oi! Vi o site que vocês fizeram para mim e quero liberar o acesso.") +
        '" target="_blank" rel="noopener">Falar com a Criasiteweb</a>' +
        "<small>Criasiteweb</small>" +
      "</div>";
    document.body.appendChild(tela);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }

  if (Date.now() >= fim) {
    document.addEventListener("DOMContentLoaded", encerrar);
    if (document.readyState !== "loading") encerrar();
    return;
  }

  /* ---- barra discreta com o horário em que o acesso termina ---- */
  function hora(ms) {
    var d = new Date(ms);
    return ("0" + d.getHours()).slice(-2) + "h" + ("0" + d.getMinutes()).slice(-2);
  }
  function montar() {
    document.body.classList.add("tem-previa");

    var barra = document.createElement("div");
    barra.className = "previa-barra";
    var mesmoDia = new Date(fim).toDateString() === new Date().toDateString();
    barra.innerHTML = PREVIA.BARRA + " &middot; acesso até <b>" +
      hora(fim) + (mesmoDia ? "" : " de amanhã") + "</b>";
    document.body.insertBefore(barra, document.body.firstChild);
    /* a altura da barra vira o espaco no topo, para nao cobrir nada */
    document.body.style.paddingTop = barra.offsetHeight + "px";

    var aviso = document.createElement("div");
    aviso.className = "previa-aviso";
    aviso.textContent = PREVIA.AVISO_BOTAO;
    document.body.appendChild(aviso);

    var sumir;
    window.__previaAviso = function () {
      aviso.classList.add("ver");
      clearTimeout(sumir);
      sumir = setTimeout(function () { aviso.classList.remove("ver"); }, 4000);
    };

    /* relógio: se o prazo virar com a página aberta, encerra na hora */
    setInterval(function () { if (Date.now() >= fim) location.reload(); }, 30000);
  }

  /* ---- bloqueio dos botões de ação ---- */
  document.addEventListener("click", function (ev) {
    var a = ev.target.closest && ev.target.closest("a");
    if (!a) return;
    var destino = (a.getAttribute("href") || "") + " " + (a.href || "");
    if (!/wa\.me|whatsapp|instagram|tiktok|^tel:|\btel:/i.test(destino)) return;
    ev.preventDefault();
    ev.stopPropagation();
    if (window.__previaAviso) window.__previaAviso();
  }, true);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", montar);
  } else {
    montar();
  }
})();
