const mainBody=document.getElementById('#main-body')

function desktop(){
    mainBody.classList.remove("laptop");
    mainBody.classList.remove("tab");
    mainBody.classList.add("desktop");
}

function laptop(){
    mainBody.classList.remove("desktop");
    mainBody.classList.remove("tab");
    mainBody.classList.add("laptop");
}