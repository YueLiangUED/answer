(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

Zepto(function ($) {

    var ele1 = $('.Q1').find('input'),
        ele2 = $('.Q2').find('input'),
        ele3 = $('.Q3').find('input'),
        ele4 = $('.Q4').find('input'),
        ele5 = $('.Q5').find('input'),
        ele6 = $('.Q6').find('input');
    var flag1,flag2,flag3,flag4,flag5,flag6;
    window.setInterval(function () {
        $.each(ele1,function (index,item) {
            if(item.checked != false){
                flag1 = 1;
            }
        });
        $.each(ele2,function (index,item) {
            if(item.checked != false){
                flag2 = 1;
            }
        });
        $.each(ele3,function (index,item) {
            if(item.checked != false){
                flag3 = 1;
            }
        });$.each(ele4,function (index,item) {
            if(item.checked != false){
                flag4 = 1;
            }
        });$.each(ele5,function (index,item) {
            if(item.checked != false){
                flag5 = 1;
            }
        });
        $.each(ele6,function (index,item) {
            if(item.checked != false){
                flag6 = 1;
            }
        });
        if(flag1 == 1 && flag2 ==1 && flag3 ==1 && flag4 == 1 && flag5 ==1 && flag6 ==1){
            $('#subBtn').addClass('active');
        }else{
            $('#subBtn').removeClass('active');
        }
    },0);

    $('#subBtn').on('touchend',function () {
        if($('#subBtn').hasClass('active')){
            $('.questionBox').find('p').show();
            $('#subBtn').hide();
            $('#jumpBtn').show();
        }else{
            return false;
        }
    });

    //抽奖按钮跳转
    $('#jumpBtn').on('touchend',function () {
        window.location.href = 'choujiang.html';
    });


    //显示遮罩层
    function showMask(){
        $(".mask").css("height",$(document).height());
        $(".mask").css("width",$(document).width());
        $(".mask").show();
    }
    //隐藏遮罩层
    function hideMask(){
        $(".mask").hide();
    }
    
    //showMask();
    
    
    //弹窗确定按钮关闭遮罩层
    $('#tcEntOne').on('touchend',function () {
        $('#one').hide();
        hideMask();
    });
    //取消按钮
    $('#tcCancel').on('touchend',function () {
        $('#one').hide();
        hideMask();
    });
    $('#tcEntTwo').on('touchend',function () {
        $('#two').hide();
        hideMask();
    });

    //抽奖页弹窗确定按钮关闭遮罩层
    $('#cjTcEntOne').on('touchend',function () {
        $('#cjOne').hide();
        hideMask();
    });
    //取消按钮
    $('#cjTcCancel').on('touchend',function () {
        $('#cjOne').hide();
        hideMask();
    });
    $('#cjTcEntTwo').on('touchend',function () {
        $('#cjTwo').hide();
        hideMask();
    });
    
});