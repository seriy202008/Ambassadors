export default function textCrop(selector, number) {
    let elements = document.getElementsByClassName(selector);
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let text = element.textContent;
        if (text.length > number) {
            let lastText = text.slice(0, number);
            lastText = lastText + " ...";
            element.textContent = lastText;
        }
    }
}
