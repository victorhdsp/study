import { Button, Text, View } from "react-native";
import TextInput from "@/components/TextInput";
import colors from "@/styles/Colors";
import { useState } from "react";

import api from "@/lib/api";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { fetchContent } from "@/store/content.slice";

export default function Response () {
  const [text, setText] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const handleSend = async () => {
    await api.sendResponse(text)
    dispatch(fetchContent())
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