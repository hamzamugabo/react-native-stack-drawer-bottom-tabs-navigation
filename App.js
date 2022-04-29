import React,{useState,useEffect} from 'react';
import { StyleSheet,LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainScreen } from './MainScreen';
import { LoginView } from './LoginView';
import { Loading } from './Loading';
import { Register } from './Register';
import { AuthStack } from './Navigation/AuthStack';
import { AppStack } from './Navigation/AppStack';

import { ContactScreen } from './ContactScreen';

import { createStackNavigator } from '@react-navigation/stack';
import {Root} from './Root';
import AsyncStorage from '@react-native-community/async-storage';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createStackNavigator();


export default function App() {
  const [cred, setcred] = useState(false);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cred');
       jsonValue != null
        ?setcred(true)
        : setcred(false);
      console.log(jsonValue);

    } catch (e) {
      console.log(e);
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
       {cred? 
       <Stack.Screen name="AppStack" component={AppStack} /> :
          <Stack.Screen name="Auth" component={AuthStack} /> }
       
        {/* <Stack.Screen name="ContactScreen" component={ContactScreen} /> */}
         {/* <Stack.Screen name="Loading" component={Loading} />
         <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Root" component={Root} /> */}
        {/* <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Register" component={Register} /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}

