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

    var options = [
   { selector: 'li .scrollspy', offset: 200, callback: 'globalFunction()' },
   { selector: '.other-class', offset: 200, callback: 'globalFunction()' }
    ];
//    Materialize.scrollFire(options);


    $('.collection li').click(function() {
        $('.collection li').removeClass('taped');
        $('li .controller').remove();
        var listitem = $(this);
        $('#controllerTemplateDom .controller').clone(true, true).appendTo(listitem);
        $('.collection .fixed-action-btn').openFAB();
        setTimeout(function () { listitem.addClass('taped'); }, 1);

//            $('.collection .modal-trigger').click(function() {
//                $('.collection .modal-trigger').leanModal();
//                return false;
//            });
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
   
function globalFunction() {
    alert("a");
};