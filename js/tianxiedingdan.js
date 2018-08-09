var canadd = []
document.querySelector(".input1").value = ""
document.querySelector(".input2").value = ""
document.querySelector(".input4").value = ""
var peoArr = []
var nn=-1
var pagenum=3
function Peo(name, sheng,shi,qu, add2, dianhua) {
  this.name = name
  this.add1 = [sheng,shi,qu]
  this.add2 = add2
  this.dianhua = dianhua
}
peoArr[0] = new Peo(
  "阿不来提·阿不都热西提",
  "65","6527","652701",
  "塔格特90团乎热郭木村9连5区13号",
  "18612345149"
)
peoArr[1] = new Peo(
  "买买提·艾力",
  "65","6540","654025",
  "那拉提镇农场科勒布拉克村二组",
  "15945671136"
)
peoArr[2] = new Peo(
  "迪里木拉提",
  "65","6540","654003",
  "乌鲁木齐西路56园72幢1单元1103号",
  "18687870734"
)
peoArr[3] = new Peo(
  "王女士",
  "65","6540","654003",
  "乌鲁木齐西路56园72幢1单元1103号",
  "18687870734"
)
peoArr[4] = new Peo(
  "张先生",
  "65","6540","654003",
  "乌鲁木齐西路56园72幢1单元1103号",
  "18687870734"
)

//点击 显示更多  移除hid  给自己添加hid
document.querySelector(".show-more").onclick = function(event) {
  event.preventDefault()
  for (
    let i = 0;
    i < document.querySelectorAll(".receive-people").length;
    i++
  ) {
    document.querySelectorAll(".receive-people")[i].classList.remove("hid")
  }
  this.classList.add("hid")
}

//事件委托，为按钮添加绑定事件
document.querySelector(".receive-all").onclick = function(event) {
  var tar = event.target
  if (tar.className === "receive-people") {
    for (
      let j = 0;
      j < document.querySelectorAll(".receive-people").length;
      j++
    ) {
      document
        .querySelectorAll(".receive-people")
        [j].classList.remove("active1")
    }
    tar.classList.add("active1")
  } 
  else if (tar.tagName == "P" || tar.tagName == "A") {
    for (
      let j = 0;
      j < document.querySelectorAll(".receive-people").length;
      j++
    ) {
      document
        .querySelectorAll(".receive-people")
        [j].classList.remove("active1")
    }
    tar.parentNode.parentNode.classList.add("active1")
    //如果点击编辑按钮，打开弹窗，把对应的值放入进去
    if (tar.className == "bianji") {
      nn=tar.getAttribute('data-index')
      console.log(nn)
      document.querySelector(".reg-shadow").classList.remove("hid3")
      document.querySelector(".input1").value = peoArr[nn].name
      document.querySelector(".input2").value = peoArr[nn].dianhua
      document.querySelector(".input4").value = peoArr[nn].add2
      document.querySelector("#province").value = peoArr[nn].add1[0]
      changeSelect(document.getElementById("province"))
      document.querySelector("#city").value = peoArr[nn].add1[1]
      changeSelect(document.getElementById("city"))
      document.querySelector("#district").value = peoArr[nn].add1[2]
      changeSelect(document.getElementById("district"))
    }
    }
    else if(tar.className == "shanchu"){
      for (let j = 0;j < document.querySelectorAll(".receive-people").length;j++) {
        document.querySelectorAll(".receive-people")[j].classList.remove("active1")
      }
      tar.parentNode.parentNode.classList.add("active1")
      tar.querySelector('.queren').classList.add('show')
      document.querySelector(".shadow22").classList.remove('hid3')
  }
}

