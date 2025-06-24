console.log(document)

document.body.style.background = "green";

let text = document.getElementById('text');

console.log(text.innerText);

text.textContent = 'This is a new era'
text.style.color = 'white';
text.style.fontSize = '4rem';

const container = document.createElement('div');

container.innerHTML = `<h1>We have just been added</h1>`

document.body.appendChild(container);