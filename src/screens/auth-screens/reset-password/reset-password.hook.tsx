import { navigationHook } from "../../../hooks/navigation.hook"
import { useShowpassword } from "../../../hooks/useShowPassword";

const useResetPasswrod = () => {


    const { navigateTo } = navigationHook();
    const { showCnfPassword, showPassword, toggleCnfPassword, togglePassword } = useShowpassword();


    return {
        navigateTo,showCnfPassword, showPassword, toggleCnfPassword, togglePassword
    }
}

export { useResetPasswrod }