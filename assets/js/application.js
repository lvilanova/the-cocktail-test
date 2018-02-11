$(document).ready(function () {
    //here manage displays tabs, tab1 is always display by default
    var i, content;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.getElementById('tab2').style.display = "block";
});