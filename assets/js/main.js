document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });

        document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
