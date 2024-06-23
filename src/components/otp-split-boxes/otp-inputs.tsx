import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { commonStyles } from "../../styles";
import { Colors } from "../../constants";
import Timer from "../otp-split-boxes/timmer";

interface OTP {
    numDigits: number;
    showTimer: boolean;
    inputRefs: any;
    handleInputChange: any;
    handleKeyPress: any;
    otp: { [key: number]: string };
}
const OtpInputBox = (props: OTP) => {
    const { numDigits, inputRefs, handleInputChange, handleKeyPress, otp, showTimer } = props;
    return (
        <>
            <View style={styles.otpContainer}>
                {Array.from({ length: numDigits }, (_, i) => (
                    <View style={styles.otpBox} key={i + 1}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="numeric"
                            cursorColor={Colors.offBlack}
                            maxLength={1}
                            value={otp[i + 1]}
                            ref={inputRefs.current[i]}
                            textContentType="oneTimeCode"
                            autoComplete="sms-otp"
                            selection={{ start: 1, end: 1 }}
                            onChangeText={(text) => handleInputChange(i, text)}
                            onKeyPress={(event) => handleKeyPress(i, event)}
                        />
                    </View>
                ))}
            </View>
            {showTimer && <Timer />}
        </>
    );
};

const styles = StyleSheet.create({
    otpContainer: {
        ...commonStyles.RowJSBAC,
    },
    otpBox: {
        borderColor: Colors.offBlack5,
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(5),
        width: moderateScale(45),
        height: moderateScale(45),
        backgroundColor: Colors.offBlack5,
    },
    otpText: {
        fontSize: moderateScale(14),
        color: Colors.offBlack,
        padding: 0,
        textAlign: "center",
        paddingVertical: moderateScale(10),
    },
});

export default OtpInputBox;
