$(document).ready(function () {

    $('body').on('click','.open_model',function(){
        $('#add_contact_modal').modal('show');
        var url=$(this).attr('data-url');
        $.post(url, function(data, status){
           $('#add_contact_modal').html(data);
           $('.select2').select2();
        });
    })

    $('body').on('click','.close_modal',function(){
        console.log('this');
        $('body .modal').modal('hide');
    })


 
    

});