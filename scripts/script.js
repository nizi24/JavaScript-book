document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('confirm').addEventListener('click', function(e) {
    if (!window.confirm('送信してもよろしいですか？')) {
      e.preventDefault();
    }
  }, false);

  let timer = window.setInterval(
    function() {
      let time = new Date();
      document.getElementById('timer_result').textContent = time.toLocaleTimeString();
    }, 5000);

  document.getElementById('timer').addEventListener('click', function() {
    if (window.confirm('停止しますか？')) {
      window.clearInterval(timer);
    }
  });

  let storage = localStorage;
  storage.food1 = 'ラーメン';
  storage['food2'] = '餃子';
  console.log(storage.food1);
  console.log(storage['food2']);
  let fruit = { orange: 'みかん', apple: 'りんご' }
  storage.setItem('fruit', JSON.stringify(fruit));
  let data = JSON.parse(storage.getItem('fruit'));
  console.log(data.orange);
}, false);
