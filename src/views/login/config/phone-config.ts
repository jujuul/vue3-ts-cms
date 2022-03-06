// 编写规则
export const rules = {
  num: [
    {
      required: true,
      message: '手机号不可为空',
      trigger: 'blur'
    }
  ],
  validate: [
    {
      required: true,
      message: '验证码不可为空',
      trigger: 'blur'
    }
  ]
}
