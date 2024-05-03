import React from 'react';
import ModalLayout from './ModalLayout';
import { globalStore } from '../../store/global.store';
import { Text, TextInput, View } from 'react-native';
import CustomButton from '../CustomButton';
import Select from '../Select';
import { emitToast } from '../../utils/emitToast';

const OptionsModal = () => {
    const { optionsModal, setOptionsModal, optionsData, setOptionsData, customerList, setCustomerList, date } =
        globalStore();

    const closeOptionsModal = () => {
        setOptionsModal(false);
    };

    const handleOnChange = (value: string | number, name: string) => {
        if (value === null || value === undefined) return;
        setOptionsData({
            ...optionsData,
            [name]: value,
        });
    };

    const handleAdjustCustomer = () => {
        const oldList = [...customerList];
        if (checkIfCanAdjustCustomer()) return emitToast('error', 'Buchung konnte nicht verschoben werden!');
        const newList = oldList.map((customer: any) => {
            if (customer.uID === optionsData.uID && customer.date === optionsData.date) {
                return {
                    ...customer,
                    customerNumber: optionsData.customerNumber,
                    startLane: optionsData.startLane,
                    endLane: optionsData.endLane,
                    startTime: optionsData.startTime,
                    endTime: optionsData.endTime,
                    customerNotes: optionsData.customerNotes,
                    customerColor: optionsData.customerColor,
                    price: optionsData.price,
                };
            }
            return customer;
        });
        setCustomerList(newList);
        emitToast('success', 'Buchung erfolgreich angepasst!');
        closeOptionsModal();
    };

    const handleDeleteCustomer = () => {
        const oldList = [...customerList];
        const newList = oldList.filter((item: any) => {
            return item.uID !== optionsData.uID && item.date === date;
        });
        setCustomerList(newList);
        emitToast('success', 'Buchung erfolgreich gelöscht!');
        setOptionsModal(false);
    };

    const checkIfCanAdjustCustomer = () => {
        const filteredList = customerList.filter((item: any) => {
            return (
                item.date === date &&
                item.startLane <= optionsData.endLane &&
                item.endLane >= optionsData.startLane &&
                item.startTime <= optionsData.endTime &&
                item.endTime >= optionsData.startTime &&
                item.uID !== optionsData.uID
            );
        });
        return filteredList.length > 0;
    };

    const activateAdjustButton = () => {
        const optionsLaneGreater = optionsData.startLane > optionsData.endLane;
        const optionsTimeGreater = optionsData.startTime > optionsData.endTime;
        return !optionsData.customerName || optionsLaneGreater || optionsTimeGreater;
    };

    return (
        <ModalLayout toggleWindow={optionsModal}>
            <Text>Options Modal</Text>
            <TextInput
                className={'bg-blue-200 text-black border-red-500 border p-3'}
                value={optionsData.customerName}
                readOnly={true}
                onChangeText={(value) => handleOnChange(value, 'customerName')}
                placeholder={'Kundennummer'}
            />
            <TextInput
                className={'bg-blue-200 text-black border-red-500 border p-3'}
                readOnly={true}
                value={optionsData.customerNumber}
                onChangeText={(value) => handleOnChange(value, 'customerNumber')}
                placeholder={'Telefonnummer'}
            />
            <View className={'flex flex-row justify-center items-center'}>
                <Select
                    selectType={'lane'}
                    value={optionsData.startLane}
                    onChange={(value) => handleOnChange(value, 'startLane')}
                />
                <Select
                    selectType={'lane'}
                    value={optionsData.endLane}
                    onChange={(value) => handleOnChange(value, 'endLane')}
                />
            </View>
            <View className={'flex flex-row justify-center items-center'}>
                <Select
                    selectType={'time'}
                    timeType={'startTime'}
                    value={optionsData.startTime}
                    onChange={(value) => handleOnChange(value, 'startTime')}
                />
                <Select
                    selectType={'time'}
                    timeType={'endTime'}
                    value={optionsData.endTime}
                    onChange={(value) => handleOnChange(value, 'endTime')}
                />
            </View>
            <TextInput
                className={'bg-blue-200 text-black border-red-500 border p-3'}
                readOnly={true}
                value={optionsData.workerName}
                onChangeText={(value) => handleOnChange(value, 'workerName')}
                placeholder={'Eingetragen von...'}
            />
            <TextInput
                className={'bg-white p-3'}
                value={optionsData.customerNotes}
                onChangeText={(value) => handleOnChange(value, 'customerNotes')}
                placeholder={'Notizen...'}
            />
            <View className={'flex flex-row items-center justify-between'}>
                <CustomButton
                    style={'bg-green-500 border'}
                    disabled={activateAdjustButton()}
                    onPress={handleAdjustCustomer}
                    text={'Adjust'}
                />
                <CustomButton style={'bg-red-500 border'} onPress={handleDeleteCustomer} text={'Delete'} />
                <CustomButton style={'bg-gray-500 border'} onPress={closeOptionsModal} text={'Cancel'} />
            </View>
        </ModalLayout>
    );
};

export default OptionsModal;
