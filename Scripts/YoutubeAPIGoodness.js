// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// Brandon Maxwell
var player;
var player2;
var player3;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('vid1', {
        height: '360',
        width: '640',
        videoId: '_d-xa178Ptc'
    });
    player2 = new YT.Player('vid2', {
        height: '360',
        width: '640',
        videoId: 'en2D_5TzXCA'
    });
    player3 = new YT.Player('vid3', {
        height: '360',
        width: '640',
        videoId: 'zk_f7mBbP38'
    });
}

$("#modal-3").on('hidden.bs.modal', function () {
    player.stopVideo();
});

//Lady Gaga
$("#modal-5").on('hidden.bs.modal', function () {
    player2.stopVideo();
});

//Whistles
$("#modal-8").on('hidden.bs.modal', function () {
    player3.stopVideo();
});