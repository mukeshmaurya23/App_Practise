import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { MainStackNavigatorProps } from "../../../routes/type";

const useBookAppointmentList = () => {
    const { params: { searchKey = '' } } = useRoute<RouteProp<MainStackNavigatorProps, 'BookAppointmentListing'>>()
    const [isVisible, setIsVisible] = React.useState(false);
    const closeModal = () => setIsVisible(false);
    const openModal = () => setIsVisible(true);


    return {
        isVisible, openModal, closeModal,searchKey
    }
}
export { useBookAppointmentList }