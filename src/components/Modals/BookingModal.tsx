import React from 'react';
import CustomButton from '../CustomButton';
import { colorPicker } from '../../utils/colorListPicker';
import { emitToast } from '../../utils/emitToast';
import { View, Text, TextInput } from 'react-native';
import { globalStore } from '../../store/global.store';
import uuid from 'react-native-uuid';
import Select from '../Select';
import ModalLayout from './ModalLayout';

const BookingModal = () => {
    const { bookingModal, setBookingModal, bookingData, setBookingData, customerList, setCustomerList, date } =
        globalStore();

    const closeBooking = () => {
        setBookingModal(false);
    };

    const handleFormOnChange = (value: string | number, name: string) => {
        if (value === null || value === undefined) return;
        setBookingData({ ...bookingData, [name]: value });
    };

    const checkIfCanAddCustomer = (): boolean => {
        const filteredList: object[] = customerList.filter((item: any) => {
            return (
                item.date === date &&
                item.startLane <= bookingData.endLane &&
                item.endLane >= bookingData.startLane &&
                item.startTime <= bookingData.endTime &&
                item.endTime >= bookingData.startTime
            );
        });
        return filteredList.length > 0;
    };

    const addCustomer = () => {
        if (checkIfCanAddCustomer()) return emitToast('error', 'Es existiert schon ein Kunde für diese Werte');
        setCustomerList([
            ...customerList,
            { ...bookingData, date: date, customerColor: colorPicker(), uID: uuid.v4(), payedStatus: false },
        ]);
        emitToast('success', 'Buchung erfolgreich hinzugefügt');
        closeBooking();
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
        <ModalLayout toggleWindow={bookingModal}>
            <Text className={'font-bold'}>Kunden buchen</Text>
            <View className={'space-y-1'}>
                <TextInput
                    onChangeText={(value) => handleFormOnChange(value, 'customerName')}
                    className={`bg-white ${!bookingData.customerName && 'bg-red-300'} rounded-md p-3`}
                    placeholder={'Kundenname'}
                />
                <TextInput
                    onChangeText={(value) => handleFormOnChange(value, 'customerNumber')}
                    className={`bg-white ${!bookingData.customerNumber && 'bg-red-300'} rounded-md p-3`}
                    placeholder={'Telefonnummer'}
                />
                <View className={'flex flex-row justify-center items-center'}>
                    <Select
                        onChange={(value) => {
                            handleFormOnChange(value, 'startLane');
                        }}
                        value={bookingData.startLane}
                        selectType={'lane'}
                    />
                    <Select
                        onChange={(value) => {
                            handleFormOnChange(value, 'endLane');
                        }}
                        value={bookingData.endLane}
                        selectType={'lane'}
                    />
                </View>

                <View className={'flex flex-row justify-center items-center'}>
                    <Select
                        onChange={(value) => {
                            handleFormOnChange(value, 'startTime');
                        }}
                        selectType={'time'}
                        timeType={'startTime'}
                        value={bookingData.startTime}
                    />
                    <Select
                        onChange={(value) => {
                            handleFormOnChange(value, 'endTime');
                        }}
                        selectType={'time'}
                        timeType={'endTime'}
                        value={bookingData.endTime}
                    />
                </View>

                <TextInput
                    onChangeText={(value) => handleFormOnChange(value, 'workerName')}
                    className={`bg-white ${!bookingData.workerName && 'bg-red-300'} rounded-md p-3`}
                    placeholder={'Eingetragen von...'}
                />

                <TextInput
                    onChangeText={(value) => handleFormOnChange(value, 'customerNotes')}
                    className={'bg-white p-3 rounded-md'}
                    multiline={true}
                    numberOfLines={3}
                    textAlignVertical={'top'}
                    placeholder={'Notizen...'}
                />
            </View>
            <View className={'flex flex-row items-center justify-center'}>
                <CustomButton
                    disabled={activeBookingButton()}
                    style={'bg-green-500 w-[112px] mx-1'}
                    onPress={addCustomer}
                    icon={true}
                    iconSize={25}
                    iconName={'user-plus'}
                ></CustomButton>
                <CustomButton
                    style={'bg-gray-300 w-[112px] mx-1'}
                    icon={true}
                    iconSize={25}
                    iconName={'x'}
                    onPress={closeBooking}
                ></CustomButton>
            </View>
        </ModalLayout>
    );
};

export default BookingModal;
