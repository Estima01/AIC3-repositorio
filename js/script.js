function logar(){
    var login = document.getElementById("email_login").value;
    var senha = document.getElementById("senha_login").value;
    if(login == "" || senha == ""){
        alert("Preencha todos os campos!");
    }   else{
        var dados = localStorage.getItem("dados");
        if(dados == null){
            dados = [];
        }else{
            dados = JSON.parse(dados);
        }
        for(var i = 0; i < dados.length; i++){
            if(login == dados[i].nome && senha == dados[i].senha){
                alert("Login realizado com sucesso!");
                location.href = "index.html";
            }
            else{
                alert("Login ou senha incorretos!");
            }
        }
    };

    
};

function cadastrar(){
   var nome = document.getElementById("nome_cad").value;
   var email = document.getElementById("email_cad").value;
   var senha = document.getElementById("senha_cad").value;
   var cpf = document.getElementById("cpf_cad").value;
   var telefone = document.getElementById("telefone_cad").value;

   var dados = localStorage.getItem("dados");
    if(dados == null){
        dados = [];
    }else{
        dados = JSON.parse(dados);
    }
    dados.push({
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
        telefone: telefone
    });
    localStorage.setItem("dados", JSON.stringify(dados));
    alert("Usuário cadastrado com sucesso!");
    location.href = "login.html";
}