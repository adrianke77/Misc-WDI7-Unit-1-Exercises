makeListeners()


function makeListeners () {
  // console.log ("listeners being made")
  $(".btnUp").on("click", function () {move("up") } ) 
  $(".btnLeft").on("click", function () {move("left") } )
  $(".btnDown").on("click", function () {move("down") } )
  $(".btnRight").on("click", function () {move("right") } )
  $(document).keyup(function(key) {
    switch(key.which) {
      case 37: //left
      move("left")
      break
      case 38: //up
      move("up")
      break
      case 39: //right
      move("right")
      break
      case 40: //down
      move("down")
      break
    }
  })
}

function move (moveDir) {
  var left = parseInt( $(".jetImg").css("left") )
  var top = parseInt( $(".jetImg").css("top") )
  var windowWidth = $(window).width()
  var windowHeight = $(window).height()
  // console.log("left is",left,"top is", top)
  switch(moveDir) {
    case "up":
    if (top > 30) 
      $(".jetImg").animate( {
        top: "-=30" 
      },100 )
    break
    case "left":
    if (left >30)
      $(".jetImg").animate( {
        left: "-=30" 
      },100 ) 
    break
    case "right":
    if (left < windowWidth - 100)
    $(".jetImg").animate( {
      left: "+=30" 
    },100 )
    break
    case "down":
    if (top < windowHeight - 170)
    $(".jetImg").animate( {
      top: "+=30" 
    },100 )
    break
  }
} 


