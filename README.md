# IEFP Rio Meão | Proposta de website

**Autora:** Eliza Anjos  
**Site publicado:** (https://elizanjos-hub.github.io/Redesign-IEFP/)

## Sobre o projeto

Projeto de reformulação visual do website do IEFP Rio Meão. A proposta utiliza um estilo editorial, com tipografia de destaque, fotografias de atividades e cores inspiradas na identidade do IEFP.

## Tecnologias

HTML5, CSS3 (Flexbox, Grid, media queries, variáveis e transições), JavaScript básico para o botão de modo e o formulário demonstrativo. **Não utiliza Bootstrap.**

## Modos diurno e noturno

O modo diurno usa fundos claros e texto escuro. O modo noturno usa fundos escuros e texto claro. O botão do cabeçalho adiciona ou remove a classe `dark-mode` no `body`. As cores são definidas pelas variáveis CSS.

## Principais variáveis

`--bg` (fundo), `--text` (texto), `--accent` (destaque), `--card` (cartões), `--button-bg` e `--button-text` (botões), `--border` (contornos).

## Três exemplos de transições

1. Botões: `background-color .25s ease-in`, `transform .25s ease-out` e `box-shadow .3s ease`.
2. Cartões: `transform .3s ease-out` e `box-shadow .3s ease-in-out`.
3. Mudança de modo: `background-color .4s ease` e `color .4s ease`.

## Imagens e recursos

Logótipos oficiais do IEFP e fotografias do centro/atividades fornecidos para este projeto. Algumas fotografias foram obtidas de publicações da conta de Instagram do centro e de imagens disponibilizadas pelo utilizador. Confirmar os créditos e direitos de reutilização antes da publicação pública. Não foram utilizados ícones externos nem fontes externas.

## Conteúdos de demonstração

As formações são **exemplos académicos** e não representam um catálogo oficial atualizado. As durações são indicadas como variáveis, pois não foram verificadas. Os destaques editoriais não têm datas confirmadas. O formulário não envia nem guarda dados. O endereço do IEFP é disponibilizado como ligação externa para consulta de informação oficial.

## Dificuldades e soluções

- Adaptar um estilo editorial a ecrãs pequenos: grelhas com CSS Grid e media queries.
- Manter contraste nos dois modos: variáveis CSS com valores alternativos em `.dark-mode`.
- Evitar inventar informação institucional: identificação explícita de conteúdos ilustrativos.
