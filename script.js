var input = document.getElementById("input")
var output = document.getElementById("output")

input.addEventListener("input", myScript)

function myScript() {
    console.log("hi")
    output.innerHTML = "<p>" + input.value + "</p>"
    //var script = document.getElementById("MathJax-script")
    //console.log(script)
    //script.remove()
    //var s = document.createElement('script')
    //s.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
    //s.id="MathJax-script"
    //document.head.appendChild(s);
    //document.head.innerHTML += "<script id=\"MathJax-script\" src=\"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js\"></script>"
    $.getScript("http://example.com/path/to/your/file.js");
}

