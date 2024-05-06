import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { globalStore } from '../store/global.store';
import Customer from './Customer';
import { switchIndexToTime } from '../utils/timeIndexConverter';
const CustomerHistory = () => {
    const { customerList, date, gridData, setOptionsData, setSidebarIndex, setOptionsModal } = globalStore();
    const filteredCustomer = customerList
        .sort((a: any, b: any) => a.startTime - b.startTime)
        .sort((a: any, b: any) => a.endTime - b.endTime)
        .filter((customer: any) => customer.date === date);

    const handleCustomerClicked = (laneIndex: number, timeIndex: number) => {
        setOptionsData(gridData[laneIndex].time[timeIndex]);
        setSidebarIndex(0);
        setOptionsModal(true);
    };

    const screenHeight = Dimensions.get('window').height;
    const scrollViewHeight = screenHeight * 0.8;

    return (
        <ScrollView style={{ maxHeight: scrollViewHeight }}>
            <View>
                {filteredCustomer.map((customer: any, index: number) => {
                    const startTime = switchIndexToTime(customer.startTime);
                    const endTime = switchIndexToTime(customer.endTime + 1);
                    const fullTime = `${startTime} - ${endTime} Uhr`;
                    return (
                        <Customer
                            key={index}
                            onPress={() => handleCustomerClicked(customer.startLane, customer.startTime)}
                            color={customer.customerColor}
                            name={customer.customerName}
                            notes={customer.customerNotes}
                            time={fullTime}
                        />
                    );
                })}
            </View>
        </ScrollView>
    );
};

export default CustomerHistory;
