const html_body = document.querySelector('body');
let p_red = document.createElement('p');
p_red.textContent = "Hey I'm red!";
p_red.style.color = "red";
html_body.appendChild(p_red);

let h3_blue = document.createElement('h3');
h3_blue.textContent = "I'm a blue h3!";
h3_blue.style.color = "blue";
html_body.appendChild(h3_blue);

let blackpink_div = document.createElement('div');
blackpink_div.style.backgroundColor = "pink";
blackpink_div.style.border = "2px solid black";

let add_h1 = document.createElement('h1')
add_h1.textContent = "I'm in a div."
blackpink_div.appendChild(add_h1)

let add_p = document.createElement('p')
add_p.textContent = "ME TOO!"
blackpink_div.appendChild(add_p)

html_body.appendChild(blackpink_div)

console.log("reached the end, everything should be working")