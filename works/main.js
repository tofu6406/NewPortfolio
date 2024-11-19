console.log("main.js!!");


$(document).ready(function() {
    // ページロード後、worksとanimateTextが2秒表示される
    setTimeout(function() {
        // introText全体が上に移動するアニメーション
        $('#introText').addClass('show');
        
        // 1秒遅らせてwebPageInfoが下から出現する
        setTimeout(function() {
            $('#webPageInfo').addClass('show'), $('#introText').css('margin-bottom', '-150px'), $('main').css('margin-bottom', '-200px');;
        }, 1000); // 1秒遅延
    }, 2500); // 2秒後にworksとanimateTextが上に移動
});
