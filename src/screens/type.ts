import { FormikHelpers } from "formik";

type AccountSecurityProps = {
    showCnfPassword: boolean;
    showPassword: boolean;
    toggleCnfPassword: () => void;
    togglePassword: () => void;
    handleSubmit: (open: any) => void
}
type PersonalInfoProps = {
    genderData: { label: string, value: string }[];
    open: boolean;
    setOpen: (open: boolean) => void;
    handleSubmit: (open: any) => void
}
type CommonBtnProps = { btnLabel: string, onPress: () => void }

interface AppointmentFormValues {
    insurance: string;
    reasonForVisit: string;
    date: Date | null;
    reason: string;
    isVisited: 'Yes' | 'No'; // Ensure isVisited is specifically typed
    visitType: string;
    address: string;
    slot: string;
    certify: boolean;
}

type DropdownChangeHandler = (
    field: keyof AppointmentFormValues,
    value: { value: string },
    setFieldValue: (field: string, value: any) => void
) => void;

type FormSubmitHandler = (
    values: AppointmentFormValues,
    formikHelpers: FormikHelpers<AppointmentFormValues>
) => void;

type LoginValues = { phoneNumber: string, password: string }
type FormSubmitHandlerLogin = (
    values: LoginValues,
    { resetForm }: FormikHelpers<LoginValues>
) => void;

export type {
    AccountSecurityProps,
    PersonalInfoProps,
    CommonBtnProps,
    DropdownChangeHandler,
    FormSubmitHandler,
    AppointmentFormValues,
    LoginValues,
    FormSubmitHandlerLogin
}