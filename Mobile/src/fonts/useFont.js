// src/fonts/useFonts.js
import { 
    useFonts as useRoboto, 
    Roboto_100Thin, Roboto_100Thin_Italic,
    Roboto_300Light, Roboto_300Light_Italic,
    Roboto_400Regular, Roboto_400Regular_Italic,
    Roboto_500Medium, Roboto_500Medium_Italic,
    Roboto_700Bold, Roboto_700Bold_Italic,
    Roboto_900Black, Roboto_900Black_Italic
  } from '@expo-google-fonts/roboto';
  
  import { 
    useFonts as useInter,
    Inter_100Thin, Inter_200ExtraLight, Inter_300Light,
    Inter_400Regular, Inter_500Medium, Inter_600SemiBold,
    Inter_700Bold, Inter_800ExtraBold, Inter_900Black,
    Inter_100Thin_Italic, Inter_200ExtraLight_Italic, Inter_300Light_Italic,
    Inter_400Regular_Italic, Inter_500Medium_Italic, Inter_600SemiBold_Italic,
    Inter_700Bold_Italic, Inter_800ExtraBold_Italic, Inter_900Black_Italic
  } from '@expo-google-fonts/inter';
  
  export default function useAllFonts() {
    const [robotoLoaded] = useRoboto({
      Roboto_100Thin,
      Roboto_100Thin_Italic,
      Roboto_300Light,
      Roboto_300Light_Italic,
      Roboto_400Regular,
      Roboto_400Regular_Italic,
      Roboto_500Medium,
      Roboto_500Medium_Italic,
      Roboto_700Bold,
      Roboto_700Bold_Italic,
      Roboto_900Black,
      Roboto_900Black_Italic,
    });
  
    const [interLoaded] = useInter({
      Inter_100Thin,
      Inter_200ExtraLight,
      Inter_300Light,
      Inter_400Regular,
      Inter_500Medium,
      Inter_600SemiBold,
      Inter_700Bold,
      Inter_800ExtraBold,
      Inter_900Black,
      Inter_100Thin_Italic,
      Inter_200ExtraLight_Italic,
      Inter_300Light_Italic,
      Inter_400Regular_Italic,
      Inter_500Medium_Italic,
      Inter_600SemiBold_Italic,
      Inter_700Bold_Italic,
      Inter_800ExtraBold_Italic,
      Inter_900Black_Italic,
    });
  
    return robotoLoaded && interLoaded;
  }
  