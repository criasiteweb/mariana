/* ------------------------------------------------------------------
   DADOS DA MARIANA — é só aqui que se mexe para atualizar o biosite.
   Tudo que estiver entre colchetes [ ] é pendência: aparece marcado
   no site de propósito, para ninguém publicar com dado inventado.
------------------------------------------------------------------ */

const DADOS = {
  nome: "Mariana Moura",
  cargo: "Corretora de imóveis",
  creci: "CRECI 318621",
  especialidade: "Especialista no Programa Minha Casa Minha Vida",
  chamada: "Encontre aqui o lugar perfeito para você e sua família.",
  carimbo: "Saia do aluguel",

  // Número que aparece nas artes do Instagram dela. CONFIRMAR antes de publicar.
  whatsapp: "5511919431680",
  whatsappVisivel: "(11) 91943-1680",

  instagram: "marianamouracorretora",
  instagramUrl: "https://www.instagram.com/marianamouracorretora/",

  // PENDÊNCIA: região exata de atuação (nos posts aparece Santo André / ABC)
  regiao: "[CONFIRMAR REGIÃO]",

  // PENDÊNCIA: quantas famílias ela já atendeu
  familias: "[00]",

  mural: {
    titulo: "Mais um sonho realizado",
    legenda: "Cada foto dessas é uma chave que saiu da minha mão para a mão de alguém.",
    fotos: [
      { arquivo: "entrega-01.jpg", formato: "larga",    alt: "Cliente da Mariana com a placa Conquistei o sonho da minha casa própria" },
      { arquivo: "entrega-07.jpg", formato: "quadrada", alt: "Arte de entrega de chave da Mariana Moura" },
      { arquivo: "entrega-03.jpg", formato: "larga",    alt: "Casal recebendo a chave do apartamento com a Mariana" },
      { arquivo: "entrega-12.jpg", formato: "quadrada", alt: "Mariana com clientes no apartamento decorado" },
      { arquivo: "entrega-05.jpg", formato: "larga",    alt: "Família com a chave da SBT Imóveis no decorado" },
      { arquivo: "entrega-08.jpg", formato: "quadrada", alt: "Arte de entrega de chave da Mariana Moura" },
      { arquivo: "entrega-02.jpg", formato: "larga",    alt: "Mariana com clientes na assinatura do contrato" },
      { arquivo: "entrega-13.jpg", formato: "quadrada", alt: "Mariana com clientes na visita ao decorado" },
      { arquivo: "entrega-06.jpg", formato: "larga",    alt: "Trio de clientes comemorando a compra do apartamento" },
      { arquivo: "entrega-09.jpg", formato: "quadrada", alt: "Arte de entrega de chave da Mariana Moura" },
      { arquivo: "entrega-04.jpg", formato: "larga",    alt: "Cliente segurando a chave da SBT Imóveis" },
      { arquivo: "entrega-10.jpg", formato: "quadrada", alt: "Arte de entrega de chave da Mariana Moura" },
      { arquivo: "entrega-11.jpg", formato: "quadrada", alt: "Arte de entrega de chave da Mariana Moura" }
    ]
  },

  ajuda: {
    titulo: "Como eu te ajudo",
    itens: [
      {
        etiqueta: "Primeiro imóvel",
        titulo: "Seu primeiro imóvel está aqui",
        texto: "Eu te acompanho do começo ao fim: simulação, escolha do apartamento, papelada e entrega da chave."
      },
      {
        etiqueta: "Minha Casa Minha Vida",
        titulo: "Eu sou especialista no programa",
        texto: "Vejo em qual faixa você entra, o que isso muda na sua parcela e quanto de subsídio você tem direito."
      },
      {
        etiqueta: "Renda informal",
        titulo: "Trabalha por conta? Dá sim",
        texto: "Comprovando renda por IR ou extrato bancário, trabalhadores informais também têm acesso ao programa."
      },
      {
        etiqueta: "Entrada",
        titulo: "Parcelas facilitadas",
        texto: "Apartamentos em oferta com entrada parcelada direto com a construtora. Eu te mostro as opções antes de você decidir."
      }
    ]
  },

  conta: {
    titulo: "Quanto você já pagou de aluguel?",
    texto: "Arrasta e vê o tamanho do buraco. Esse dinheiro já foi embora — e não volta.",
    remate: "Isso daria a entrada do seu apartamento.",
    botao: "Quero parar de pagar aluguel"
  },

  duvidas: {
    titulo: "Dúvidas que sempre me fazem",
    itens: [
      {
        p: "Preciso ter entrada?",
        r: "Depende do empreendimento e do seu perfil. Em vários casos a entrada é parcelada direto com a construtora. Me chama que eu simulo com os seus números antes de você decidir qualquer coisa."
      },
      {
        p: "Trabalho por conta, consigo financiar?",
        r: "Sim. Comprovando renda por IR ou extrato bancário, trabalhadores informais também têm acesso ao programa."
      },
      {
        p: "Posso usar o FGTS?",
        r: "Pode, se você se encaixar nas regras da Caixa. O FGTS pode entrar como parte da entrada ou para abater o saldo devedor. Eu confiro isso com você antes da simulação."
      }
    ]
  },

  fechamento: {
    frase: "O lugar ideal espera por você.",
    botao: "Falar com a Mariana"
  }
};
