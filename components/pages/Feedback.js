import React, {useState} from 'react';
import {
  Button,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import Card from '../pages/Card';

export default class Feedback extends React.Component{
  constructor() {
    super();
    this.state = {
      Title: '',
      Comment:'',

      

    };
  }
    render(){
        const {navigation} = this.props.navigation
        return (
          <SafeAreaView style={{flex: 1}}>
          <View>
            <Card>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 18, color: 'blue', marginBottom: 20,marginLeft:60}}>
                  Your Comment
                </Text>
              </View>
              <View style={{width: 290, height: 200}}>
                <ScrollView>
                  <View style={styles.inputContainer}>
                    <TextInput
                      underlineColorAndroid="transparent"
                      placeholder="Title"
                      style={styles.inputs}
                      autoCapitalize="none"
                      onChangeText={Title => setTitle(Title)}
                      value={this.state.Title}
    
                      // onChangeText={(displayName) => this.setState({displayName})}
                      // value={this.state.displayName}
                    />
                  </View>
    
                  <View style={styles.inputContainer}>
                    <TextInput
                      underlineColorAndroid="transparent"
                      placeholder="Comment"
                      autoCapitalize="none"
                      // keyboardType="phone-pad"
                      // keyboardType="phone-pad"
                      style={styles.inputs}
                      onChangeText={comment => setcomment(comment)}
                      value={this.state.comment}
    
                      // onChangeText={(text) => this.setState({email: text})}
                    />
                  </View>
                 
                  
                </ScrollView>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <TouchableHighlight
                    style={{marginBottom: 30, marginTop: 30}}
                    // onPress={submit}
                    >
                    <Text style={styles.loginText}>Submit</Text>
                  </TouchableHighlight>
    
                </View>
              </View>
            </Card>
          </View>
        </SafeAreaView>
          );
    }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#794F9B',
  },
});
