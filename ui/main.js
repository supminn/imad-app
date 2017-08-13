console.log('Loaded!');

var element = document.getElementById('main text');
element.innerHTML='Supriya\'s webapp coming soon...';
//move the img
var img = document.getElementById('supi');
img.onlick = function(){
   img.style.marginleft =  '100px';
};