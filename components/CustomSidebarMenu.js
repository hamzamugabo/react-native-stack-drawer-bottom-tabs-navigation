import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
  ActivityIndicator
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
import dp from './images/download.jpg';
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const CustomSidebarMenu = props => {
  const [cred, setcred] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
  const [value, setvalue] = useState();
  const [name, setname] = useState();
  const [password, setpassword] = useState();
  const [dob, setdob] = useState();
  const [national_id, setnational_id] = useState();
  const [passport, setpassport] = useState();
  const [status, setstatus] = useState();
  const [id, setid] = useState();
  const [license, setlicense] = useState();
  const [email, setemail] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const [via, setvia] = useState();
  const [isLoading , setisLoading] = useState(false);
  const options = [
    {
      key: 'Single',
      text: 'Single',
    },
    {
      key: 'Married',
      text: 'Married',
    },
    {
      key: 'Devorced',
      text: 'Devorced',
    },
  ];
  const [data2, setData2] = useState();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
    const getData_ = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        // return jsonValue != null ? JSON.parse(jsonValue) : null;
        setData2(JSON.parse(jsonValue));
        // console.log(data2);
        
  
        fetch(
          'https://ubuntusx.com/server_files/userProfile.php',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              phone: data2.phone,
  
              password: data2.pass,
            }),
          },
        )
          .then((response) => response.json())
          .then((responseJson) => {
            // setData3(responseJson);
  
            // console.log(data3);
  
            async function fetchUser() {
              try {
                const jsonValue = JSON.stringify(responseJson)
                await AsyncStorage.setItem('@userprofile', jsonValue)
          // console.log(e);
    getData();

          
              } catch (e) {
                // saving error
          console.log(e);
              }
            }
            fetchUser()
            // this.setState({loading: false, disabled: false});
          })
          .catch((error) => {
            console.error(error);
  
            // this.setState({loading: false, disabled: false});
          });
      } catch(e) {
        // error reading value
        console.log(e)
        // alert('error 1')
      }
    }
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@userprofile');
      setcred(JSON.parse(jsonValue));
    } catch (e) {
      console.log(e);
      // alert('error 2')

    }
  };

  useEffect(() => {
    const getData__= async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        // return jsonValue != null ? JSON.parse(jsonValue) : null;
        setData2(JSON.parse(jsonValue));
        // console.log(data2);
        
  
        fetch(
          'https://ubuntusx.com/server_files/userProfile.php',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              phone: data2.phone,
  
              password: data2.pass,
            }),
          },
        )
          .then((response) => response.json())
          .then((responseJson) => {
            // setData3(responseJson);
  
            // console.log(data3);
  
            async function fetchUser() {
              try {
                const jsonValue = JSON.stringify(responseJson)
                await AsyncStorage.setItem('@userprofile', jsonValue)
          // console.log(e);
    getData();

          
              } catch (e) {
                // saving error
          console.log(e);
              }
            }
            fetchUser()
            // this.setState({loading: false, disabled: false});
          })
          .catch((error) => {
            console.error(error);
  
            // this.setState({loading: false, disabled: false});
          });
      } catch(e) {
        // error reading value
        console.log(e)
        // alert('error 1')
      }
    }
    getData__();
    getData();
  }, []);
const edit=()=>{
  setModalVisible(false);
  setModalVisibleEdit(true);
}

