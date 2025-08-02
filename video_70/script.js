let random = Math.random()
console.log(random)
// document.querySelectorAll(".boxes").forEach(e => {
//     e.style.backgroundColor = "red";
// })
// document.querySelector(".boxes").style.backgroundColor = "yellow"
// document.querySelector(".boxes").style.backgroundColor = "pink"


if (random > 0.8) {
    document.body.firstElementChild.children[0].style.backgroundColor = "blue"
    document.body.firstElementChild.children[1].style.backgroundColor = "red"
    document.body.firstElementChild.children[2].style.backgroundColor = "orange"
    document.body.firstElementChild.children[3].style.backgroundColor = "pink"
    document.body.firstElementChild.children[4].style.backgroundColor = "yellow"    
    document.body.firstElementChild.children[0].style.color = "red"
    document.body.firstElementChild.children[1].style.color = "green"
    document.body.firstElementChild.children[2].style.color = "blue"
    document.body.firstElementChild.children[3].style.color = "yellow"
    document.body.firstElementChild.children[4].style.color = "black"
}
else if(random >0.6 && random < 0.8){
    document.body.firstElementChild.children[0].style.backgroundColor = "green"
    document.body.firstElementChild.children[1].style.backgroundColor = "gray"
    document.body.firstElementChild.children[2].style.backgroundColor = "maroon"
    document.body.firstElementChild.children[3].style.backgroundColor = "blue"
    document.body.firstElementChild.children[4].style.backgroundColor = "red"
    document.body.firstElementChild.children[0].style.color = "maroon"
    document.body.firstElementChild.children[1].style.color = "blue"
    document.body.firstElementChild.children[2].style.color = "green"
    document.body.firstElementChild.children[3].style.color = "red"
    document.body.firstElementChild.children[4].style.color = "yellow"
}
else if(random >0.4 && random < 0.6){
    document.body.firstElementChild.children[0].style.backgroundColor = "yellow"
    document.body.firstElementChild.children[1].style.backgroundColor = "blue"
    document.body.firstElementChild.children[2].style.backgroundColor = "pink"
    document.body.firstElementChild.children[3].style.backgroundColor = "orange"
    document.body.firstElementChild.children[4].style.backgroundColor = "maroon"
    document.body.firstElementChild.children[0].style.color = "maroon"
    document.body.firstElementChild.children[1].style.color = "black"
    document.body.firstElementChild.children[2].style.color = "green"
    document.body.firstElementChild.children[3].style.color = "red"
    document.body.firstElementChild.children[4].style.color = "yellow"
}
else if(random >0.2 && random < 0.4){
    document.body.firstElementChild.children[0].style.backgroundColor = "red"
    document.body.firstElementChild.children[1].style.backgroundColor = "orange"
    document.body.firstElementChild.children[2].style.backgroundColor = "yellow"
    document.body.firstElementChild.children[3].style.backgroundColor = "blue"
    document.body.firstElementChild.children[4].style.backgroundColor = "pink"
    document.body.firstElementChild.children[0].style.color = "yellow"
    document.body.firstElementChild.children[1].style.color = "blue"
    document.body.firstElementChild.children[2].style.color = "pink"
    document.body.firstElementChild.children[3].style.color = "red"
    document.body.firstElementChild.children[4].style.color = "green"
}
else{
    document.body.firstElementChild.children[0].style.backgroundColor = "orange"
    document.body.firstElementChild.children[1].style.backgroundColor = "pink"
    document.body.firstElementChild.children[2].style.backgroundColor = "blue"
    document.body.firstElementChild.children[3].style.backgroundColor = "red"
    document.body.firstElementChild.children[4].style.backgroundColor = "green"
    document.body.firstElementChild.children[0].style.color = "maroon"
    document.body.firstElementChild.children[1].style.color = "blue"
    document.body.firstElementChild.children[2].style.color = "green"
    document.body.firstElementChild.children[3].style.color = "black"
    document.body.firstElementChild.children[4].style.color = "yellow"
}