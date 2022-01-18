export default function populateContainer(parent, data) {
  Object.entries(data).forEach(([key, value]) => {
    const element = document.createElement(key);
    element.textContent = value.text;
    element.classList += value.classList;
    parent.appendChild(element);
  });
}
