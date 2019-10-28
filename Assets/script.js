// allow html to load completely before running any script
$(document).ready(function () {
    // use moment object to grab & format the current date on user's device
    var now = moment().format('dddd, MMM Do YYYY');
        
    $("#today").text(now);

    // set up click event for buttons using .save
    $(".save").on("click", function () {

        // getting each time block's textarea id
        var getTime = $(this).attr("data-id");
        
        // grab info in the textarea
        var comment = $("#" + getTime + "-events").val();
        
        // save info to local storage
        localStorage.setItem(getTime + "-events-info", comment);

    });
});