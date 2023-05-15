/*Menu Show*/
const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)
	if(toggle && nav){
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show')
		})
	}
}
showMenu('nav-toggle', 'nav-menu');

/*Active and Remove menu*/
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
	navLink.forEach(n => n.classList.remove('active'))
	this.classList.add('active');
	
	//Remove menu for Mobile
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*Scroll Reveal Animation*/
const sr = ScrollReveal({
origin: 'top', distance: '80px', duration: 2000, reset: true	
})

/*Scroll Home*/
sr.reveal('.home_title',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.home_img',{delay: 400});
sr.reveal('.home_social_icon',{interval: 200});

/*Scroll About*/
sr.reveal('.about_img',{});
sr.reveal('.about_subtitle',{delay: 200});
sr.reveal('.about_text',{delay: 400});

/*Scroll skills*/
sr.reveal('.skills_subtitle',{});
sr.reveal('.skills_text',{delay: 200});
sr.reveal('.skills_data',{interval: 200});

/*Scroll Work*/
sr.reveal('.work_img',{interval: 200});

/*Scroll Contact*/
sr.reveal('.contact_inputs',{interval: 200});


