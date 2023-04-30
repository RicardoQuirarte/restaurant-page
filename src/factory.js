export default function elementFactory(className, text, classnameTwo) {
    const div = document.createElement('div');
    div.textContent = (text);
    div.classList.add(className, classnameTwo);
    return div;
  }