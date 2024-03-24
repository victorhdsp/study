import { TextInput as _TextInput, TextInputProps } from 'react-native';

interface Props extends TextInputProps {

}

export default function TextInput (props: Props) {
  return (
    <_TextInput 
      {...props} 
      className={`
        text-center text-lg 
        px-4 py-2 rounded-lg
        w-full 
        bg-gray-300
      `} 
    />
  )
}