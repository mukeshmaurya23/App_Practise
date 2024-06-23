
type MainStackNavigatorProps = {
    Login: undefined;
    HomeStack: HomeStackProps;
    AuthStack: SignUpStackProps;
    DrawerStack: undefined;
    DrawerScreen: DrawerStackScreenProps;
    HomePageScreen: HomePageDetails;
    SuccessModalScreen: {
        message: string
    }
    FailureModalScreen: {
        message: string
    }
    BookAppointmentListing: {
        searchKey?: string
    };
    SearchAppointment: undefined;
    ScheduleAppointment: {
        drName: string
        drImage: string
        jobLocation: string
        spokenLang: string[]
    };
    BookaAppointment: {
        drName: string
        drImage: string
        jobLocation: string
    };
    ReshceduleScreen: {
        drName: string
        drImage: string
        jobLocation: string
        spokenLang: string[]
    };
}

type SignUpStackProps = {
    Onboard: undefined;
    Login: undefined;
    Register: undefined;
    VerifyOtp: {
        isFormForgotPass: boolean
    };
    ForgotPassword: undefined;
    ResetPassword: undefined;
}
type HomeStackProps = {
    Home: undefined;

}
type HomePageDetails = {
    SpecialityDetailsPage: undefined;
    CommonDiseaseDetailsPage: undefined;
    ListYourPracticeDetailsPage: undefined;
}
type DrawerStackScreenProps = {
    Appointments: undefined;
    Insurance: undefined;
    Prescriptions: undefined;
    ListYourPractice: undefined;
    AboutUs: undefined;
    ContactUs: undefined;
    PoliciesScreen: undefined;
    PrivacyPolicies: undefined;
    TermsAndCondition: undefined;
    ChangePassword: undefined;
    DrawerAppointment: undefined;
    AppointmentDetails: {
        drImage: string
        drName: string
        jobLocation: string
        rating: number,
        status: string
    };
    MyProfile: undefined;
    EditProfile: undefined;
    DrawerPrescriptionScreen: undefined;
    DrawerInsuranceScreen: undefined;
}
export type {
    MainStackNavigatorProps,
    SignUpStackProps,
    HomeStackProps,
    DrawerStackScreenProps,
    HomePageDetails
}