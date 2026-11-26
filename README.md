# IEFP Rio Meão | Proposta de website

**Autora:** Eliza Anjos  
**Site publicado:** (https://elizanjos-hub.github.io/Redesign-Site/)

1. Sobre o projeto

Para este trabalho, escolhi fazer uma proposta de redesign do website do IEFP Rio Meão, criando uma página mais moderna, organizada e fácil de utilizar.

A ideia foi apresentar as principais informações do centro num único espaço, com secções dedicadas à formação, às atividades, às notícias e aos contactos.

Procurei aplicar os conteúdos que fomos aprendendo nas aulas, tanto na organização do HTML como na parte visual e responsiva do CSS.

2. Website publicado

O projeto está disponível no GitHub Pages:

https://elizanjos-hub.github.io/Redesign-IEFP/

3. Conceito visual

Na parte visual, optei por manter o verde como cor principal, por ser uma referência à identidade do IEFP.

Combinei o verde com fundos claros e tons mais neutros para criar um ambiente simples, mas atual. Também utilizei fotografias reais, cartões e títulos em destaque para tornar a informação mais fácil de encontrar.

A minha intenção foi criar uma página com uma aparência mais moderna, sem perder a ligação à instituição.

4. Tecnologias utilizadas

O projeto foi desenvolvido com:

* HTML5: para criar a estrutura e organizar os conteúdos da página.
* CSS3: para trabalhar as cores, fontes, espaçamentos e outros elementos visuais.
* Flexbox: para organizar o menu, os botões e a galeria de fotografias.
* CSS Grid: para dividir algumas secções em colunas e organizar os cartões.
* Media queries: para adaptar a página a diferentes tamanhos de ecrã.
* Git e GitHub: para guardar as alterações e publicar o website através do GitHub Pages.

Não utilizei Bootstrap nem JavaScript neste projeto.

5. Modos diurno e noturno

Criei duas opções de visualização para o website.

No modo diurno, a página utiliza fundos claros, texto escuro e verde nos elementos de destaque.

No modo noturno, os fundos passam a tons de verde mais escuros, enquanto os textos ficam mais claros para facilitar a leitura.

A mudança entre os dois modos foi feita apenas com HTML e CSS, utilizando um checkbox e variáveis CSS.

6. Principais variáveis CSS

Utilizei variáveis para organizar as cores e facilitar as alterações entre os dois modos.

As principais são:

* --fundo: cor de fundo principal.
* --fundo-card: cor de fundo dos cartões.
* --fundo-secundario: cor utilizada em algumas secções.
* --texto: cor principal dos textos.
* --texto-secundario: cor dos textos de apoio.
* --verde: cor dos destaques e botões.
* --borda: cor das bordas dos elementos.
* --texto-botao: cor do texto dos botões principais.

Desta forma, não foi necessário alterar individualmente as cores de cada elemento para criar o modo noturno.

7. Transições CSS

Utilizei transições em diferentes elementos para tornar a navegação mais agradável.

Botões: ao passar o rato, os botões mudam de cor e sobem ligeiramente. Utilizei background-color e transform, com duração de 0.3s e funções ease e ease-in-out.

Cartões: os cartões das formações e das notícias também sobem ligeiramente e mudam a cor da borda. Utilizei transform e border-color, com duração de 0.3s e funções ease-out e ease.

Modo diurno e noturno: a mudança das cores é gradual, utilizando background-color, color e border-color, com duração de 0.4s e função ease.

8. Imagens e recursos utilizados

As fotografias utilizadas no projeto foram retiradas do perfil de Instagram ⁠Rio Meão Contigo, IEFP e de pesquisas no Google Imagens.

Procurei selecionar fotografias que mostrassem as instalações, as formações e as atividades realizadas no centro, para aproximar a proposta da realidade da instituição.

Também utilizei o logótipo do IEFP para manter a identidade visual original.
Os ícones e as setas foram inseridos diretamente no HTML, sem utilizar bibliotecas externas.

As imagens foram utilizadas exclusivamente para fins académicos, sem finalidade comercial.

9. Dificuldades encontradas

Uma das dificuldades foi conseguir organizar os elementos da página de forma que funcionassem tanto no computador como no telemóvel.

Para isso, utilizei Flexbox, Grid e media queries, alterando a disposição dos elementos conforme o tamanho do ecrã.

Também tive alguma dificuldade com o modo noturno, principalmente para conseguir mudar as cores de todas as secções sem utilizar JavaScript. A utilização das variáveis CSS ajudou a resolver essa questão.

Outro problema que encontrei foi na ligação entre o HTML e o ficheiro CSS. O nome do ficheiro estava diferente do indicado no HTML e, por isso, os estilos não apareciam no navegador. Depois de corrigir o caminho, a página voltou a funcionar normalmente.

10. Conclusão

Este trabalho ajudou-me a colocar em prática os conteúdos das aulas e a perceber melhor como o HTML e o CSS funcionam em conjunto.

Gostei especialmente de trabalhar a parte visual e de conseguir criar uma página que se adapta a diferentes dispositivos.

O resultado é uma proposta de redesign do IEFP Rio Meão, desenvolvida para fins académicos e sem ligação oficial à instituição.