/*
* @Author: glasses
* @Date:   2018-05-01 12:55:41
* @Last Modified by:   glasses
* @Last Modified time: 2018-05-01 12:56:45
*/
var btn = document.getElementById('btn');
var container = document.getElementById("container");
var containeritems = container.getElementsByTagName('div');
var buttons = btn.getElementsByTagName('button');
btn.addEventListener('click', function() {
	if(event.target == buttons[0]){
	container.className='container float';
	containeritems[0].className = 'float-left';
	containeritems[1].className = 'float-right';
}else if (event.target == buttons[1]) {
	container.className='container position';
	containeritems[0].className = 'position-left';
	containeritems[1].className = 'position-right';
}else if (event.target == buttons[2]) {
	container.className='container flex';
	containeritems[0].className = 'flex-left';
	containeritems[1].className = 'flex-right';	
}

}, false);