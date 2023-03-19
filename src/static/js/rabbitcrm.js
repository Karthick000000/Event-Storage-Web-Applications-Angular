$(document).ready(function () {
    var base_url = window.location.origin;
    $('.select2').select2();
    if($('.customize_pdf').length){
        // $('#colorpicker').colorpicker();
        // $('#colorpicker').on('keyup', function() {
        //     $(this).colorpicker('setValue', $(this).val());
        // });
        $('.cpicker').colorpicker();
        $('.cpicker').on('keyup', function() {
            $(this).colorpicker('setValue', $(this).val());
        });
        $(".touchspin").TouchSpin({
            
        });
    }
    
    if($('.contacts_view').length){
        console.log('tt');
   
    jQuery('.card-profile-img').each(function () {
       var name=$(this).closest('.card').find('.cname').html();
       var first_letter=name.charAt(0);
       $(this).closest('.card').find('.cletter').html(first_letter);
       random_color();
    })
    
    }
    function random_color(){
        var colors=[
            '#5369f8',
            '#43d39e',
            '#25c2e3',
            '#ffbe0b',
            '#ff5c75'
        ];
        $('.card-profile-img').each(function(){
            var new_color = colors[Math.floor(Math.random()*colors.length)];
            $(this).css('background-color',new_color);
        });
    }
    var dropdown = document.getElementsByClassName("sec-dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }

    // dropdown-btn

    $('body').on('click', '.dropdown-btn', function () {
        console.log('this');
    })

    $('body').on('click', '.open_model', function () {
        var modal_id = $(this).attr('data-model-id');
        console.log(modal_id);
        $('#' + modal_id).modal('show');
        var url = $(this).attr('data-url');
        $.post(url, function (data, status) {
            $('#' + modal_id).html(data);
            $('.select2').select2();
        });
    })

    $('body').on('click', '.close_modal', function () {
        $('body .modal').modal('hide');
    })


    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function isWebsite(website) {
        var regex = /(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?/;
        return regex.test(website);
    }

    $('body').on('click', '.modal_submit', function () {
        var submit_button = $(this);
        var form = $(this).closest('form');
        var form_type = 'modal';
        var form_submit = 0;

        jQuery('.validate_input').each(function () {
            var valid = validate_fields($(this), form_type);
            if (valid == 0) {
                form_submit = 0;
                return false;
            } else {
                form_submit = 1;
            }
        })

        if (form_submit == 1) {
            $(this).addClass('hide');
            $(this).closest('.modal_buttons').find('.modal_submit_spinner').removeClass('hide');
        }
    })
    function navigate_tabs(input_field, form_type) {
        if (form_type == 'modal') {
            var tab_id = input_field.closest('.tab-pane').attr('id');
            $('.tab-pane').removeClass('show');
            $('.tab-pane').removeClass('active');
            input_field.closest('.tab-pane').addClass('show');
            input_field.closest('.tab-pane').addClass('active');
            $('.nav-link').removeClass('active');
            jQuery('.nav-link').each(function () {
                if ($(this).attr('href') == '#' + tab_id) {
                    $(this).addClass('active');

                }
            })
        }
    }
    function validate_fields(input_field, form_type) {
        var valid = 1;
        if (input_field.attr('data-required') == 'true') {
            if (input_field.val() == '' || input_field.val() == null || input_field.val() == undefined) {
                input_field.val();
                input_field.removeClass('form-control-valid');
                input_field.addClass('form-control-invalid');
                // input_field.closest('.form-group').find('.valid-feedback').css({ 'display': 'none' });
                input_field.closest('.form-group').find('.invalid-feedback').css({ 'display': 'block' });
                navigate_tabs(input_field, form_type);
                valid = 0;
            } else {
                input_field.val();
                if (input_field.attr('data-type') == 'email' && isEmail(input_field.val()) == false) {
                    input_field.removeClass('form-control-valid');
                    input_field.addClass('form-control-invalid');
                    // input_field.closest('.form-group').find('.valid-feedback').css({ 'display': 'none' });
                    input_field.closest('.form-group').find('.invalid-feedback').css({ 'display': 'block' });
                    navigate_tabs(input_field, form_type);
                    valid = 0;
                } else if (input_field.attr('data-type') == 'website' && isWebsite(input_field.val()) == false) {
                    input_field.removeClass('form-control-valid');
                    input_field.addClass('form-control-invalid');
                    // input_field.closest('.form-group').find('.valid-feedback').css({ 'display': 'none' });
                    input_field.closest('.form-group').find('.invalid-feedback').css({ 'display': 'block' });
                    navigate_tabs(input_field, form_type);
                    valid = 0;
                } else {
                    input_field.removeClass('form-control-invalid');
                    input_field.addClass('form-control-valid');
                    // input_field.closest('.form-group').find('.valid-feedback').css({ 'display': 'block' });
                    input_field.closest('.form-group').find('.invalid-feedback').css({ 'display': 'none' });
                    valid = 1;
                }
            }
        } else {
            if (input_field.val() != '') {
                if (input_field.attr('data-type') == 'email' && isEmail(input_field.val()) == false) {
                    input_field.removeClass('form-control-valid');
                    input_field.addClass('form-control-invalid');
                    // input_field.closest('.form-group').find('.valid-feedback').css({ 'display': 'none' });
                    input_field.closest('.form-group').find('.invalid-feedback').css({ 'display': 'block' });
                    navigate_tabs(input_field, form_type);
                    valid = 0;
                } else if (input_field.attr('data-type') == 'website' && isWebsite(input_field.val()) == false) {
                    input_field.removeClass('form-control-valid');
                    input_field.addClass('form-control-invalid');
                    // input_field.closest('.form-group').find('.valid-feedback').css({ 'display': 'none' });
                    input_field.closest('.form-group').find('.invalid-feedback').css({ 'display': 'block' });
                    navigate_tabs(input_field, form_type);
                    valid = 0;
                } else {
                    input_field.removeClass('form-control-invalid');
                    input_field.addClass('form-control-valid');
                    // input_field.closest('.form-group').find('.valid-feedback').css({ 'display': 'none' });
                    input_field.closest('.form-group').find('.invalid-feedback').css({ 'display': 'none' });
                    valid = 1;
                }
            } else {
                input_field.removeClass('form-control-invalid');
                input_field.removeClass('form-control-valid');
                // input_field.closest('.form-group').find('.valid-feedback').css({ 'display': 'none' });
                input_field.closest('.form-group').find('.invalid-feedback').css({ 'display': 'none' });
                valid = 1;
            }
        }
        return valid;
    }
    $('body').on('keyup keydown blur change', '.validate_input', function () {
        validate_fields($(this));
    })

    $('body').on('keyup', '.company_name_search', function () {
        $('#show_company_list').removeClass('hide');
        var div = document.querySelector('#show_company_list');
        var inp = document.querySelector('#company_name');
        var rect = inp.getClientRects();
        // console.log(rect);
        div.style.display = 'block';
        // div.style.left= rect[0].left+'px';
        // div.style.top= rect[0].bottom+'px';
        div.style.left = '17px';
        div.style.top = '82.188px';
        div.style.width = '345px';
        // console.log(rect[0].left);
        var search = $(this).val();
        var url = 'get_company_names/' + search
        $.post(url, function (data, status) {
            console.log(data);
            $('.add_contact_modal .company_name_list_ul').html(data);
            // $('.add_contact_modal .select2').select2();
        });

    })
    $('body').on('click', '.select_company', function () {

        var company_name = $(this).attr('data-company-name');
        var company_id = $(this).attr('data-company-id');
        $('#company_name').val(company_name);
        $('#company_id').val(company_id);
        $('#show_company_list').addClass('hide');

    })

    $('body').on('click', '.edit_company_name', function () {
        var company_name = $(this).closest('.row').find('.select_company').attr('data-company-name');
        var company_id = $(this).closest('.row').find('.select_company').attr('data-company-id');
        $('.company_name_change').removeClass('hide');
        $('#company_name_edit').val(company_name);
        $('#company_name_edit').attr('data-company-id', company_id);
    })

    $('body').on('click', '.update_company_name', function () {
        var company_name = $(this).closest('.company_name_change').find('#company_name_edit').val();
        var company_id = $(this).closest('.company_name_change').find('#company_name_edit').attr('data-company-id');
        if (company_name == '' || company_name == null || company_name == undefined) {
            $(this).closest('.form-group').find('.invalid-feedback').css({ 'display': 'block' });
        } else {
            var url = 'update_company_name'
            $.post(url, {
                'company_id': company_id,
                'company_name': company_name
            }, function (data, status) {
                $('body .company_name_search').keyup();
                $('body .company_name_change').addClass('hide');

            });
        }
    })

    $('body').on('click', '.add_new_company', function () {
        var company_name = $('body').find('.company_name_search ').val();
        $('.company_name_change').removeClass('hide');
        $('#company_name_edit').val(company_name);
        // $('#company_name_edit').attr('data-company-id', company_id);
    })

    $('body').on('keyup', '#company_name_edit', function () {
        $(this).closest('.form-group').find('.invalid-feedback').css({ 'display': 'none' });
    })

    $('body').on('change', '.country', function () {
        var country_id = $(this).val();
        var url = 'get_states/' + country_id
        $.post(url, function (data, status) {
            // $('.add_contact_modal .states').html(data);
            // $('.add_contact_modal .select2').select2();
            $('body .states').html(data);
            $('body .select2').select2();
        });

    })

    $('body').on('change', '.states', function () {
        var state_id = $(this).val();
        var url = 'get_cities/' + state_id
        $.post(url, function (data, status) {
            // $('.add_contact_modal .cities').html(data);
            // $('.add_contact_modal .select2').select2();
            $('body .cities').html(data);
            $('body .select2').select2();
        });

    })

    $('#basic-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });
    var sDom = "<'row'<'col-sm-12 count_row '><'col-sm-12 col-md-3 tb-search'><'col-sm-12 col-md-3 tb-show'l><'col-sm-12 col-md-4 no-padder-r tb-main float-right'<'tb-1 float-right m-b-mini'>><'col-sm-12 col-md-2 no-padder tb-main-2 tb-2 pull-right m-b-mini'>><'dataTableHtml'<'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5 numberofrows'i><'col-sm-12 col-md-7'p>>>";
    $('.data_table').DataTable({
        "bStateSave": true,
        "bProcessing": true,
        // "sDom": sDom,
        "sPaginationType": "full_numbers",
		
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });
    $('#basic-datatable1').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });
    $('body').on('click', '.inactive_users_tab', function () {

        $('#basic-datatable2').DataTable({
            "language": {
                "paginate": {
                    "previous": "<i class='uil uil-angle-left'>",
                    "next": "<i class='uil uil-angle-right'>"
                }
            },
            "drawCallback": function () {
                $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
            }
        });

    })
    $('body').on('click', '.add_role', function () {
        window.location.replace(base_url + "/add_role");
    })

    if ($('.module_settings').length > 0) {
        $(".sortable").sortable();
    }


    $('body .add_settings').on('click', function () {
        var label = $(this).attr('data-name');
        // console.log(label);
        $('#add_settings_modal').modal('show');
        var url = base_url + "/add_settings"
        $.post(url, function (data, status) {
            $('#add_settings_modal').html(data);
            $('.add_settings_label').html(label);
            // Swal.fire(
            //     'Good job!',
            //     'You clicked the button!',
            //     'success'
            //   )
            // Swal.fire({
            //     text: 'Toast with custom target',
            //     target: '#custom-target',
            //     customClass: {
            //       container: 'position-absolute'
            //     },
            //     toast: true,
            //     position: 'top-right',
            //     background:'red',
            //     timer: 1000,
            //     showCancelButton: false,
            //     showConfirmButton: false
            //   })

        });
    })
    $('body .edit_settings').on('click', function () {
        var label = $(this).closest('.settings_border').find('.header-title').html();
        var name = $(this).attr('data-name');
        var id = $(this).attr('data-id');
        var url = base_url + "/edit_settings"
        $('#edit_settings_modal').modal('show');
        $.post(url, function (data, status) {
            $('#edit_settings_modal').html(data);
            $('.edit_settings_label').html(label);
            $('#edit_setting_value').val(name);
        })

    })

    $('body .delete_settings').on('click', function () {
        delete_alert();

    })

    function delete_alert() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    {
                        text: 'Success',
                        icon: 'success',
                        title: 'Deleted Successfully',
                        timer: 1000,
                        showCancelButton: false,
                        showConfirmButton: false
                    }
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'error'
                )
            }
        })
    }

    function save_success() {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,

        })

        Toast.fire({
            icon: 'success',
            title: 'Saved successfully'
        })
    }
    function close_modal() {
        $('body .modal').modal('hide');
    }
    $('body').on('click', '.save_btn', function () {
        save_success();
        close_modal();
    })

    $('body').on('click', '.edit_mail_signature', function () {

        $('.mail_signature_div').addClass('hide');
        $('.mail_signature_edit_div').removeClass('hide');
        var signature = $('.mail_signature_view').html();
        $('.mail_signature_edit').summernote({
            height: 230,
            width: 900
        });
        $('.mail_signature_edit').summernote("code", signature);


    })

    $('body').on('click', '.open_page', function () {
        var url = $(this).attr('data-url');
        window.location.replace(base_url + "/" + url);
    })

    $('body').on('change', '#custom_field_type', function () {
        var value = $(this).val();
        if (value == 'single_dropdown' || value == 'multiple_dropdown') {
            $('.selectlist_values_div').removeClass('hide');
            $('.select_values').html('');
            add_new_field();
        }else{
            $('.select_values').html('');
            $('.selectlist_values_div').addClass('hide');
        }
    })

    function add_new_field() {
        var count = $('.field_list_value').length;
        var new_count = parseInt(count) + 1;
        var new_field = '<div class="form-group row mt-2 col-md-12 field_list_value">' +
            '<label for="role_name" class="ml-2 col-md-2 mt-3">Field value <span>' + new_count + '</span>' +
            '</label>' +
            '<div class="col-md-3">' +
            ' <div class="input-group">'+
            '<input type="text" class="form-control form-control-lg validate_input" data-required="true" name="list_value[]">'+
            '<span class="input-group-append cursor-pointer remove_field">'+
                '<span class="input-group-text" ><i class="uil uil-trash-alt text-danger"></i></span>'+
            '</span>'+
            '<div class="invalid-feedback">Please field name</div>'+
        '</div>' +
            '</div>' +
            '</div>';
        $('.select_values').append(new_field);
    }

    $('body').on('click', '.add_field', function () {
            add_new_field();
    })
    $('body').on('click', '.remove_field', function () {
       $(this).closest('.field_list_value').remove();
    })
    
    
    $('body').on('change', '.add_action', function () {
        var action_type=$(this).val();
        if(action_type=='send_mail'){
            $('body .mail_action').removeClass('hide');
            $('body .sms_action').addClass('hide');
        }else if(action_type=='send_sms'){
            $('body .sms_action').removeClass('hide');
            $('body .mail_action').addClass('hide');
        }
     })

     $('body').on('click', '.list-icons', function () {
       var action=$(this).attr('data-action');
       $('.list-icons').removeClass('active_selection');
       $(this).addClass('active_selection');
       if(action=='list_view'){
           $('.contact_grid').addClass('hide');
           $('.contact_list').removeClass('hide');
       }else if(action=='grid_view'){
           $('.contact_grid').removeClass('hide');
           $('.contact_list').addClass('hide');
       }
     })
});