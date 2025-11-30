
  const toggleBtn = document.getElementById('menu-toggle');
  const menuNav = document.querySelector('.menu-nav');
  const bars = toggleBtn.querySelector('.bars');
  const closeIcon = toggleBtn.querySelector('.close');

  toggleBtn.addEventListener('click', () => {
    const isOpen = menuNav.classList.toggle('open');
    if (isOpen) {
      bars.style.display = 'none';
      closeIcon.style.display = 'inline-flex';
    } else {
      bars.style.display = 'inline-flex';
      closeIcon.style.display = 'none';
    }
  });

