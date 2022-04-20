//makes ms variable
let ms = 0
let check = 0
let min = 0

//function for making the timer run on loop
function add(){
  //changes ms by 10 ms every 10 ms and logs the ms in terms of seconds
  ms += 10
  $("#moo").html((ms/1000).toFixed(1)+"s")

  //adds minutes (doesnt display them)
  if (ms == 60000){
    ms -= 60000
    min +=1
  }
}

function stop(){
  clearInterval(end)
  $("#moo").css("color", "cyan")
  $("#moo").css("border", "20px solid cyan")
  check+=1

  if (check % 2 == 0){
    $("#moo").css("color", "orange")
    $("#moo").css("border", "none")
    ms = 0
    end = setInterval(add, 10)
  }
}

//the interval loop in a variable so we can eventually end it
let end = setInterval(add, 10)