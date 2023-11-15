window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-container');

  loader.classList.remove('active');
  document.body.classList.remove('loading');

  setTimeout(() => {
    loader.style.display = 'none';
  }, 600);
});
