/**
 * Created by topiniu on 2017/4/5 0005.
 */
var data = [];
function getData(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST","http://localhost:8080/Project_B/ajax/getData",true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4 && xhr.responseText != ""){
            data = (xhr.responseText).split(",");
        }
    }

    xhr.send(null);
}
function saveData(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST","http://localhost:8080/Project_B/ajax/writeData",true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            alert(xhr.responseText);
        }
    }
    // alert(data.toString());
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    xhr.send("data="+data.toString());
}
$(function () {

    getData();//初始化data

   $("#reChoseBtn").on("touchstart",function () {
       $("#reChoseBtn").addClass("touch");
   });

    $("#reChoseBtn").on("touchend",function () {
        $("#reChoseBtn").removeClass("touch");
    });



    $("#btn").on("touchstart",function () {
        $("#choseBtn").addClass("btnTouch");
    });

    $("#btn").on("touchend",function () {
        $("#choseBtn").removeClass("btnTouch");
    });
});

function loadData() {
    // alert(0);

    $("#screenPanel").empty();

    $("#resultPanel").slideUp();

    $(".mainPanel").fadeIn();


    var container = $("#screenPanel");
    for(var x in data){
        var div = createItem(data[x]);

        container.append(div);
    }

}


function chose(){
    $("#screenPanel").slideDown();
    loadData();
    $(".item").css("animation-name","move");

    setTimeout(function () {
        var length = data.length;

        var result = data[parseInt(Math.random()*length,10)];


        $("#resultBox").text(result);

        $(".mainPanel").fadeOut();
        $("#resultPanel").slideDown();

    },parseInt(Math.random()*4001+3000,10));

}

function reChose(){
    // loadData();
    chose();
}