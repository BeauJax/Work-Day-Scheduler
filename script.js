$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Save text in local storage
        localStorage.setItem(time, text);
    })