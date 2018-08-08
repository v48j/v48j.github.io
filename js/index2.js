//为按钮绑定active事件,使用事件委托


document.querySelector(".main2-buy").onclick = function(event) {
  var target = event.target
  if (target.tagName == "A") {
    event.preventDefault()
    active(target, "btn-active")
  }
  if (target.classList.contains("sub")) {
    var num = document.querySelector(".buy-num").innerText * 1
    if (num > 1) {
      num--
      document.querySelector(".buy-num").innerText = num
      document.querySelector(".old-price-span").innerText=(599*num).toFixed(2)
    }
  } else if (target.classList.contains("plus")) {
    var num = document.querySelector(".buy-num").innerText * 1
    num++
    document.querySelector(".buy-num").innerText = num
    document.querySelector(".old-price-span").innerText=(599*num).toFixed(2)
  }
}
//倒计时

var tarday = 15
var tarhours = 23
var tarmin = 59
var tarsec = 59

function aa() {
  var date = new Date()
  var day = tarday - date.getDate()
  var hours = tarhours - date.getHours()
  var min = tarmin - date.getMinutes()
  var sec = tarsec - date.getSeconds()
  sec = sec < 10 ? "0" + sec : sec
  min = min < 10 ? "0" + min : min
  hours = hours < 10 ? "0" + hours : hours
  day = day < 10 ? "0" + day : day
  document.querySelector(".day").innerText = day
  document.querySelector(".hour").innerText = hours
  document.querySelector(".minute").innerText = min
  document.querySelector(".second").innerText = sec
}
aa()
setInterval(aa, 1000)
