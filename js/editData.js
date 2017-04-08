/**
 * Created by topiniu on 2017/4/8.
 */
function editData(){
    getData();
    $(".userPanel").hide("fast");
    $("#editPanel").fadeIn("fast");

    pageLoad(0);
}
var pageFlag = 0;
function pageLoad(flag){



    var con = $("#rowContainer");
    con.empty();

    if(flag===1){
        pageFlag-=20;//上一页
        if(pageFlag<0)//进行删除操作时length减小
            pageFlag=0;
    }else{
        pageFlag=0;
    }

    for(var i = pageFlag;pageFlag<data.length && pageFlag<i+10;pageFlag++){
        // console.log("pageFlag="+pageFlag+"   data[pageflag]="+data[pageFlag]);
        var row = $("#tele").clone(true);
        row.attr("id","");

        row.children("span").children("input").val(data[pageFlag]);
        row.children("span").children("input").attr("id","index_"+pageFlag);
        row.children("span").attr("data-index",pageFlag);
        con.append(row);
    }
    if(pageFlag===data.length){
        $("#next").hide();
    }else{
        $("#next").fadeIn();
    }


    if(pageFlag<=10){
        $("#pre").hide();
    }else{
        $("#pre").fadeIn();
    }

    $("#rowContainer").fadeIn();
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