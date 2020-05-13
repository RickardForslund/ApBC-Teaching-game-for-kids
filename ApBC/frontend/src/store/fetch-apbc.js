console.log("im inside!!!");





function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('apbc');
const url = 'http://127.0.0.1:3000/api/apbc/';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.apbc);
        console.log("Visa första i json-objektet: " + data.apbc[0].name);
        let apbc = data.apbc;
        return apbc.map(function(apbc) {
            let li = createNode('li');
            li.innerHTML = apbc.name;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });