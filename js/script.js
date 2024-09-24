
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
  
    // Obtém os valores dos campos
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Verifica se os campos estão preenchidos
    if (username && password) {
      // Se ambos estiverem preenchidos, redireciona para outra página
      alert("Login realizado com sucesso!");
      window.location.href = "dashboard.html"; // Redireciona para a página "dashboard.html"
    } else {
      // Se algum dos campos estiver vazio, mostra uma mensagem de erro
      alert("Por favor, preencha ambos os campos.");
    }
  });
  