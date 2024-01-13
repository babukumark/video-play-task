



// function playfunction() {
//   if (video.paused) {
//     video.play();
//     document.querySelector('.play-stop-btn').innerText = '';
//   } else {
//     video.pause();
//     document.querySelector('.play-stop-btn').innerText = 'Play';
//   }

// }
 
var btn=document.querySelector(".toggle");
// var togglebox= document.querySelector(".toggle-box")
var video = document.getElementById('video');
btn.addEventListener("click" ,function(){
    // console.log(video.paused)
    
    if(video.paused){
        video.play();
        btn.classList.add("layer-left");
        btn.classList.remove("layer-right");
    }
    else {
            video.pause();
            btn.classList.remove("layer-left");
            btn.classList.add("layer-right");
}
});



