const navbarClassList = 'bg-zinc-900 flex flex-row h-12 items-center px-12 gap-x-3';
const navLinks = ['Brimstone', 'Menu', 'Contact Us'];
const navlinkClassList = 'text-slate-50 text-2xl h-min font-bold';

const createNavbarParent = () => {
  const navbarParent = document.createElement('nav');
  navbarParent.classList = navbarClassList;
  return navbarParent;
};

const createNavbarButtons = (navbarParent) => {
  navLinks.forEach((element) => {
    const link = document.createElement('a');
    link.textContent = element;
    link.classList = navlinkClassList;
    navbarParent.appendChild(link);
  });
};

export default function createNavbar(content) {
  const navbarParent = createNavbarParent();
  createNavbarButtons(navbarParent);
  navbarParent.children[1].classList += ' ml-auto'; // Aligns right
  content.appendChild(navbarParent);
}
