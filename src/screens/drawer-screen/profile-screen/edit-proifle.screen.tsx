import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackArrowSvg, BackGroundLine, DropwDownSvgDown, EditPencilIconSvg, OutlineCalender } from '../../../../assets/svg'
import { CustomButton, Header, InputFieldBox, TakeSpace } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { helpers } from '../../../utility/helpers'
import { Colors, Images } from '../../../constants'
import { moderateScale } from 'react-native-size-matters'
import { useEditProfile } from './edit-profile.hooks'
import FastImage from 'react-native-fast-image'
import CustomModal from '../../../components/custom-modal/custom-modal'
import ImagePickerModal from '../../../components/modals/image-picker-modal'
import { commonStyles, fontStyles } from '../../../styles'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constants/responsive'
import { Dropdown } from 'react-native-element-dropdown'
import DatePicker from 'react-native-modern-datepicker';
import Modal from 'react-native-modal';
const genderData = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
]
const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];
const EditProfile = () => {
    const { imagePicked, openCamera, openGallery, openImgPicker, setOpenImgPicker, open, setOpen, selectedInsurance, setSelectedInsurance, selectCity, setSelectCity, selectedState, setSelectedState } = useEditProfile()
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label='Edit Profile'
                headText=''
                icon={BackArrowSvg}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={[{ backgroundColor: Colors.offWhite, flex: 1 }]} scrollEnabled={true}>
                <View style={{ paddingHorizontal: moderateScale(16) }}>
                    <View style={{ alignSelf: "center", paddingVertical: moderateScale(26), position: "relative" }}>
                        {
                            imagePicked.uri ? (
                                <FastImage
                                    source={{ uri: imagePicked.uri }}
                                    style={{
                                        width: moderateScale(130),
                                        height: moderateScale(130),
                                        borderRadius: moderateScale(60),
                                    }} />
                            ) : <FastImage
                                source={Images.profileImage}
                                style={{
                                    width: moderateScale(130),
                                    height: moderateScale(130),
                                    borderRadius: moderateScale(20)
                                }}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                        }
                        <Pressable style={{ position: "absolute", top: moderateScale(124), left: moderateScale(90) }} onPress={() => setOpenImgPicker(true)}>
                            <EditPencilIconSvg />
                        </Pressable>
                    </View>
                    <View>
                        <InputFieldBox
                            label={"Name"}
                            placeHolder='Enter your name'
                            keyBoardType="default"
                            value={""}
                            inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack85)}
                            rootStyle={{ paddingTop: moderateScale(10), }}
                            labelStyle={fontStyles.notoSansMedium12}
                            placeholderTextColor={Colors.offBlack50}
                        />
                    </View>
                    <InputFieldBox
                        label={"Phone Number"}
                        placeHolder='XXX XXX XXXX'
                        keyBoardType="number-pad"
                        isPhoneNo
                        inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack85)}
                        value={""}
                        rootStyle={{ paddingTop: moderateScale(10), }}
                        labelStyle={fontStyles.notoSansMedium12}
                        placeholderTextColor={Colors.offBlack50}
                    />
                    <TakeSpace space={moderateScale(4)} />
                    <View style={[commonStyles.flexRow, { columnGap: moderateScale(12) }]}>
                        <View style={{ width: '48%' }}>
                            <Text style={styles.fieldTxt}>Birthdate</Text>
                            <InputFieldBox
                                label={''}
                                placeHolder={"MM/DD/YYYY"}
                                keyBoardType="default"
                                value={''}
                                inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(14), Colors.offBlack75)}
                                rootStyle={{ height: helpers.isIos ? moderateScale(46) : moderateScale(50), paddingHorizontal: moderateScale(0) }}
                                labelStyle={fontStyles.notoSansRegular12}
                                onPress={() => { setOpen(true) }}
                                onChangeText={(value) => { }}
                                placeholderTextColor={Colors.offBlack50}
                                Icon={OutlineCalender}
                            />

                        </View>
                        <View style={{ width: '48%' }}>
                            <Text style={styles.fieldTxt}>Gender</Text>
                            <Dropdown
                                style={[styles.dropdownTest]}
                                placeholderStyle={[fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack50), { paddingLeft: moderateScale(6) }]}
                                selectedTextStyle={[fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack75)]}
                                //activeColor={Colors.offBlack25}
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
                        placeHolder='Enter your email address'
                        keyBoardType="default"
                        value={""}
                        inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack85)}
                        rootStyle={{ paddingTop: moderateScale(10), }}
                        labelStyle={fontStyles.notoSansMedium12}
                        placeholderTextColor={Colors.offBlack50}
                    />
                    <TakeSpace space={moderateScale(4)} />
                    <Text style={styles.fieldTxt}>Insurance</Text>
                    <Dropdown
                        style={[styles.dropdownTest]}
                        placeholderStyle={[fontStyles.notoSansRegular12, { color: Colors.offBlack, opacity: 0.75, marginLeft: moderateScale(6) }]}
                        selectedTextStyle={[fontStyles.notoSansRegular12, { color: Colors.offBlack, opacity: 0.75 }]}
                        activeColor={Colors.offBlack5}
                        itemTextStyle={fontStyles.notoSansRegular12}
                        data={data}
                        search={false}
                        renderRightIcon={DropwDownSvgDown}
                        labelField="label"
                        valueField="value"
                        placeholder={"Select"}
                        value={selectedInsurance}
                        onChange={(item: any) => { setSelectedInsurance(item?.value) }}
                        showsVerticalScrollIndicator={false}
                        flatListProps={{ nestedScrollEnabled: false, }}
                        iconStyle={{ tintColor: Colors.secondaryColor }}
                    />
                    <InputFieldBox
                        label={"Policy Number"}
                        placeHolder='Enter your policy number'
                        keyBoardType="default"
                        value={""}
                        inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack85)}
                        rootStyle={{ paddingTop: moderateScale(10), }}
                        labelStyle={fontStyles.notoSansMedium12}
                        placeholderTextColor={Colors.offBlack50}
                    />

                </View>
                <TakeSpace space={moderateScale(8)} />
                <BackGroundLine />
                <View style={{ paddingHorizontal: moderateScale(16) }}>
                    <InputFieldBox
                        label={"Apartment/ Building/ Unit"}
                        placeHolder='Enter your building name/ apartment'
                        keyBoardType="default"
                        value={""}
                        inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack85)}
                        rootStyle={{ paddingTop: moderateScale(10), }}
                        labelStyle={fontStyles.notoSansMedium12}
                        placeholderTextColor={Colors.offBlack50}
                    />
                    <InputFieldBox
                        label={"Street address"}
                        placeHolder='Enter your locality'
                        keyBoardType="default"
                        value={""}
                        inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack85)}
                        rootStyle={{ paddingTop: moderateScale(10), }}
                        labelStyle={fontStyles.notoSansMedium12}
                        placeholderTextColor={Colors.offBlack50}
                    />
                    <TakeSpace space={moderateScale(4)} />
                    <Text style={styles.fieldTxt}>City</Text>
                    <Dropdown
                        style={[styles.dropdownTest]}
                        placeholderStyle={[fontStyles.notoSansRegular12, { color: Colors.offBlack, opacity: 0.75, marginLeft: moderateScale(6) }]}
                        selectedTextStyle={[fontStyles.notoSansRegular12, { color: Colors.offBlack, opacity: 0.75 }]}
                        activeColor={Colors.offBlack5}
                        itemTextStyle={fontStyles.notoSansRegular12}
                        data={data}
                        search={false}
                        renderRightIcon={DropwDownSvgDown}
                        labelField="label"
                        valueField="value"
                        placeholder={"Select"}
                        value={selectCity}
                        onChange={(item: any) => { setSelectCity(item?.value) }}
                        showsVerticalScrollIndicator={false}
                        flatListProps={{ nestedScrollEnabled: false, }}
                        iconStyle={{ tintColor: Colors.secondaryColor }}
                    />
                    <TakeSpace space={moderateScale(4)} />
                    <View style={[commonStyles.flexRow, { columnGap: moderateScale(12) }]}>
                        <View style={{ width: '48%' }}>
                            <Text style={styles.fieldTxt}>State</Text>
                            <Dropdown
                                style={[styles.dropdownTest]}
                                placeholderStyle={[fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack50), { paddingLeft: moderateScale(6) }]}
                                selectedTextStyle={[fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack75)]}
                                //activeColor={Colors.offBlack25}
                                itemTextStyle={fontStyles.notoSansRegular12}
                                data={genderData}
                                dropdownPosition='auto'
                                search={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={"Select"}
                                value={selectedState}
                                onChange={(item: any) => {
                                    setSelectedState(item?.value)
                                }}
                                showsVerticalScrollIndicator={false}
                                flatListProps={{ nestedScrollEnabled: false, }}
                                iconStyle={{ tintColor: Colors.secondaryColor }}
                            />


                        </View>
                        <View style={{ width: '48%' }}>
                            <InputFieldBox
                                label={"Zip"}
                                placeHolder='Zip code'
                                keyBoardType="default"
                                value={""}
                                inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(12), Colors.offBlack85)}
                                //rootStyle={{ paddingTop: moderateScale(10), }}
                                labelStyle={fontStyles.notoSansMedium12}
                                placeholderTextColor={Colors.offBlack50}
                            />
                        </View>
                    </View>
                </View>
                <TakeSpace space={moderateScale(50)} />

                {openImgPicker && (
                    <CustomModal
                        isVisible={openImgPicker}
                        closeModal={() => setOpenImgPicker(false)}
                        children={<ImagePickerModal openGallery={openGallery} openCamera={openCamera} onClose={() => setOpenImgPicker(false)} />}
                    />
                )}
                {open &&

                    <Modal
                        isVisible={open}
                        animationIn={'slideInUp'}
                        animationInTiming={800}
                        animationOut={'slideOutDown'}
                        backdropOpacity={0.3}
                        onBackdropPress={() => setOpen(false)}
                    >
                        <View style={{ height: SCREEN_HEIGHT * 0.45 }}>
                            <DatePicker
                                options={styles.datePicker}
                                current={''}
                                // isGregorian={false}
                                selectorStartingYear={1900}
                                selectorEndingYear={new Date().getFullYear()}
                                selected={''}
                                mode="calendar"
                                onSelectedChange={(item: any) => {
                                }}
                                onDateChange={(item: any) => setTimeout(() => { setOpen(false) }, 1000)}
                                minuteInterval={30}
                                style={{ borderRadius: moderateScale(10) }}
                            />
                        </View>
                    </Modal>
                }
            </ScrollView>
            <View style={[commonStyles.sbtBtn, {
                bottom: 0,
            }]}>
                <CustomButton
                    label={"Update Changes"}
                    btnWidth={'100%'}
                    extraCusTxtStyle={[fontStyles.notoSansMedium14, { color: Colors.offWhite }]}
                    disabled={false}
                    onPress={() => { }}
                    extraCusBtnStyle={[{ borderRadius: 0 }]}
                    paddingProp={moderateScale(12, 0.5)}
                />
            </View>
        </>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    fieldTxt: {
        ...fontStyles.notoSansSemiBold12,
        paddingVertical: moderateScale(6),
        paddingLeft: moderateScale(4),
    },
    dropdownTest: {
        height: helpers.isIos ? moderateScale(46) : moderateScale(49),
        //width: SCREEN_WIDTH * 0.40,
        backgroundColor: Colors.offBlack5,
        paddingHorizontal: moderateScale(8),
        borderRadius: moderateScale(6), borderWidth: moderateScale(0),
        borderColor: Colors.offBlack5
    },
    datePicker: {
        selectedTextColor: Colors.offWhite,
        mainColor: Colors.primaryColor,
        backgroundColor: Colors.offWhite,
        textHeaderColor: Colors.primaryColor,
        textHeaderFontSize: moderateScale(14),
        headerFont: "NotoSans-Medium",
        textFontSize: moderateScale(12),
        daysAnimationDistance: moderateScale(10),
        defaultFont: "NotoSans-Medium",
        textSecondaryColor: Colors.offBlack,
    },

})