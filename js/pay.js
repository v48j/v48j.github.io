var how=0
//网银支付，微信支付按钮，按下添加边框
for (let i = 0;i < document.querySelectorAll(".a-btn2").length;i++){
  document.querySelectorAll(".pay-how")[i].onclick=function (event){
    event.preventDefault()
    for (let j = 0;j < document.querySelectorAll(".a-btn2").length;j++){
      document.querySelectorAll(".borr")[j].classList.remove('show')
    }
    document.querySelectorAll(".borr")[i].classList.add('show')
    how=i
  }
}

//点击付款按钮，如果how=0  跳转微信支付  how=1 网银支付,打开弹窗
document.querySelector('.finally-pay').onclick=function (event){
  if (how===1) {
    event.preventDefault()
    document.querySelector('.shadow2').classList.remove('hid3')
  }
}