  // Mobile menu toggle with smooth max-height animation
    const btnMobileMenu = document.getElementById('btn-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    btnMobileMenu.addEventListener('click', () => {
      const expanded = btnMobileMenu.getAttribute('aria-expanded') === 'true';
      btnMobileMenu.setAttribute('aria-expanded', !expanded);
      if (mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px') {
        mobileMenu.style.maxHeight = '0';
      } else {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
      }
    });