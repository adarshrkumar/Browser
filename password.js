var pass = window.prompt()
var correct = document.getElementById('password').value
var html = document.querySelector('html')
if (pass == correct) {
  html.innerHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>Browser | Web Wizards</title>
        <link href="style.css" rel="stylesheet">
      </head>
      <body>
        <header>
          <section top>
            <div left>
              <div div></div>
            </div>
            <div cleft>
              <img favicon src="https://t2.gstatic.com/faviconV2?client=SOCIAL&url=https://google.com">
              <span title>Google</span>
              <div div></div>
              <img src="https://is.gd/X_IMG" closetab onclick="close('tab')></img>
            </div>
            <div cright>
              <div div></div>
            </div>
            <div right>
              <div div>
                <img src="https://is.gd/All_Tabs" pointer alltabs onclick="alltabs()"></img>
                <img src="https://is.gd/Underscore" pointer minimize onclick="minimize('unb')></img>
                <div pointer maximize onclick="maximize()">🔲</div>
                <img src="https://is.gd/X_IMG" pointer close onclick="close()"></img>
              </div>
            </div>
          </section>
          <section middle>
            <div left>
              <img src="https://is.gd/L_Arrow" onclick="back()" pointer leftarrow>
              <img src="https://is.gd/R_Arrow" onclick="forward()" pointer rightarrow>
              <img src="https://is.gd/Reload_Icon" onclick="reload()" pointer reload>
              <img src="https://is.gd/Home_Icon" onclick="home(true)" pointer gohome>
            </div>
            <div center>
              <img src="https://is.gd/Lock_Icon" privacy>
              <input spellcheck="false">
              <img src="" share>
              <img src="" bookmark>
            </div>
            <div right>
              <img src="" more>
            </div>
          </section>
          <section bottom>
            <div items>
              <div item>
                <img img src="https://t2.gstatic.com/faviconV2?client=SOCIAL&url=https://google.com">
                <span text>
                  Google
                </span>
              </div>
            </div>
          </section>
        </header>
        <div breaker style="margin: 0; display: none;" onmouseover="unmaximize()"></div>
        <main>
          <iframe iframe src="https://e1dd8c63-bf5d-4454-b087-eefa013dff2e.id.repl.co/prox/?url=${btoa('https://google.com')}" style="height: 100%; width: 100%;" frameborder="0"></iframe>
        </main>
        <script src="unb.js"></script>
        <script src="functions.js"></script>
      </body>
    </html>
  `
}