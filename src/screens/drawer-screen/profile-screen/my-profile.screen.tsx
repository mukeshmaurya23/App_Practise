import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { BackArrowSvg } from '../../../../assets/svg'
import { CustomButton, Header, InputFieldBox, TakeSpace } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { helpers } from '../../../utility/helpers'
import { Colors, Images } from '../../../constants'
import { moderateScale } from 'react-native-size-matters'
import { commonStyles, fontStyles } from '../../../styles'
import { SCREEN_WIDTH } from '../../../constants/responsive'
import { Dropdown } from 'react-native-element-dropdown'
import FastImage from 'react-native-fast-image'
import { navigationHook } from '../../../hooks/navigation.hook'
const MyProfile = () => {
    const { navigateTo } = navigationHook()
    const genderData = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' }
    ]
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label='My Profile'
                headText=''
                icon={BackArrowSvg}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={[{ paddingHorizontal: moderateScale(16), backgroundColor: Colors.offWhite }]} scrollEnabled={true}>
                <View style={{ alignSelf: "center", paddingVertical: moderateScale(36) }}>
                    <FastImage
                        source={Images.profileImage}
                        style={{
                            width: moderateScale(100),
                            height: moderateScale(100),
                            borderRadius: moderateScale(20)
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                </View>
                <InputFieldBox
                    label={"Name"}
                    placeHolder=''
                    keyBoardType="default"
                    value={"Mukesh Maurya"}
                    inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack85)}
                    rootStyle={{ paddingTop: moderateScale(10), }}
                    labelStyle={fontStyles.notoSansMedium12}
                    placeholderTextColor={Colors.offBlack50}
                />
                <InputFieldBox
                    label={"Phone Number"}
                    placeHolder=''
                    keyBoardType="number-pad"
                    isPhoneNo
                    inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack85)}
                    value={"1234567890"}
                    rootStyle={{ paddingTop: moderateScale(10), }}
                    labelStyle={fontStyles.notoSansMedium12}
                    placeholderTextColor={Colors.offBlack50}
                />
                <View style={[commonStyles.flexRow, { columnGap: moderateScale(12) }]}>
                    <View style={{ width: '48%' }}>
                        <InputFieldBox
                            label={"Age"}
                            placeHolder=''
                            inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack85)}
                            keyBoardType="number-pad"
                            value={"23"}
                            rootStyle={{ paddingTop: moderateScale(10), }}
                            labelStyle={fontStyles.notoSansMedium12}
                            placeholderTextColor={Colors.offBlack50}
                        />
                    </View>
                    <View style={{ width: '48%', paddingTop: moderateScale(10) }}>
                        <Text style={styles.fieldTxt}>Gender</Text>
                        <Dropdown
                            style={[styles.dropdownTest]}
                            placeholderStyle={[fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack85)]}
                            selectedTextStyle={[fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack85)]}
                            //activeColor={Colors.offBlack85}
                            itemTextStyle={fontStyles.notoSansRegular12}
                            data={genderData}
                            dropdownPosition='auto'
                            search={false}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={"Select"}
                            value={'Male'}
                            onChange={item => { }}
                            showsVerticalScrollIndicator={false}
                            flatListProps={{ nestedScrollEnabled: false, }}
                            iconStyle={{ tintColor: Colors.secondaryColor }}
                        />
                    </View>
                </View>
                <InputFieldBox
                    label={"Email Address"}
                    placeHolder=''
                    keyBoardType="default"
                    value={"abc@gmail.com"}
                    inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack85)}
                    rootStyle={{ paddingTop: moderateScale(10), }}
                    labelStyle={fontStyles.notoSansMedium12}
                    placeholderTextColor={Colors.offBlack50}
                />
                <InputFieldBox
                    label={"Address"}
                    placeHolder=''
                    inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack85)}
                    isMultiLine={true}
                    editable={false}
                    keyBoardType="default"
                    value={"407) 201-8596 3627 Weatherfield Dr Kissimmee, Florida(FL), 34746"}
                    rootStyle={{ paddingTop: moderateScale(10), }}
                    labelStyle={fontStyles.notoSansMedium12}
                    placeholderTextColor={Colors.offBlack75}
                />


                <TakeSpace space={moderateScale(50)} />
            </ScrollView>
            <View style={[commonStyles.sbtBtn, {
                bottom: 0,
            }]}>
                <CustomButton
                    label={"Edit Profile"}
                    btnWidth={'100%'}
                    extraCusTxtStyle={[fontStyles.notoSansMedium14, { color: Colors.offWhite }]}
                    onPress={() => navigateTo('DrawerScreen', { screen: "EditProfile" })}
                    extraCusBtnStyle={[{ borderRadius: 0 }]}
                    paddingProp={moderateScale(12, 0.5)}
                />
            </View>

        </>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    fieldTxt: {
        ...fontStyles.notoSansMedium12,
        paddingVertical: moderateScale(6),
        paddingLeft: moderateScale(4),
    },
    dropdownTest: {
        height: helpers.isIos ? moderateScale(46) : moderateScale(48),
        width: SCREEN_WIDTH * 0.44,
        backgroundColor: Colors.offBlack5,
        paddingHorizontal: moderateScale(8),
        borderRadius: moderateScale(4), borderWidth: moderateScale(0.8),
        borderColor: Colors.offBlack5
    },
    placeHolder: { ...fontStyles.notoSansSemiBold12, marginLeft: moderateScale(6), color: Colors.offBlack50 }
})