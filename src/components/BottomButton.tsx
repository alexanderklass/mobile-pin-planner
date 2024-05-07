import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export interface IBottomButton {
    onPress?: () => void;
    name?: string;
    size?: number;
    color?: string;
    width?: string;
}

const BottomButton = ({
    onPress,
    name = 'plus',
    size = 30,
    color = 'bg-blue-500',
    width = 'w-[60px]',
}: IBottomButton) => {
    return (
        <TouchableOpacity className={`rounded-md ${color} flex ${width} items-center justify-center`} onPress={onPress}>
            <Icon color={'black'} name={name} size={size} />
        </TouchableOpacity>
    );
};

export default BottomButton;
