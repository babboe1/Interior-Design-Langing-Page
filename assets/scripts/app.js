const BACKDROP = document.getElementById('backdrop');
const MENU_BTN = document.querySelector('.MenuBtn');
const CLOSE_BTN = document.querySelector('.CloseBtn');
const SUBMIT_BTN = document.querySelector('.submit');
const MENU_OPTION = document.querySelector('.Modal');
const USER_INPUT = document.getElementById('email_id');
const HEADER_4 = document.querySelector('.header_4.h4');
const ERROR_TEXT = document.querySelector('.ErrorText');
const OK_BTN = document.getElementById('ok-btn');
const VECTOR_PLUS = document.querySelectorAll('.vectorPlus');
const VECTOR_MINUS = document.querySelectorAll('.vectorMinus');
const GRATITUDE = document.getElementById('gratitude').parentElement;
const TEXT_CONTENT = document.querySelectorAll('.Paragraph_ul');

const BackDrop = () => {
	BACKDROP.classList.toggle('visible');
};
const StopScroll = () => {
	document.body.classList.toggle('StopScroll');
};

const modalDrop = () => {
   BackDrop();
   StopScroll();
};

const backDropHandler = () => {
   modalDrop();
   CLOSE_BTN.classList.add('hidden');
   if (MENU_OPTION.classList.contains('visible')) {
      MenuOptionOut();
   } else if (GRATITUDE.classList.contains('Gratitude')) {
      okHandler();
   }
};
const MenuOptionIn = () => {
	MENU_OPTION.classList.add('visible');
	MENU_OPTION.classList.remove('invisible');
};
const menuBtnHandler = () => {
   modalDrop();
	MenuOptionIn();
	CLOSE_BTN.classList.remove('hidden');
};
const closeBtnHandler = () => {
	modalDrop();
	MenuOptionOut();
	CLOSE_BTN.classList.add('hidden');
};
const MenuOptionOut = () => {
	MENU_OPTION.classList.add('invisible');
	MENU_OPTION.classList.remove('visible');
};
const clearInput = () => {
	USER_INPUT.value = '';
	ERROR_TEXT.classList.remove('visible');
};

const emailValidationHandler = () => {
	let getUserInput = USER_INPUT.value;
	const filter = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
	if (!filter.test(getUserInput)) {
		ERROR_TEXT.classList.add('visible');
		return;
	}
	clearInput();
};

MENU_BTN.addEventListener('click', menuBtnHandler);
CLOSE_BTN.addEventListener('click', closeBtnHandler);
BACKDROP.addEventListener('click', backDropHandler);
SUBMIT_BTN.addEventListener('click', emailValidationHandler);
