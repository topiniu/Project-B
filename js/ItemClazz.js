/**
 * Created by topiniu on 2017/4/5 0005.
 */
function Item(name){
    this.name = name;
}

Item.prototype.createDom = function(){
    var p = document.createElement("p");
    p.innerText = this.name;

    var div = document.createElement("div");
    div.addClass("item");

    div.appendChild(p);

    return div;
}