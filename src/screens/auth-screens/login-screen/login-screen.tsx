/*
This is used to login the user 
*/
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles, fontStyles } from '../../../styles'
import { Colors, Images } from '../../../constants'
import AuthBody from '../components/auth-body'
import { moderateScale } from 'react-native-size-matters'
import { CustomCheckBox, InputFieldBox, TakeSpace } from '../../../components'
import { CloseEye, OpenEye } from '../../../../assets/svg'
import { useLogin } from './login.hook'


const LoginScreen = () => {

  const { showPassword, togglePassword, navigateBack, navigateTo, isCheck, setIsCheckd, handleLoginPress, checkboxRef,toggleCheckBox } = useLogin()

  const LoginBody = () => {
    return (
      <View style={{ rowGap: moderateScale(15) }}>
        <View>
          <InputFieldBox
            label='Phone number'
            placeHolder='XXX XXX XXXX'
            isPhoneNo keyBoardType='number-pad'
          />
        </View>
        <View>
          <InputFieldBox
            label='Password'
            value={'102939423487'}
            placeHolder='Enter your password'
            secureTextEntry={!showPassword}
            Icon={showPassword ? OpenEye : CloseEye}
            onPress={togglePassword}
          />
          <Pressable style={styles.forPassStyle} onPress={() => navigateTo('ForgotPassword')}>
            <Text style={[styles.fieldTxt, { color: Colors.secondaryColor }]} >Forgot Password?</Text>
          </Pressable>
        </View>
      </View>
    )
  };

  const renderLogin = () => {
    return (
      <>
        <AuthBody
          banner={Images.loginBanner}
          subHeadTxt='Welcome Back, Health Seeker!'
          headTxt='Login'
          bodyTxt=''
          btnLabel='LOGIN'
          bottmTxt='Do not have an account?'
          bottmTxt2='Register'
          onPressBottTxt={() => navigateTo('Register')}
          children={<LoginBody />}
          onPress={handleLoginPress}
          spacing={moderateScale(20)}
          OnPressBack={navigateBack}
        />
        <Pressable style={[styles.termsTxt]} onPress={toggleCheckBox} >
          <View style={{ paddingTop: moderateScale(3) }}>
            <CustomCheckBox onPress={toggleCheckBox} selected={isCheck} />
          </View>
          <Text style={[fontStyles.notoSansRegular12, { color: Colors.offBlack75 }]}>
            I have read the Privacy Policy and agree to the Terms of Service.
          </Text>
        </Pressable>
        <TakeSpace space={moderateScale(10)} />
      </>
    )
  };

  return (
    <View style={commonStyles._flexGrowBg(Colors.offWhite)}>
      <FlatList
        data={[1]}
        bounces={false}
        renderItem={renderLogin}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  fieldTxt: { ...fontStyles.notoSansSemiBold12, paddingVertical: moderateScale(6), paddingLeft: moderateScale(4) },
  forPassStyle: { alignSelf: "flex-end", paddingTop: moderateScale(3) },
  termsTxt: { flexDirection: 'row', paddingHorizontal: moderateScale(16), columnGap: moderateScale(2), width: '95%' }
})