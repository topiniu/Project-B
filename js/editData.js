/**
 * Created by topiniu on 2017/4/8.
 */
var pageSize = 0;
var pageNum = 1;
var total = 0;
var con = null;
function editData() {
    // getData();
    pageSize = data.length / 10;
    if (String(pageSize).indexOf(".") > -1) {
        // console.log("小数");
        pageSize = parseInt(pageSize);
        pageSize++;
    }
    // console.log(pageSize);
    $(".userPanel").hide("fast");
    $("#editPanel").fadeIn("fast");

    pageLoad();
}
function pageLoad(){
    con = $("#rowContainer");
    con.empty();

    total = pageNum * 10;
    for(var i=(pageNum-1)*10;i<data.length && i<total;i++){
        var row = $("#tele").clone(true);
        row.attr("id","");

        row.children("span").children("input").val(data[i]);
        row.children("span").children("input").attr("id","index_"+i);
        row.children("span").attr("data-index",i);
        con.append(row);
    }
    if(pageNum===pageSize){
        $("#next").hide();
    }else{
        $("#next").fadeIn();
    }


    if(pageNum===1){
        $("#pre").hide();
    }else{
        $("#pre").fadeIn();
    }

    $("#rowContainer").fadeIn();
}

function　pageTran(i){
    if( i===1 && pageNum<pageSize){
        pageNum++;
        pageLoad();
    }else if(i===-1 && pageNum>1){
        pageNum--;
        pageLoad();
    }
}
function edit(e,flag){
    var index = $(e).parent().attr("data-index");
    if(flag===0) {
        $(e).text("确定");
        $(e).attr("onclick","edit(this,1)");

        var input = $("#index_" + index);
        input.attr("readonly", false);
        input.addClass("inputNow");
        input.focus();
    }else{
        $(e).text("修改");
        $(e).attr("onclick","edit(this,0)");

        var input = $("#index_" + index);
        input.attr("readonly", true);
        input.removeClass("inputNow");

        data[index] = input.val();
    }
}

function del(e){
    var index = $(e).parent().attr("data-index");
    data.splice(index,1);
    // pageFlag--;

    ($(e).parent().parent()).hide();
}
function hideEdit(){
    $("#editPanel").fadeOut("fast");
    $(".userPanel").fadeIn("fast");

}
function showAddPanel(){
    $("#addPanel").fadeIn();
}
function closeAddPanel() {
    $("#addPanel").fadeOut();
}
function addItem() {
  var newVal = $("#addName").val();var showMe = $("#showMeddage");
  if(newVal!=""){
      data[data.length] = newVal;
      showMe.text("已保存");
      showMe.fadeIn();
      setTimeout(function () {
          showMe.fadeOut();
      },1000);
  }else{

      showMe.text("不能为空");
      showMe.fadeIn();
      setTimeout(function () {
          showMe.fadeOut();
      },1000);
  }

}