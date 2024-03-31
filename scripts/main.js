var readmoremusicbtn = document.querySelector("#read-more-music-btn")
var musicdots = document.querySelectorAll(".music-dots")
var readmoremusic = document.querySelector(".read-more-music")

readmoremusicbtn.onclick = function() {
    if(readmoremusic.style.display === "block"){
        readmoremusic.style.display = "none"
        for(var i = 0; i<3; i++){
            musicdots[i].style.display = "block"
        }
        readmoremusicbtn.textContent = "Read more"
        window.scrollTo(0,1100)
    }
    else{
        readmoremusic.style.display = "block"
        for(var i = 0; i<3; i++){
            musicdots[i].style.display = "none"
        }
        readmoremusicbtn.textContent = "Read less"
    }
}