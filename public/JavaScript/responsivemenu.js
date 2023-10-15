$(document).ready(function() {
    // Function to open and close the menu
    function openmenu() {
        if ($('#bar3').css('display') !== 'none') {
            $('#bar3').css('display', 'none');
            $('#bar1').css('transform', 'rotate(53deg)');
            $('#bar2').css('transform', 'rotate(-53deg)');
            $('#bar2').css('margin', '-4px 0 0 0');
            $('#menumain').css('right', '-28px');
        } else {
            $('#bar3').css('display', 'block');
            $('#bar1').css('transform', 'rotate(0deg)');
            $('#bar2').css('transform', 'rotate(0deg)');
            $('#bar2').css('margin', '4px 0 0 0');
            $('#menumain').css('right', '-200px');
        }
    }

    // Attach the openmenu function to the click event of the responsivemenu div
    $('#responsivemenu').click(openmenu);
});