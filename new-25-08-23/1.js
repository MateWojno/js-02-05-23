const container = document.querySelector("#container");

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey I am red!";

const head3 = document.createElement('h3');
head3.style.color = 'blue';
head3.textContent = "I am blue h3!";

const div2 = document.createElement('div');
div2.style.border = '1px solid black';
div2.style.backgroundColor = 'pink';

const head1 = document.createElement('h1');
head1.textContent = "I am in div!";

const para2 = document.createElement('p');
para2.textContent = "ME TOO!";


container.appendChild(content);
container.appendChild(para);
container.appendChild(head3);
container.appendChild(div2);
div2.appendChild(head1);
div2.appendChild(para2);