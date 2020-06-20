// 現在時刻を表示
let current = new Date();
let result = document.getElementById('result');
result.textContent = current.toLocaleString();

// コンソールにアンカータグの属性を表示
let documents = document.getElementsByTagName('a');
for (let i = 0, len = documents.length; i < len; i++) {
  console.log(documents.item(i).href);
}

// ボタンクリック時にイベント
window.onload = function() {
  document.getElementById('btn').onclick = alert;

  function alert() {
    window.alert('ボタンがクリックされました。');
  };
};


document.addEventListener('DOMContentLoaded', function() {
  let button = document.getElementById('click');

  // ボタンクリック時にイベント２
  button.addEventListener('click', function() {
    window.alert('ボタンがクリックされました。');
  }, false);

  let attrs = button.attributes;
  for (let i = 0, len = attrs.length; i < len; i++) {
    let attr = attrs.item(i);
    console.log(attr.name + ':' + attr.value);
  }

  // 外部からの入力を出力するのはセキュリティ問題あり
  document.getElementById('result_html').innerHTML =
    '<a href="#">リンクです。</a>'

  // チェックされている要素を表示
  document.getElementById('submit').addEventListener('click', function() {

    let result = [];
    let foods = document.getElementsByName('food');

    for (let i = 0, len = foods.length; i < len; i++) {
      let food = foods.item(i);
      if (food.checked) {
        result.push(food.value);
      }
    }
    window.alert(result.toString());
  });

  // ラジオボタンに初期状態を設定する関数リテラルを定義
  let setRadioValue = function(name, value) {
    let elems = document.getElementsByName(name);

    for (let i = 0, len = elems.length; i < len; i++) {
      let elem = elems.item(i);
      if (elem.value === value) {
        elem.checked = true;
        break;
      }
    }
  }
  setRadioValue('food2', 'ハンバーグ');

  // テキストファイルを出力する
  document.getElementById("file").addEventListener('change', function(e) {
    let input = document.getElementById("file").files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function() {
      document.getElementById("result").textContent = reader.result;
    }, true);
    reader.addEventListener('error', function() {
      console.log(reader.error.message);
    }, true);
    reader.readAsText(input, 'UTF-8');
  }, true);

  // フォームで受け取った文字列からanchorを生成
  document.getElementById('btn').addEventListener('click', function() {
    let name = document.getElementById('name');
    let url = document.getElementById('url');

    let anchor = document.createElement('a');
    anchor.href= url.value;
    let text = document.createTextNode(name.value);
    anchor.appendChild(text);
    let br = document.createElement('br');
    let list = document.getElementById('list');
    list.appendChild(anchor);
    list.appendChild(br);
  }, false);

  let elem = document.getElementById('elem');

  elem.addEventListener('mouseover', function() {
    this.className = 'highlight';
  }, false);

  elem.addEventListener('mouseout', function() {
    this.className = '';
  }, false);

  let a = document.getElementById('a');

  a.addEventListener('click', function() {
    this.classList.toggle('font-color');
  });
}, false);
