import React from 'react';
import { View } from 'react-native';
import BottomBar from '../components/BottomBar';
import DateHeader from '../components/DateHeader';
import DatePicker from '../components/DatePicker';
import BookingModal from '../components/Modals/BookingModal';
import ToastMessage from '../components/ToastMessage';
import OptionsModal from '../components/Modals/OptionsModal';
import SideBar from '../components/SideBar';
import SidebarContent from '../components/SidebarContent';
import DeleteModal from '../components/Modals/DeleteModal';

const Planner = () => {
    return (
        <View className="flex-1 h-full items-center justify-center relative">
            <DateHeader />
            <SidebarContent />
            <BookingModal />
            <OptionsModal />
            <DeleteModal />
            <SideBar />
            <BottomBar />
            <DatePicker />
            <ToastMessage />
        </View>
    );
};

export default Planner;
