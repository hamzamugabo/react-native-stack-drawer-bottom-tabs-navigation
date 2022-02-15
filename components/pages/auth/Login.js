
import React,{useState} from 'react';
import {Button,TouchableOpacity, View, Text, SafeAreaView,StyleSheet,ScrollView,TextInput,TouchableHighlight,ActivityIndicator} from 'react-native';
import Card from '../Card';
import CheckBox from '@react-native-community/checkbox';

import AsyncStorage from '@react-native-community/async-storage';
const Login=({navigation})=>{
  const [phone, setphone] = useState();
  const [password, setpassword] = useState();
  const [isSelected, setSelection] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  
  const storeData = async () => {
    let obj = {    
      phone: phone, 
      pass: password
      // role:responseJson   
    } 
    try {
      const jsonValue = JSON.stringify(obj)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
// alert(e);

    } catch (e) {
      // saving error
alert(e);
    }
  }
  const UserLoginFunction = () => {
    
    //Handler for the Submit onPress
    // if (phone != '') {
    //   //Check for the Name TextInput
    //   if (password != '') {
    //     setisLoading(true);
    //       fetch(
    //         // 'http://localhost/react_projects/e_SoilBank/server/login.php',
    //         'http://ubuntusx.com/server_files/User_Login.php',
    //         {
    //           method: 'POST',
    //           headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify({
    //             phone: phone,

    //             password: password,
    //           }),
    //         },
    //       )
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //           // If server response message same as Data Matched
    //           if (responseJson == 'Data Matched') {
                 
    //             storeData();
                navigation.navigate('Home');
                
    //             setpassword();
    //            setphone(); 
    //            setisLoading(false); 
    //           } 
    //           else{
    //             alert(responseJson);
    //            setisLoading(false); 

    //           }
              
    //         })
    //         .catch((error) => {
    //           console.error(error);
    //           alert('Network /server issue')
    //           setisLoading(false); 

    //         });
    //     // });

    //     //  }
    //   } else {
    //     alert('Please Enter password greater than 5 characters');
    //   }
    // } else {
    //   alert('Please Enter Phone Number');
    // }
  // }
};
const register=()=>{return navigation.navigate('Register')}
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <View >
        {/* <Card> */}
          <View style={{alignItems:'center',justifyContent:'center',marginTop:50}}>
            <Text style={{fontSize:25,color:'orange',marginBottom:20}}>
             Hire a machine, Land or any other Farm Equipment
            </Text>
            <Text style={{fontSize:25,color:'pink',marginBottom:20}}>
              Easy Rent
            </Text>
          </View>

          {isLoading?<ActivityIndicator color="#0000ff"/>:null}
            <View style={{padding:50}} >
                    <ScrollView>
                      <View style={styles.inputContainer}>
                        <TextInput
                          underlineColorAndroid="transparent"
                          placeholder="Phone Number"
                          style={styles.inputs}
                          autoCapitalize="none"
                          keyboardType="phone-pad"
                          onChangeText={(phone) => setphone(phone)}
                          value={phone}
                        />
                      </View>
            
                      <View style={styles.inputContainer}>
                        <TextInput
                          underlineColorAndroid="transparent"
                          placeholder="password"
                          style={styles.inputs}
                          onChangeText={(password) => setpassword(password)}
                          value={password}
                          secureTextEntry={true}
                        />
                      </View>
                      {/* <View style={styles.checkboxContainer}>
                        <CheckBox
                          value={isSelected}
                          onValueChange={setSelection}
                          style={styles.checkbox}
                        />
                        <Text style={styles.label}>Admin</Text>
                      </View> */}
                     
                     <View style={{alignItems:'center',justifyContent:'center'}}>
                       
                      <TouchableHighlight
                        activeOpacity={0.9} underlayColor="#dddddd"
                       style={{marginBottom:30,marginTop:5}}
                        onPress={UserLoginFunction}
                        >
                        <Text style={styles.loginText}>Login</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                      onPress={register}
                      >
                        <Text style={{color:'blue',fontWeight:"bold",marginBottom:15}}>No account? Sign Up</Text>
                      </TouchableHighlight>
        
                      </View> 
                    </ScrollView>
                  </View>
          {/* } */}
          {/* </Card> */}
      {/* <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text> */}

        </View>
      </SafeAreaView>
    );
  // }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  loginText:{
    fontSize:19
  }
});

export default Login;

