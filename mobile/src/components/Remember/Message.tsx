import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";

const apiUrl = 'http://192.168.0.4:3000/message' //172.27.133.98
const localhostUrl = 'http://localhost:3000/message'

export default function Message () {
  const [messages, setMessages] = useState<string[]>([])

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    const connection = async (url:string) => {
      const response = await axios.get(url);
      setMessages(response.data);
    }
    
    try {
      await connection(apiUrl);
    } catch (error) {
      await connection(localhostUrl);
      console.error('Error fetching data:', error);
    }
  };

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