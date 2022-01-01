var tag = document.createElement("script");
if (location.protocol == "file:") {
  tag.src = "https://www.youtube.com/player_api";
} else {
  tag.src = location.protocol + "//www.youtube.com/player_api";
}
console.log(tag.src);
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player("player", {
    playerVars: { autoplay: 1, controls: 0, autohide: 1, wmode: "opaque" },
    videoId: "5qap5aO4i9A",
    height: "100%",
    width: "100%",
  });
}

const volumeControlInput = document.getElementById("volume-control");
volumeControlInput.addEventListener("change", function (e) {
  toggleVolume(e.target.value);
});

function changeVolumeIcon(muted) {
  if (muted) {
    document.getElementById("muteVideo--up").style.display = "none";
    document.getElementById("muteVideo--off").style.display = "block";
  } else {
    document.getElementById("muteVideo--off").style.display = "none";
    document.getElementById("muteVideo--up").style.display = "block";
  }
}

let prevVolume = null;

function toggleVolume(volume) {
  if (volume) {
    prevVolume = player.getVolume();
    player.setVolume(volume);
  }

  if (player.isMuted()) {
    if (volume !== "0") {
      if (
        typeof volume === "undefined" &&
        prevVolume &&
        player.getVolume() === 0
      ) {
        player.setVolume(prevVolume);
        volumeControlInput.value = prevVolume;
      }
      player.unMute();
      changeVolumeIcon(false);
    }
  } else {
    if (!volume || volume === "0") {
      player.mute();
      changeVolumeIcon(true);
    }
  }
}

document.getElementById("muteVideo").addEventListener("click", function () {
  toggleVolume();
});

window.addEventListener(
  "keypress",
  function (e) {
    if (e.key !== 77) {
      toggleVolume();
    }
  },
  false
);
