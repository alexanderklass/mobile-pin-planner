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
        <ModalLayout color={'bg-white border-2'} width={'w-auto'} toggleWindow={deleteModal}>
            <View className={'flex flex-row items-center justify-between'}>
                <Icon name={'alert-triangle'} size={25} color="black" />
                <Text className={'text-[18px] text-center'}>Buchung wirklich löschen?</Text>
            </View>
            <View className={'flex flex-row items-center justify-center'}>
                <CustomButton
                    style={'bg-green-500 w-[110px] mx-1'}
                    icon={true}
                    iconName={'user-minus'}
                    iconSize={25}
                    onPress={handleDeleteCustomer}
                />
                <CustomButton
                    style={'bg-gray-300 w-[110px] mx-1'}
                    icon={true}
                    iconSize={25}
                    iconName={'x'}
                    onPress={closeDeleteModal}
                />
            </View>
        </ModalLayout>
    );
};

export default DeleteModal;
