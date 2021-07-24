document.getElementById('btn').addEventListener('click', function(){
  var url = document.getElementById('search-val').value;
  var frame = document.getElementById('iframe');
  frame.src = url.replace('watch','embed');
  document.getElementById('iframe').style.display = 'block';
});
