import UI from "https://gavinmorrow.github.io/EasyJS/1/ui/main.js";

const {colorScheme, changeFavicon} = UI;

let lastScrollEvent = Date.now();
const handleScroll = () => {
	if (Date.now() >= lastScrollEvent + 0) {
		
	}
};
handleScroll();
document.body.addEventListener("scroll", handleScroll);