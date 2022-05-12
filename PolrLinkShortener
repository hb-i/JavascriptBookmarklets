// https://polrproject.org/
// Provide link in the prompt and send it to your polr link shortner instance for processing
javascript: (function() {
    var val = prompt("Enter url with http(s)", "");
    if (val) s = "https://mypolrserver.example.com/api/v2/action/shorten?key=ENTERYOUROWNKEYHERE&url=" + escape(val);
    window.open(s, "Shortened URL", "location=no,width=400,height=300");
})()
