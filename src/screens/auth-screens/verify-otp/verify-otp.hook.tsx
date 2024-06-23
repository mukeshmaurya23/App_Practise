import React from "react"
import { navigationHook } from "../../../hooks/navigation.hook"
import { TextInput } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackNavigatorProps, SignUpStackProps } from "../../../routes/type";

const useVerifyOtp = () => {
    const { params: { isFormForgotPass = false } } = useRoute<RouteProp<SignUpStackProps, 'VerifyOtp'>>()
    const { navigateTo,navigateBack } = navigationHook();
    const otpRef = React.useRef<React.RefObject<TextInput>[]>(Array.from({ length: 6 }, () => React.createRef()));
    const [otp, setOtp] = React.useState(Object.fromEntries(Array.from({ length: 6 }, (_, i) => [i + 1, ""])));

    const handleInputChange = (index: number, text: string) => {
        const newOtp = { ...otp, [index + 1]: text };
        setOtp(newOtp);
        if (text && index < 5) {
            otpRef.current[index + 1]?.current?.focus();
        }
    };

    const handleKeyPress = (index: number, event: any) => {
        const key = event.nativeEvent.key;
        const newOtp = { ...otp };
        if (key === 'Backspace') {
            if (otp[index + 1] === "") {
                if (index > 0) {
                    otpRef.current[index - 1]?.current?.focus();
                }
            } else {
                newOtp[index + 1] = "";
                setOtp(newOtp);
                otpRef.current[index - 1]?.current?.focus();
            }
        } else if (/^\d$/.test(key)) {
            if (newOtp[index + 1]) {
                if (index < 5) {
                    otpRef.current[index + 1]?.current?.focus();
                }
                handleInputChange(index + 1, key);
            } else {
                newOtp[index + 1] = key;
                setOtp(newOtp);
                if (index < 5) {
                    otpRef.current[index + 1]?.current?.focus();
                }
            }
        }
    };

    // React.useEffect(() => {
    //     // inputRefs[0]?.current?.focus();
    //     otpRef.current[0]?.current?.focus();
    // }, []);

    return {
        navigateTo,
        otpRef,
        handleInputChange,
        handleKeyPress,
        otp,
        isFormForgotPass,
        navigateBack
    }
}

export { useVerifyOtp }