function HtmlElement (tg,clss,text) {
  this.tg = tg
  this.clss = clss
  this.text = text
  this.makeHtmlString = function () {
    return "<" + tg + " " + "class = " + clss + ">" + text + "</" + tg +">"
  }
} 

var blah = new HtmlElement("section","blah","blahblah")

console.log (blah.makeHtmlString())

