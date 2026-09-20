# Biosite — Mariana Moura

Terceiro formato de biosite da Criasiteweb, feito para não parecer com nenhum
dos outros dois: a Isa é off-white com azul-marinho, a Silvana é preto com
dourado, e a Mariana é **areia, marrom-chocolate e dourado** — a paleta que
ela mesma já usa nas artes do Instagram.

## O que é

Biosite: coluna única estreita, sem menu, a foto dela abrindo a página e os
blocos surgindo conforme rola. A peça central é o **mural de entregas**, um
trilho de fotos que anda sozinho com as chaves que ela já entregou.

## De onde veio cada coisa

Tudo saiu do material real, nada foi inventado.

| Dado | Fonte |
| --- | --- |
| Nome, CRECI 318621, "Especialista no Programa Minha Casa Minha Vida" | bio do Instagram |
| "Encontre aqui o lugar perfeito para você e sua família" | bio do Instagram |
| "Saia do aluguel" | campanha das artes dela |
| "Mais um sonho realizado" | artes de entrega de chave |
| "Seu primeiro imóvel está aqui" | artes dela |
| "Comprovando renda por IR ou extrato bancário, trabalhadores informais também têm acesso ao programa" | story dela |
| "O lugar ideal espera por você" | post dela |
| (11) 91943-1680 | número impresso nas artes |
| 14 fotos do mural | posts baixados em `/home/matheus/Claude` |
| Retrato | post "Apartamento pode ser a melhor escolha" |

## Arquivos

```
index.html                 estrutura da página
assets/css/estilo.css      tema areia/marrom, todo em tokens no :root
assets/js/dados.js         TODO o conteúdo que muda mora aqui
assets/js/app.js           monta as seções, animações, mural e calculadora
assets/img/                retrato + 14 fotos de entrega
```

Para mudar qualquer texto, número ou foto, mexer só em `assets/js/dados.js`.

## O que precisa ser preenchido antes de publicar

Está tudo marcado em destaque na própria página (fundo dourado, borda
pontilhada), para ninguém publicar com dado inventado.

**Só falta preencher:**

1. `familias` — quantas famílias ela já atendeu. Hoje está `[00]`.
2. `regiao` — a região de atuação. Hoje está `[CONFIRMAR REGIÃO]`.
   Nos posts aparece Santo André / ABC, mas não dá para afirmar.

**Precisa confirmar com a Mariana:**

3. **O WhatsApp (11) 91943-1680.** Foi lido das artes do Instagram dela, não
   veio da boca dela. Se estiver errado, todos os botões do site vão para o
   número errado.
4. **As respostas das Dúvidas.** São corretas e conservadoras (não prometem
   nada), mas são a voz dela falando — ela tem que ler e aprovar.
5. **Se ela quer citar a imobiliária.** Nas fotos ela aparece com a chave da
   SBT Imóveis. A decisão foi deixar o biosite só com a marca pessoal dela,
   então a SBT não aparece em lugar nenhum. Se ela quiser, entra fácil.
6. **Se ela aprova o uso das fotos dos clientes.** O mural mostra rosto de
   cliente. São posts públicos do perfil dela, mas a decisão é dela.

## Ideias que ficaram na gaveta

- Trocar o mural de fotos por um vídeo curto de entrega de chave, como foi
  feito no site da Silvana.
- Bloco de empreendimentos em destaque, se ela quiser mostrar oferta.
- Depoimento escrito de cliente, com nome.
