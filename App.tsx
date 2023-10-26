import React, { useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IntlProvider } from 'react-intl';
import { locale, messages } from './i18n';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';


function NavigatorScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Navigator Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />

      <Button title="Go to Main" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

class App extends React.Component {
  componentDidMount() {
    this.loadFonts();
  }

  loadFonts = async () => {
    await Font.loadAsync({
      'zh-1': require("./assets/fonts/獅尾腿圓SC-Medium.ttf"),
      'zh-2': require("./assets/fonts/獅尾彎黑體SC-Bold.ttf"),
      'zh-3': require("./assets/fonts/栳尨訇窪极.ttf"),
      'en-1': require("./assets/fonts/MicrosoftJhengHeiRegular-01.ttf"),
      'en-1-Bold': require("./assets/fonts/MicrosoftJhengHeiBold-01.ttf"),
      'en-1-Light': require("./assets/fonts/MicrosoftJhengHeiLight-01.ttf"),
    });
  };

  render(){
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
         <SafeAreaView style={{
           width: "100%",
           height: "100%",
           overflow: "hidden",
         }}>
            <Text>Hello World</Text>
            <NavigationContainer>
            <Stack.Navigator initialRouteName="Main"
              screenOptions={{
                headerShown: false, // Hide the header for all screens
              }}
            >
              <Stack.Screen name="Navigator" component={NavigatorScreen} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Main" component={MainPage} />

            </Stack.Navigator>
          </NavigationContainer>
         </SafeAreaView>
      </IntlProvider>
    );
  }
}

export default App;



// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
