import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles, fontStyles } from '../../../styles'
import { moderateScale } from 'react-native-size-matters'
import { Colors } from '../../../constants'
import { HealthCareDoctorSvg, HealthCareHospitalSvg, PatientSavedSvg, StarSpecialistSvg } from '../../../../assets/svg'
const healthCareExcellanceData = [
    {
        id: 1,
        title: "Specialties",
        number: "50+",
        icon: <StarSpecialistSvg />
    },
    {
        id: 2,
        title: "Doctors",
        number: "5000+",
        icon: <HealthCareDoctorSvg />
    },
    {
        id: 3,
        title: "Hospitals",
        number: "100+",
        icon: <HealthCareHospitalSvg />
    },
    {
        id: 4,
        title: "Patients served",
        number: "10000+",
        icon: <PatientSavedSvg />
    },

]
//This component is used in the Home screen to display the HealthCareExcellanceScreen Achievements and other details.
const HealthCareExcellanceScreen = () => {
    const renderHospitalExcellance = ({ item }: { item: any }) => {
        return (
            <View style={styles.hospitalExcellanceContainer}>
                <View>
                    {item.icon}
                </View>
                <View style={[]}>
                    <Text style={[fontStyles._notoSansBold("NotoSans-Bold", moderateScale(36), Colors.primaryColor)]}>
                        {item.number}
                    </Text>
                    <Text style={[fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(14), Colors.offBlack75), { textAlign: "left" }]}>
                        {item.title}
                    </Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.secondaryContainer}>
                <Text style={[fontStyles._notoSansBold("NotoSans-Bold", moderateScale(36), Colors.offBlack25)]}>
                    Heart of our Healthcare Excellence
                </Text>
            </View>
            <FlatList
                data={healthCareExcellanceData}
                bounces={false}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: moderateScale(10) }}
                numColumns={2}
                renderItem={renderHospitalExcellance}
            />
        </View>
    )
}

export default HealthCareExcellanceScreen

const styles = StyleSheet.create({
    mainContainer: { backgroundColor: Colors.homeBackCOlor + "50", },
    secondaryContainer: { marginTop: moderateScale(10), padding: moderateScale(16) },
    hospitalExcellanceContainer: { flex: 1, alignItems: "flex-start", columnGap: moderateScale(6), rowGap: moderateScale(10), margin: moderateScale(16), paddingHorizontal: moderateScale(8) }
})