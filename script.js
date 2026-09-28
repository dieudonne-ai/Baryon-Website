document.getElementById('year').textContent = '© ' + new Date().getFullYear() + ' Baryon';

// intro splash
window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    if (splash) splash.classList.add('hide');
  }, 1900);
});

// cursor glow — desktop / fine pointer only
const glow = document.getElementById('cursorGlow');
if (glow) {
  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', (e) => {
      glow.style.transform = `translate(${e.clientX - 260}px, ${e.clientY - 260}px)`;
    });
  } else {
    glow.style.display = 'none';
  }
}

// mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });
  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => document.body.classList.remove('menu-open'));
  });
}

// scroll reveal (sections + industry/why cells individually for their icon draw-in)
const revealEls = document.querySelectorAll('.reveal, .ind-cell, .principle-block');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// contact form — opens the visitor's email app with a pre-filled message
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(contactForm);
    const subject = encodeURIComponent('Baryon inquiry — ' + (f.get('org') || f.get('name')));
    const body = encodeURIComponent(
      'Name: ' + f.get('name') + '\nOrganization: ' + (f.get('org') || '-') + '\nEmail: ' + f.get('email') + '\n\n' + f.get('message')
    );
    window.location.href = 'mailto:hello@baryon.africa?subject=' + subject + '&body=' + body;
  });
}
