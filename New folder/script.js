// Save this file as script.js
function loadVideo() {
  const url = document.getElementById("videoURL").value;
  const video = document.getElementById("videoPlayer");
  const link = document.getElementById("downloadLink");

  if (!url) {
    alert("Please enter a video URL");
    return;
  }

  video.src = url;
  link.href = url;
  document.getElementById("videoContainer").classList.remove("hidden");
}
