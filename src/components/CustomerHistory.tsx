import React from 'react';
import { View, Text } from 'react-native';
import { globalStore } from '../store/global.store';
import Customer from './Customer';
const CustomerHistory = () => {
    const { customerList } = globalStore();

    const filteredCustomer = () => {
        return customerList.map((customer: any, index: number) => {
            return (
                <View key={index}>
                    <Customer
                        key={index}
                        name={customer.customerName}
                        notes={customer.customerNotes}
                        time={customer.startTime + '' + customer.endTime}
                    />
                </View>
            );
        });
    };
    return <View>{filteredCustomer()}</View>;
};

export default CustomerHistory;
