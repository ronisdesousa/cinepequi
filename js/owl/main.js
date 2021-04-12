$('.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:7
        }
    }
});

function cliqueFilme(codigo) {
    switch (codigo)
    {
        case 0:
            {
                $('.titulo')[0].innerText = 'HOUSE OF CARDS';
                $('.descricao')[0].innerText = 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.';
                $('.conteudo')[0].style.background = "linear-gradient(60deg, rgba(125, 126, 125, 0.152), rgb(3, 4, 4)), url('../images/house_of_cards.jpg') no-repeat";
                break;
            }
        case 1:
            {
                $('.titulo')[0].innerText = 'AUTODESTRUIÇÃO';
                $('.descricao')[0].innerText = 'A história acontece num mundo futurista, onde o piloto esta lutando para salvar sua família após um experimento por energia ilimitada e controle de universos paralelos dar errado.';
                $('.conteudo')[0].style.background = "linear-gradient(60deg, rgba(125, 126, 125, 0.152), rgb(3, 4, 4)), url('../images/autodescruicao.jpg') no-repeat";
                break;
            }
        case 2:
            {
                $('.titulo')[0].innerText = 'LENDAS DA MARVEL';
                $('.descricao')[0].innerText = 'Marvel Studios: Legends é uma docussérie de televisão estadunidense criada para o Disney+, baseada nos personagens da Marvel Comics que aparecem no Universo Cinematográfico Marvel.';
                $('.conteudo')[0].style.background = "linear-gradient(60deg, rgba(125, 126, 125, 0.152), rgb(3, 4, 4)), url('../images/lendas.jpg') no-repeat";
                break;
            }    
        case 3:
            {
                $('.titulo')[0].innerText = 'SOUL';
                $('.descricao')[0].innerText = 'Joe Gardner é um professor de música de ensino fundamental desanimado por não conseguir alcançar seu sonho de tocar no lendário clube de jazz The Blue Note, em Nova York.';
                $('.conteudo')[0].style.background = "linear-gradient(60deg, rgba(125, 126, 125, 0.152), rgb(3, 4, 4)), url('../images/soul.jpg') no-repeat";
                break;
            }          
        case 4:
            {
                $('.titulo')[0].innerText = 'GAME OF THRONES';
                $('.descricao')[0].innerText = 'Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra.';
                $('.conteudo')[0].style.background = "linear-gradient(60deg, rgba(125, 126, 125, 0.152), rgb(3, 4, 4)), url('../images/gameofthrones.jpg') no-repeat";
                break;
            }
        case 5:
            {
                $('.titulo')[0].innerText = 'GODZILLA VS KONG';
                $('.descricao')[0].innerText = 'Em uma época em que os monstros andam na Terra, a luta da humanidade por seu futuro coloca Godzilla e Kong em rota de colisão que verá as duas forças mais poderosas da natureza no planeta se confrontarem em uma batalha espetacular para as idades.';
                $('.conteudo')[0].style.background = "linear-gradient(60deg, rgba(125, 126, 125, 0.152), rgb(3, 4, 4)), url('../images/godzillakong.jpg') no-repeat";
                break;
            }    
        case 6:
            {
                $('.titulo')[0].innerText = 'CHAPO';
                $('.descricao')[0].innerText = 'Inspirado por fatos reais, este drama reconta o plano de fuga da prisão do chefe do trafico mexicano Joaquín Guzmán Loera, El Chapo.';
                $('.conteudo')[0].style.background = "linear-gradient(60deg, rgba(125, 126, 125, 0.152), rgb(3, 4, 4)), url('../images/chapo.jpg') no-repeat";
                break;
            }     
        case 7:
            {
                $('.titulo')[0].innerText = 'EM BUSCA DE VINGANÇA';
                $('.descricao')[0].innerText = 'Um homem (Arnold Schwarzenegger) traumatizado busca vingança após ter perdido a esposa e o filho em acidente de avião causado por negligência de um controlador de tráfego aéreo (Scoot McNairy).';
                $('.conteudo')[0].style.background = "linear-gradient(60deg, rgba(125, 126, 125, 0.152), rgb(3, 4, 4)), url('../images/buscavinganca.jpg') no-repeat";
                break;
            }
        case 8:
            {
                $('.titulo')[0].innerText = 'BUFFALO BOYS';
                $('.descricao')[0].innerText = 'Traído pelas forças coloniais holandesas, Arana consegue escapar junto com seus sobrinhos Jamar e Suwo, os filhos recém-nascidos de Hamza, um dos últimos sultões indonésios lutando contra a tirania estrangeira.';
                $('.conteudo')[0].style.background = "linear-gradient(60deg, rgba(125, 126, 125, 0.152), rgb(3, 4, 4)), url('../images/buffalo.jpg') no-repeat";
                break;
            }    
        case 9:
            {
                $('.titulo')[0].innerText = 'HACKER';
                $('.descricao')[0].innerText = 'O hacker Hathaway (Chris Hemsworth) é um gênio da codificação que foi condenado a 15 anos de prisão. Para sair da cadeia antes da conclusão da pena, ele aceita identificar e capturar um hacker que tem feito danos virtuais terríveis com consequências catastróficas no mundo real.';
                $('.conteudo')[0].style.background = "linear-gradient(60deg, rgba(125, 126, 125, 0.152), rgb(3, 4, 4)), url('../images/hacker.jpg') no-repeat";
                break;
            }                                           
    }

    $('.conteudo')[0].style.backgroundSize = 'cover'; 
    $('.conteudo')[0].style.backgroundPosition = 'center';  
}