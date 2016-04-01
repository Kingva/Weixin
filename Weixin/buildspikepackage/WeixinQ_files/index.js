$(document).ready(function() {
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
   );

    $('.scrollspy').scrollSpy({
        callback: function(text) {
            $('#spyText').html(text);
        }});
    $('select').material_select();

    $("#controllerTemplateDom .btnAddToOrder").click(function (e) {
        $(this).parents('.collection>li').not(':has(.orderedCounter)').append($('#controllerTemplateDom .orderedCounter').clone());

        $(this).parents('.collection >li').find('.counterText').html(parseInt($(this).parents('.collection >li').find('.counterText').html()) + 1);
        //        $(this).siblings('.btnRemoveFromOrder').removeClass('display-none');

//        var clone = $(this).closest('li').clone(true, true);
//        clone.find('.controller').remove();
//        var productionId = clone.find('.productionId').val();
//        $('#productionInCart').not(':has(.productionId[value="' + productionId + '"])').append(clone);

//        var productionInCart = $('#productionInCart li:has(.productionId[value="' + productionId + '"])');
//        var addedCounter = +productionInCart.find('.productionCounter').val() + 1;
//        productionInCart.find('.productionCounter').val(addedCounter);
//        productionInCart.find('.counterText').html(addedCounter);
//
//        var productionInlist = $('.ui-page-active .productionList  li:has(.productionId[value="' + productionId + '"])');
//        productionInlist.find('.productionCounter').val(addedCounter);
//        productionInlist.find('.counterText').html(addedCounter);

        Materialize.toast('I am a toast been added!', 1000);
        $('#totalValue').html(+$('#totalValue').html() + 10);
//        $('#shoppingCart .chip').animate({ 'width': '100px' }, 200);
//        $('#shoppingCart .chip').animate({ 'width': '80px' }, 200);
       

//        counterInCart.html(+counterInCart.html() + 1);
//        counterInCart.animate({ 'width': '15px' }, 200);
        e.preventDefault();

        return false;
    });

    $('.collection li').click(function() {
        $('.collection li').removeClass('taped');
        $('li .controller').remove();
        var listitem = $(this);
        $('#controllerTemplateDom .controller').clone(true, true).appendTo(listitem);
        $('.collection .fixed-action-btn').openFAB();
        setTimeout(function () { listitem.addClass('taped'); }, 1);


            $('.collection .modal-trigger').leanModal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: .5, // Opacity of modal background
                in_duration: 300, // Transition in duration
                out_duration: 200 // Transition out duration
//            ready: function () { alert('Ready'); }, // Callback for Modal open
                //            complete: function () { alert('Closed'); } // Callback for Modal close
            });
        }
 );

    });
   
