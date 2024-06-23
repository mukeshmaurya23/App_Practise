/*
This is used to reset the password 
*/ 
import React from 'react'
import { FlatList, View } from 'react-native'
import { commonStyles } from '../../../styles'
import { Colors, Images } from '../../../constants'
import AuthBody from '../components/auth-body'
import { moderateScale } from 'react-native-size-matters'
import { InputFieldBox, TakeSpace } from '../../../components'
import { useResetPasswrod } from './reset-password.hook'
import { CloseEye, OpenEye } from '../../../../assets/svg'



const ResetPassword = () => {

    const { navigateTo, showCnfPassword, showPassword, toggleCnfPassword, togglePassword } = useResetPasswrod();

    const ResetPasswordBody = () => {
        return (
            <View style={{}}>
                <TakeSpace space={moderateScale(15)} />
                <View>
                    <InputFieldBox
                        label="Password"
                        value="102939423487"
                        placeHolder="Enter your password"
                        secureTextEntry={!showPassword}
                        Icon={showPassword ? OpenEye : CloseEye}
                        onPress={togglePassword}
                    />
                </View>
                <View>
                    <InputFieldBox
                        label="Confirm Password"
                        value="102939423487"
                        placeHolder="Enter your password"
                        secureTextEntry={!showCnfPassword}
                        Icon={showCnfPassword ? OpenEye : CloseEye}
                        onPress={toggleCnfPassword}
                    />
                </View>
            </View>
        )
    };

    const renderResetPassword = () => {

        return (
            <AuthBody
                banner={Images.forgotPasswordBanner}
                subHeadTxt='Reset'
                headTxt='Update Password'
                bodyTxt='Please enter a new and strong password'
                btnLabel='Update'
                children={<ResetPasswordBody />}
                onPress={() => { navigateTo('DrawerStack',{screen:'Home'}) }}
                spacing={moderateScale(40)}
            />
        )
    };

    return (
        <View style={commonStyles._flexGrowBg(Colors.offWhite)}>
            <FlatList
                data={[1]}
                bounces={false}
                renderItem={renderResetPassword}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ResetPassword;
