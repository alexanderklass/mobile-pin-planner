import React, { useEffect } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { globalStore } from '../store/global.store';

const DatePicker = () => {
    const { setDate, calendar, setCalendar, setCurrenWeekDay, setUniversalDate, universalDate } = globalStore();

    const closeCalendar = () => {
        setCalendar(false);
    };

    const getFullDate = () => {
        let day = universalDate.getDate().toString();
        let month = (universalDate.getMonth() + 1).toString();
        const year = universalDate.getFullYear();
        day = day.padStart(2, '0');
        month = month.padStart(2, '0');
        setDate(`${day}.${month}.${year}`);
    };

    const getWeekDay = () => {
        setCurrenWeekDay(universalDate.toLocaleDateString('de-DE', { weekday: 'long' }));
    };

    const handleConfirm = (dateTime: Date) => {
        setUniversalDate(dateTime);
    };

    const handleUpdateDate = () => {
        getWeekDay();
        getFullDate();
    };

    useEffect(() => {
        handleUpdateDate();
    }, [universalDate]);

    return (
        <DateTimePickerModal
            mode="date"
            isVisible={calendar}
            onHide={closeCalendar}
            onCancel={closeCalendar}
            date={universalDate}
            onConfirm={(date) => handleConfirm(date)}
        />
    );
};

export default DatePicker;
