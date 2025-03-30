document.querySelectorAll('.rubrica .eseu').forEach(function(titlu) {
    titlu.addEventListener('click', function() {
        this.classList.toggle('active'); // Togglează clasa 'active' pe fiecare titlu
    });
});

        window.onscroll = function() {
            var menu = document.getElementById("menu");
            if (window.pageYOffset > 100) {  // Când scroll-ul ajunge la 100px
                menu.classList.add("sticky");
            } else {
                menu.classList.remove("sticky");
            }
        };
        window.addEventListener("scroll", function() {
        var sections = document.querySelectorAll("section");
        var scrollPosition = window.scrollY + window.innerHeight;
        
        sections.forEach(function(section) {
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                document.body.style.backgroundColor = getComputedStyle(section).backgroundColor;
            }
        });
    });

    window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scrollTop');
    if (document.documentElement.scrollTop > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

document.getElementById('scrollTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// --------------------------------------------------------------------------------

document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert('Copierea textului este dezactivată pe acest site!');
  });

  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();  // Previne meniul de clic dreapta
  });

  





  // Afișează overlay-ul pentru capturi de ecran (exemplu simplu pentru Windows)
        let isScreenshotAttempt = false;

        document.addEventListener('keydown', function(event) {
            // Detectează combinațiile de taste pentru capturi de ecran
            if ((event.key === 'PrintScreen') || (event.ctrlKey && event.key === 'p')) {
                isScreenshotAttempt = true;
                toggleOverlay(isScreenshotAttempt);
            }
        });

        // Functie pentru a afisa sau ascunde overlay-ul
        function toggleOverlay(show) {
            const overlay = document.querySelector('.overlay');
            if (show) {
                overlay.style.display = 'block';
                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 3000); // Ascunde overlay-ul dupa 3 secunde
            } else {
                overlay.style.display = 'none';
            }
        }
//-------------------------------------
const toggleButton = document.querySelector('.dark-mode-toggle');

// Verifică dacă Dark Mode a fost salvat în localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '🌞'; // Dacă Dark Mode este activat, setează soarele
}

// Schimbă între modurile Dark și Light la click pe buton
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Salvează starea Dark Mode în localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        toggleButton.textContent = '🌞'; // Când e Dark Mode, butonul arată soarele
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        toggleButton.textContent = '🌙'; // Când e Light Mode, butonul arată luna
    }

    // Muta utilizatorul în partea de sus a paginii
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Afișează butonul de comutare doar când utilizatorul derulează pagina
window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 300) {
        toggleButton.style.display = 'block'; // Arată butonul când s-a derulat destul de mult
    } else {
        toggleButton.style.display = 'none'; // Ascunde-l când e în partea de sus
    }
});




window.addEventListener('load', () => {
    // Așteaptă 2 secunde înainte de a ascunde animația
    setTimeout(() => {
        document.querySelector('.loading-overlay').style.display = 'none';
    }, 1000); // Ajustează timpul aici (în milisecunde)
});




window.onscroll = function() {
    let scrollProgress = document.getElementById('scroll-progress');
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPosition = window.pageYOffset;
    let progress = (scrollPosition / scrollHeight) * 100;
    
    // Actualizează lățimea barei de progres
    scrollProgress.style.width = progress + '%';
};
