/**
 * Created by topiniu on 2017/4/5 0005.
 */
var data = [
    "黄焖鸡","盖浇饭","砂锅面","麻辣小面",
    "山西刀削面","御味烤鸡饭","饺子","一升米",
    "麻辣香锅","好运来米饭","港式烧腊",
    "铁板饭","重庆鸡公煲","老狼大盘鸡",
    "大火锅","小火锅","旋转小火锅","包子与其他小吃",
    "黄焖茄子","韩式烤肉饭","鱼粉面","三味泡馍","麻辣烫",
    "一号饭堂","民族餐厅","麻辣串","超市里面零食","江西瓦罐",
    "煲仔饭","这顿省了谢谢"
];

$(function () {
   $("#reChoseBtn").on("touchstart",function () {
       $("#reChoseBtn").addClass("touch");
   });

    $("#reChoseBtn").on("touchend",function () {
        $("#reChoseBtn").removeClass("touch");
    });



    $("#btn").on("touchstart",function () {
        $("#reChoseBtn").addClass("btnTouch");
    });

    $("#btn").on("touchend",function () {
        $("#reChoseBtn").removeClass("btnTouch");
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