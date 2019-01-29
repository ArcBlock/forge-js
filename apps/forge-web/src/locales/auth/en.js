module.exports = {
  form: {
    email: {
      label: 'Your Email',
      placeholder: 'Enter your email address',
      errorFormat: 'Your email is not valid',
      errorUsed: 'This email is already taken',
      errorSend: 'Email sent failed, please try later',
      tipVerified: 'Email already verified',
    },
    password: {
      label: 'Password',
      placeholder: 'Please enter your password',
      errorStrength:
        'Your password is too weak (length should between 8~20, and contains at least 1 upper/lower/digit char)',
      errorWrong: 'Password is incorrect.',
      errorEmpty: 'Password should not be empty',
      forgotTip: 'Forgot password?',
    },
    confirmPassword: {
      label: 'Confirm Password',
      placeholder: 'Please confirm your password',
      errorEmpty: 'Confirm password should not be empty',
      errorConfirm: 'Confirm password is not the same as password',
    },
    agreement: {
      error: 'You must agree with our terms',
    },
    mfa: {
      label: 'MFA Code',
      placeholder: 'Enter the 6 digit code from your MFA App',
      tip:
        'To login your account (<strong>{email}</strong>), please enter the 6 digital code from your MFA app.',
      errorEmpty: 'MFA code should not be empty',
    },
    token: {
      errorEmpty: 'Password reset token should not be empty',
    },
  },

  signup: {
    sendVerifyEmail: 'Send',
    checkVerifyEmail: 'We just sent you an email, please open your email to complete signup.',
    createAccount: 'Create Account',
    createSuccess: 'Account created! redirecting to login page...',
    submit: 'Sign up',
    title: 'Create your ArcBlock Account',
    subtitle: 'Please enter your email address to get an verification email.',
    agreement: `
      By signing up you agree to the
      <a href="https://www.arcblock.io/termofuse" target="_blank">
        Terms of Service
      </a>
      and
      <a href="https://www.arcblock.io/privacy" target="_blank">
        Privacy Policy
      </a>
    `,
  },
  login: {
    submit: 'Login',
    haveAccount: 'Have an Account?',
    needAccount: 'Need an Account?',
    title: 'Login to ArcBlock Developer Console',
    oneMoreStep: 'One more step...',
    success: 'Login success! Redirecting to {redirect}...',
  },

  resetPassword: {
    title: 'Reset Password for ArcBlock Account',
    securityTip: 'Set a new password and keep it safe!',
    emailTip: 'Enter your ArcBlock account email to receive password reset instructions.',
    emailSentTip: 'We just sent you an email, please open that email to complete password reset.',
    updatePassword: 'Update',
    sendEmail: 'Send',
    noEmail: 'Resend Email',
    success: 'Password reset success! redirecting to login page...',
    tokenVerifiedTip: 'Email Verified Successfully!',
    tokenVerifyingTip: 'Verifying Email Token...',
  },
};
