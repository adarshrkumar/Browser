let header = document.querySelector('header')
let main = document.querySelector('main')
let breaker = document.querySelector('[breaker]')
//let iframe = document.querySelector('iframe')
let site

function minimize() {
  site = iframe.getAttribute('src')
  document.body.innerHTML = `<script src="functions.js"></script>`
  document.body.setAttribute('style', 'cursor: pointer;')
  document.body.setAttribute('onclick', 'setmaxminimize()')
}

function setmaxminimize() {
  document.body.setAttribute('onclick', 'maxminimize()')
}

function maxminimize() {
  location.href = location.href.split('?site=')[0]+'?site='+site
//  document.body.setAttribute('style', '')
//  document.body.setAttribute('onclick', '')
}

function maximize() {
  breaker.setAttribute('style', 'margin: 0; padding: 0; border: 0; height: 2.5px; width: 100%; cursor: pointer;')
  header.setAttribute('style', 'display: none;')  
}

function unmaximize() {
  breaker.setAttribute('style', 'margin: 0; display: none;')
  header.setAttribute('style', '')  
}

function close(option) {
  if (option === tab) {
    iframe.close()
  }
  else {
    window.close()    
  }
}

function reload() {
  iframe.reload()      
}

function home(chars) {
  var input = document.querySelector("input");
  var tabTitle = document.querySelector('[title]')
  if (chars === true) {
    tabTitle.innerText = 'Google'
    iframe.setAttribute('src', 'https://e1dd8c63-bf5d-4454-b087-eefa013dff2e.id.repl.co/prox/?url=' + btoa('https://google.com'))
  }
  else if (chars === false) {
    tabTitle.innerText = 'Bing'
    iframe.setAttribute('src', 'https://bing.com')    
  }
  input.setAttribute('value', '')
}

function back() {
  window.history.go(-1)
}

function forward() {
  window.history.go(1)
}