//函数功能，为自己添加一个class，移除兄弟元素class名
function active(obj, cla) {
  var oldName = obj.className
  //移除兄弟的cla名字
  var objTag = obj.tagName
  var allArr = obj.parentNode.getElementsByTagName(obj.tagName.toLowerCase())
  for (let i = 0; i < allArr.length; i++) {
    allArr[i].classList.remove(cla)
  }
  //为自己添加新名字
  obj.classList.add(cla)
}
