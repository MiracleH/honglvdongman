$(function(){
    $.get({
        url : "http://czdm.ittun.com/api/getlunbo",
        dataType : "json",
        success : function(result) {
            var finalHTML = template("slierId" , {items : result})
            $(".swiper-wrapper").html(finalHTML);
            // console.log(result)
        }
    });

    $.getJSON("http://czdm.ittun.com/api/gethometab/1",null,function(data){
        var finalHTML = template("ContentId" , {list : data})
        $(".content").html(finalHTML);
        // console.log(data);
    });

    $(".turn").click(function(){
        $(".on").removeClass("on");
        $(this).addClass("on");
        var index = $(this).index() + 1;
        $.getJSON("http://czdm.ittun.com/api/gethometab/"+ index,null,function(data){
        var finalHTML = template("ContentId" , {list : data})
        $(".content").html(finalHTML);
    });
    });
});

 