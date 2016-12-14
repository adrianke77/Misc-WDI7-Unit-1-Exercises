var times = [1000, 2000, 3000, 4000]

for (let i = 0; i < times.length; i++ ) {
  setTimeout(function () {
    console.log("timer at index " + i + " triggered"); 
  }, times[i] )
}

// times.forEach(function (element, index, array) {
//   setTimeout(function () {
//     console.log("timer at index " + index + " triggered") 
//   }, element)
// } )