class HelloWorld extends HTMLElement {
    connectedCallback() {
        console.log("Hello World!");
    }
}

customElements.define("hello-world", HelloWorld);

const canvas = document.querySelector("#example-canvas");
const context = canvas?.getContext("2d");

if (context) {
    context.fillRect(20, 20, 100, 60);
}