//点击遮罩层 关闭确认删除按钮
document.querySelector(".shadow22").onclick=function(){
  for (let i = 0;i < document.querySelectorAll(".queren").length;i++){
    document.querySelectorAll(".queren")[i].classList.remove('show')
  }
  document.querySelector(".shadow22").classList.add('hid3')
}
//点击发票信息按钮 切换class
document.querySelector(".bukai").onclick = function(event) {
  event.preventDefault()
  active(this, "pay-a-active")
  document.querySelector('.people-name').classList.add('hid4')
  document.querySelector('.save').classList.add('hid4')
}
document.querySelector(".kai").onclick = function(event) {
  event.preventDefault()
  active(this, "pay-a-active")
  document.querySelector('.people-name').classList.remove('hid4')
  document.querySelector('.save').classList.remove('hid4')
}
//按下新增地址按钮，为reg-shadow删除hid3,清空表单
document.querySelector(".add-receive").onclick = function(event) {
  event.preventDefault()
  document.querySelector(".input1").value = ""
  document.querySelector(".input2").value = ""
  document.querySelector(".input4").value = ""
  document.querySelector("#province").value = 11
      changeSelect(document.getElementById("province"))
      document.querySelector("#city").value = 1101
      changeSelect(document.getElementById("city"))
      document.querySelector("#district").value = 110101
      changeSelect(document.getElementById("district"))
  document.querySelector(".reg-shadow").classList.remove("hid3")
}
//按下关闭按钮，为reg-shadow增加hid3
document.querySelector(".close-reg").onclick = function(event) {
  document.querySelector(".reg-shadow").classList.add("hid3")
}
//input 失去焦点时 检测  值是否是空或者只有空格  如果是，则提示错误信息，正确的话？？？
document.querySelector(".input1").onblur = function() {
  if (this.value.trim() === "") {
    document.querySelector(".err1").classList.remove("hid3")
  } else {
    document.querySelector(".err1").classList.add("hid3")
    canadd[0] = 1
  }
}

document.querySelector(".input2").onblur = function() {
  if (!(/^1[34578]\d{9}$/.test(this.value.trim()))) {
    document.querySelector(".err2").classList.remove("hid3")
  } else {
    document.querySelector(".err2").classList.add("hid3")
    canadd[1] = 1
  }
}

document.querySelector(".input4").onblur = function() {
  if (this.value.trim() === "") {
    document.querySelector(".err4").classList.remove("hid3")
    this.setAttribute("placeholder", "请填写详细地址！")
  } else {
    document.querySelector(".err4").classList.add("hid3")
    canadd[2] = 1
  }
}

