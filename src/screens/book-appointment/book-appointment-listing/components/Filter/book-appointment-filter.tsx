import React from "react";
import Modal from "react-native-modal";
import { Colors } from "../../../../../constants";
import { moderateScale } from "react-native-size-matters";
import { BackArrowSvg } from "../../../../../../assets/svg";
import { commonStyles, fontStyles } from "../../../../../styles";
import { SCREEN_HEIGHT } from "../../../../../constants/responsive";
import { FlatList, Pressable, StyleSheet, Text, View, Animated } from "react-native";
import { CustomButton, CustomCheckBox, Header, TakeSpace } from "../../../../../components";

interface DataProps {
    id: number;
    label: string;
}

interface DrawerAppointmentFilterProps {
    isVisible: boolean;
    closeModal: () => void;
}

const LeftData: DataProps[] = [
    { id: 1, label: "Languages" },
    { id: 2, label: "Speciality" },
    { id: 3, label: "Conditions" },
    { id: 4, label: "Appointment type" },
    { id: 5, label: "Insurance" },
];

const LangData: DataProps[] = [
    { id: 1, label: "English" },
    { id: 2, label: "Italian" },
    { id: 3, label: "Marathi" },
    { id: 4, label: "Tamil" },
    { id: 5, label: "French" },
    { id: 6, label: "Spanish" },
];

const SpecialityData: DataProps[] = [
    { id: 1, label: "Dentist" },
    { id: 2, label: "Physician" },
    { id: 3, label: "Cardiologist" },
    { id: 4, label: "Oncologist" },
    { id: 5, label: "Pulmonologist" },
];

const ConditionData: DataProps[] = [
    { id: 1, label: "Heart Failure" },
    { id: 2, label: "Eye Doctors" },
    { id: 3, label: "Foot Consultation" },
    { id: 4, label: "ABdominal Pain" },
];

/*
This filter is used to filter the list of based on dr , it field of work type , speciality etc
*/

const BookAppointmentFilter: React.FC<DrawerAppointmentFilterProps> = ({ isVisible, closeModal }) => {

    const handleClose = () => { closeModal(); setSelected({ left: 1, right: 1 }) };

    const [selected, setSelected] = React.useState<{ left: number; right: number }>({ left: 1, right: 1 });
    const [isChecked, setIsChecked] = React.useState<{ [key: number]: number[] }>({});
    const borderWidthAnim = React.useRef<{ [key: number]: Animated.Value }>({});


    const handleCheckBox = (id: number) => {
        setIsChecked((prevState) => {
            const currentSelected = prevState[selected.left] || [];
            const isSelected = currentSelected.includes(id);
            const updatedSelected = isSelected
                ? currentSelected.filter((item) => item !== id)
                : [...currentSelected, id];

            return { ...prevState, [selected.left]: updatedSelected };
        });
    };
    React.useEffect(() => {
        LeftData.forEach(item => {
            borderWidthAnim.current[item.id] = new Animated.Value(item.id === selected.left ? moderateScale(30) : moderateScale(10));
        });
    }, []);

    React.useEffect(() => {
        LeftData.forEach(item => {
            Animated.timing(borderWidthAnim.current[item.id], {
                toValue: item.id === selected.left ? moderateScale(55) : moderateScale(15),
                duration: 300,
                useNativeDriver: false
            }).start();
        });
    }, [selected.left]);

    const renderLeftSide = React.useCallback(({ item }: { item: DataProps }) => {
        const isSelected = selected.left === item.id;
        const borderWidth = borderWidthAnim.current[item.id];

        return (
            <Pressable onPress={() => setSelected(prev => ({ ...prev, left: item.id }))}>
                <Text style={[styles.txt, isSelected && styles.selectTxt]}>{item.label}</Text>
                <Animated.View style={[styles.bottBord, isSelected && styles.selctBottBord, { width: borderWidth }]} />
            </Pressable>
        );
    }, [selected.left]);

    const renderRightSide = React.useCallback(({ item }: { item: DataProps }) => {
        const checkTick = (isChecked[selected.left] || []).includes(item.id);
        return (
            <Pressable
                style={[commonStyles.RowJFSAC, { columnGap: moderateScale(6) }]}
                onPress={() => handleCheckBox(item.id)}
            >
                <CustomCheckBox selected={checkTick} selectedColor={Colors.primaryColor} />
                <Text style={fontStyles.notoSansMedium14}>{item.label}</Text>
            </Pressable>
        );
    }, [selected.right, selected.left, isChecked]);

    const getDataBasedOnSelection = React.useCallback((key: number) => {
        switch (key) {
            case 1: return LangData;
            case 2: return SpecialityData;
            case 3:
            case 4:
            case 5:
                return ConditionData;
            default: return LangData;
        }
    }, []);

    const renderFilter = () => (
        <View style={commonStyles.flexRow}>
            <FlatList
                data={LeftData}
                renderItem={renderLeftSide}
                keyExtractor={item => item.id.toString()}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <TakeSpace space={moderateScale(8)} />}
                style={{ backgroundColor: Colors.offWhite, flexBasis: "44%" }}
            />
            <View style={styles.verticalLine} />
            <FlatList
                data={getDataBasedOnSelection(selected.left)}
                renderItem={renderRightSide}
                keyExtractor={item => item.id.toString()}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <TakeSpace space={moderateScale(10)} />}
                style={{ backgroundColor: Colors.offWhite, flexBasis: "56%", paddingLeft: moderateScale(15), paddingTop: moderateScale(6) }}
            />
        </View>
    );

    return (
        <Modal
            useNativeDriver
            animationInTiming={500}
            hideModalContentWhileAnimating={true}
            style={{ margin: 0, padding: 0, backgroundColor: Colors.offWhite }}
            animationIn="slideInUp"
            isVisible={isVisible}
            onBackdropPress={handleClose}
            onBackButtonPress={handleClose}
        >
            <Header icon={BackArrowSvg} label="Filter" onPress={handleClose} />
            <View style={styles.container}>
                <FlatList data={[1]} renderItem={renderFilter} showsVerticalScrollIndicator={false} />
            </View>
            <View style={styles.sbtBtns}>
                <CustomButton
                    label="Reset"
                    extraCusBtnStyle={[{ width: "48%", backgroundColor: Colors.offBlack5 }]}
                    extraCusTxtStyle={[{ color: Colors.offBlack }]}
                    onPress={handleClose}
                />
                <CustomButton label="Apply" extraCusBtnStyle={[{ width: "48%" }]} onPress={handleClose} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    sbtBtns: { ...commonStyles.RowJSBAC, padding: moderateScale(14), backgroundColor: Colors.offWhite, borderTopWidth: moderateScale(1), borderTopColor: Colors.offBlack25 },
    container: { ...commonStyles._flexOneBg(Colors.offWhite), padding: moderateScale(16) },
    bottBord: { backgroundColor: Colors.offBlack50, height: moderateScale(1) },
    selctBottBord: { backgroundColor: Colors.primaryColor, height: moderateScale(2) },
    txt: { ...fontStyles.notoSansRegular16, opacity: 0.75 },
    selectTxt: { ...fontStyles.notoSansMedium16, opacity: 0.75 },
    verticalLine: { height: SCREEN_HEIGHT * 0.8, borderRightColor: Colors.offBlack5, borderWidth: moderateScale(0.5), opacity: 0.1 }
});

export default BookAppointmentFilter;
