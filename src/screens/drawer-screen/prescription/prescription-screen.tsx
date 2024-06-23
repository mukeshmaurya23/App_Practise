// import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { BorderBottom, DateInputField, Header, TakeSpace } from '../../../components'
// import { BackArrowSvg, BackGroundLine, FilePickupSvg, OrangeSvgFilter, SearchSvg } from '../../../../assets/svg'
// import { Colors } from '../../../constants'
// import { helpers } from '../../../utility/helpers'
// import { moderateScale } from 'react-native-size-matters'
// import { commonStyles, fontStyles } from '../../../styles'
// import RNFS from 'react-native-fs';
// const prescription_data = [
//     {
//         id: "#OTET201834",
//         drName: "Dr. Mike G",
//         speciality: "Reason - High blood pressure/ Hypertension "
//     },
//     {
//         id: "#OTET201835",
//         drName: "Dr. Rohit G",
//         speciality: "Reason - High blood pressure/ Hypertension "
//     }
// ]
// const DrawerPrescriptionScreen = () => {
//     const [progressTrack, setProgressTrack] = React.useState('0');
//     console.log('progressTrack', progressTrack)
//     const downloadFile = () => {
//         const url = 'https://www.clickdimensions.com/links/TestPDFfile.pdf';
//         //dynamically take the file name from the url
//         const fileName = url.split('/').pop();
//         const filePath = RNFS.DocumentDirectoryPath + '/' + fileName;

//         RNFS.downloadFile({
//             fromUrl: url,
//             toFile: filePath,
//             background: true, // Enable downloading in the background (iOS only)
//             discretionary: true, // Allow the OS to control the timing and speed (iOS only)
//             progress: (res) => {
//                 // Handle download progress updates if needed
//                 const progress = (res.bytesWritten / res.contentLength) * 100;
//                 const progressTrack = progress.toFixed(2);
//                 setProgressTrack(progressTrack);
//             },
//         })
//             .promise.then((response) => {
//                 console.log('File downloaded!', response);
//             })
//             .catch((err) => {
//                 console.log('Download error:', err);
//             });
//     };
//     const renderPrescriptionData = ({ item, index }: { item: any, index: number }) => {
//         const isLastItem = index === prescription_data.length - 1
//         return (
//             <>
//                 <BackGroundLine />
//                 <View style={styles.prescriptionCard}>
//                     <Text style={[fontStyles.notoSansMedium10, { opacity: 0.5 }]}>
//                         {item.id}
//                     </Text>
//                     <Text style={[fontStyles.notoSansSemiBold16]}>
//                         {item.drName}
//                     </Text>
//                     <Text style={[fontStyles.notoSansRegular12, { opacity: 0.75 }]}>
//                         {item.speciality}
//                     </Text>
//                     <BorderBottom />
//                     <Pressable style={commonStyles.RowJFEAC} onPress={downloadFile}>
//                         <View style={{ width: '80%' }}>
//                             <View>
//                                 <Text style={[fontStyles.notoSansMedium14, { color: Colors.secondaryColor }]}>Prescription/ Reports are available</Text>
//                                 <Text style={[fontStyles.notoSansRegular12, { opacity: 0.75 }]}>Click on the icon to download</Text>
//                             </View>
//                         </View>
//                         <View style={{ width: '20%', ...commonStyles.centerJCAC }}>
//                             {
//                                 progressTrack === '100.00' ? <FilePickupSvg /> : <Text style={[fontStyles.notoSansRegular12, { opacity: 0.75 }]}>
//                                     {progressTrack}%
//                                 </Text>
//                             }
//                         </View>
//                     </Pressable>
//                 </View>
//                 {isLastItem && <View>
//                     <BackGroundLine />
//                     <TakeSpace space={moderateScale(6)} />
//                 </View>
//                 }

//             </>
//         )
//     }
//     return (
//         <>
//             <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
//             <Header
//                 label='Prescription'
//                 headText=''
//                 icon={BackArrowSvg}
//             />

//             <View style={{ backgroundColor: Colors.offWhite, paddingVertical: moderateScale(10) }}>

//                 <DateInputField
//                     leftIcon={SearchSvg}
//                     placeHolder='Serach here'

//                     rootStyle={{ width: '92%', alignSelf: 'center' }}
//                     pressContStyle={[{ paddingHorizontal: moderateScale(10), borderColor: Colors.offBlack5 }]}
//                 />
//             </View>
//             <View style={{ backgroundColor: Colors.bgGreen, flex: 1 }}>
//                 <FlatList
//                     data={prescription_data}
//                     keyExtractor={(item, index) => index.toString()}
//                     renderItem={renderPrescriptionData}
//                     bounces={false}
//                     showsVerticalScrollIndicator={false}
//                 />

//             </View>
//         </>
//     )
// }

// export default DrawerPrescriptionScreen

// const styles = StyleSheet.create({
//     prescriptionCard: {
//         padding: moderateScale(16),
//         backgroundColor: Colors.offWhite,
//         rowGap: moderateScale(8),
//     }
// })

