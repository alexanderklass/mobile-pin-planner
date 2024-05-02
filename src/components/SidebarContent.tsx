import React from 'react';
import { View } from 'react-native';
import CustomerHistory from './CustomerHistory';
import DailyNotes from './DailyNotes';
import Grid from './Grid';
import { globalStore } from '../store/global.store';
const SidebarContent = () => {
    const { sidebarIndex } = globalStore();
    const content = [
        {
            page: <Grid />,
        },
        {
            page: <CustomerHistory />,
        },
        {
            page: <DailyNotes />,
        },
    ];
    return <View>{content[sidebarIndex].page}</View>;
};

export default SidebarContent;
