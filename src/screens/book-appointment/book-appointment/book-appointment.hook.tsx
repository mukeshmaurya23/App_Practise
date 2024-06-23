import React from "react";
import moment from "moment";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackNavigatorProps } from "../../../routes/type";
import { navigationHook } from "../../../hooks/navigation.hook";
import { AppointmentFormValues } from "../../type";


type SelectedProps = { date: number; slot: number };
const useBookAppointment = () => {
    const { params: { drImage, drName, jobLocation } } = useRoute<RouteProp<MainStackNavigatorProps, 'BookaAppointment'>>();
    const { navigateTo } = navigationHook();

    const initialValues: AppointmentFormValues = {
        insurance: '',
        reasonForVisit: '',
        date: null,
        reason: '',
        isVisited: 'Yes',
        visitType: '',
        address: '',
        slot: '',
        certify: false,
    };

    const setOpen = () => setVisible(true);
    const setClose = () => setVisible(false);
    // const toggleCheck = () => setIsCheckd(!check);
    const setCalDate = (value: string) => setSelctDate(value);

    const [visible, setVisible] = React.useState(false);
    // const [check, setIsCheckd] = React.useState<boolean>(false);
    const [selected, setSelected] = React.useState<SelectedProps>({ date: 0, slot: 0 });
    const [selecDate, setSelctDate] = React.useState(moment(new Date()).format('YYYY-MM-DD'));
    // const [selectType, setSelecType] = React.useState({ isVisited: 'Yes', visitType: 'In Persion' });

    const setDate = (item: number) => setSelected((prev) => { return { ...prev, date: item, } });
    const setSlot = (item: number) => setSelected((prev) => { return { ...prev, slot: item, } });
    // const setType = (label: string, value: string) => setSelecType((pre) => { return { ...pre, [label]: value } });

    return {
        drImage, drName, jobLocation, selected, setDate, setSlot, navigateTo,
        visible, setOpen, setClose, setCalDate, initialValues
    };
}

export { useBookAppointment }