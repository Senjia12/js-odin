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

let add_h1 = document.createElement('h1');
add_h1.textContent = "I'm in a div.";
blackpink_div.appendChild(add_h1);

let add_p = document.createElement('p');
add_p.textContent = "ME TOO!";
blackpink_div.appendChild(add_p);

html_body.appendChild(blackpink_div);


//Event listeners, 3 methods

function alertFunction() {
    alert("Hello World 1")
}

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hellow World 2")

const better_btn = document.querySelector('#better_btn')

btn.addEventListener("click", e => console.log(e, e.target)); //callback function here e is an object which refers to the event

better_btn.addEventListener("click", () => {
    alert("Hello World 3");
});

better_btn.addEventListener("click", e => e.target.style.background = "blue");

console.log("reached the end, everything should be working");