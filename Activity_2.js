function back(){
    window.location = "index.html";
}

function getscore()
{
    score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1>Score: " + score + "</h1>";
}