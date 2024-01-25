var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ads.tiktok.com/marketing_api/api/developer/app/get/', true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('X-Csrftoken', '' +cookie);
xhr.onload = () => {
   const data = JSON.parse(xhr.responseText);
var imran= (JSON.stringify(data));
alert(imran)
};
xhr.send(null);