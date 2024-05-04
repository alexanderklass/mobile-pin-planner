import Toast from 'react-native-toast-message';

export const emitToast = (type: string, msg: string) => {
    if (type === 'success') {
        Toast.show({
            type: 'success',
            text1: 'Erfolg',
            text2: msg,
            text1Style: { fontSize: 15 },
            text2Style: { fontSize: 15 },
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
        });
    } else {
        Toast.show({
            type: 'error',
            text1: 'Fehler',
            text2: msg,
            text1Style: { fontSize: 15 },
            text2Style: { fontSize: 15 },
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
        });
    }
};
