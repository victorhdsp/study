import "@/styles/global.css"

import { Stack } from 'expo-router';
import colors from "@/styles/Colors";


export default function RootLayout() {
  return (
    //Isso não faz parte do typescript, ta faltando no projeto original.
    // todo - Aprender a mudar o nome da pagina
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.light.tint,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  )
}