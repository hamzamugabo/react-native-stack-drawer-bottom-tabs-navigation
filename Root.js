import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainScreen } from './MainScreen';
import { HomeScreen } from './HomeScreen';
import { DetailsScreen } from './DetailsScreen';
import { ContactScreen } from './ContactScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from './ProfileScreen';
import { SettingsScreen } from './SettingsScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



export function Root() {
	return (
		<Drawer.Navigator initialRouteName="Profile">
			<Drawer.Screen name="Profile" component={ProfileScreen} />
			<Drawer.Screen name="Settings" component={SettingsScreen} />
		</Drawer.Navigator>

	);
}