import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ISearchContent {
    name: string;
    date: string;
    onPress?: any;
}

const SearchContent = ({ name, date, onPress }: ISearchContent) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={'w-full rounded-md my-0.5 bg-gray-200 items-center p-3 justify-around flex flex-row'}
        >
            <Text>{name}</Text>
            <Text>{date}</Text>
        </TouchableOpacity>
    );
};

export default SearchContent;
