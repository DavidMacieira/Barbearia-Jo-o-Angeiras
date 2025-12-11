// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
  
  // Menu mobile
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
    
    // Fechar menu ao clicar num link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }
  
  // Efeito de scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Efeito de navbar ao fazer scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
      if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
      } else {
        nav.style.backgroundColor = 'var(--secondary-black)';
        nav.style.backdropFilter = 'none';
      }
    }
  });
  
  // Animação dos cards de serviços ao rolar a página
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);
  
  // Observar cards de serviços
  document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
  });
  
  // Atualizar ano atual no footer
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  
  // Adicionar classe de animação aos cards de serviços
  const style = document.createElement('style');
  style.textContent = `
    .service-card {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .service-card.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .service-card:nth-child(2).animate {
      transition-delay: 0.2s;
    }
    
    .service-card:nth-child(3).animate {
      transition-delay: 0.4s;
    }
  `;
  document.head.appendChild(style);
  
  // Efeito de digitação no título (opcional)
  const heroTitle = document.querySelector('.hero-content h1');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        heroTitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    // Iniciar efeito de digitação após 0.5 segundos
    setTimeout(typeWriter, 500);
  }
});