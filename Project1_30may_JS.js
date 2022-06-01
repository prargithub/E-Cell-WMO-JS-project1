let body = document.querySelector('body');
fetch('https://cat-fact.herokuapp.com/facts').then((response) => {
    console.log('resolved ', response);
    return response.json();
}).then((data) => {
    console.log(data);
    let para = document.createElement('p');
    para.textContent=data[0].text;
    body.appendChild(para);
    para.style.color='blue';
    para.style.margin = '50px';
    para.style.fontSize = '30px';
    
    let para1 = document.createElement('p');
    para1.textContent=data[1].text;
    body.appendChild(para1);
    para1.style.color='dark green';
    para1.style.margin = '50px';
    para1.style.fontSize = '30px';

    let para2 = document.createElement('p');
    para2.textContent=data[2].text;
    body.appendChild(para2);
    para2.style.color='white';
    para2.style.margin = '50px';
    para2.style.fontSize = '30px';

    let para3 = document.createElement('p');
    para3.textContent=data[3].text;
    body.appendChild(para3);
    para3.style.color='red';
    para3.style.margin = '50px';
    para3.style.fontSize = '30px';

    let para4 = document.createElement('p');
    para4.textContent=data[4].text;
    body.appendChild(para4);
    para4.style.color='darkslategray';
    para4.style.margin = '50px';
    para4.style.fontSize = '30px';
    
}).catch((err) => {
    console.log('rejected ', err);
});