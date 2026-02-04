let grandparent = document.querySelector(".gp")
let parent = document.querySelector(".p")
let child = document.querySelector(".c")
let dom = document.querySelector(".log")

grandparent.addEventListener("click",function(e){
    console.log('I am GrandParent')
    dom.textContent += 'I am GrandParent -- Capturing\n';
    setTimeout(() => {
        dom.textContent += 'I am GrandParent -- Bubbling\n';
    }, 0);
},false)
parent.addEventListener("click",function(e){
    console.log("I am Parent")
    dom.textContent += 'I am Parent -- Capturing\n';
    setTimeout(() => {
        dom.textContent += 'I am Parent -- Bubbling\n';
    }, 0);
},false)
child.addEventListener("click",function(e){
    console.log("I am Child")
    dom.textContent += 'I am child -- Capturing\n';
    setTimeout(() => {
        dom.textContent += 'I am Child -- Bubbling\n';
    }, 0);
},true)

document.querySelector(".btn").addEventListener("click",function(){
    dom.textContent = '';
})
