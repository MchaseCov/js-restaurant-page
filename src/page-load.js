import createNavbar from './navbar';
import createHeader from './header';

const content = document.getElementById('content');

export default function createPage() {
  createNavbar(content);
  createHeader(content);
}
