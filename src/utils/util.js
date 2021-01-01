const util = {
  // 将xxxx-xx-xx xx:xx:xx 的时间格式转为时间戳
  timeFormate: function (value) {
    var dateObj = new Date(parseInt(value)*1000).toLocaleString()
    return dateObj
  },
  // 时间转为时间戳
  Transdate(time){
    if(!time){
      return
    }
    var date = Date.parse(new Date(time))
    return Number(date) / 1000;
 },
  /*
 * 获取url参数
 * @param {String} name 参数名
 * @return {String}
 * */
  getURLParam(name) {
    let reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
    if (reg.test(window.location.href)) {
      return unescape(RegExp.$2.replace(/\+/g, " "))
    }
    return undefined
  },

}
export default util
