function play() {
  let playBtn = document.getElementById("playBtn")
  let mainImage = document.getElementById("mainImage")
  let mainVideo = document.getElementById("mainVideo")

  if (mainVideo.paused) {
    playBtn.src = "assets/images/close.png"
    mainImage.style.display = "none"
    mainVideo.style.display = "block"
    mainVideo.play()
    didPlay = true
  } else {
    mainVideo.pause()
    playBtn.src = "assets/images/playBtn.png"
    mainImage.style.display = "block"
    mainVideo.style.display = "none"
    didPlay = false
  }
}
