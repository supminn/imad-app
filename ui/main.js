console.log('Loaded!');

//change content of file
var element = document.getElementById('main text');
element.innerHTML='Supriya\'s webapp coming soon...';

//move the img
var img = document.getElementById('supi');
img.onclick = function(){
   img.style.marginLeft = '100px';
};