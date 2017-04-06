/**
 * Created by topiniu on 2017/4/5 0005.
 */

//创建Dom节点
function createItem(name){
    var p = document.createElement("p");
    p.innerText = name;

    var div = document.createElement("div");
    $(div).addClass("item");
    // $(div).addClass("hideBottom");

    var clzNum = parseInt(Math.random()*6,10)+1;
    $(div).addClass("clz" + clzNum);

    var left = parseInt(Math.random()*80,10)+1;
    $(div).css("left",left+"%");

    var marginTop = parseInt(Math.random()*5,10)+1;
    $(div).css("margin-top",marginTop+"em");

    div.appendChild(p);

    return div;
}

