var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);


const searchBtn = document.querySelector(".search_btn")
const cancelBtn = document.querySelector(".cancel_btn")
//const searchBtn = document.querySelector(".search_btn")
const searchBox = document.querySelector(".searchBox")

searchBtn.onclick = () =>{
    searchBox.classList.add("active");
}