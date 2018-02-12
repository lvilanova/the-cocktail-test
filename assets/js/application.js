$(document).ready(function () {
    //here manage displays tabs, tab1 is always display by default
    var i, content;
    content = document.getElementsByClassName("js-content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    document.getElementById('tab1').style.display = "block";

    function navTab(evt, numberTab) {
        var i, content, tablinks;
        content = document.getElementsByClassName("js-content");
        for (i = 0; i < content.length; i++) {
            content[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(numberTab).style.display = "block";
        evt.currentTarget.className += " active";

    }

    var el = document.getElementsByClassName("tablinks");
    el[0].onclick = function (event) {
        navTab(event, "tab1");
    };
    el[1].onclick = function (event) {
        navTab(event, "tab2");
    };


    $(".checkcontainer").click(function (evt) {

        if ($(this).hasClass("active")) {
            console.log("tiene clase");
        }

    });

});