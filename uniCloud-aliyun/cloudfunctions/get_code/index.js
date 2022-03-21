'use strict';
exports.main = async (event, context) => {
  const { phone } = event
  const currentNumber = Math.random().toString().substr(2,6)
  //没有签名，短信无法使用
  // try {
      // const res = await uniCloud.sendSms({
      //   appid: '__UNI__C460A03', 
      //   smsKey: '****************',  //签名
      //   smsSecret: '****************',
      //   phone,
      //   templateId: '100**', // 请替换为自己申请的模板id
      //   data: {
      //     code:currentNumber,
      //     expMinute: 1,
      //   }
      // })
      // 调用成功，请注意这时不代表发送成功
      return{
		  code: 0,
		  data: {
			  msg: '请在手机上注意查收验证码',
			  mobileCode: currentNumber,
		  }
	  }
    // } catch(err) {
    //   // 调用失败
    //   return {
    //     code: 0,
    //     msg: '发送失败'
    //   }
    // }
};