import { FlatList, PermissionsAndroid, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BorderBottom, DateInputField, Header, TakeSpace } from '../../../components';
import { BackArrowSvg, BackGroundLine, FilePickupSvg, OrangeSvgFilter, SearchSvg } from '../../../../assets/svg';
import { Colors } from '../../../constants';
import { helpers } from '../../../utility/helpers';
import { moderateScale } from 'react-native-size-matters';
import { commonStyles, fontStyles } from '../../../styles';
import RNFS from 'react-native-fs';

const prescription_data = [
    {
        id: "#OTET201834",
        drName: "Dr. Mike G",
        speciality: "Reason - High blood pressure/ Hypertension "
    },
    {
        id: "#OTET201835",
        drName: "Dr. Rohit G",
        speciality: "Reason - High blood pressure/ Hypertension "
    }
];

const DrawerPrescriptionScreen = () => {
    const [progressTracks, setProgressTracks] = React.useState({});
    const requestStoragePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission',
                        message: 'App needs access to your storage to download files',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Storage permission granted');
                } else {
                    await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                        {
                            title: 'Storage Permission',
                            message: 'App needs access to your storage to download files',
                            buttonNeutral: 'Ask Me Later',
                            buttonNegative: 'Cancel',
                            buttonPositive: 'OK',
                        },
                    );
                    console.log('Storage permission denied');
                }
            } catch (err) {
                console.warn(err);
            }
        } else {
            // IOS
        }
    };

    useEffect(() => {
        requestStoragePermission();
    }, []);

    const downloadFile = (url: string, itemId: number) => {
        const fileName = url.split('/').pop();
        const filePath = `${RNFS.ExternalStorageDirectoryPath}/${fileName}`;

        RNFS.downloadFile({
            fromUrl: url,
            toFile: filePath,
            background: true,
            discretionary: true,
            progress: (res) => {
                const progress = (res.bytesWritten / res.contentLength) * 100;
                const progressTrack = progress.toFixed(2);
                setProgressTracks(prevState => ({ ...prevState, [itemId]: progressTrack }));
            },
        })
            .promise.then((response) => {
                if (response.statusCode === 200) {
                    console.log('File downloaded successfully!', response);
                    setProgressTracks(prevState => ({ ...prevState, [itemId]: '100.00' }));
                } else {
                    console.log('Server returned an error', response);
                }
            })
            .catch((err) => {
                console.error('Download error:', err);
                setProgressTracks(prevState => ({ ...prevState, [itemId]: 'Error' }));
            });
    };
    const renderPrescriptionData = ({ item, index }: any) => {
        const isLastItem = index === prescription_data.length - 1;
        const progressTrack = progressTracks[item.id] || '0';

        return (
            <>
                <BackGroundLine />
                <View style={styles.prescriptionCard}>
                    <Text style={[fontStyles.notoSansMedium10, { opacity: 0.5 }]}>
                        {item.id}
                    </Text>
                    <Text style={[fontStyles.notoSansSemiBold16]}>
                        {item.drName}
                    </Text>
                    <Text style={[fontStyles.notoSansRegular12, { opacity: 0.75 }]}>
                        {item.speciality}
                    </Text>
                    <BorderBottom />
                    <Pressable style={commonStyles.RowJFEAC} onPress={() => downloadFile('https://www.clickdimensions.com/links/TestPDFfile.pdf', item.id)}>
                        <View style={{ width: '80%' }}>
                            <View>
                                <Text style={[fontStyles.notoSansMedium14, { color: Colors.secondaryColor }]}>Prescription/ Reports are available</Text>
                                <Text style={[fontStyles.notoSansRegular12, { opacity: 0.75 }]}>Click on the icon to download</Text>
                            </View>
                        </View>
                        <View style={{ width: '20%', ...commonStyles.centerJCAC }}>
                            {
                                progressTrack === '100.00' || Object.keys(progressTracks)?.length === 0 ? <FilePickupSvg /> : <Text style={[fontStyles.notoSansRegular12, { opacity: 0.75 }]}>
                                    {progressTrack}%
                                </Text>
                            }
                        </View>
                    </Pressable>
                </View>
                {isLastItem && <View>
                    <BackGroundLine />
                    <TakeSpace space={moderateScale(6)} />
                </View>}
            </>
        );
    };

    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label='Prescription'
                headText=''
                icon={BackArrowSvg}
            />

            <View style={{ backgroundColor: Colors.offWhite, paddingVertical: moderateScale(10) }}>
                <DateInputField
                    leftIcon={SearchSvg}
                    placeHolder='Search here'
                    rootStyle={{ width: '92%', alignSelf: 'center' }}
                    pressContStyle={[{ paddingHorizontal: moderateScale(10), borderColor: Colors.offBlack5 }]}
                />
            </View>
            <View style={{ backgroundColor: Colors.bgGreen, flex: 1 }}>
                <FlatList
                    data={prescription_data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderPrescriptionData}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </>
    );
};

export default DrawerPrescriptionScreen;

const styles = StyleSheet.create({
    prescriptionCard: {
        padding: moderateScale(16),
        backgroundColor: Colors.offWhite,
        rowGap: moderateScale(8),
    }
});
