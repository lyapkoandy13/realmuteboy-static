var tag = document.createElement('script');
if(location.protocol=="file:"){
    console.log('file protocol');
    tag.src = "https://www.youtube.com/player_api";
}else{
    tag.src = location.protocol+"//www.youtube.com/player_api";
}
console.log(tag.src);
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        playerVars: { 'autoplay': 1, 'controls': 0,'autohide':1,'wmode':'opaque'},
        videoId: 'hHW1oY26kxQ',
        height: '100%',
        width: '100%',
    });

}

function toggleSound() {
    if (player.isMuted()) {
        player.unMute()
        document.getElementById('muteVideo--off').style.display = "none";
        document.getElementById('muteVideo--up').style.display = "block";
    } else {
        player.mute()
        document.getElementById('muteVideo--up').style.display = "none";;
        document.getElementById('muteVideo--off').style.display = "block";;
    }
}

document.getElementById('muteVideo').addEventListener("click", function(){    
    toggleSound();
});

window.addEventListener('keypress', function (e) {
    if (e.keyCode !== 77) {
        toggleSound();
    }
}, false);

document.addEventListener("DOMContentLoaded", function(event) { 
    // player.playVideo();
});