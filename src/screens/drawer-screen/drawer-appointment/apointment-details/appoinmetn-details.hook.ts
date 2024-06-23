import { RouteProp, useRoute } from "@react-navigation/native"
import { DrawerStackScreenProps } from "../../../../routes/type"
import React from "react"
import { navigationHook } from "../../../../hooks/navigation.hook"

const useAppointmentDetails = () => {
    const { params: { drImage, drName, jobLocation, rating, status } } = useRoute<RouteProp<DrawerStackScreenProps, 'AppointmentDetails'>>()
    const [starRating, setStarRating] = React.useState(rating);
    const { navigateTo } = navigationHook();
    const handleRatingChange = (newRating: number) => {
        console.log('New Rating:', newRating);
        setStarRating(newRating)
    };
    return {
        drImage, drName, jobLocation, rating, status,
        handleRatingChange, navigateTo
    }
}

export { useAppointmentDetails }