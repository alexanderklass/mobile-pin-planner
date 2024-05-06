import React from 'react';
import { View } from 'react-native';
import DateHeader from './DateHeader';
import BottomBar from './BottomBar';
import SidebarContent from './SidebarContent';

const Layout = () => {
    return (
        <View className={'w-full h-full'}>
            <DateHeader />
            <SidebarContent />
            <BottomBar />
        </View>
    );
};

export default Layout;
