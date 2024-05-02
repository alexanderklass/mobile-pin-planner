import React, { useEffect, useState } from 'react';
import { View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import CustomButton from './CustomButton';
import { globalStore } from '../store/global.store';

export interface IDailyNotes {
    extraNotes: string;
    cookNotes: string;
    clubNotes: string;
    date: string | Date;
}

const DailyNotes = () => {
    const { date } = globalStore();
    const [notesList, setNotesList] = useState<IDailyNotes[]>([]);
    const [notes, setNotes] = useState<any>({});

    const handleOnChange = (value: string, name: string) => {
        setNotes({ ...notes, [name]: value });
    };

    const handleSaveNotes = () => {
        const newNoteList = notesList.filter((note: any) => note.date === date);
        if (newNoteList.length === 0) {
            const newNotes: any = {
                date: date,
                extraNotes: notes.extraNotes,
                cookNotes: notes.cookNotes,
                clubNotes: notes.clubNotes,
            };
            setNotesList([...notesList, newNotes]);
        } else {
            const customizedNotes = notesList.map((note: any) => {
                if (note.date === date) {
                    return {
                        ...note,
                        extraNotes: note.extraNotes,
                        cookNotes: note.cookNotes,
                        clubNotes: note.clubNotes,
                    };
                }
                return note;
            });
            setNotesList(customizedNotes);
        }
    };

    const fetchNotes = () => {
        resetNotes();
        const filteredByDate = notesList.filter((notes: IDailyNotes) => {
            return notes.date === date;
        });
        if (filteredByDate.length === 0) return;
        setNotes(filteredByDate[0]);
    };

    const resetNotes = () => {
        setNotes({});
    };

    useEffect(() => {
        fetchNotes();
    }, [date]);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex flex-col">
            <TextInput
                className={'bg-gray-200 my-1 p-1 w-[390px]'}
                placeholder={'Sonderbuchungen...'}
                multiline={true}
                numberOfLines={10}
                textAlignVertical={'top'}
                value={notes.extraNotes}
                onChangeText={(value: string) => {
                    handleOnChange(value, 'extraNotes');
                }}
            />
            <TextInput
                className={'bg-gray-200 p-1 my-1 w-[390px]'}
                placeholder={'Koch...'}
                multiline={true}
                numberOfLines={10}
                textAlignVertical={'top'}
                value={notes.cookNotes}
                onChangeText={(value: string) => {
                    handleOnChange(value, 'cookNotes');
                }}
            />
            <TextInput
                className={'bg-gray-200 p-1 my-1 w-[390px]'}
                placeholder={'Clubraum...'}
                multiline={true}
                numberOfLines={10}
                textAlignVertical={'top'}
                value={notes.clubNotes}
                onChangeText={(value: string) => {
                    handleOnChange(value, 'clubNotes');
                }}
            />
            <CustomButton onPress={handleSaveNotes} text={'SAFE'} style={'bg-green-500'} />
        </KeyboardAvoidingView>
    );
};

export default DailyNotes;
