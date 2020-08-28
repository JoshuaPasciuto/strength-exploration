$(document).ready(function() {
    console.log("ready!");
    console.log($(".checkmark"));

    $(".strength").click(function() {
        console.log(this);
        var selection = this.innerText;
        var e = this;
        if (e.classList.contains("clicked") == false) {
            $(e).css({
                "background-image": "url(https://i.giphy.com/media/edZqA1euNVE9m2UOgi/giphy.webp?" + Math.random() + ")",
                "background-repeat": "no-repeat",
                "background-size": "100% 95%"
            });
            $(e).addClass("clicked");
            setTimeout(function() {
                if (e.classList.contains("paused") == false) {
                    console.log("test");
                    $(e).addClass("paused");
                    // $(e).css("background-image", "url(https://i.imgur.com/Ka8TKrQ.gif)");
                    $(e).css({
                        "background-image": "url(https://i.imgur.com/99DXlh1.png)",
                        "background-repeat": "no-repeat",
                        "background-size": "100% 95%"
                    });

                }
            }, 750);
        } else {
            console.log("test1");
            // $(e).css("background-color", "#DDEEEE");
            $(e).removeClass("clicked");
            $(e).css("background-image", "url(https://i.imgur.com/BDJW2B8.gif?" + Math.random() + ")");
            setTimeout(function() {
                if (e.classList.contains("paused") == true) {
                    console.log("test2");
                    // $(e).addClass("paused");
                    // $(e).css("background-image", "none");

                }
            }, 750);
        }

        for (var i = 0; i < $(".checkmark").length; i++) {
            if ($(".checkmark")[i].parentElement.innerText == selection) {
                console.log($(".checkmark")[i].parentElement.innerText);
                console.log($(".checkmark")[i]);
                $(".checkmark")[i].addClass("selected-checkbox");

            }
        }
    });

});