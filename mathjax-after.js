function convert(input) {       
    var output = document.getElementById('output');     
    output.innerHTML = '';

    MathJax.texReset();
    var options = MathJax.getMetricsFor(output);
    options.display = false;

    MathJax.tex2chtmlPromise(input, options).then(function (node) {
        output.appendChild(node);
        MathJax.startup.document.clear(); 
        MathJax.startup.document.updateDocument(); 
    }).catch(function (err) {
        output.appendChild(document.createElement('pre')).appendChild(document.createTextNode(err.message)); 
    });
}

