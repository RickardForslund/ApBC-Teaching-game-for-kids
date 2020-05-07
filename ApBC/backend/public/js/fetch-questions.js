function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('questions');
const url = 'http://127.0.0.1:3000/api/questions/';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let questions = data.questions;
        return questions.map(function(questions) {
            let li = createNode('li');
            li.innerHTML = questions.question + " < --- > " + questions.answer;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });