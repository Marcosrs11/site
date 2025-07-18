// Inicialização da biblioteca AOS para animações
AOS.init({
  disable: false,     // Animações ativadas em todos os dispositivos
  mirror: false,      // Não repetir a animação ao voltar a rolagem
  once: true          // Animação ocorre apenas uma vez
});

// Força a rolagem para o topo ao recarregar a página
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};