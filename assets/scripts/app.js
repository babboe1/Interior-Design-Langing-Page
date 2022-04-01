const BACKDROP = document.getElementById('backdrop');
const MENU_BTN = document.querySelector('.MenuBtn');
const CLOSE_BTN = document.querySelector('.CloseBtn');

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
const menuBtnHandler = () => {
   backDropHandler();
   CLOSE_BTN.classList.remove('hidden');
};
const closeBtnHandler = () => {
   backDropHandler();
   CLOSE_BTN.classList.add('hidden');
};


MENU_BTN.addEventListener('click', menuBtnHandler);
CLOSE_BTN.addEventListener('click', closeBtnHandler);
BACKDROP.addEventListener('click', backDropHandler);