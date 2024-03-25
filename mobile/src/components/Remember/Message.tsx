import { useEffect } from "react";
import { Text, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetchContent } from "@/store/content.slice";



export default function Message () {
  const { messages } = useSelector((state: RootState) => state.content)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => { 
    dispatch(fetchContent())
  }, [dispatch]);

  return (
    <View className="w-full flex flex-col gap-3">
      <Text className="text-center text-xl">
        Sua mensagem do dia é:
      </Text>
      {
        messages.length > 0 ? (
          <Text className="text-center text-3xl">
            { messages[messages.length - 1] }
          </Text>
        ) : (
          <Text className="text-center text-3xl text-gray-600">
            Não há mensagens
          </Text>
        )
      }
    </View>
  )
}