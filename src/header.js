import headerData from './config/header.json';
import populateContainer from './populate-container';

const headerClassList = 'bg-zinc-400 h-72 flex flex-row';

const createHeaderParent = () => {
  const headerParent = document.createElement('header');
  headerParent.classList = headerClassList;
  return headerParent;
};

export default function createHeader(content) {
  const headerParent = createHeaderParent();
  populateContainer(headerParent, headerData);
  content.appendChild(headerParent);
}
