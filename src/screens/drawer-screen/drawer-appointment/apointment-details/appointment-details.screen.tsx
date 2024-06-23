import React from 'react'
import Rating from './components/rating-comp'
import { Colors } from '../../../../constants'
import FastImage from 'react-native-fast-image'
import { helpers } from '../../../../utility/helpers'
import { moderateScale } from 'react-native-size-matters'
import { commonStyles, fontStyles } from '../../../../styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SCREEN_WIDTH } from '../../../../constants/responsive'
import { useAppointmentDetails } from './appoinmetn-details.hook'
import GoogleMaps from '../../../../components/google-maps/google-maps'
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { BorderBottom, CustomButton, Header, TakeSpace } from '../../../../components'
import { BackArrowSvg, BackGroundLine, CopySvg, FilePickupSvg, InfoPinSvg, PinSvg } from '../../../../../assets/svg'

const AppointmentDetails = () => {
  const { drImage, drName, jobLocation, rating, status, handleRatingChange, navigateTo } = useAppointmentDetails();
  const shouldDisbaled = status === 'Cancelled' || status === 'Rescheduled';

  let Info =
    `\u2B24 Take medicine twice a day one post lunch and second post dinner\n
    \u2B24 Apply cream regularly&nbsp;\n
    \u2B24 Next follow up after completing course 1\n`

  const getAppmntStaus = React.useCallback((status: string) => {
    return helpers.statusColors[status] || { textColor: Colors.offBlack, backColor: Colors.offBlack5 };
  }, [status]);

  const SectionHeader = React.memo(({ label }: { label: string }) => {
    return (
      <Text style={fontStyles.notoSansMedium14}>{label}</Text>
    )
  });

  const ScheduleTile = React.memo(({ label, value, icon, txtColor }: { label: string, value: string, icon?: React.ElementType, txtColor?: string }) => {
    return (
      <View style={commonStyles.RowJSBAC}>
        <View style={{ width: '35%' }}>
          <Text style={[fontStyles.notoSansRegular14, { opacity: 0.5 }]}>{label}</Text>
        </View>
        <View style={{ width: '65%', ...commonStyles.RowJFEAC, columnGap: moderateScale(6) }}>
          {icon && React.createElement(icon)}
          <Text style={[fontStyles.notoSansMedium14, { color: txtColor ? txtColor : Colors.offBlack }]}>{value}</Text>
        </View>
      </View>
    )
  })
  const OtherTile = React.memo(({ label, value }: { label: string, value: string }) => {
    return (
      <View style={commonStyles.columnJFS}>
        <Text style={[fontStyles.notoSansRegular14, { opacity: 0.5 }]}>{label}</Text>
        <Text style={[fontStyles.notoSansMedium14]}>{value}</Text>
      </View>
    )
  });

  const PatientReportTile = React.memo(({ label, value, icon }: { label: string, value: string, icon: React.ElementType }) => {
    return (
      <View style={[commonStyles.columnJFS, { rowGap: moderateScale(10) }]}>
        <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(6) }]}>
          {icon && React.createElement(icon)}
          <Text style={[fontStyles.notoSansMedium12]}>{label}</Text>
        </View>
        <View style={{ padding: moderateScale(10), borderColor: Colors.offBlack5, borderWidth: moderateScale(1), }}>
          <Text style={[fontStyles.notoSansRegular12, { opacity: 0.75 }]}>{value}</Text>
        </View>
      </View>
    )
  });

  const renderAppointmentDetails = () => {
    return (
      <View>
        <View style={commonStyles.RowJFSAC}>
          <View style={{ width: '30%', columnGap: moderateScale(10) }}>
            <FastImage
              source={{ uri: drImage }}
              style={styles.imgStyle}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
          <View style={{ width: '70%', rowGap: moderateScale(10) }}>
            <Text style={fontStyles.notoSansSemiBold16}>{drName}</Text>
            <Text style={fontStyles.notoSansRegular12}>{jobLocation}</Text>
            <Rating initialRating={rating} maxRating={5} disabled={true} />
          </View>
        </View>
        <BorderBottom />
        <TakeSpace space={moderateScale(10)} />
        <View style={{ rowGap: moderateScale(10) }}>
          <SectionHeader label='Schedule details' />
          <ScheduleTile label='Appointment ID' value='#OTET201834' />
          <ScheduleTile label='Status' value={status} txtColor={getAppmntStaus(status).textColor} />
          <ScheduleTile label='Time' value='8:00 am' />
          <ScheduleTile label='Date' value='30th May 2024' />
          <ScheduleTile label='Meet link' value='Click here to join' icon={CopySvg} txtColor={Colors.primaryColor} />
          <BorderBottom />
        </View>
        <TakeSpace space={moderateScale(10)} />
        <View style={{ rowGap: moderateScale(10) }}>
          <SectionHeader label='Other details' />
          <OtherTile label='Reason for visit' value='High blood pressure / Hypertension' />
          <OtherTile label='Type of visit' value='Virtual' />
          <OtherTile label='Insurance details' value='UHS, PN : 756289' />
          <BorderBottom />
        </View>
        <TakeSpace space={moderateScale(10)} />
        <SectionHeader label='Address' />
        <TakeSpace space={moderateScale(5)} />
        <Text style={[fontStyles.notoSansRegular12, { color: Colors.offBlack75 }]}>14 Street Medical P.C. 110 W 14th St New York, NY 10011 </Text>
        <TakeSpace space={moderateScale(5)} />
        {/* Here react native maps view will come  */}
        <View style={commonStyles.centerJCAC}>
          <GoogleMaps />
        </View>
        <TakeSpace space={moderateScale(10)} />
        {status === 'Completed' &&
          <>
            <TakeSpace space={moderateScale(10)} />
            <SectionHeader label='Patient Reports' />
            <TakeSpace space={moderateScale(6)} />
            <Pressable style={commonStyles.RowJFEAC}>
              <View style={{ width: '80%' }}>
                <View>
                  <Text style={[fontStyles.notoSansMedium14, { color: Colors.secondaryColor }]}>Prescription/ Reports are available</Text>
                  <Text style={[fontStyles.notoSansRegular12, { opacity: 0.75 }]}>Click on the icon to download</Text>
                </View>
              </View>
              <View style={{ width: '20%', ...commonStyles.centerJCAC }}>
                <FilePickupSvg />
              </View>
            </Pressable>
            <View style={{ rowGap: moderateScale(6) }}>
              <BorderBottom />
              <TakeSpace space={moderateScale(6)} />
              <PatientReportTile icon={PinSvg} label='Additional note' value={Info} />
              <BorderBottom />
              <TakeSpace space={moderateScale(6)} />
              <PatientReportTile icon={InfoPinSvg} label='Recommended Tests' value={Info} />
              <TakeSpace space={moderateScale(6)} />
            </View>
            <View style={{ alignSelf: 'center' }}>
              <BackGroundLine />
            </View>
            <TakeSpace space={moderateScale(10)} />
            <View style={{ rowGap: moderateScale(10) }}>
              <SectionHeader label='Review' />
              <Text style={[fontStyles.notoSansRegular14, { opacity: 0.5 }]}>Rate your experience</Text>
              <Rating initialRating={0} disabled={false} maxRating={5} onRatingChange={handleRatingChange} Height={20} widht={20} />
              <TakeSpace space={moderateScale(6)} />
            </View>
            <Text style={[fontStyles.notoSansRegular14, { opacity: 0.5 }]}>Feedback</Text>
            <TakeSpace space={moderateScale(6)} />
            <View style={styles.feedBackCont}>
              <TextInput
                value=''
                placeholder='Please share your feedback here...'
                cursorColor={Colors.offBlack50}
                placeholderTextColor={Colors.offBlack25}
                onChangeText={() => { }}
              />
            </View>
            <TakeSpace space={moderateScale(6)} />
          </>
        }
      </View>
    )
  };


  return (
    <>
      <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
      <View style={commonStyles._flexOneBg(Colors.offWhite)}>
        <Header
          label=''
          icon={BackArrowSvg}
        />
        <FlatList
          data={[1]}
          contentContainerStyle={{ padding: moderateScale(16) }}
          renderItem={renderAppointmentDetails}
          showsVerticalScrollIndicator={false}
        />
        {status !== 'Completed' &&
          <View style={styles.NoteTxtCont}>
            <Text style={[styles.NoteTxt]}>Note : This respective appointment was rescheduled on 28th May 2024</Text>
          </View>}
        {status === 'Completed' ?
          <View style={styles.BookBtnCont}>
            <CustomButton
              label='Book again'
              extraCusBtnStyle={[{ width: '95%', alignSelf: 'center' }]}
              onPress={() => navigateTo('ReshceduleScreen', {
                drImage: drImage ? drImage : 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg',
                drName: 'Rohit Sharma',
                jobLocation: 'Dentist | New York, NY',
                spokenLang: ['English', 'French']
              })}
            />
          </View>

          :

          <View style={[styles.btns]}>
            <CustomButton
              label='Cancel'
              extraCusBtnStyle={[{ width: '48%', backgroundColor: Colors.dangerFadedBg }]}
              extraCusTxtStyle={[{ color: Colors.orange }]}
              disabled={shouldDisbaled}
            />
            <CustomButton
              label='Reschedule'
              extraCusBtnStyle={[{ width: '48%' }]}
              disabled={shouldDisbaled}
              onPress={() => navigateTo('ReshceduleScreen', {
                drImage: drImage ? drImage : 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg',
                drName: 'Rohit Sharma',
                jobLocation: 'Dentist | New York, NY',
                spokenLang: ['English', 'French']
              })}
            />
          </View>
        }
      </View >
    </ >
  )
}

export default AppointmentDetails

const styles = StyleSheet.create({
  imgStyle: { width: moderateScale(90), height: moderateScale(90), borderRadius: moderateScale(4), },
  btns: { ...commonStyles.RowJSBAC, padding: moderateScale(14), backgroundColor: Colors.offWhite, borderTopWidth: moderateScale(1), borderTopColor: Colors.offBlack25 },
  NoteTxtCont: { backgroundColor: Colors.noteBg, padding: moderateScale(12), alignItems: 'center' },
  NoteTxt: { ...fontStyles.notoSansRegular10, opacity: 0.75, fontStyle: 'italic' },
  feedBackCont: { width: SCREEN_WIDTH * 0.9, height: moderateScale(100), borderColor: Colors.offBlack50, borderWidth: moderateScale(1), padding: moderateScale(6) },
  BookBtnCont: { padding: moderateScale(12), borderTopColor: Colors.offBlack25, borderTopWidth: moderateScale(1) }
})