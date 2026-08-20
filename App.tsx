import { useFonts } from "expo-font";
import {
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import RootNavigator from "./src/navigation/RootNavigator";
import { CartProvider } from "./src/context/CartContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <CartProvider><RootNavigator /></CartProvider>;
}
