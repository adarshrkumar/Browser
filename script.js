const iframe = document.querySelector('iframe')
let input = document.querySelector("input");

input.addEventListener("keypress", function(event) {
  var query = document.querySelector("input").value;
  var favicon = document.querySelector('[favicon]')
  var tabTitle = document.querySelector('[title]')

  if (event.key === "Enter") {
    event.preventDefault();
  
    if (query.startsWith('https://')) {
      iframe.setAttribute('src', query)
      favicon.setAttribute('src', 'https://www.google.com/s2/favicons?domain=' + query)
      var titleText = query.split('https://')[1].split('?')[0]
      tabTitle.innerText = titleText
    }
    
    else if (query.startsWith('http://')) {
      iframe.setAttribute('src', query)
      favicon.setAttribute('src', 'https://www.google.com/s2/favicons?domain=' + query)
      var titleText = query.split('http://')[1].split('?')[0]
      tabTitle.innerText = titleText
    }
    
    else if (query == 'unb') {
      location.href = 'unb.html'
    }
    else if (query == 'reg') {
      location.href = '/'
    }
    
    else {
      iframe.setAttribute('src', 'https://bing.com/search?q=' + query)
      var input = document.querySelector("input");
      input.setAttribute('value', 'https://bing.com/search?q=' + query)
      tabTitle.innerText = query + ' | Bing'
    }
  }
});

let page = location.href.split('?site=')[1]
if (page == undefined) {}
else {
  iframe.setAttribute('src', page)
}