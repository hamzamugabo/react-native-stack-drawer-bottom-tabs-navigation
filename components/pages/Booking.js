import React,{useState} from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  PixelRatio,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
  Modal
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Card from './Card';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
export default class Booking extends React.Component {
  constructor() {
    
    
    super();
    this.state = {
      passport_photo: null,
      visible:false,
      name:'',
      password:'',
      national_id:'',
      email:'',
      phoneNumber:''

      

    };
  }

  alert(){
    Alert.alert(
      'Upload Photo',
      '',
      [
        
        {text: 'Cancle', onPress: () => console.log('OK Pressed')
        
      },
      {
        text: 'Take a photo',
        onPress: () =>{this.takephoto},
        
      },
      {text: 'Choose from phone', onPress: () => {this.selectphoto}},

      ],
      {cancelable: false},
    );
  }
  takephoto=()=> {
    // this.setState({option:launchCamera});

    // selectImage = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

   launchCamera(options, (response) => { // Use launchImageLibrary to open image gallery
      // console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        console.log(source);
        this.setState({
          passport_photo: source,
          // data: response.data
        });
      }
    });
    this.setState({visible:false});
    
  }
  selectphoto=()=> {
    // this.setState({option:launchImageLibrary});
    // selectImage = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    launchImageLibrary(options, (response) => { // Use launchImageLibrary to open image gallery
      // console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        console.log(source);
        this.setState({
          passport_photo: source,
          // data: response.data
        });
      }
    });
    this.setState({visible:false});
    
  }
  hideModal=()=>{
    this.setState({visible:false});
  }
  showModal=()=>{
    this.setState({visible:true});
  }
  
  render() {
    
    const {navigation} = this.props.navigation;
    return (
      <SafeAreaView style={{flex: 1}}>
       <View>
     
        <View style={{justifyContent:'space-around',flexDirection:'row',alignItems:'center',alignContent:'center'}}>
        <View >
        <TouchableOpacity
            >
            
            <Text style={{color: 'grey', fontSize: 24}}> Bookings</Text>
          </TouchableOpacity>
          </View >
          <View  >
          <TouchableOpacity 
            >
            
            <Text style={{color: 'grey', fontSize: 24}}>Product Bookings</Text>
          </TouchableOpacity>
          
          </View>
        </View>
          <View style={{width: 290, height: 500}}>
            <ScrollView>              

            <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Duration Type"
                  autoCapitalize="none"
                  // keyboardType="phone-pad"
                  keyboardType="phone-pad"
                  style={styles.inputs}
                  // onChangeText={phoneNumber => setphoneNumber(phoneNumber)}
                  // value={phoneNumber}

                  // onChangeText={(text) => this.setState({email: text})}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="select start Date"
                  style={styles.inputs}
                  autoCapitalize="none"
                  // onChangeText={name => setname(name)}
                  // value={name}

                  // onChangeText={(displayName) => this.setState({displayName})}
                  // value={this.state.displayName}
                />
                </View>
                <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="select end Date"
                  style={styles.inputs}
                  autoCapitalize="none"
                  // onChangeText={name => setname(name)}
                  // value={name}

                  // onChangeText={(displayName) => this.setState({displayName})}
                  // value={this.state.displayName}
                />
                </View>
                <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Village"
                  style={styles.inputs}
                  autoCapitalize="none"
                  // onChangeText={name => setname(name)}
                  // value={name}

                  // onChangeText={(displayName) => this.setState({displayName})}
                  // value={this.state.displayName}
                />
                </View>
                <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="parish"
                  style={styles.inputs}
                  autoCapitalize="none"
                />
                </View>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Subcountry"
                  style={styles.inputs}
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="County"
                  autoCapitalize="none"
                  // keyboardType="number"
                  style={styles.inputs}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="District"
                  style={styles.inputs}
                  
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Location"
                  autoCapitalize="none"
                  keyboardType="default"
                  style={styles.inputs}
                 
                />
              </View>
             
          
              
              {/* </View> */}
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Select radio button, pick up/delivery"
                  autoCapitalize="none"
                  keyboardType="default"
                  style={styles.inputs}
                 
                  // onChangeText={(text) => this.setState({phoneNumber: text})}
                />
              </View>
            </ScrollView>
            </View>
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
    width: 255,
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
  loginText:{
    fontSize:19
  }
});
