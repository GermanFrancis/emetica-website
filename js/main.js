function setupPlayPause(audioId, buttonId, iconId) {
  var audio = document.getElementById(audioId);
  var playPauseButton = document.getElementById(buttonId);
  var playPauseIcon = document.getElementById(iconId);

  playPauseButton.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      playPauseIcon.className = 'fa-solid fa-pause';
    } else {
      audio.pause();
      audio.currentTime = 0;
      playPauseIcon.className = 'fa-solid fa-play';
    }
  });
}

// Luego puedes llamar a esta función para cada canción
setupPlayPause('audio1', 'play-pause-button1', 'play-pause-icon1');
setupPlayPause('audio2', 'play-pause-button2', 'play-pause-icon2');
setupPlayPause('audio3', 'play-pause-button3', 'play-pause-icon3');
setupPlayPause('audio4', 'play-pause-button4', 'play-pause-icon4');