// Take product ID of currently opened Amazon product page and look it up on CamelCamelCamel.com (Canada)
javascript: (function(s) {
    try {
        s = document.selection.createRange().text
    } catch (_) {
        s = document.getSelection()
    }
    amazonurl = location + '\n' + s;
    productid = amazonurl.match(/(?:[/dp/]|$)([A-Z0-9]{10})/g);
    console.log(productid);
    console.log(amazonurl);
    camelurl = 'https://ca.camelcamelcamel.com/product';
    result = camelurl.concat(productid);
    window.open(result)
})()
