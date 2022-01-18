const addElement = (parent, element) => {
  const createdElement = document.createElement(element['element-tag']);
  Object.entries(element).splice(1).forEach(
    ([key, value]) => { createdElement[key] = value; },
  );
  parent.appendChild(createdElement);
};

export default function populateContainer(parent, data) {
  Object.values(data).forEach((element) => {
    addElement(parent, element);
  });
}
