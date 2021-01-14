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
const searchBox = document.querySelector(".search_box")
const searchInput = document.querySelector("input")

searchBtn.onclick = () =>{
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
}
cancelBtn.onclick = () =>{
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
}
