import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { COLORS } from '../Constant/Color';
// import Login from '../Screen/Auth/Login';
// import Register from '../Screen/Auth/Register';
import { MainScreen } from '../MainScreen';
import { LoginView } from '../LoginView';
import { Loading } from '../Loading';
import { Register } from '../Register';
import {Root} from './Root';
const Stack = createStackNavigator();

export function AuthStack(props: any) {
  return (
    <Stack.Navigator 
    screenOptions={{
      cardStyle :{ backgroundColor: COLORS.button},
      gestureEnabled: true,
      backgroundColor:COLORS.button,
      gestureDirection: 'horizontal',
      ...TransitionPresets.SlideFromRightIOS,
    }}
    initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
