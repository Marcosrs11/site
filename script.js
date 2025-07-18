// Inicializa o AOS
AOS.init({
  disable: false,
  mirror: false,
  once: true
});

window.addEventListener('load', () => {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
  // Pequeno delay para garantir que a página já carregou o conteúdo
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 50);
});
