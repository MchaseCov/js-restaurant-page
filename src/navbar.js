import navbarData from './config/navbar.json';
import populateContainer from './populate-container';

const navbarClassList = 'bg-zinc-900 flex flex-row h-12 items-center px-12 gap-x-3';

const createNavbarParent = () => {
  const navbar = document.createElement('nav');
  navbar.classList = navbarClassList;
  return navbar;
};

export default function createNavbar(content) {
  const navbarParent = createNavbarParent();
  populateContainer(navbarParent, navbarData);
  content.appendChild(navbarParent);
}
