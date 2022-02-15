import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feedback from './Feedback';
import Change_password from './Change_password';
import Search from './Search';
import Subscriptions from './Subscriptions';
const Stack = createStackNavigator();

const MainStackNavigator ={
  Contact:{
    screen:Contact,
    navigationOptions:{
      title:'Contact',
    }
  },
  Subscriptions:{
    screen:Subscriptions,
    navigationOptions:{
      title:'Subscriptions',
    }
  },
  Change_password:{
    screen:Change_password,
    navigationOptions:{
      title:'Change_password'
    }
  },
  Feedback:{
    screen:Feedback,
    navigationOptions:{
      title:'Feedback'
    }
  }
  
}

const navigation=createStackNavigator(screen,{
  defaultNavigationOptions:{
    headerTintColor:'#444',
    headerStyle:{backgroungColor:'#eee', height:60},
   
  }
})

export default navigation;


