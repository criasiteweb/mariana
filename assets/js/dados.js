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

  /* Texto de apresentação. Escrito a partir do que ela mesma publica no
     Instagram (especialidade, campanhas e a forma como ela descreve o
     trabalho). Nada de tempo de mercado ou número inventado. */
  sobre: [
    "Sou corretora de imóveis e <b>especialista no Programa Minha Casa Minha Vida</b>. O meu trabalho é tirar família do aluguel — e eu levo isso a sério.",
    "Eu acompanho tudo do começo ao fim: a primeira simulação, a escolha do apartamento, a papelada chata e o dia da chave na mão. Você não fica perdido em nenhuma parte do caminho.",
    "Se você já achou que não dava, vem conversar comigo. <b>Muita gente que hoje tem a chave do próprio apartamento começou achando exatamente a mesma coisa.</b>"
  ],

  mural: {
    titulo: "Mais um sonho realizado",
    legenda: "Cada foto dessas é uma chave que saiu da minha mão para a mão de alguém.",
    /* As artes entram inteiras, do jeito que ela publica no Instagram.
       Nada é cortado — por isso todas aparecem no formato quadrado original. */
    fotos: [
      { arquivo: "cliente-01.jpg", formato: "quadrada", alt: "Cliente da Mariana com a placa Conquistei o sonho da minha casa própria" },
      { arquivo: "cliente-02.jpg", formato: "quadrada", alt: "Entrega de chave acompanhada pela Mariana Moura" },
      { arquivo: "cliente-03.jpg", formato: "quadrada", alt: "Cliente comemorando a conquista do apartamento" },
      { arquivo: "cliente-04.jpg", formato: "quadrada", alt: "Família recebendo a chave do primeiro imóvel" },
      { arquivo: "cliente-05.jpg", formato: "quadrada", alt: "Mariana Moura com clientes no dia da entrega" },
      { arquivo: "cliente-06.jpg", formato: "quadrada", alt: "Mais um sonho realizado com a Mariana Moura" },
      { arquivo: "cliente-07.jpg", formato: "quadrada", alt: "Cliente saindo do aluguel com a Mariana Moura" }
    ]
  },

  /* Vídeo real do decorado, gravado por ela. */
  video: {
    titulo: "Dá uma olhada no decorado",
    legenda: "É assim que pode ser o seu. Aperte o play e veja por dentro.",
    arquivo: "assets/video/decorado.mp4",
    capa: "assets/img/decorado-capa.jpg"
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
