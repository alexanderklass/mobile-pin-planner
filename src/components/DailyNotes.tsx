import React, { useEffect } from 'react';
import { TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import CustomButton from './CustomButton';
import { globalStore } from '../store/global.store';
import { emitToast } from '../utils/emitToast';

const DailyNotes = () => {
    const { date, setNotes, setNotesList, notes, notesList } = globalStore();

    const handleOnChange = (value: string, name: string) => {
        setNotes({ ...notes, [name]: value });
    };

    const handleSaveNotes = () => {
        const newNoteList = notesList.filter((note) => note.date === date);
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
                        extraNotes: notes.extraNotes,
                        cookNotes: notes.cookNotes,
                        clubNotes: notes.clubNotes,
                    };
                }
                return note;
            });
            setNotesList(customizedNotes);
        }
        emitToast('success', 'Notizen gespeichert!');
    };

    const fetchNotes = () => {
        resetNotes();
        const filteredByDate = notesList.filter((notes) => {
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
                className={'bg-blue-200 my-1 p-1'}
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
                className={'bg-blue-200 p-1 my-1'}
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
                className={'bg-blue-200 p-1 my-1'}
                placeholder={'Clubraum...'}
                multiline={true}
                numberOfLines={10}
                textAlignVertical={'top'}
                value={notes.clubNotes}
                onChangeText={(value: string) => {
                    handleOnChange(value, 'clubNotes');
                }}
            />
            <CustomButton
                icon={true}
                iconName={'save'}
                iconSize={25}
                onPress={handleSaveNotes}
                text={'Speichern'}
                style={'bg-green-500'}
            />
        </KeyboardAvoidingView>
    );
};

export default DailyNotes;
