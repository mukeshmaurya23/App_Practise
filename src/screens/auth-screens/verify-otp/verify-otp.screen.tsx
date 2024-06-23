
/*
This is used to verify otp for forgot password and register new user  also
*/
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles, fontStyles } from '../../../styles'
import { Colors, Images } from '../../../constants'
import AuthBody from '../components/auth-body'
import { moderateScale } from 'react-native-size-matters'
import { useVerifyOtp } from './verify-otp.hook'
import { OtpInputBox, TakeSpace } from '../../../components'


const VerifyOtp = () => {
  const { navigateTo, navigateBack, otpRef, handleInputChange, handleKeyPress, otp, isFormForgotPass } = useVerifyOtp()


  const OtpBody = () => {
    return (
      <View style={{}}>
        <TakeSpace />
        <OtpInputBox
          numDigits={6}
          otp={otp}
          showTimer
          handleInputChange={handleInputChange}
          handleKeyPress={handleKeyPress}
          inputRefs={otpRef}
        />
      </View>
    )
  };

  const renderVerify = () => {

    return (
      <>
        <AuthBody
          banner={isFormForgotPass ? Images.forgotPasswordBanner : Images.verifyOtpbanner}
          subHeadTxt='Verify'
          headTxt='OTP'
          bodyTxt='Enter 6 digit verification code sent to your mobile number +1 XXXXX XXX25'
          btnLabel='Proceed'
          bottmTxt='Didn’t receive? '
          bottmTxt2='Resend'
          onPressBottTxt={() => navigateTo('Register')}
          children={<OtpBody />}
          onPress={() => { navigateTo(isFormForgotPass ? 'ResetPassword' : 'DrawerStack',{screen:'Home'}) }}
          spacing={moderateScale(30)}
          OnPressBack={navigateBack}
        />
      </>
    )
  };

  return (
    <View style={commonStyles._flexGrowBg(Colors.offWhite)}>
      <FlatList
        data={[1]}
        bounces={false}
        renderItem={renderVerify}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default VerifyOtp;

const styles = StyleSheet.create({
  fieldTxt: { ...fontStyles.notoSansSemiBold12, paddingVertical: moderateScale(6), paddingLeft: moderateScale(4) },
})