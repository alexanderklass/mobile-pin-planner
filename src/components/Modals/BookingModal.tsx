import React from 'react';
import CustomButton from '../CustomButton';
import { colorPicker } from '../../utils/colorListPicker';
import { startTimeList, endTimeList } from '../../init/initGridData';
import { emitToast } from '../../utils/emitToast';
import Select from '../Select';
import { View, Text, TextInput } from 'react-native';
import { globalStore } from '../../store/global.store';

const BookingModal = () => {
    const { bookingModal, setBookingModal, bookingData, setBookingData, customerList, setCustomerList, date } =
        globalStore();

    const closeBooking = () => {
        setBookingModal(false);
        resetBookingData();
    };

    const resetBookingData = () => {
        setBookingData({});
    };

    const handleFormOnChange = (value: string | number, name: string) => {
        if (value === null || value === undefined) return;
        setBookingData({ ...bookingData, [name]: value, date: date, customerColor: colorPicker() });
    };

    const selectTimeData = (list: any) => {
        return list.map((item: any, index: number) => {
            return { label: item, value: index, key: index };
        });
    };

    const addCustomer = () => {
        if (checkIfCanAddCustomer()) {
            emitToast('error', 'Es existiert schon ein Kunde für diese Werte');
            return;
        }
        setCustomerList([...customerList, bookingData]);
        emitToast('success', 'Buchung erfolgreich hinzugefügt');
        closeBooking();
    };

    const checkIfCanAddCustomer = () => {
        const filteredList = customerList.filter((item: any) => {
            return (
                item.date === date &&
                item.startLane <= bookingData.startLane &&
                item.endLane >= bookingData.endLane &&
                item.startTime <= bookingData.startTime &&
                item.endTime >= bookingData.endTime
            );
        });
        return filteredList.length > 0;
    };

    const activeBookingButton = () => {
        const laneGreater = bookingData.startLane > bookingData.endLane;
        const timeGreater = bookingData.startTime > bookingData.endTime;
        return (
            !bookingData.customerName ||
            !bookingData.customerNumber ||
            !bookingData.workerName ||
            laneGreater ||
            timeGreater
        );
    };

    return (
        <View className={'absolute'}>
            {bookingModal && (
                <View className={'bg-blue-300 w-[250px] flex border p-2'}>
                    <View className={'flex flex-col justify-center gap-2'}>
                        <Text>BOOKING MODAL</Text>
                        <View className={'space-y-1'}>
                            <TextInput
                                onChangeText={(value) => handleFormOnChange(value, 'customerName')}
                                className={'bg-white border-red-500 border p-3'}
                                placeholder={'Name'}
                            />
                            <TextInput
                                onChangeText={(value) => handleFormOnChange(value, 'customerNumber')}
                                className={'bg-white border-red-500 border p-3'}
                                placeholder={'Telefonnummer'}
                            />
                            <View className={'flex flex-row justify-center items-center'}>
                                <Select
                                    onChange={(value) => {
                                        handleFormOnChange(value, 'startLane');
                                    }}
                                    data={Array.from({ length: 12 }).map((item: any, index: number) => {
                                        return { label: `${index + 1}`, value: index, key: index };
                                    })}
                                />
                                <Select
                                    onChange={(value) => {
                                        handleFormOnChange(value, 'endLane');
                                    }}
                                    data={Array.from({ length: 12 }).map((item: any, index: number) => {
                                        return { label: `${index + 1}`, value: index, key: index };
                                    })}
                                />
                            </View>

                            <View className={'flex flex-row justify-center items-center'}>
                                <Select
                                    onChange={(value) => {
                                        handleFormOnChange(value, 'startTime');
                                    }}
                                    data={selectTimeData(startTimeList)}
                                />
                                <Select
                                    onChange={(value) => {
                                        handleFormOnChange(value, 'endTime');
                                    }}
                                    data={selectTimeData(endTimeList)}
                                />
                            </View>

                            <TextInput
                                onChangeText={(value) => handleFormOnChange(value, 'workerName')}
                                className={'bg-white p-3'}
                                placeholder={'Eingetragen von...'}
                            />

                            <TextInput
                                onChangeText={(value) => handleFormOnChange(value, 'customerNotes')}
                                className={'bg-white p-3'}
                                placeholder={'Notizen...'}
                            />
                        </View>
                        <View className={'flex flex-row items-center justify-around'}>
                            <CustomButton
                                disabled={activeBookingButton()}
                                style={'bg-green-500 border w-[90px] p-1'}
                                onPress={addCustomer}
                                text={'Add'}
                            ></CustomButton>
                            <CustomButton
                                style={'bg-red-500 border w-[90px] p-1'}
                                text={'Close'}
                                onPress={closeBooking}
                            ></CustomButton>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};

export default BookingModal;
