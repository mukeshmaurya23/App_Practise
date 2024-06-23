import { moderateScale } from "react-native-size-matters";
import { fontStyles } from "../../../styles";
import { helpers } from "../../../utility/helpers";
import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../../../constants/responsive";
import { Colors } from "../../../constants";

const styles = StyleSheet.create({
    fieldTxt: {
        ...fontStyles.notoSansSemiBold12,
        paddingVertical: moderateScale(6),
        paddingLeft: moderateScale(4),
    },
    dropdownTest: {
        height: helpers.isIos ? moderateScale(46) : moderateScale(50),
        width: SCREEN_WIDTH * 0.40,
        backgroundColor: Colors.offBlack5,
        paddingHorizontal: moderateScale(8),
        borderRadius: moderateScale(4),
        borderWidth: moderateScale(0.8),
        borderColor: Colors.offBlack5
    },
    placeHolder: { ...fontStyles.notoSansSemiBold12, marginLeft: moderateScale(6) },
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
    }
});

export { styles }
