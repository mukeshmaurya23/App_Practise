import React from "react";
import { navigationHook } from "../../../hooks/navigation.hook";
import { useShowpassword } from "../../../hooks/useShowPassword"
import { LoginValues } from "../../type";

const useLogin = () => {
    const { showPassword, togglePassword } = useShowpassword();
    const { navigateBack, navigateTo } = navigationHook();
    const [isCheck, setIsCheckd] = React.useState(false);
    const toggleCheckBox = () => setIsCheckd(!isCheck);
    const checkboxRef = React.useRef<any>(null);
    const handleLoginPress = () => {
        // if (!isCheck) {
        //   checkboxRef.current!.focus();
        // } else {
        navigateTo('DrawerStack', { screen: 'Home' })
        // }
    };
    const initialValues: LoginValues = {
        phoneNumber: '',
        password: '',
    };

    return {
        showPassword, togglePassword, navigateBack, navigateTo, isCheck, setIsCheckd, handleLoginPress, checkboxRef,
        toggleCheckBox, initialValues
    }
}

export { useLogin }