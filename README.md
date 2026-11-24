# IEFP Rio Meão | Proposta de website

**Autora:** Eliza Anjos  
**Site publicado:** (https://elizanjos-hub.github.io/Redesign-IEFP/)

## Sobre o projeto

Este projeto foi desenvolvido no âmbito da formação de Desenvolvimento Web, com o objetivo de criar uma proposta de reformulação do website do IEFP Rio Meão.

A ideia foi desenvolver uma página mais moderna, organizada e intuitiva, facilitando o acesso às informações sobre o centro, as formações e as atividades realizadas.

Procurei criar uma identidade visual simples, com destaque para as cores institucionais, fotografias e uma organização que tornasse a navegação mais agradável.

Este é um projeto académico e não representa o website oficial do IEFP.

## Objetivos

Os principais objetivos foram:

* Criar uma página visualmente apelativa e fácil de utilizar.
* Organizar as informações de forma clara.
* Aplicar HTML semântico.
* Utilizar CSS Grid e Flexbox na construção do layout.
* Adaptar a página a diferentes tamanhos de ecrã.
* Implementar os modos claro e escuro.
* Aplicar transições e efeitos de interação.
* Criar um formulário de contacto demonstrativo.

## Tecnologias utilizadas

O website foi desenvolvido apenas com:
* HTML5: estrutura e organização dos conteúdos.
* CSS3: estilos, cores, tipografia e disposição dos elementos.
* CSS Grid: organização das secções e dos cartões.
* Flexbox: alinhamento de elementos e criação da galeria horizontal.
* Media queries: adaptação a diferentes tamanhos de ecrã.
* Variáveis CSS: definição e reutilização das cores.
* Transições CSS: efeitos nos botões, cartões, imagens e mudança de tema.

## Modos diurno e noturno

Uma das funcionalidades desenvolvidas foi a possibilidade de alternar entre dois modos de visualização.
O modo claro utiliza fundos claros e textos escuros, enquanto o modo escuro apresenta fundos escuros e textos claros.

Esta funcionalidade foi criada apenas com HTML e CSS.
Foi utilizado um input do tipo checkbox, associado a um label.

No CSS, a pseudoclasse :checked identifica quando o checkbox está selecionado e permite alterar as variáveis responsáveis pelas cores.

Também foram aplicadas transições para tornar a mudança de tema mais suave.


## Imagens e recursos

Logótipos oficiais do IEFP e fotografias do centro/atividades fornecidos para este projeto. Algumas fotografias foram obtidas de publicações da conta de Instagram do centro e de imagens disponibilizadas pelo utilizador. Confirmar os créditos e direitos de reutilização antes da publicação pública. Não foram utilizados ícones externos nem fontes externas.

## Conteúdos de demonstração

As formações são **exemplos académicos** e não representam um catálogo oficial atualizado. As durações são indicadas como variáveis, pois não foram verificadas. Os destaques editoriais não têm datas confirmadas. O formulário não envia nem guarda dados. O endereço do IEFP é disponibilizado como ligação externa para consulta de informação oficial.

## Dificuldades e soluções

- Adaptar um estilo editorial a ecrãs pequenos: grelhas com CSS Grid e media queries.
- Manter contraste nos dois modos: variáveis CSS com valores alternativos em `.dark-mode`.
- Evitar inventar informação institucional: identificação explícita de conteúdos ilustrativos.
