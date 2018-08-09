var time=60
function aa(){
  time--
  document.querySelector(".time").innerText=time
  if (time==0) {
    clearInterval(start)
  }
}
var start=setInterval(aa,1000)