document.querySelector(".input4").onfocus = function() {
  this.setAttribute("placeholder", "")
}
//为每个按钮添加active
document.querySelectorAll(".bieming-btn")[0].onclick = function() {
  active(this, "bieming-btn-active")
}
document.querySelectorAll(".bieming-btn")[1].onclick = function() {
  active(this, "bieming-btn-active")
}
document.querySelectorAll(".bieming-btn")[2].onclick = function() {
  active(this, "bieming-btn-active")
}
//按下保存按钮 获取input内的值 并生成对应的dom元素插入到html中
document.querySelector(".save-add").onclick = function() {
  var sheng = placesMap[document.querySelector("#province").value + "0000"]
  var shi = placesMap[document.querySelector("#city").value + "00"]
  var qu = placesMap[document.querySelector("#district").value]
  console.log(document.querySelector("#province").value,document.querySelector("#city").value,document.querySelector("#district").value)
  if (nn!=-1) {
    canadd[0]=1
    canadd[1]=1
    canadd[2]=1
  }
  if (canadd[0] == 1 && canadd[1] == 1 && canadd[2] == 1) {
    //先把这些值传入到对象中，再改变文本值
    //nn存在时，即点击编辑按钮打开菜单时，修改对应数组
    if (nn!=-1) {
      peoArr[nn].name=document.querySelector(".input1").value
      peoArr[nn].dianhua=document.querySelector(".input2").value
      peoArr[nn].add2=document.querySelector(".input4").value
      peoArr[nn].add1=[document.querySelector("#province").value,document.querySelector("#city").value,document.querySelector("#district")]
      //修改文本值
      document.querySelectorAll(".receive-name")[nn].innerText=peoArr[nn].name
      document.querySelectorAll(".receive-dianhua")[nn].innerText=peoArr[nn].dianhua.substr(0,3)+"****"+peoArr[nn].dianhua.substr(7)
      document.querySelectorAll(".receive-dizhi")[nn].innerText=sheng+shi+qu+peoArr[nn].add2
      document.querySelector(".reg-shadow").classList.add("hid3")
    } else{
      nn=peoArr.length
      peoArr[nn]=new Peo()
      peoArr[nn].name=document.querySelector(".input1").value
      peoArr[nn].dianhua=document.querySelector(".input2").value
      peoArr[nn].add2=document.querySelector(".input4").value
      peoArr[nn].add1=[document.querySelector("#province").value,document.querySelector("#city").value,document.querySelector("#district")]
    
    //生成一个新的dom插入到html中
    var ele = document.createElement("div")
    ele.className = "receive-people"
    ele.innerHTML = ` <div>
    <p style="background:url(../img/tianxiedingdan/bg-3.png) no-repeat 2px -158px">${
      document.querySelector(".input1").value
    }</p>
    <p style="background:url(../img/tianxiedingdan/bg-3.png) no-repeat 2px -24px">${sheng +
      shi +
      qu +
      document.querySelector(".input4").value}</p>
    <p style="background:url(../img/tianxiedingdan/bg-3.png) no-repeat 2px -51px">${
      document.querySelector(".input2").value.substr(0,3)+"****"+document.querySelector(".input2").value.substr(7)
    }</p>
  </div>

  <div class="receive-people-right">
    <a href="javascript:void(0);">设为默认</a>
    <a href="javascript:void(0);" style="background:url(../img/tianxiedingdan/bg-3.png) no-repeat 2px -135px;padding-left:22px">编辑</a>
    <div class="shanchu" style="background:url(../img/tianxiedingdan/bg-3.png) no-repeat 2px -108px;padding-left:22px">删除<div class="queren">
                    <a onclick="shanchu()" href="javascript:void(0);" class="queren-a">确认删除</a>
                    <a onclick="bushanchu()" href="javascript:void(0);" class="no-a">不删除</a>
                    <div class="sanjiao"></div>
                  </div></div>
  </div>
  `
    document.querySelector(".receive-all").insertBefore(ele, document.querySelector(".receive-people"))
    document.querySelector(".reg-shadow").classList.add("hid3")
    nn=-1;
  }
  }
}


//点击不删除按钮
function bushanchu(){
  for (let i = 0;i < document.querySelectorAll(".queren").length;i++){
    document.querySelectorAll(".queren")[i].classList.remove('show')  
  }
  document.querySelector(".shadow22").classList.add('hid3')
  event.stopPropagation();
}
//点击删除按钮
function shanchu(){
  event.stopPropagation();
  var tar =event.target
  var del=tar.parentNode.parentNode.parentNode.parentNode
  var num=tar.parentNode.parentNode.parentNode.querySelector('.bianji').getAttribute('data-index')
  peoArr.splice(num,1)
  tar.parentNode.classList.remove('show')
  del.parentNode.removeChild(del)
  document.querySelector(".shadow22").classList.add('hid3')
  
  //遍历，重新给dom元素赋值
  for (let i = 0;i < document.querySelectorAll('.bianji').length;i++){
    document.querySelectorAll('.bianji')[i].setAttribute('data-index', i)
  }


  
    for (let i = 0;i < document.querySelectorAll('.receive-people').length;i++){
      if(i<3){
        document.querySelectorAll('.receive-people')[i].classList.remove('hid')
      }
    }
    if (peoArr.length<4) {
      document.querySelector('.show-more').classList.add('hid')
    }
    console.log(peoArr)
}

