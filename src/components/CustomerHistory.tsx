import React from 'react';
import { View } from 'react-native';
import { globalStore } from '../store/global.store';
import Customer from './Customer';
const CustomerHistory = () => {
    const { customerList, date, gridData, setOptionsData, setSidebarIndex, setOptionsModal } = globalStore();

    const filteredCustomer = customerList.filter((customer: any) => customer.date === date);
    const handleCustomerClicked = (laneIndex: number, timeIndex: number) => {
        setOptionsData(gridData[laneIndex].time[timeIndex]);
        setSidebarIndex(0);
        setOptionsModal(true);
    };

    return (
        <View>
            {filteredCustomer.map((customer: any, index: number) => {
                return (
                    <Customer
                        key={index}
                        onPress={() => handleCustomerClicked(customer.startLane, customer.startTime)}
                        color={customer.customerColor}
                        name={customer.customerName}
                        notes={customer.customerNotes}
                        time={(customer.startTime + customer.endTime).toString().trim()}
                    />
                );
            })}
        </View>
    );
};

export default CustomerHistory;
