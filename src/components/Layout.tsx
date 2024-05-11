import React from 'react';
import { View } from 'react-native';
import DateHeader from './DateHeader';
import BottomBar from './BottomBar';
import SidebarContent from './SidebarContent';
import BackgroundImage from './BackgroundImage';

const Layout = () => {
    return (
        <View className={'w-full h-full'}>
            <DateHeader />
            <SidebarContent />
            <BackgroundImage />
            <BottomBar />
        </View>
    );
};

export default Layout;
