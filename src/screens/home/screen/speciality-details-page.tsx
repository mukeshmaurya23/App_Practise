import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackArrowSvg } from '../../../../assets/svg'
import { Colors } from '../../../constants'
import { helpers } from '../../../utility/helpers'
import { moderateScale } from 'react-native-size-matters'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../../components'
import Holistic1 from '../../../../assets/svg/home-screen/holistic-screen/holistic1'
import Holsitic2 from '../../../../assets/svg/home-screen/holistic-screen/holistic2'
import Holistic3 from '../../../../assets/svg/home-screen/holistic-screen/holistic3'
import Holistic4 from '../../../../assets/svg/home-screen/holistic-screen/holistic4'
import { fontStyles } from '../../../styles'
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
    , {
        id: 7,
        title: "Functional Medicine",
        icon: <Holsitic2 />
    },
    {
        id: 8,
        title: "Functional Medicine",
        icon: <Holistic3 />
    },
    {
        id: 9,
        title: "Functional Medicine",
        icon: <Holistic4 />
    },
    {
        id: 10,
        title: "Functional Medicine",
        icon: <Holistic3 />
    },
]
const SpecialityDetailsPage = () => {
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
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label='Speciality'
                headText=''
                icon={BackArrowSvg}
            />
            <FlatList
                data={holisticFeaturedData}
                bounces={false}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: Colors.offWhite }}
                contentContainerStyle={{ paddingVertical: moderateScale(10) }}
                numColumns={2}
                renderItem={renderHolisticField}
            />
        </>
    )
}

export default SpecialityDetailsPage

const styles = StyleSheet.create({
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