import { Button, Text, View } from "react-native";
import TextInput from "@/components/TextInput";
import colors from "@/styles/Colors";
import { useState } from "react";
import axios from "axios";

const apiUrl = 'http://192.168.0.4:3000/response' //172.27.133.98
const localhostUrl = 'http://localhost:3000/response'

export default function Response () {
  const [text, setText] = useState('')

  const handleSend = async () => {
    const connection = async (url:string) => {
      await axios.post(url, { text })
      setText('')
    }

    try {
      await connection(apiUrl);
    } catch (error) {
      await connection(localhostUrl);
      console.error('Error sending data:', error);
    }
  }

  return (
    <View className="w-full flex flex-col gap-3">
      <Text className="text-center text-lg">
        Digite a mensagem do dia.
      </Text>
      <TextInput 
        className="text-center text-lg"
        placeholder="A mensagem do dia é..." 
        onChange={e=>setText(e.nativeEvent.text)}
        value={text}
      />
      <Button 
        title="Enviar" 
        color={colors.light.tint} 
        onPress={handleSend}
      />
    </View>
  )
}