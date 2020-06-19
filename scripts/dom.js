let current = new Date();
let result = document.getElementById('result');
result.textContent = current.toLocaleString();

let documents = document.getElementsByTagName('a');
for (let i = 0, len = documents.length; i < len; i++) {
  console.log(documents.item(i).href);
}
