import * as Yup from 'yup';

const validate = {
    PersonalInfoSchema: () => {
        return Yup.object().shape({
            name: Yup.string().required('Name is required'),
            gender: Yup.string().required('Gender is required'),
            // birthdate: Yup.date().required('Birthdate is required'),
        })
    },

    ContactInfoSchema: () => {
        return Yup.object().shape({
            phone: Yup.string().required('Phone number is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
        })
    },

    AccountSecuritySchema: () => {
        return Yup.object().shape({
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), ''], 'Passwords must match')
                .required('Confirm Password is required'),
        })
    },
    ChangePasswordValidate: () => {
        return Yup.object().shape({
            oldPassword: Yup.string().required("Old Password is required"),
            newPassword: Yup.string().required("New Password is required"),
            confirmPassword: Yup.string().required("Confirm Password is required").oneOf([Yup.ref('newPassword'), ""], 'Passwords must match')
        });
    },
    ContactUsValidation: () => {
        return Yup.object().shape({
            name: Yup.string().required("Name is required"),
            message: Yup.string().required("Message is required"),
        });
    },
    AppointmentSchema: () => {
        return Yup.object().shape({
            insurance: Yup.string().required('Insurance is required'),
            reasonForVisit: Yup.string().required('Reason for your visit is required'),
            // date: Yup.date().required('Date is required').nullable(),
            reason: Yup.string().required('Reason is required'),
            // isVisited: Yup.string().oneOf(['Yes', 'No']).required('Please specify if you have visited before'),
            // visitType: Yup.string().required('Visit type is required'),
            address: Yup.string().required('Clinic address is required'),
            // slot: Yup.string().required('Date & Time availability is required'),
            certify: Yup.boolean().oneOf([true], 'You must certify that the information provided is accurate'),
        });
    },
    LoginValidation: () => {
        Yup.object().shape({
            phoneNumber: Yup.string().required('Phone number is required'),
            password: Yup.string().required('Password is required'),
        });
    }
};

export { validate };
