let video = document.querySelector('video');
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let tiempoElement = document.getElementById("tiempo");
let contador = 0;

video.addEventListener('loadedmetadata', () => {
    tiempoElement.innerHTML = `Duración del video: ${formatTime(video.duration)}`;
});

video.addEventListener('timeupdate', () => {
    tiempoElement.innerHTML = `Duración del video: ${formatTime(video.duration)} - Tiempo actual: ${formatTime(video.currentTime)}`;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

playButton.addEventListener('click', () =>{
    video.play()
})

pauseButton.addEventListener('click', ()=>{
    video.pause()
})