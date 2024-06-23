import { navigationHook } from "../../../hooks/navigation.hook"

const useForgotPass = () => {
    const { navigateTo } = navigationHook()

    return {
        navigateTo
    }
}

export { useForgotPass }