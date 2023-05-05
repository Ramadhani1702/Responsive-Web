// dark mode button
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

// hamburger button
let menuIcn = document.querySelector('#menu-icon');
let menu = document.querySelector('nav .menu');

document.querySelector('#menu-icon').addEventListener('click', function() {
	menuIcn.classList.toggle('bx-x');
	menu.classList.toggle('open');
  });
  