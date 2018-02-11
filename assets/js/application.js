$(document).ready(function () {
    //here manage displays tabs, tab1 is always display by default
    document.getElementById('tab1').style.display = "block";

    var i, content;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

});