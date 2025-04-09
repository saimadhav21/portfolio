// Toggle Icon Navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




// Scroll Sections
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');


window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            // Active Navbar Links
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id  + ']').classList.add('active');
            });
            // Active Sections For Animation On Scroll 
            sec.classList.add('show-animate');
        }

        // If Want To Use Animation That Repeats On Scroll Use This 
        else{
            sec.classList.remove('show-animate');
        }
    });
    // Sticky Header
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    // Remove Toggle Icon And Navbar When Click Navbar Links (Scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation Footer On Scroll 
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
    
}