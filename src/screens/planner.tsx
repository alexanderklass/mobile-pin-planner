import React from 'react';
import { View } from 'react-native';
import DatePicker from '../components/DatePicker';
import BookingModal from '../components/Modals/BookingModal';
import ToastMessage from '../components/ToastMessage';
import OptionsModal from '../components/Modals/OptionsModal';
import SideBar from '../components/SideBar';
import DeleteModal from '../components/Modals/DeleteModal';
import Layout from '../components/Layout';

const Planner = () => {
    return (
        <View className="flex-1 relative">
            <Layout />
            <BookingModal />
            <OptionsModal />
            <DeleteModal />
            <SideBar />
            <DatePicker />
            <ToastMessage />
        </View>
    );
};

export default Planner;
