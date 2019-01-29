module.exports = {
  form: {
    email: {
      label: '邮箱',
      placeholder: '请输入邮箱',
      errorFormat: '输入的邮箱不合法',
      errorUsed: '该邮箱已被使用',
      errorSend: '邮件发送失败，请稍后重试',
      tipVerified: '邮箱已验证',
    },
    password: {
      label: '密码',
      placeholder: '请输入密码（8~20位，必须包含大小写字母、数字、特殊符号）',
      errorStrength: '请输入满足强度要求的密码（8~20位，必须包含大小写字母、数字、特殊符号）',
      errorWrong: '密码不正确，',
      errorEmpty: '密码不能为空',
      forgotTip: '忘记密码？',
    },
    confirmPassword: {
      label: '确认密码',
      placeholder: '请确认密码',
      errorEmpty: '确认密码不能为空',
      errorConfirm: '确认密码必须与密码相同',
    },
    agreement: {
      error: '您必须同意我们的服务和隐私条款',
    },
    mfa: {
      label: 'MFA 验证码',
      placeholder: '请输入 6 位数字的验证码',
      tip:
        '为保障账户（<strong>{email}</strong>）的安全，请输入 Google Authenticator 上的 6 位数字验证码。',
      errorEmpty: 'MFA 验证码不能为空',
    },
    token: {
      errorEmpty: '充值密码的凭据为空',
    },
  },

  signup: {
    sendVerifyEmail: '发送邮件',
    checkVerifyEmail:
      '我们给您的邮箱 <strong>{email}</strong> 发送了一封邮件，请登录邮箱以完成注册。<br/><strong>友情提示</strong>：邮件可能会被误判为垃圾邮件，如果收件箱没有，记得去垃圾箱看看哦！',
    createAccount: '创建账户',
    createSuccess: '账户创建成功，即将跳转至登录页...',
    submit: '注册',
    title: '创建 ArcBlock 账户',
    subtitle: '请输入您的邮箱，我们会发送发送账户验证信息到您的邮箱',
    agreement: `
      同意 ArcBlock
      <a href="https://www.arcblock.io/termofuse" target="_blank">
        服务条款
      </a>
      和
      <a href="https://www.arcblock.io/privacy" target="_blank">
        隐私条款
      </a>
    `,
  },

  login: {
    submit: '登录',
    haveAccount: '已有账户？',
    needAccount: '还没账户？',
    title: '登录 ArcBlock 开发者控制台',
    oneMoreStep: '还差一步...',
    success: '登录成功！即将跳转至{redirect}...',
  },

  resetPassword: {
    title: '重置 ArcBlock 账户密码',
    securityTip: '请妥善保存设置的新密码！',
    emailTip: '请输入 ArcBlock 账户的邮箱，我们会发送密码重置步骤到此邮箱',
    emailSentTip:
      '密码重置邮件已经发送到您的邮箱 <strong>{email}</strong>，请登录邮箱完成密码重置。<br/><strong>友情提示</strong>：邮件可能会被误判为垃圾邮件，如果收件箱没有，记得去垃圾箱看看哦！',
    updatePassword: '重置密码',
    sendEmail: '发送邮件',
    noEmail: '还是没收到邮件？',
    success: '密码重置成功，即将跳转到登录界面...',
    tokenVerifiedTip: '邮箱验证成功',
    tokenVerifyingTip: '操作环境安全检查中...',
  },
};
