import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { COLORS } from '../Constant/Color';
import { MainScreen } from '../MainScreen';
import { LoginView } from '../LoginView';
import { Loading } from '../Loading';
import { Register } from '../Register';
import {Root} from '../Root';

const Stack = createStackNavigator();

export function AppStack(props: any) {
  return (
    <Stack.Navigator 
    screenOptions={{
      cardStyle :{ backgroundColor: COLORS.button},
      gestureEnabled: true,
      backgroundColor:COLORS.button,
      gestureDirection: 'horizontal',
      ...TransitionPresets.SlideFromRightIOS,
      headerShown: false
    }}
    // initialRouteName="Dashboard" headerMode="none"
    >
      {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
      
      <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Root" component={Root} /> 
    </Stack.Navigator>
  );
}