const update =()=>{
setisLoading(true);
  
                cred.forEach((data)=>{
                  setid(data.id);
                  if(typeof name === 'undefined'){setname(data.name)}
                  if(typeof phoneNumber === 'undefined'){setphoneNumber(data.phone_number)}
                  if(typeof dob === 'undefined' ){setdob(data.dob)}
                  if(typeof national_id === 'undefined'){setnational_id(data.national_id_number)}
                  if(typeof passport === 'undefined'){setpassport(data.passport_number)}
                  if(typeof license === 'undefined'){setlicense(data.drivers_license_number)}
                  if(typeof email === 'undefined'){setemail(data.email)}
           
// alert(email);
                  fetch(
                    'https://ubuntusx.com/server_files/user_update.php',
                
                    // "http://e-soil-databank.paatsoilclinic.com/sever/register.php",/
                    {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        id:id,
                        name: name,
                
                        email: email,
                
                        // password: password,
                        phoneNumber: phoneNumber,
                        dob: dob,
                        national_id: national_id,
                        passport: passport,
                        status: status,
                        license: license,
                      }),
                    },
                  )
                    .then(response => response.json())
                    .then(responseJson => {
                      // If server response message same as Data Matched
                      if (responseJson === 'Updated suceessfully!') {
                        //Then open Profile activity and send user email to profile activity.
                        // Alert.alert('Registered successfully');
                        setisLoading(false);
                        setModalVisibleEdit(false);
    getData_();
    // getData();


                      } else {
                        setisLoading(false);

                        Alert.alert(responseJson);
                      }
                
                      
                    })
                    .catch(error => {
                      console.error(error);
                      setisLoading(false);

                      
                    });
                
                })

                getData();
 
}

  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <View
        style={{backgroundColor: 'darkorange', height: 130, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => {getData_();setModalVisible(true);}}>
          <Image source={dp} style={styles.sideMenuProfileIcon} />
        </TouchableOpacity>
        <Text style={{color: '#ffffff', fontWeight: '600'}}>User</Text>
        {cred?
        cred.map((email, index) => (
          <View key={index}>
            <Text style={{color: '#fff'}}>{email.email}</Text>
          </View>
        )):null}
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style={styles.customItem}>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate Us
          </Text>
        </View>
      </DrawerContentScrollView>
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View>
          
            <View >
           
              <View style={styles.modalView}>
               <TouchableOpacity
                style={{justifyContent:'flex-end',flexDirection:'row'}}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>X</Text>
              </TouchableOpacity>
                {cred?
                cred.map((user, index2_) => (
                  <View key={index2_}>
                    <Text style={{color: '#000', marginBottom: 10}}>
                      Name:{user.name}
                    </Text>
                    <Text style={{color: '#000', marginBottom: 10}}>
                      Email:{user.email}
                    </Text>
                    <Text style={{color: '#000', marginBottom: 10}}>
                      Phone Number{user.phone_number}
                    </Text>
                    <Text style={{color: '#000', marginBottom: 10}}>
                      National id No:{user.national_id_number}
                    </Text>
                    <Text style={{color: '#000', marginBottom: 10}}>
                      Passport No:{user.passport_number}
                    </Text>
                    <Text style={{color: '#000', marginBottom: 10}}>
                      Driver's License No:{user.drivers_license_number}
                    </Text>
                    <Text style={{color: '#000', marginBottom: 10}}>
                      DOB:{user.dob}
                    </Text>
                  </View>
                )):null}
                <TouchableOpacity
                // style={{marginTop: 20}}
                onPress={edit}>
                <Text style={styles.textStyle}>Edit</Text>
              </TouchableOpacity>
              </View>

              
            </View>
          </View>
        </Modal>

        {/* Edit Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisibleEdit}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisibleEdit(!modalVisibleEdit);
          }}>
          <View>
          
            <View >
           
              <View style={styles.modalViewEdit}>
               <TouchableOpacity
                style={{justifyContent:'flex-end',flexDirection:'row'}}
                onPress={() => setModalVisibleEdit(false)}>
                <Text style={styles.textStyle}>X</Text>
              </TouchableOpacity>
              {isLoading? <ActivityIndicator size="large" color="#00ff00" />:null}
                {cred?
                cred.map((user, index2) => (
                  <View key={index2}  style={{width: 290, height: 500}}>
                    <ScrollView>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder={user.name}
                  style={styles.inputs}
                  autoCapitalize="none"
                  onChangeText={(t) => { setname(t)
                  }}
                  value={name}

                  // onChangeText={(displayName) => this.setState({displayName})}
                  // value={this.state.displayName}
                />
              </View>

              {/* <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder={user.phone_number}
                  autoCapitalize="none"
                  // keyboardType="phone-pad"
                  keyboardType="phone-pad"
                  style={styles.inputs}
                  onChangeText={(t) => {
                    setphoneNumber(t)
                  }}
                  value={phoneNumber}

                  // onChangeText={(text) => this.setState({email: text})}
                />
              </View> */}
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder={user.email}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  style={styles.inputs} 
                  onChangeText={(t) => { setemail(t)
                    
                  }}
                  value={email}
                  // onChangeText={(text) => this.setState({phoneNumber: text})}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder={user.dob}
                  autoCapitalize="none"
                  keyboardType="default"
                  style={styles.inputs}
                  onChangeText={dob => setdob(dob)}
                  value={dob}
                  // onChangeText={(text) => this.setState({phoneNumber: text})}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder={user.national_id_number}
                  autoCapitalize="none"
                  keyboardType="default"
                  style={styles.inputs}
                  onChangeText={national_id => setnational_id(national_id)}
                  value={national_id}
                  // onChangeText={(text) => this.setState({phoneNumber: text})}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder={user.passport_number}
                  autoCapitalize="none"
                  keyboardType="default"
                  style={styles.inputs}
                  onChangeText={passport => setpassport(passport)}
                  value={passport}
                  // onChangeText={(text) => this.setState({phoneNumber: text})}
                />
              </View>
              {/* <View style={styles.inputContainer}> */}
              {options.map(item => {
                return (
                  <View key={item.key} style={styles.buttonContainer}>
                    <Text>{item.text}</Text>
                    <TouchableOpacity
                      style={styles.circle}
                      onPress={() => {
                        setstatus(item.key);
                      }}>
                      {status === item.key && (
                        <View style={styles.checkedCircle} />
                      )}
                    </TouchableOpacity>
                  </View>
                );
              })}
              <Text>{status}</Text>
              {/* </View> */}
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder={user.drivers_license_number}
                  autoCapitalize="none"
                  keyboardType="default"
                  style={styles.inputs}
                  onChangeText={license => setlicense(license)}
                  value={license}
                  // onChangeText={(text) => this.setState({phoneNumber: text})}
                />
              </View>
            </ScrollView>
                  </View>
                )):null}
                <TouchableOpacity
                style={{marginTop: 20}}
                onPress={update}>
                <Text style={styles.textStyle}>Edit</Text>
              </TouchableOpacity>
              </View>

              
            </View>
          </View>
        </Modal>
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginTop:10,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  centeredView: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 22,
    justifyContent: 'flex-end',
  },
  options: {
    fontSize: 18,
    padding: 10,
  },
  modalView: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    // paddingTop: 35,
    paddingLeft: 35,
    paddingRight: 15,
    paddingBottom: 10,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // marginTop:20
  },
  modalViewEdit: {
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    // paddingTop: 35,
    paddingLeft: 35,
    paddingRight: 15,
    paddingBottom: 10,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // marginTop:20
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft:15,
    paddingRight:30
  },
});

export default CustomSidebarMenu;
