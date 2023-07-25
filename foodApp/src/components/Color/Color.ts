import { useColorScheme } from "react-native";
import { Appearance } from "react-native/Libraries/Utilities/Appearance";

const darkModeColors = {
  background: '#222222', 
};

const lightModeColors = {
  background: '#FFFFFF', 
};


const isDarkMode = () => {
    const isDarkMode = useColorScheme() === 'dark';
    return isDarkMode;
//   return Appearance.getColorScheme() === 'dark';
};

//   const isDarkMode = useColorScheme() === 'dark';


export const getColor = () => {
  return useColorScheme() === 'dark' ? darkModeColors : lightModeColors;
};

console.log(getColor())


export const colors = {
  primary: {
    main: '#FF5733',
    dark: '#C70000',
    light: '#FF9366',
  },
  secondary: {
    main: '#33B5FF',
    dark: '#0077C2',
    light: '#66D7FF',
  },
};

// export const bgColors = {

// }