console.log('Loaded!');

//change content of file
var element = document.getElementById('main text');
element.innerHTML='Supriya\'s webapp coming soon...';

//move the img
var img = document.getElementById('supi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px'; 
}
img.onclick = function(){
    var interval = setInterval(moveRight,100);
   
};