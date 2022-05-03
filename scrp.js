document.addEventListener("DOMContentLoaded",function(){
    var navb = document.querySelector(".navbar-toggler");
    document.onclick = function(e){
        if (e.target.id !== ".navbar-toggler" ){
            navb.classList.remove()
        }
    }
});