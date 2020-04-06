$(document).ready(function () {

    //Date and Time Variables//
    var m = moment();
    var currentTime = m.format('MMMM Do YYYY, h:mm:ss a');
    var currentDate = m.format("MMM Do YYYY");
    var currentHour = m.hours();

    // Date and Time at top of webpage//
    $("#currentDay").text("Today's Date: " + currentDate);


    // Event listener for save buttons to add to local storage//
    $(".saveBtn").on("click", function () {
        var click = $(this).attr("data-value");
        var eventInput = $(click).val();
        localStorage.setItem(click, eventInput);
    });


    // Grabbing local storage items if any//
    let timeBlock = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];

    for (let i = 0; i < timeBlock.length; i++) {
        let savedEvent = $('.saved-event');
        $(timeBlock[i]).val(localStorage.getItem(timeBlock[i]));
    };


    // Change color of row based on time of day//
    function timeStyle() {
        for (let i = 6; i < 18; i++) {

            let hour = '#' + i;
            let scheduleHour = parseInt($(hour).attr("id"));
            $(hour).removeClass();
            if (
                scheduleHour > currentHour) {
                $(hour).attr("class", "row future");
            };
            if (
                scheduleHour === currentHour) {
                $(hour).attr("class", "row present");
            };
            if (
                scheduleHour < currentHour) {
                $(hour).attr("class", "row past");
            };

        };
    };
    timeStyle();

});