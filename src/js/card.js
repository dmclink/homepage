class Card extends HTMLElement {
	// constructor() {
	// 	super();
	// 	const template = document.getElementById('project-card-template');
	// 	const content = template.content.cloneNode(true);
	// 	const shadowRoot = this.attachShadow({ mode: 'open' });
	//
	// 	shadowRoot.appendChild(content);
	// }
	constructor() {
		super();
		this.classList.add('card');

		let img = this.querySelector('img');
		if (!img) {
			img = document.createElement('img');
		}
		this.appendChild(img);

		const cardBody = document.createElement('div');
		cardBody.classList.add('card__body');
		this.appendChild(cardBody);

		const titleContainer = document.createElement('div');
		titleContainer.classList.add('card__title-container');
		cardBody.appendChild(titleContainer);

		let title = this.querySelector('h3');
		if (!title) {
			title = document.createElement('h3');
			title.textContent = 'PLACEHOLDER TITLE';
		}
		title.classList.add('card__title');
		titleContainer.appendChild(title);

		const linkContainer = document.createElement('div');
		linkContainer.classList.add('card__link-container');
		titleContainer.appendChild(linkContainer);

		const githubURL = this.getAttribute('github-url');
		if (githubURL) {
			const githubLink = document.createElement('a');
			githubLink.classList.add('card__link');
			githubLink.href = githubURL;
			githubLink.target = '_blank';
			linkContainer.appendChild(githubLink);

			const githubIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			githubIcon.setAttribute('viewBox', '0 0 128 128');

			githubIcon.innerHTML =
				'<g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>';
			githubIcon.classList.add('card__link-icon');
			githubLink.appendChild(githubIcon);
		}

		const demoURL = this.getAttribute('demo-url');
		if (demoURL) {
			const demoLink = document.createElement('a');
			demoLink.classList.add('card__link');
			demoLink.href = demoURL;
			demoLink.target = '_blank';
			linkContainer.appendChild(demoLink);

			const demoIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			demoIcon.setAttribute('viewBox', '0 0 24 24');
			demoIcon.setAttribute('fill', 'fill');
			demoIcon.innerHTML =
				'<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 20.75H6C5.27065 20.75 4.57118 20.4603 4.05546 19.9445C3.53973 19.4288 3.25 18.7293 3.25 18V6C3.25 5.27065 3.53973 4.57118 4.05546 4.05546C4.57118 3.53973 5.27065 3.25 6 3.25H12C12.1989 3.25 12.3897 3.32902 12.5303 3.46967C12.671 3.61032 12.75 3.80109 12.75 4C12.75 4.19891 12.671 4.38968 12.5303 4.53033C12.3897 4.67098 12.1989 4.75 12 4.75H6C5.66848 4.75 5.35054 4.8817 5.11612 5.11612C4.8817 5.35054 4.75 5.66848 4.75 6V18C4.75 18.3315 4.8817 18.6495 5.11612 18.8839C5.35054 19.1183 5.66848 19.25 6 19.25H18C18.3315 19.25 18.6495 19.1183 18.8839 18.8839C19.1183 18.6495 19.25 18.3315 19.25 18V12C19.25 11.8011 19.329 11.6103 19.4697 11.4697C19.6103 11.329 19.8011 11.25 20 11.25C20.1989 11.25 20.3897 11.329 20.5303 11.4697C20.671 11.6103 20.75 11.8011 20.75 12V18C20.75 18.7293 20.4603 19.4288 19.9445 19.9445C19.4288 20.4603 18.7293 20.75 18 20.75Z" fill="#000000"></path> <path d="M20 8.75C19.8019 8.74741 19.6126 8.66756 19.4725 8.52747C19.3324 8.38737 19.2526 8.19811 19.25 8V4.75H16C15.8011 4.75 15.6103 4.67098 15.4697 4.53033C15.329 4.38968 15.25 4.19891 15.25 4C15.25 3.80109 15.329 3.61032 15.4697 3.46967C15.6103 3.32902 15.8011 3.25 16 3.25H20C20.1981 3.25259 20.3874 3.33244 20.5275 3.47253C20.6676 3.61263 20.7474 3.80189 20.75 4V8C20.7474 8.19811 20.6676 8.38737 20.5275 8.52747C20.3874 8.66756 20.1981 8.74741 20 8.75Z" fill="#000000"></path> <path d="M13.5 11.25C13.3071 11.2352 13.1276 11.1455 13 11C12.877 10.8625 12.809 10.6845 12.809 10.5C12.809 10.3155 12.877 10.1375 13 10L19.5 3.5C19.5687 3.42631 19.6515 3.36721 19.7435 3.32622C19.8355 3.28523 19.9348 3.26319 20.0355 3.26141C20.1362 3.25963 20.2362 3.27816 20.3296 3.31588C20.423 3.3536 20.5078 3.40974 20.579 3.48096C20.6503 3.55218 20.7064 3.63701 20.7441 3.7304C20.7818 3.82379 20.8004 3.92382 20.7986 4.02452C20.7968 4.12523 20.7748 4.22454 20.7338 4.31654C20.6928 4.40854 20.6337 4.49134 20.56 4.56L14 11C13.8724 11.1455 13.6929 11.2352 13.5 11.25Z" fill="#000000"></path> </g>';
			demoIcon.classList.add('card__link-icon');
			demoLink.appendChild(demoIcon);
		}

		const description = document.createElement('div');
		description.classList.add('card__description');

		const descriptionParagraphs = this.querySelectorAll('p');
		if (!descriptionParagraphs) {
			const p = document.createElement('p');
			p.innerText = 'PLACEHOLDER DESCRIPTION';
			description.appendChild(p);
		}

		Array.from(descriptionParagraphs).forEach((d) => {
			description.appendChild(d);
		});
		cardBody.appendChild(description);
	}
}

customElements.define('project-card', Card);
