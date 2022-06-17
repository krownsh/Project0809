import $ from 'jquery';
$(function(){
    $('a.col-6.shadow.btn').on('mouseenter', function(e){
        $(this).toggleClass('bg-danger');
    })
    $('a.col-6.shadow.btn').on('mouseleave', function(e){
        $(this).removeClass('bg-danger');
    })
});
