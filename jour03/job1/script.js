document.addEventListener("DOMContentLoaded", (event) => {
    $("#button").click(function(){
        $("p").show();
    });

    $("#buttonHide").click(function(){
        $("p").hide()
    });
});