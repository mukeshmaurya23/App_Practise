import { FlatList, ImageBackground, PermissionsAndroid, Platform, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { CustomButton, DateInputField, TakeSpace } from '../../components'
import { moderateScale } from 'react-native-size-matters'
import FastImage from 'react-native-fast-image'
import { Colors, Images } from '../../constants'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/responsive'
import { commonStyles, fontStyles } from '../../styles'
import { BackGroundLine, CalendarDropdownSvg, DrawerOpenSvg, DropwDownSvgDown, LocationDropdownSvg, SpecialityDropDownSvg } from '../../../assets/svg'
import { Dropdown } from 'react-native-element-dropdown';
import { HealthCareExcellanceScreen, HolisticFieldScreen, LetsConnectScreen, MostCommonDisease, OurPractitionerScreen, OurProcessScreen } from './screen'
import { useHomeHook } from './home.hooks'
import { navigationHook } from '../../hooks/navigation.hook'

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
const Home = () => {
    const {
        selectedSpeciality,
        setSelectedSpeciality,
        openDrawer,
        handleLayout, handleScroll, scrollY, showStatusBarRef
    } = useHomeHook();
    const StoragePermission = async () => {
        // if (Number(Platform.Version) >= 33) {
        //     return true;
        // }

        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
        console.log("permission", permission)

        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    }

    useEffect(() => {
        if (Platform.OS === 'android') {
            StoragePermission()
        }
    }, [])
    const GreetingAndProfileSection = () => {
        return (
            <View style={[commonStyles.RowJSB]}>
                <View>
                    <Text style={[fontStyles.notoSansRegular14, { color: Colors.offWhite }]}>Hello</Text>
                    <Text style={[fontStyles.notoSansSemiBold16, { color: Colors.offWhite }]}>How are you today? </Text>
                </View>
                <Pressable style={{ position: "relative" }} onPress={() => openDrawer()}>
                    <FastImage
                        source={Images.profileImage}
                        style={styles.profileImgStyle}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                    <View style={styles.drawerOpenSvg} >
                        <DrawerOpenSvg />
                    </View>
                </Pressable>
            </View>
        )
    }
    const SearchAppointmentSection = () => {
        const { navigateTo } = navigationHook();
        return (
            <View style={styles.appointmentContainer}>
                <Dropdown
                    style={[styles.dropdownStyle]}
                    placeholderStyle={[fontStyles.notoSansRegular12, { color: Colors.offBlack, opacity: 0.75, marginLeft: moderateScale(6) }]}
                    selectedTextStyle={[fontStyles.notoSansRegular12, { color: Colors.offBlack, opacity: 0.75 }]}
                    activeColor={Colors.offBlack5}
                    itemTextStyle={fontStyles.notoSansRegular12}
                    data={data}
                    search={false}
                    renderLeftIcon={SpecialityDropDownSvg}
                    renderRightIcon={DropwDownSvgDown}
                    labelField="label"
                    valueField="value"
                    placeholder={"Select specialty"}
                    value={selectedSpeciality}
                    onChange={(item: any) => { setSelectedSpeciality(item?.value) }}
                    showsVerticalScrollIndicator={false}
                    flatListProps={{ nestedScrollEnabled: false, }}
                    iconStyle={{ tintColor: Colors.secondaryColor }}
                />
                <TakeSpace space={moderateScale(5)} />
                <View style={[commonStyles.RowJSB, { columnGap: moderateScale(10) }]}>
                    <Dropdown
                        style={[styles.locationDropdownStyle]}
                        placeholderStyle={[fontStyles.notoSansRegular12, { color: Colors.offBlack, opacity: 0.75, marginLeft: moderateScale(6) }]}
                        selectedTextStyle={[fontStyles.notoSansRegular12, { color: Colors.offBlack, opacity: 0.75 }]}
                        activeColor={Colors.offBlack5}
                        itemTextStyle={fontStyles.notoSansRegular12}
                        data={data}
                        search={false}
                        renderLeftIcon={LocationDropdownSvg}
                        renderRightIcon={DropwDownSvgDown}
                        labelField="label"
                        valueField="value"
                        placeholder={"Select location"}
                        value={selectedSpeciality}
                        onChange={(item: any) => { setSelectedSpeciality(item?.value) }}
                        showsVerticalScrollIndicator={false}
                        flatListProps={{ nestedScrollEnabled: false, }}
                        iconStyle={{ tintColor: Colors.secondaryColor }}
                    />
                    <DateInputField
                        label={""}
                        placeHolder={"Select date"}
                        rightSideContent={<DropwDownSvgDown />}
                        keyBoardType="default"
                        showBorder={false}
                        placeholderTextColor={"#1E1E1EBF"}
                        rootStyle={styles.dateStyle}
                        leftIcon={CalendarDropdownSvg}
                    />
                </View>
                <TakeSpace space={moderateScale(5)} />
                <View>
                    <CustomButton
                        label={'Search appointments'}
                        onPress={() => { navigateTo('BookAppointmentListing', { searchKey: '' }) }}
                        paddingProp={moderateScale(14)}
                        customBtnStyle={[{ alignSelf: 'center' }]}
                        btnWidth={"100%"}
                    />
                </View>
            </View>
        )
    };
    const renderHome = () => {
        return (
            <View>
                <ImageBackground source={Images.MainScreenBanner} style={styles.imgStyle} >
                    <View style={styles.mainHeaderConatiner}>
                        <GreetingAndProfileSection />
                        <TakeSpace space={moderateScale(14)} />
                        <SearchAppointmentSection />
                    </View>
                </ImageBackground>
                <BackGroundLine />
                <View style={styles.secondaryConatiner}>
                    <MostCommonDisease />
                    <BackGroundLine />
                    <HolisticFieldScreen />
                    <BackGroundLine />
                    <OurProcessScreen />
                    <BackGroundLine />
                    <OurPractitionerScreen />
                    <BackGroundLine />
                    <LetsConnectScreen />
                    <BackGroundLine />
                    <HealthCareExcellanceScreen />

                </View>
            </View>
        )
    }

    return (
        <View style={commonStyles._flexOneBg(Colors.offWhite)}>

            {/* {showStatusBarRef.current === true && scrollY >= 35 && <StatusBar barStyle="light-content" backgroundColor={Colors.primaryColor} />} */}
            <FlatList
                data={[1]}
                bounces={false}
                // onScroll={handleScroll}
                scrollEventThrottle={16}
                renderItem={renderHome}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    imgStyle: { width: SCREEN_WIDTH, height: SCREEN_HEIGHT * (46 / 100) },
    profileImgStyle: { width: moderateScale(40), height: moderateScale(40), marginRight: moderateScale(4) },
    mainHeaderConatiner: { padding: moderateScale(16), paddingTop: moderateScale(65) },
    drawerOpenSvg: { position: 'absolute', top: moderateScale(22), right: moderateScale(-8) },
    appointmentContainer: { backgroundColor: Colors.offWhite, padding: moderateScale(16), borderRadius: moderateScale(10) },
    dropdownStyle: { width: "100%", backgroundColor: Colors.offWhite, borderBottomWidth: moderateScale(1), borderColor: Colors.offBlack5 },
    dobDropdownStyle: { width: "48%", backgroundColor: Colors.offWhite, borderBottomWidth: moderateScale(1), borderColor: Colors.offBlack5 },
    locationDropdownStyle: { width: "48%", backgroundColor: Colors.offWhite, borderBottomWidth: moderateScale(1), borderColor: Colors.offBlack5 },
    secondaryConatiner: { flex: 1, backgroundColor: Colors.offWhite },
    dateStyle: { width: "48%", backgroundColor: Colors.offWhite, borderBottomWidth: moderateScale(1), borderColor: Colors.offBlack5 },
})