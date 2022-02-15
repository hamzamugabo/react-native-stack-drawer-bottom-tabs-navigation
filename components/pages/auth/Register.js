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
import Card from '../Card';

const Register = ({navigation}) => {
  const [value, setvalue] = useState();
  const [name, setname] = useState();
  const [password, setpassword] = useState();
  const [dob, setdob] = useState();
  const [national_id, setnational_id] = useState();
  const [passport, setpassport] = useState();
  const [status, setstatus] = useState();
  const [license, setlicense] = useState();
  const [email, setemail] = useState();
  const [phoneNumber, setphoneNumber] = useState();
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

  const register = () => {
    // if (name != '') {
    //   if (phoneNumber != '') {
    //     if (email != '') {
    //       if (password != '') {
            // let reg = EmailValidator.validate(email);
            // if (reg === false) {
            //   alert('Email is Not Correct');
            //   return false;
            // }
            // if (dob != '') {
            //   if (national_id != '') {
            //     if (passport != '') {
            //       if (status != '') {
            //         if (license != '') {
            //           // this.setState({loading: true, disabled: true});
            //           fetch(
            //             'http://ubuntusx.com/server_files/user_registration1.php',

            //             // "http://e-soil-databank.paatsoilclinic.com/sever/register.php",/
            //             {
            //               method: 'POST',
            //               headers: {
            //                 Accept: 'application/json',
            //                 'Content-Type': 'application/json',
            //               },
            //               body: JSON.stringify({
            //                 name: name,

            //                 email: email,

            //                 password: password,
            //                 phoneNumber: phoneNumber,
            //                 dob: dob,
            //                 national_id: national_id,
            //                 passport: passport,
            //                 status: status,
            //                 license: license,
            //               }),
            //             },
            //           )
            //             .then(response => response.json())
            //             .then(responseJson => {
            //               // If server response message same as Data Matched
            //               if (responseJson === 'Registered suceessfully!') {
            //                 //Then open Profile activity and send user email to profile activity.
            //                 Alert.alert('Registered successfully');

    //                         navigation.navigate('Login');

    //                         // return navigation.navigate('Login');
    //                         // Alert.alert('data matched');
    //                       } else {
    //                         Alert.alert(responseJson);
    //                       }

    //                       // this.setState({ loading: false, disabled: false });
    //                     })
    //                     .catch(error => {
    //                       console.error(error);
    //                       // this.setState({ loading: false, disabled: false });
    //                     });
    //                   // });
    //                 } else {
    //                   alert('Enter Drivers License number');
    //                 }
    //               } else {
    //                 alert('Choose marital status');
    //               }
    //             } else {
    //               alert('Enter Passport Number');
    //             }
    //           } else {
    //             alert('Enter National id number');
    //           }
    //         } else {
    //           alert('Enter date of birth');
    //         }
    //       } else {
    //         alert('Enter password');
    //       }
    //     } else {
    //       alert('Enter Email');
    //     }
    //   } else {
    //     alert('Enter  phone number');
    //   }
    // } else {
    //   alert('Enter Name');
    // }
  };
  const login = () => {
    return navigation.navigate('Login');
  };
  // const {navigation} = navigation;
  // const {value} = this.state;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Card>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 18, color: 'blue', marginBottom: 20}}>
              REGISTER
            </Text>
          </View>
          <View style={{width: 290, height: 500}}>
            <ScrollView>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Name"
                  style={styles.inputs}
                  autoCapitalize="none"
                  onChangeText={name => setname(name)}
                  value={name}

                  // onChangeText={(displayName) => this.setState({displayName})}
                  // value={this.state.displayName}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Phone Number"
                  autoCapitalize="none"
                  // keyboardType="phone-pad"
                  keyboardType="phone-pad"
                  style={styles.inputs}
                  onChangeText={phoneNumber => setphoneNumber(phoneNumber)}
                  value={phoneNumber}

                  // onChangeText={(text) => this.setState({email: text})}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  style={styles.inputs}
                  onChangeText={email => setemail(email)}
                  value={email}
                  // onChangeText={(text) => this.setState({phoneNumber: text})}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="password"
                  style={styles.inputs}
                  onChangeText={password => setpassword(password)}
                  value={password}
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Date of Birth"
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
                  placeholder="National ID number"
                  autoCapitalize="none"
                  keyboardType="default"
                  style={styles.inputs}
                  onChangeText={national_id => setnational_id(national_id)}
                  value={national_id}
                  // onChangeText={(text) => this.setState({phoneNumber: text})}
                />
              </View>
              {/* <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Passport number"
                  autoCapitalize="none"
                  keyboardType="default"
                  style={styles.inputs}
                  onChangeText={passport => setpassport(passport)}
                  value={passport}
                  // onChangeText={(text) => this.setState({phoneNumber: text})}
                />
              </View> */}
              {/* <View style={styles.inputContainer}> */}
              {/* {options.map(item => {
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
              })} */}
              <Text>{status}</Text>
              {/* </View> */}
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Driver's License number"
                  autoCapitalize="none"
                  keyboardType="default"
                  style={styles.inputs}
                  onChangeText={license => setlicense(license)}
                  value={license}
                  // onChangeText={(text) => this.setState({phoneNumber: text})}
                />
              </View>
            </ScrollView>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TouchableHighlight
                style={{marginBottom: 30, marginTop: 30}}
                onPress={register}>
                <Text style={styles.loginText}>Register</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={login}>
                <Text
                  style={{color: 'blue', fontWeight: 'bold', marginBottom: 15}}>
                  Aleady have an account? Sign In
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
  // }
};

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
export default Register;
