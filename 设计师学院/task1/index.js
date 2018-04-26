/*
* @Author: glasses
* @Date:   2018-04-25 23:30:38
* @Last Modified by:   glasses
* @Last Modified time: 2018-04-26 00:51:25
*/
var EventUtil = {
	//事件监听 兼容
	add:function(element,type,callback){
		if(element.addEventLister){
			element.addEventLister(type,callback,false)
		}else if (element.attachEvent){
			element.attachEvent('on'+type,callback)
		}else {
			element['on'+type] = callback;
		}
	}
}
var text = document.getElementById('text');
var line = document.getElementById('line');
var btn = document.getElementById('button');
var off = false;
EventUtil.add(btn,'click',function(){
	off = !off;
	if(off){
		text.className = 'text textafter';
		line.className = 'line activeline';
	}else {
		text.className = 'text';
		line.className = 'line noactiveline';
	}
});
