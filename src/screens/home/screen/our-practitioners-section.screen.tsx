import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { Colors } from '../../../constants'
import { HeartGreenSvg } from '../../../../assets/svg'
import { commonStyles, fontStyles } from '../../../styles'
import CustomSlider from '../../../components/custom-slider/custom-slider'
import { TakeSpace } from '../../../components'

const bannerData = [
    {
        id: 1,
        image: "https://picsum.photos/200/300",
        title: "Dr. John Doe",
        description: "Lindsay was raised in Atlanta Georgia. She graduated from the University of Texas where she earned her degree in human biology.",
        roleAndLocation: "Dentist, New York"
    },
    {
        id: 2,
        image: "https://picsum.photos/200/300",
        title: "Dr. John Doe",
        description: "Lindsay was raised in Atlanta Georgia. She graduated from the University of Texas where she earned her degree in human biology.",
        roleAndLocation: "Dentist, New York"

    },
    {
        id: 3,
        image: "https://picsum.photos/200/300",
        title: "Dr. John Doe",
        description: "Lindsay was raised in Atlanta Georgia. She graduated from the University of Texas where she earned her degree in human biology.",
        roleAndLocation: "Dentist, New York"

    },
    {
        id: 4,
        image: "https://picsum.photos/200/300",
        title: "Dr. John Doe",
        description: "Lindsay was raised in Atlanta Georgia. She graduated from the University of Texas where she earned her degree in human biology.",
        roleAndLocation: "Dentist, New York"

    },

]
const OurPractitionerScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={[commonStyles.flexRow, { columnGap: moderateScale(6), paddingHorizontal: moderateScale(16) }]}>
                <HeartGreenSvg />
                <View style={{ width: "90%" }}>
                    <Text style={[fontStyles.notoSansSemiBold16]}>Our practitioners</Text>
                    <Text style={[fontStyles.notoSansRegular12, { color: Colors.offBlack50 }]}>Browse 15+ specialities of our fields</Text>
                </View>
            </View>
            <TakeSpace space={moderateScale(6)} />
            <CustomSlider bannerData={bannerData} />
        </View>
    )
}

export default OurPractitionerScreen

const styles = StyleSheet.create({
    mainContainer: {
        paddingVertical: moderateScale(16),
        backgroundColor: Colors.offWhite,

    },
})