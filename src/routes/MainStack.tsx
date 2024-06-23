// React States and hooks
import React from "react";
import { StatusBar } from "react-native";

// Screens
import { Login, OnboardScreen, RegisterScreen, VerifyOtp, Home, ForgotPassword, ResetPassword, CommonDiseaseDetailsPage, SpecialityDetailsPage, ListYourPracticeDetailsPage, DrawerAppointment, BookAppointmentListing, ScheduleAppointment, BookaAppointment, ReshceduleScreen, SearchAppointment } from "../screens";
import { AboutUs, DrawerChangePassword, DrawerContactUs, DrawerInsuranceScreen, DrawerPrescriptionScreen, EditProfile, MyProfile, PoliciesScreen, PrivacyPolicies, TermsAndCondition } from "../screens/drawer-screen";

//  custome hook and context
import { MainStackNavigatorRef } from "../ref/MainStackNavigatorRef";
import { useAppDispatch, useAppSelector } from "../redux/hook";

// other libraries
// import LottieSplashScreen from 'react-native-lottie-splash-screen';

// types
import { DrawerStackScreenProps, HomePageDetails, HomeStackProps, MainStackNavigatorProps, SignUpStackProps } from "./type";

// Navigation Imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Helpers, utils and constant
import { helpers } from "../utility/helpers";

// Redux store slices
import { setSession, setToken } from "../redux/slices/auth-slice";
import { userData } from "../local-storage/user-data/userData";
import { Colors } from "../constants";
import DrawerStack from "./DrawerStack";
import AppointmentDetails from "../screens/drawer-screen/drawer-appointment/apointment-details/appointment-details.screen";
import SuccessModalScreen from "../components/modals/success-modal";
import FailureModalScreen from "../components/modals/failure-modal";


// stacks
const Stack = createNativeStackNavigator<MainStackNavigatorProps>();
const SignUpStack = createNativeStackNavigator<SignUpStackProps>();
const DrawerScreenStack = createNativeStackNavigator<DrawerStackScreenProps>();
const HomePageStack = createNativeStackNavigator<HomePageDetails>();

const AuthStack = () => {
  return (
    <SignUpStack.Navigator screenOptions={{ headerShown: false }}>
      <SignUpStack.Screen name={'Onboard'} component={OnboardScreen} />
      <SignUpStack.Screen name={'Login'} component={Login} />
      <SignUpStack.Screen name={'Register'} component={RegisterScreen} />
      <SignUpStack.Screen name={'VerifyOtp'} component={VerifyOtp} />
      <SignUpStack.Screen name={'ForgotPassword'} component={ForgotPassword} />
      <SignUpStack.Screen name={'ResetPassword'} component={ResetPassword} />
    </SignUpStack.Navigator>
  )
}

const DrawerScreen = () => {
  return (
    <DrawerScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <DrawerScreenStack.Screen name={'MyProfile'} component={MyProfile} />
      <DrawerScreenStack.Screen name={'EditProfile'} component={EditProfile} />
      <DrawerScreenStack.Screen name={'AppointmentDetails'} component={AppointmentDetails} />
      <DrawerScreenStack.Screen name={'DrawerInsuranceScreen'} component={DrawerInsuranceScreen} />
      <DrawerScreenStack.Screen name={'DrawerPrescriptionScreen'} component={DrawerPrescriptionScreen} />
      <DrawerScreenStack.Screen name={'AboutUs'} component={AboutUs} />
      <DrawerScreenStack.Screen name={'PoliciesScreen'} component={PoliciesScreen} />
      <DrawerScreenStack.Screen name={'TermsAndCondition'} component={TermsAndCondition} />
      <DrawerScreenStack.Screen name={'PrivacyPolicies'} component={PrivacyPolicies} />
      <DrawerScreenStack.Screen name={'ContactUs'} component={DrawerContactUs} />
      <DrawerScreenStack.Screen name={'ChangePassword'} component={DrawerChangePassword} />
      <DrawerScreenStack.Screen name={'DrawerAppointment'} component={DrawerAppointment} />
    </DrawerScreenStack.Navigator>
  )
}

const HomePageScreen = () => {
  return (
    <HomePageStack.Navigator screenOptions={{ headerShown: false }}>
      <HomePageStack.Screen name="CommonDiseaseDetailsPage" component={CommonDiseaseDetailsPage} />
      <HomePageStack.Screen name="SpecialityDetailsPage" component={SpecialityDetailsPage} />
      <HomePageStack.Screen name="ListYourPracticeDetailsPage" component={ListYourPracticeDetailsPage} />
    </HomePageStack.Navigator>
  )
}

const MainStack = () => {
  const [routeName, setRouteName] = React.useState<string>('Onboard');
  const getBackground = (routeName: string) => {
    if (helpers.setTranslucent(routeName)) {
      return 'transparent';
    }
    return Colors.primaryColor;
  }

  return (
    <>
      <NavigationContainer ref={MainStackNavigatorRef}
        onStateChange={(state) => {
          const currentRoute = state?.routes[state?.index];
          setRouteName(currentRoute?.name!)
        }}
      >
        <StatusBar translucent backgroundColor={getBackground(routeName)} barStyle={'light-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Group key={'Guest'}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="DrawerStack" component={DrawerStack} />
            <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
            <Stack.Screen name="HomePageScreen" component={HomePageScreen} />
            <Stack.Screen name="BookAppointmentListing" component={BookAppointmentListing} />
            <Stack.Screen name="ScheduleAppointment" component={ScheduleAppointment} />
            <Stack.Screen name="BookaAppointment" component={BookaAppointment} />
            <Stack.Screen name="SuccessModalScreen" component={SuccessModalScreen} />
            <Stack.Screen name="FailureModalScreen" component={FailureModalScreen} />
            <Stack.Screen name="ReshceduleScreen" component={ReshceduleScreen} />
            <Stack.Screen name="SearchAppointment" component={SearchAppointment} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainStack;