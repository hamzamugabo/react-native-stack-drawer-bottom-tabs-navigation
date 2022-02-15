
import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

export default class WishList extends React.Component{
    render(){
        const {navigation} = this.props.navigation
        return (
            <SafeAreaView style={{flex: 1}}>
              <View style={{flex: 1, padding: 16}}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      textAlign: 'center',
                      marginBottom: 16,
                    }}>
                    This is WishList Page 
                  </Text>
                   <Button
                    onPress={() => navigation.navigate('Settings')}
                    title="Go to First Page"
                  />
                  {/*
                  <Button
                    onPress={() => navigation.navigate('SecondPage')}
                    title="Go to Second Page"
                  /> */}
                </View>
                
              </View>
            </SafeAreaView>
          );
    }
}