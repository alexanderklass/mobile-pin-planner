import React, { useEffect, useState } from 'react';
import { TextInput, KeyboardAvoidingView, Platform, View, Text } from 'react-native';
import CustomButton from './CustomButton';
import { globalStore } from '../store/global.store';
import { emitToast } from '../utils/emitToast';
import { IDailyNotes } from '../Types/TypeCollection';

const DailyNotes = () => {
    const { date, setNotes, setNotesList, notes, notesList } = globalStore();
    const [prevNotes, setPrevNotes] = useState<IDailyNotes[]>();
    const [saveNotesWarning, setSaveNotesWarning] = useState(false);

    const handleOnChange = (value: string, name: string) => {
        setNotes({ ...notes, [name]: value });
        if (prevNotes !== notes) setSaveNotesWarning(true);
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
        setSaveNotesWarning(false);
    };

    const fetchNotes = () => {
        resetNotes();
        const filteredByDate = notesList.filter((notes) => {
            return notes.date === date;
        });
        if (filteredByDate.length === 0) return;
        setPrevNotes(filteredByDate);
        setNotes(filteredByDate[0]);
    };

    const resetNotes = () => {
        setNotes({});
        setSaveNotesWarning(false);
    };

    useEffect(() => {
        fetchNotes();
    }, [date]);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex flex-col relative"
        >
            <View className={`${!saveNotesWarning && 'hidden'} p-2 bg-red-300`}>
                <Text className={'text-center'}>Nicht gespeicherte Werte vorhanden!</Text>
            </View>
            <TextInput
                className={'bg-blue-200 my-1 p-1'}
                placeholder={'Sonderbuchungen...'}
                multiline={true}
                numberOfLines={8}
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
                numberOfLines={8}
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
                numberOfLines={8}
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
