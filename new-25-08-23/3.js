const btn = document.querySelector('#btn');

function alertFunction() {
    alert("YAY YOU DID IT!");
}

// btn.onclick = alertFunction;

btn.addEventListener('click', function(e){
    e.target.style.background = "blue";
});