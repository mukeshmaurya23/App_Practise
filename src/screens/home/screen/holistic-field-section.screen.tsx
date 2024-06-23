import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants'
import { moderateScale } from 'react-native-size-matters'
import { commonStyles, fontStyles } from '../../../styles'
import { HeartGreenSvg } from '../../../../assets/svg'
import Holistic1 from '../../../../assets/svg/home-screen/holistic-screen/holistic1'
import Holsitic2 from '../../../../assets/svg/home-screen/holistic-screen/holistic2'
import Holistic3 from '../../../../assets/svg/home-screen/holistic-screen/holistic3'
import Holistic4 from '../../../../assets/svg/home-screen/holistic-screen/holistic4'
import { CustomButton, TakeSpace } from '../../../components'
import { navigationHook } from '../../../hooks/navigation.hook'

const holisticFeaturedData = [
    {
        id: 1,
        title: "Functional Medicine",
        icon: <Holistic1 />
    },
    {
        id: 2,
        title: "Functional Medicine",
        icon: <Holsitic2 />
    },
    {
        id: 3,
        title: "Functional Medicine",
        icon: <Holistic3 />
    },
    {
        id: 4,
        title: "Functional Medicine",
        icon: <Holistic4 />
    },
    {
        id: 5,
        title: "Functional Medicine",
        icon: <Holistic1 />
    },
    {
        id: 6,
        title: "Functional Medicine",
        icon: <Holistic3 />
    }
]
//THis component contains the information about the Holistic Fields and the specialities of the fields.

const HolisticFieldScreen = () => {
    const { navigateTo } = navigationHook()
    const renderHolisticField = ({ item }: { item: any }) => {
        return (
            <View style={styles.holisticCard}>
                <View>
                    {item.icon}
                </View>
                <View style={{ width: "70%" }}>
                    <Text style={[fontStyles.notoSansBold14, { color: Colors.offBlack, textAlign: "center" }]}>{item.title}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <View style={[commonStyles.flexRow, { columnGap: moderateScale(6) }]}>
                <HeartGreenSvg />
                <View style={{ width: "90%" }}>
                    <Text style={[fontStyles.notoSansSemiBold16]}>Holistic Fields</Text>
                    <Text style={[fontStyles.notoSansRegular12, { color: Colors.offBlack50 }]}>Browse 15+ specialities of our fields</Text>
                </View>
            </View>
            <FlatList
                data={holisticFeaturedData}
                bounces={false}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: moderateScale(10) }}
                numColumns={2}

                renderItem={renderHolisticField}
            />
            <TakeSpace space={moderateScale(4)} />
            <CustomButton
                label={'View all fields'}
                onPress={() => navigateTo("HomePageScreen", { screen: "SpecialityDetailsPage" })}
                customTxtStyle={[fontStyles.notoSansBold14, { color: Colors.primaryColor }]}
                customBtnStyle={[{ alignSelf: 'center' }]}
                extraCusBtnStyle={[commonStyles.transparentBtn]}
                extraCusTxtStyle={[{ color: Colors.primaryColor, }]}
                btnWidth={"96%"}
            />
        </View>
    )
}

export default HolisticFieldScreen

const styles = StyleSheet.create({
    mainContainer: {
        padding: moderateScale(16),
        backgroundColor: Colors.offWhite,
        marginTop: moderateScale(10)
    },
    holisticCard: {
        flex: 1,
        margin: moderateScale(8),
        // height: moderateScale(100),
        backgroundColor: Colors.offWhite,
        borderRadius: moderateScale(4),
        borderWidth: moderateScale(1),
        borderColor: Colors.borderColor,
        padding: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center'
    }
})
