$(document).ready(function(){
    $.fn.lighten = function(index){
        var text = $(this).text();
        text = text.split(" ");
        text[index] = "<mark>" + text[index] + "</mark>";
        $(this).html(text.join(" "));
    };

    $("#start_btn").on("click", function(){
        index = 0;
        stop();
        start($("#text"), $("textarea").val());
        $("#stop_btn").text("Pause");
        isPaused = false;
        return false;
    });
    $("#stop_btn").on("click", function(){
        isPaused = !isPaused;
        if (isPaused)
        {
            stop();
            $(this).text("Resume");
        }
        else
        {
            start($("#text"), $("textarea").val());
            $(this).text("Pause");
        }
        return false;
    });

    var timer;
    var isPaused = true;
    var index = 0;
    function start(element, text)
    {
        element.text(text);
        var len = element.text().split(" ").length;
        var speed = parseInt($("#speed").val()); //Words per minute
        timer = setInterval(function(){
            if (index >= len)
                clearInterval(timer);
            else
                element.lighten(index++);
        }, 60000.0 / speed);
    }
    function stop()
    {
        clearInterval(timer);
    }
});
