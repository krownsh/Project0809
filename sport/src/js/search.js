import $ from 'jquery';
$(function(){
    $('div.col-6.shadow.btn').on('click', function(e){
        $(this).toggleClass('bg-danger');
    })
});
