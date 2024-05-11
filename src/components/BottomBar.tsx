import BottomButton from '../components/BottomButton';
import { View, Keyboard } from 'react-native';
import { useEffect, useState } from 'react';
import { globalStore } from '../store/global.store';
const BottomBar = () => {
    const { setCalendar, setBookingModal, setToggleSidebar, setBookingData } = globalStore();
    const [keyboardStatus, setKeyboardStatus] = useState<boolean>(false);

    const openBooking = () => {
        setBookingModal(true);
        resetBookingDataValues();
        setBookingData({ startLane: 0, endLane: 11, startTime: 0, endTime: 21 });
    };

    const openCalendar = () => {
        setCalendar(true);
    };

    const resetBookingDataValues = () => {
        setBookingData({});
    };

    const openSidebar = () => {
        setToggleSidebar(true);
    };

    useEffect(() => {
        const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardStatus(true));
        const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardStatus(false));
        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    return (
        <View
            className={`bg-blue-400 ${keyboardStatus ? 'hidden' : 'flex'} -z-10 items-center justify-center w-full h-[60px] absolute bottom-0`}
        >
            <View className={`flex w-full flex-row justify-around`}>
                <BottomButton
                    width={'w-[70px]'}
                    color={'bg-blue-200'}
                    onPress={openCalendar}
                    name={'calendar'}
                    size={30}
                />
                <BottomButton
                    width={'w-[100px]'}
                    color={'bg-green-400'}
                    onPress={openBooking}
                    name={'plus'}
                    size={50}
                />
                <BottomButton
                    width={'w-[70px]'}
                    color={'bg-blue-200'}
                    onPress={openSidebar}
                    name={'sidebar'}
                    size={30}
                />
            </View>
        </View>
    );
};

export default BottomBar;
