/* Variables
-------------------------------------------------------------------*/
var strengthMod = 0;

/* Base URL function
-------------------------------------------------------------------*/
$(document).ready(function(e) {

    var baseURL = 'http://localhost/174WEB515/FinalProject';

});



/* Menu Link Hover Effect
-------------------------------------------------------------------*/
$(document).ready(function(e) {

    // Set active menu item item to orange
    $(".active").css("color", "#fa3d03");

    // Set menu item hover color to orange
    $(".menuItem").hover(function() {
            $(this).css("color", "#fa3d03");
        },

        // Set menu item color to gray if the menu item is not for the active page
        function() {
            if (!$(this).hasClass("active")) {
                $(this).css("color", "#212121");
            }
        });
});

/* Dynamic Copyright Dates
-------------------------------------------------------------------*/
$(document).ready(function(e) {
    "use strict";

    // Set Date Variables
    var startYear = 2018,
        currentYear = new Date().getFullYear();

    if (currentYear === startYear) {
        $(".copyright").html("Copyright &copy; " + startYear + " Frank Jamison");
    } else {
        $(".copyright").html("Copyright &copy; " + startYear + "-" + currentYear + " Frank Jamison");
    }
});

/* Tooltip function
-------------------------------------------------------------------*/
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});