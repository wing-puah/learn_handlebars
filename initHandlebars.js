$(document).ready( function(){
  let content = document.getElementById('quotes'),
      ajaxUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=4",
      quotesData = {quotes: []}

  // Running ajax
  let dataQuery = $.ajax({
    method: 'GET',
    url: ajaxUrl
  })

  dataQuery.done( (res) => {
    for(var i = 0; i < res.length; i ++){
      quotesData.quotes.push(res[i])
    }

    let src = document.getElementById('quotes-template').innerHTML,
        template = Handlebars.compile(src),
        html = template(quotesData);

    content.innerHTML = html;
  })

})
