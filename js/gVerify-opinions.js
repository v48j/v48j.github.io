var verifyCode = new GVerify("v_container")
document.getElementById("my_button").onclick = function(event) {
  var res = verifyCode.validate(document.getElementById("code_input").value)
  if (res) {
    // alert("验证正确")
    can++
    event.preventDefault()
    loginSuccess()
  } else {
    document.querySelector('.yanzheng-err').innerText="验证码不正确"
  }
}
