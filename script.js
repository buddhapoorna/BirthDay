document.addEventListener('DOMContentLoaded', function () {
    const videoPlayer = document.getElementById('videoPlayer');
    const videos = ['video1.mp4', 'video2.mp4']; // Add more video URLs as needed
    let currentVideoIndex = 0;

    // Function to load and play the next video
    function playNextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        videoPlayer.src = videos[currentVideoIndex];
        videoPlayer.play();
    }

    // Event listener to trigger next video when the current video ends
    videoPlayer.addEventListener('ended', playNextVideo);

    // Preload the next video
    const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
    const nextVideo = new Video();
    nextVideo.src = videos[nextVideoIndex];

    // Start playing the first video
    videoPlayer.play();

});

const para = document.getElementById("para");

function myMessage() {
  para.innerHTML = "I just appeared";
  console.log("message appeared");
}
setTimeout(myMessage, 3000);
function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 5000)
}
loaderAnimation()