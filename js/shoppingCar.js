//定义一个数组，数组存储若干个对象，每个对象就是商品信息,初始化对象信息
var goodsArr=[]
for (let i = 0;i < document.querySelectorAll(".goods").length;i++) {
  goodsArr[i]=new Object;
  goodsArr[i].sel=document.querySelectorAll(".goods")[i].querySelector(".goods-sel-input").checked
  goodsArr[i].num=1
  goodsArr[i].price=79
}

//定义一个变量，用于检测登陆
var can = 0;
//关闭按钮，弹窗关闭 */
document.querySelector(".close-reg").onclick = function() {
  document.querySelector(".reg-shadow").classList.add("hid1")
}
//全选，所有选中
document.querySelector("#all-select").onchange = function() {
  var state=this.checked
  for (let i = 0;i < document.querySelectorAll(".goods-sel-input").length;i++) {
    document.querySelectorAll(".goods-sel-input")[i].checked=state
    goodsArr[i].sel=state
  }
  document.querySelector("#all-sel2").checked=state
  getAllPrice()
}

document.querySelector("#all-sel2").onchange = function() {
  var state=this.checked
  for (let i = 0;i < document.querySelectorAll(".goods-sel-input").length;i++) {
    document.querySelectorAll(".goods-sel-input")[i].checked=state
    goodsArr[i].sel=state
  }
  document.querySelector("#all-select").checked=state
  getAllPrice()
}
//每个商品的checkbox单击时判定，全选勾选或者不勾选
for (let i = 0;i < document.querySelectorAll(".goods-sel-input").length;i++) {
  document.querySelectorAll(".goods-sel-input")[i].onclick=function(){
    goodsArr[i].sel=document.querySelectorAll(".goods-sel-input")[i].checked
    getAllPrice()
    //取消勾选全选
    if (this.checked==false) {
      document.querySelector("#all-select").checked=false
      document.querySelector("#all-sel2").checked=false
    }
    //勾选全选
    else{
      ifAllSel()
    }
  }
}
//判定是否所有的商品被选中
function ifAllSel(){
  var allsel=true
      for (let j = 0;j < document.querySelectorAll(".goods-sel-input").length;j++) {
        if(document.querySelectorAll(".goods-sel-input")[j].checked==false){
          allsel=false
        }
      }
      if (allsel==true){
        document.querySelector("#all-select").checked=true
        document.querySelector("#all-sel2").checked=true
      }
}

//按下+号，数量改变，小计改变，总价改变，自身选中状态改变。先改变对象存储的值，然后页面内容读取对象存储的值
for (let i = 0;i < document.querySelectorAll(".plus").length;i++) {
  document.querySelectorAll(".plus")[i].onclick=function(event){
    event.preventDefault()
    goodsArr[i].num++
    goodsArr[i].sel=true
    document.querySelectorAll(".goods-sel-input")[i].checked=true
    ifAllSel()
    document.querySelectorAll(".goods-num-span")[i].innerText=goodsArr[i].num
    document.querySelectorAll(".all-price-text")[i].innerText=(goodsArr[i].num*goodsArr[i].price).toFixed(2)
   getAllPrice()
  }
}
//按-号，和按+号 一样，能否合二为一？
for (let i = 0;i < document.querySelectorAll(".sub").length;i++) {
  document.querySelectorAll(".sub")[i].onclick=function(event){
    event.preventDefault()
    if (goodsArr[i].num>1) {
      goodsArr[i].num--
      goodsArr[i].sel=true
      document.querySelectorAll(".goods-sel-input")[i].checked=true
      ifAllSel()
      document.querySelectorAll(".goods-num-span")[i].innerText=goodsArr[i].num
      document.querySelectorAll(".all-price-text")[i].innerText=(goodsArr[i].num*goodsArr[i].price).toFixed(2)
      getAllPrice()
    }
  }
}
//计算总价方法
function getAllPrice(){
  var allPrice=0
  var selNum=0
  for (let j = 0;j < goodsArr.length;j++){
    allPrice=goodsArr[j].sel*goodsArr[j].num*goodsArr[j].price+allPrice
    selNum=goodsArr[j].sel*1+selNum
  }
  document.querySelector(".all-price3").innerText=allPrice.toFixed(2)
  document.querySelector(".sel-num").innerText=selNum
}

//初始化，模拟点击全选按钮
document.querySelector("#all-select").click()


document.querySelector(".shadow22").onclick=function(){
  for (let i = 0;i < document.querySelectorAll(".queren").length;i++){
    document.querySelectorAll(".queren")[i].classList.remove('show')
  }
  document.querySelector(".shadow22").classList.add('hid1')
}

//点击登陆按钮 打开弹窗
document.querySelector(".denglu").onclick=function (event){
  event.preventDefault()
  document.querySelector(".reg-shadow").classList.remove('hid1')
}
//验证手机号格式
function checkPhone(){
  var phone = document.querySelector('.phone-reg').value;
  if(!(/^1[34578]\d{9}$/.test(phone))){
    document.querySelector('.phone-err').innerText="手机号格式不正确"
    can=0
      return false;
  }else{
    can=1
    document.querySelector('.phone-err').innerText="　"
  }
}
document.querySelector('.phone-reg').onblur=function (){
  if (document.querySelector('.phone-reg').value.trim()) {
    checkPhone()
  }
}
//can=2时验证成功，可以登录  登陆时关闭阴影，改变文本
function loginSuccess(){
  if (can===2) {
    document.querySelector(".reg-shadow").classList.add('hid1')
    document.querySelector(".denglu-zhuce").innerHTML="<span style='color:#fff'>欢迎您</span>"
  }
  console.log(can)
}

//点击 去结算 按钮 判断，如果没登录先登录，否则跳转
document.querySelector(".go").onclick=function (event){
  if (can!==2) {
    event.preventDefault()
    document.querySelector(".reg-shadow").classList.remove('hid1')
  }
}

//点击全部删除按钮
document.querySelector('.delete2').onclick=function (event){
  event.preventDefault()
//显示图片
document.querySelector(".null-img").classList.remove('hid1')
//隐藏头尾
document.querySelector(".goods-title").classList.add('hid1')
document.querySelector(".buy").classList.add('hid1')
//隐藏中间所有
document.querySelector('.goods-parent').classList.add('hid1')
}


//事件委托
document.querySelector('.goods-parent').onclick=function (event){
  var tar =event.target
  //打开弹窗，是否确认删除
  if (tar.className==="delete") {
    tar.querySelector(".queren").classList.add('show')
    document.querySelector(".shadow22").classList.remove('hid1')
  }
  //点击不删除按钮
  else if (tar.className==="no-a") {
    tar.parentNode.classList.remove('show')  
    document.querySelector(".shadow22").classList.add('hid1')
    event.stopPropagation();
  }
  //点击确认删除按钮
  else if(tar.className==="queren-a"){
    var j=tar.getAttribute('data-index')
    tar.parentNode.classList.remove('show')
    var del=tar.parentNode.parentNode.parentNode
    document.querySelector(".goods-parent").removeChild(del)
    document.querySelector(".shadow22").classList.add('hid1')
    goodsArr.splice(goodsArr[j],1)
    getAllPrice()
    for (let i = 0;i < document.querySelectorAll('.queren-a').length;i++){
      document.querySelectorAll('.queren-a')[i].setAttribute('data-index', i)
    }
    document.querySelector(".all-num").innerText=document.querySelector(".all-num").innerText-1
    document.querySelector(".car-num").innerText=document.querySelector(".car-num").innerText-1
    event.stopPropagation();
  }
}