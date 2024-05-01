import React from 'react';
import { View } from 'react-native';
import BottomBar from '../components/BottomBar';
import Grid from '../components/Grid';
import DateHeader from '../components/DateHeader';
import DatePicker from '../components/DatePicker';
import BookingModal from '../components/Modals/BookingModal';
import ToastMessage from '../components/ToastMessage';
import OptionsModal from '../components/Modals/OptionsModal';

const Planner = () => {
    return (
        <View className="flex-1 h-full relative justify-center items-center">
            <DateHeader />
            <Grid />
            <BookingModal />
            <OptionsModal />
            <BottomBar />
            <DatePicker />
            <ToastMessage />
        </View>
    );
};

export default Planner;
