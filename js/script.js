function Enviar(){
    var nome = document.getElementById("nomeid")
    if(nome.value != ""){
        alert('Obrigado Sr(a). '+nome.value+' por se inscrever!')
    }
};
function logar(){
    var login = document.getElementById("email_login").value;
    var senha = document.getElementById("senha_login").value;
    if(login == "admin" && senha == "admin"){
        location.href = "index.html";
    }else{
        alert("Usuário ou senha incorretos!");
    };

    
};