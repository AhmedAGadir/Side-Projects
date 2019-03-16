// ================ HEADER TYPING TEXT =====

let role = document.querySelector('header h1 .role');
let pipebar = document.querySelector('header h1 .pipebar')

let careers = {
	roleArr: ['Front-End Developer.', 'User Interface Designer.', 'Full-Stack Engineer.'],
	roleInd: 0,
	letterInd: 0,
	roleText: '',
	counter: 0,


	updateRoleText() {
		if (this.letterInd == this.roleArr[this.roleInd].length) {
			if (this.counter < 40) {
				if (this.counter < 5 || this.counter > 9 && this.counter < 15 || this.counter > 19 && this.counter < 25 || this.counter > 29) {
					pipebar.style.borderRightColor = 'white';
				} else {
					pipebar.style.borderRightColor = 'transparent';
				}
				this.counter++
				return;
			}
			this.counter = 0;
			this.roleText = '';
			this.roleInd += 1;
			this.letterInd = 0;
		}
		if (this.roleInd > this.roleArr.length - 1) {
			this.roleInd = 0;
		}
		this.roleText += this.roleArr[this.roleInd][this.letterInd];
		this.letterInd += 1;
	}
}

let inputFill = setInterval(() => {
	careers.updateRoleText()
	role.textContent = careers.roleText;
}, 90)








// ================ COGS HOVER EFFECT =====

// let cogsWrap = document.querySelector('.cogs-wrap')
// cogsWrap.addEventListener('mouseover', () => Array.from(cogsWrap.children).forEach(cog => cog.style.animationDuration = '1s'));
// cogsWrap.addEventListener('mouseout', () => Array.from(cogsWrap.children).forEach(cog => cog.style.animationDuration = '4s'))






// ================ CHEVRON SMOOTH SCROLLING =====

document.querySelector('header i.fa-chevron-down').addEventListener('click', () => smoothScroll(document.querySelector('.intro')))

window.smoothScroll = function (target) {
	var scrollContainer = target;
	do { //find scroll container
		scrollContainer = scrollContainer.parentNode;
		if (!scrollContainer) return;
		scrollContainer.scrollTop += 1;
	} while (scrollContainer.scrollTop == 0);

	var targetY = 0;
	do { //find the top of target relatively to the container
		if (target == scrollContainer) break;
		targetY += target.offsetTop;
	} while (target = target.offsetParent);

	scroll = function (c, a, b, i) {
		i++; if (i > 30) return;
		c.scrollTop = a + (b - a) / 30 * i;
		setTimeout(function () { scroll(c, a, b, i); }, 20);
	}
	// start scrolling
	scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}





// ================ PAGE THEME =====

const themes = ['dodgerblue', '#ff4359'];
let selectedTheme;

if (localStorage.getItem('theme')) {
	let previousTheme = JSON.parse(localStorage.getItem('theme'));
	selectedTheme = themes.filter(theme => theme !== previousTheme)[0];
} else {
	selectedTheme = themes[Math.floor(Math.random() * themes.length)];
}

localStorage.setItem('theme', JSON.stringify(selectedTheme))

// ==================
document.querySelector('header').style.backgroundColor = selectedTheme;
// ==================
// let headerButton = document.querySelector('header .button-wrap');
// headerButton.style.backgroundColor = selectedTheme;
// headerButton.addEventListener('mouseover', e => {
// 	headerButton.style.borderColor = selectedTheme;
// 	headerButton.style.color = selectedTheme;
// 	headerButton.style.backgroundColor = '#fff';
// });
// headerButton.addEventListener('mouseout', () => {
// 	headerButton.style.borderColor = '#fff';
// 	headerButton.style.color = '#fff';
// 	headerButton.style.backgroundColor = selectedTheme;
// });
// ==================
document.querySelector('.intro').style.backgroundColor = selectedTheme;
// document.querySelector('.intro').style.backgroundColor = selectedTheme === 'dodgerblue' ? '#fff' : '#f4f4f4';


// document.querySelectorAll('.skills ul').forEach(ul => ul.style.backgroundColor = selectedTheme);
// document.querySelector('.inspiration blockquote p').style.borderColor = selectedTheme;
document.querySelector('footer').style.backgroundColor = selectedTheme;




// ================ CONTACT PAGE =====

headerButton.addEventListener('click', () => window.location = 'contact-page/contact.html')
document.querySelector('footer .invitation .button-wrap').addEventListener('click', () => window.location = 'contact-page/contact.html');


// ================ CODEPEN AND JSFIDDLE BUTTONS =====

// document.querySelector('.web-design .button-wrap').addEventListener('click', () => window.open('https://codepen.io/AhmedAGadir/pens/popular/', '_blank'));
// document.querySelector('.algo-data .button-wrap').addEventListener('click', () => window.open('https://jsfiddle.net/user/ahmedgadir/fiddles/', '_blank'));
