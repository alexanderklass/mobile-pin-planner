import BottomButton from '../components/BottomButton';
import { View, Platform, Text } from 'react-native';
import { useState } from 'react';
import { globalStore } from '../store/global.store';
const BottomBar = () => {
    const { setCalendar, setBookingModal } = globalStore();

    const openBooking = () => {
        setBookingModal(true);
    };

    const openCalendar = () => {
        setCalendar(true);
    };

    const openSettings = () => {
        console.log('open Settings');
    };

    return (
        <View className="bg-blue-300 flex items-center justify-center w-full h-[60px] absolute bottom-0">
            <View className={'flex w-full flex-row justify-around'}>
                <BottomButton onPress={openCalendar} name={'calendar'} size={30} />
                <BottomButton onPress={openBooking} name={'plus'} size={50} />
                <BottomButton onPress={openSettings} name={'settings'} size={30} />
            </View>
        </View>
    );
};

export default BottomBar;
