import React, { useEffect } from 'react';
import { weekDays } from '../init/initGridData';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { globalStore } from '../store/global.store';
import { View, Text } from 'react-native';

const DatePicker = () => {
    const { setDate, calendar, setCalendar, date, setCurrenWeekDay } = globalStore();

    const closeCalendar = () => {
        setCalendar(false);
    };

    const getFullDate = (newDate: Date = new Date()) => {
        let day = newDate.getDate().toString();
        let month = (newDate.getMonth() + 1).toString();
        const year = newDate.getFullYear();
        day = day.padStart(2, '0');
        month = month.padStart(2, '0');
        setDate(`${day}.${month}.${year}`);
    };

    const getWeekDay = (dateTime: Date = new Date()) => {
        setCurrenWeekDay(new Date(dateTime).toLocaleDateString('de-DE', { weekday: 'long' }));
    };

    const handleConfirm = (dateTime: Date) => {
        getFullDate(dateTime);
        getWeekDay(dateTime);
        setCalendar(false);
    };

    const handleStartUp = () => {
        getWeekDay();
        getFullDate();
    };

    useEffect(() => {
        handleStartUp();
    }, []);

    return (
        <Text>
            {calendar && (
                <DateTimePickerModal
                    mode="date"
                    isVisible={calendar}
                    onHide={closeCalendar}
                    onCancel={closeCalendar}
                    onConfirm={(date) => handleConfirm(date)}
                />
            )}
        </Text>
    );
};

export default DatePicker;
