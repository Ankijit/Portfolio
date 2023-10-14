$(document).ready(function() {
    const $tab = $('.tab');
    const $tabdescription = $('.tabdescription');

    $tab.click(function() {
        // Remove "activetab" and "activetabdescription" classes from all tabs and descriptions
        $tab.removeClass('activetab');
        $tabdescription.removeClass('activetabdescription');

        // Add "activetab" class to the clicked tab
        $(this).addClass('activetab');

        // Get the ID of the clicked tab and add "activetabdescription" to the corresponding description
        const tabId = $(this).data('tab-id');
        $('#' + tabId).addClass('activetabdescription');
    });
});