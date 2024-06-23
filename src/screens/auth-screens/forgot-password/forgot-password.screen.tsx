/*
This is used to send otp to number to reset password 
*/ 
import React from 'react'
import { FlatList, View } from 'react-native'
import { commonStyles } from '../../../styles'
import { Colors, Images } from '../../../constants'
import AuthBody from '../components/auth-body'
import { moderateScale } from 'react-native-size-matters'
import { InputFieldBox, TakeSpace } from '../../../components'
import { useForgotPass } from './forgot-pass.hook'


const ForgotPassword = () => {

    const { navigateTo } = useForgotPass();

    const ForgotPasswordBody = () => {
        return (
            <View style={{}}>
                <TakeSpace space={moderateScale(15)} />
                <InputFieldBox
                    label="Phone"
                    placeHolder="XXX XXX XXXX"
                    keyBoardType="number-pad"
                    isPhoneNo
                />
            </View>
        )
    };

    const renderForgotPassowrd = () => {

        return (
            <AuthBody
                banner={Images.forgotPasswordBanner}
                subHeadTxt='Need help?'
                headTxt='Trouble Logging In?'
                bodyTxt='Please provide your mobile number to get a OTP code '
                btnLabel='Proceed'
                children={<ForgotPasswordBody />}
                onPress={() => { navigateTo('VerifyOtp', { isFormForgotPass: true }) }}
                spacing={moderateScale(40)}
            />
        )
    };

    return (
        <View style={commonStyles._flexGrowBg(Colors.offWhite)}>
            <FlatList
                data={[1]}
                bounces={false}
                renderItem={renderForgotPassowrd}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ForgotPassword;
