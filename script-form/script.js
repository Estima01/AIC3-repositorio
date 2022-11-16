var nome_player1 = document.getElementById("nome_jogador_1").value;
var nome_player2 = document.getElementById("nome_jogador_2").value;
var pont_player1 = parseInt(document.getElementById("pont_jogador_1").value);
var pont_player2 = parseInt(document.getElementById("pont_jogador_2").value);
nome_player1 = localStorage.getItem("nome_jogador_1");
nome_player2 = localStorage.getItem("nome_jogador_2");
function pegadados(){
  console.log(pont_player2)
  console.log(pont_player1);
  const x = {
    nome_player1: nome_player1,
    nome_player2: nome_player2,
    pont_player1: pont_player1,
    pont_player2: pont_player2
    }
  console.log(x)
};
localStorage.setItem("nome_jogador_1", nome_player1);
localStorage.setItem("nome_jogador_2", nome_player2);
localStorage.setItem("pont_jogador_1", pont_player1);
localStorage.setItem("pont_jogador_2", pont_player2);
pegadados();





axios.post('http://localhost:3333/players', {
    nome_player1: nome_player1,
    nome_player2: nome_player2,
    pont_player1: pont_player1,
    pont_player2: pont_player2
    })
    .then(function (response) {
        console.log(response);
    }
    )
    .catch(function (error) {
        console.log(error);
    }
    );
    