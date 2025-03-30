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
  