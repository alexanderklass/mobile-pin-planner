import React from 'react';
import { View, Text } from 'react-native';
import { globalStore } from '../../store/global.store';
import CustomButton from '../CustomButton';
import ModalLayout from './ModalLayout';
import Icon from 'react-native-vector-icons/Feather';
import { emitToast } from '../../utils/emitToast';
const DeleteModal = () => {
    const { deleteModal, setDeleteModal, customerList, date, optionsData, setCustomerList } = globalStore();
    const closeDeleteModal = () => {
        setDeleteModal(false);
    };

    const handleDeleteCustomer = () => {
        const oldList = [...customerList];
        const newList = oldList.filter((item: any) => {
            return item.uID !== optionsData.uID && item.date === date;
        });
        setCustomerList(newList);
        emitToast('success', 'Buchung erfolgreich gelöscht!');
        closeDeleteModal();
    };

    return (
        <ModalLayout toggleWindow={deleteModal}>
            <View className={'flex flex-row items-center justify-between'}>
                <View className={'bg-red-500 p-1 rounded-md'}>
                    <Icon name={'alert-triangle'} size={20} color="black" />
                </View>
                <Text className={'text-[17px] text-center'}>Buchung wirklich löschen?</Text>
            </View>
            <View className={'flex flex-row items-center justify-around'}>
                <CustomButton style={'bg-green-500 w-[110px]'} text="OK" onPress={handleDeleteCustomer} />
                <CustomButton style={'bg-gray-200 w-[110px]'} text="CANCEL" onPress={closeDeleteModal} />
            </View>
        </ModalLayout>
    );
};

export default DeleteModal;
