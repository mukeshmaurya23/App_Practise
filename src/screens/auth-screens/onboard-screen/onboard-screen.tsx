/*
This is welcome screen that is obboarding ascreen 
*/
import React, { useCallback } from 'react';
import { commonStyles, fontStyles } from '../../../styles'
import FastImage from 'react-native-fast-image'
import { AppLogo } from '../../../../assets/svg'
import { Colors, Images } from '../../../constants'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constants/responsive'
import { CustomButton, SplitText, TakeSpace } from '../../../components';
import { navigationHook } from '../../../hooks/navigation.hook';
import GoogleMaps from '../../../components/google-maps/google-maps';

const OnboardScreen = () => {
    const { navigateTo } = navigationHook();

    const HeaderImage = useCallback(() => (
        <View style={{ position: 'relative' }}>
            <FastImage
                source={Images.onBoardBanner}
                style={styles.imgStyle}
                resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.logoStyle}>
                <AppLogo />
            </View>
        </View>
    ), []);

    const WelcomeText = useCallback(() => (
        <View style={[commonStyles.centerJCAC, { rowGap: moderateScale(10) }]}>
            <Text style={[fontStyles.notoSansMedium14, { color: Colors.offBlack50 }]}>Welcome to</Text>
            <Text style={[fontStyles.notoSansSemiBold14, styles.holmeddocTxt]}>Holmeddoc</Text>
            <Text style={[fontStyles.notoSansRegular14, { color: Colors.offBlack75 }]}>Find and book the best doctors with ease</Text>
        </View>
    ), []);

    const renderOnboard = () => {
        return (
            <View>

                <HeaderImage />

                <TakeSpace space={moderateScale(40)} />

                <WelcomeText />

                <TakeSpace space={moderateScale(30)} />

                <CustomButton
                    label={'LOGIN'}
                    onPress={() => { navigateTo('Login') }}
                    paddingProp={moderateScale(14)}
                    customBtnStyle={[{ alignSelf: 'center' }]}
                />

                <TakeSpace space={moderateScale(15)} />

                <CustomButton
                    label={'REGISTER'}
                    onPress={() => { navigateTo('Register') }}
                    customBtnStyle={[{ alignSelf: 'center' }]}
                    extraCusBtnStyle={[commonStyles.transparentBtn]}
                    extraCusTxtStyle={[{ color: Colors.primaryColor }]}
                />
                <TakeSpace space={moderateScale(10)} />

                <SplitText text={'or'} />

                <TakeSpace space={moderateScale(10)} />

                <Pressable style={commonStyles.centerJCAC} onPress={() => navigateTo('DrawerStack')}>
                    <Text style={[fontStyles.notoSansMedium14, { color: Colors.secondaryColor }]}>Continue as a guest?</Text>
                </Pressable>
            </View>
        )
    };

    return (
        <View style={commonStyles._flexOneBg(Colors.offWhite)}>
            <FlatList
                data={[1]}
                bounces={false}
                renderItem={renderOnboard}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

export default OnboardScreen

const styles = StyleSheet.create({
    logoStyle: { position: 'absolute', bottom: moderateScale(-40), alignSelf: 'center' },
    imgStyle: { width: SCREEN_WIDTH, height: SCREEN_HEIGHT * (40 / 100) },
    holmeddocTxt: { fontSize: moderateScale(28) }
})