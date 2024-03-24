import { View } from "react-native";
import Message from "@/components/Remember/Message";
import Response from "@/components/Remember/Response";

export default function Home () {
  return (
    <View 
      className={`
        h-full p-2 w-[250px]
        mx-auto
        // flex flex-col gap-12
        justify-center items-center
      `
    }>
      <Message />
      <Response />
    </View>
  )
}