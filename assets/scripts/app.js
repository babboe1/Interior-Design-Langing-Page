const BACKDROP = document.getElementById('backdrop');
const MENU_BTN = document.querySelector('.MenuBtn');
const CLOSE_BTN = document.querySelector('.CloseBtn');
const MENU_OPTION = document.querySelector('.Modal');

const BackDrop = () => {
   BACKDROP.classList.toggle('visible');
};
const StopScroll = () => {
	document.body.classList.toggle('StopScroll');
};

const backDropHandler = () => {
   BackDrop();
   StopScroll();
};
const MenuOptionIn = () => {
	MENU_OPTION.classList.add('visible');
   MENU_OPTION.classList.remove('invisible');
};
const menuBtnHandler = () => {
   backDropHandler();
   MenuOptionIn();
   CLOSE_BTN.classList.remove('hidden');
};
const closeBtnHandler = () => {
   backDropHandler();
   CLOSE_BTN.classList.add('hidden');
};


MENU_BTN.addEventListener('click', menuBtnHandler);
CLOSE_BTN.addEventListener('click', closeBtnHandler);
BACKDROP.addEventListener('click', backDropHandler);