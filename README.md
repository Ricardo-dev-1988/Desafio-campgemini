# 💻 Desafio-capgemini

<h2>Desafio - 1</h2>
<br/>
No desafio a baixo, foi proposto a contrução de um <strong>algoritmo</strong> que criace uma <strong>escada com os asteriscos</strong>. Nesse primeiro desafio utilizei
a estrutura de repetição <strong>for</strong> que a primeiro momento ela acrescentava o asterisco de 0 a 6 horizontal e a outra estrutura for vertical.

![4](https://user-images.githubusercontent.com/93559261/153957755-8f9da0de-4e35-4392-bcdf-3ab1e776c587.png)

<h2>Desafio - 2</h2>
<br/>
Neste outro desafio, foi proposto a criação de um <strong>algoritmo gerador de senha forte</strong>. Criei um <strong>variável</strong> com uma <strong>string com uma epécie de expressão regular</strong>, uma outra <strong>variável</strong>
com o <strong>valor do núemro que a senha deveria ter</strong> que no caso é <strong>6 dígitos</strong> e uma outra <strong>variável de string vazia para armazenar a senha aleatória</strong>. Utilizei a <strong>estrutura de repetição
for</strong> para <strong>percorrer o tamanho total da string da variável chars</strong> em seguida, criei uma variável <strong>randomNumber</strong> armazenando nela o <strong>método matemático floor( )</strong> que faz o aredondamento
de núemros para baixo e o <strong>método random( ) que pega valores aleatórios</strong>. Esses métodos estão exercendo a seguinte função... o <strong>floor arredonda os números para baixo em um valor inteiro</strong> e o <strong>random( ) busca um valor aleatório de 0 ao tamanho da variável chars (chars.length)</strong>. O método <strong>subString(x,y) está retornando a parte da string no seu 
valor inicial e o seu valor final acrescentando + 1 para pegar o valor total de chars</strong>.

![2](https://user-images.githubusercontent.com/93559261/153928763-1ad5027d-1554-4626-8de6-93a55c7378da.png)

<h2>Desafio - 3</h2>
<br/>
Neste desafio, foi proposta a criação de um <strong>anagrama</strong>, onde retornace valores parececido de formas diferente. Neste algoritmo criei uma <strong>function checkAnagrama(a,b)</strong> com os <strong>parâmetros a</strong>e <strong>b</strong> que representam as <strong>strings</strong>. Impus uma <strong>condicional que fizesse que se a.length (tamanho total do a) e b.length(tamanho total do b) fossem diferentes(!==)</strong>, deveriam apresentar a mensagem <strong>"não é um anagrama"</strong>. Em seguida criei duas variáveis <strong>string1 e string2</strong> e nelas utilizei alguns <strong>métos</strong> para me retornar o efeito desejado. Utilizei 
o <strong>método split() que pega o valor da string1 e da string2 separando-as e transformando-as em arrays</strong> o <strong>sort() faz a organização dos itens do array em orgem alfabética</strong> e o <strong>join() transformou
o array criado pelo split() em uma string novamente</strong>. Na variável<strong>resultado</strong> foi feito uma <strong>comparação se a string1 é semelhante a string2 (===)</strong>.

![3](https://user-images.githubusercontent.com/93559261/153931942-c9e3e0b8-f6db-4659-9e61-dfb9ae18f40d.png)
