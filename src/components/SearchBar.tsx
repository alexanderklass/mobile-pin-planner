import React, { useState } from 'react';
import { TextInput, View, ScrollView } from 'react-native';
import SearchContent from './SearchContent';
import Icon from 'react-native-vector-icons/Feather';
import { globalStore } from '../store/global.store';
import { ITime } from '../Types/TypeCollection';
const SearchBar = () => {
    const { customerList, setUniversalDate, setSidebarIndex, setToggleSidebar } = globalStore();
    const [searchList, setSearchList] = useState<ITime[]>([]);
    const [searchInput, setSearchInput] = useState('');
    const [searchFocus, setSearchFocus] = useState(false);

    const filterSearch = (value: string) => {
        setSearchInput(value);
        const oldList = [...customerList];
        const newList = oldList.filter((customer) => {
            return customer.customerName.toLowerCase().includes(searchInput.toLowerCase());
        });
        setSearchList(newList);
    };

    const handleContentClick = (customer: ITime) => {
        const date = customer.date;
        const [day, month, year] = date.split('.');
        const jsDate = new Date(`${year}-${month}-${day}`);
        const isoString = jsDate.toISOString();
        const newDateObj = new Date(isoString);
        setUniversalDate(newDateObj);
        resetInput();
    };

    const resetInput = () => {
        setSearchInput('');
        setSidebarIndex(0);
        setToggleSidebar(false);
    };

    return (
        <View className={'w-full mt-1'}>
            <View className={'justify-center relative flex items-center'}>
                <View className={'absolute top-3 right-2 z-10'}>
                    <Icon name={'search'} size={20} />
                </View>
                <TextInput
                    onFocus={() => setSearchFocus(true)}
                    onBlur={() => setSearchFocus(false)}
                    onChangeText={(value) => {
                        filterSearch(value);
                    }}
                    className={`bg-white w-full ${searchFocus && searchInput !== '' && searchList.length > 0 ? 'rounded-t-md' : 'rounded-md'} p-2`}
                    placeholder={'Kunden suchen...'}
                />
            </View>
            <ScrollView
                style={{ maxHeight: 200 }}
                className={`w-full rounded-b-md ${searchList.length > 0 && searchInput !== '' ? 'p-2' : 'p-0'} bg-white`}
            >
                {searchList.length > 0 &&
                    searchInput !== '' &&
                    searchList.map((customer: ITime, index: number) => {
                        return (
                            <SearchContent
                                key={index}
                                onPress={() => handleContentClick(customer)}
                                name={customer.customerName}
                                date={customer.date}
                            />
                        );
                    })}
            </ScrollView>
        </View>
    );
};

export default SearchBar;
