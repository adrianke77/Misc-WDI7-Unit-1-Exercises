var cursorX, cursorY
var mouseX, mouseY

$("html").mousemove(function(event) {
  cursorX = event.pageX
  cursorY = event.pageY
  // console.log("cursor is at", cursorX, cursorY)
})

setInterval(function() {
  mousePosition = $(".mouse").position()
  // console.log("mouse is at", mousePosition.left, mousePosition.top)
  mouseX = mousePosition.left + 25
  mouseY = mousePosition.top + 19
  if (mouseY < cursorY && Math.abs(cursorY - mouseY) > 2) $(".mouse").css("top", "+=3")
  if (mouseY > cursorY && Math.abs(cursorY - mouseY) > 2) $(".mouse").css("top", "-=3")
  if (mouseX < cursorX && Math.abs(cursorX - mouseX) > 2) $(".mouse").css("left", "+=3")
  if (mouseX > cursorX && Math.abs(cursorX - mouseX) > 2) $(".mouse").css("left", "-=3")
  angleFromMouseToCursor = (180/Math.PI)*Math.atan((cursorY - mouseY) / (cursorX - mouseX))
  if (mouseX>=cursorX) angleFromMouseToCursor +=180
  console.log(angleFromMouseToCursor)
  if (Math.abs(cursorX - mouseX) > 3 && Math.abs(cursorY - mouseY) > 3)
    $(".mouse").css("transform","rotate(" + angleFromMouseToCursor + "deg)")
}, 20)