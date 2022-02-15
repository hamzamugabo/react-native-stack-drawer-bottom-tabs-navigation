
import React,{useState} from 'react';
import {Button,TouchableOpacity, View, Text, SafeAreaView,StyleSheet,ScrollView,TextInput,TouchableHighlight} from 'react-native';
import Card from './Card';
// export default class Register extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       value:null
//     }
//   }
  // render(){
    const Products =({ navigation }) =>{
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
    const login=()=>{return navigation.navigate('Login');}
    // const {navigation} = navigation;
    // const {value} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
        <Card>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:18,color:'blue',marginBottom:20}}>My Products</Text>
          </View>
          <View style={{width: 290, height: 500}}>
            <ScrollView>              

            <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Category"
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
                  placeholder="Land location"
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
                  placeholder="Land Size"
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
                  placeholder="Land Booking price @Unit (Ugx)"
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
                  placeholder="Price"
                  autoCapitalize="none"
                  keyboardType="number"
                  style={styles.inputs}
                  onChangeText={email => setemail(email)}
                  value={email}
                  // onChangeText={(text) => this.setState({phoneNumber: text})}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Minimum booking Amount(Ugx)"
                  style={styles.inputs}
                  onChangeText={password => setpassword(password)}
                  value={password}
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Location"
                  autoCapitalize="none"
                  keyboardType="default"
                  style={styles.inputs}
                  onChangeText={dob => setdob(dob)}
                  value={dob}
                  // onChangeText={(text) => this.setState({phoneNumber: text})}
                />
              </View>
             
          
              <Text>{status}</Text>
              {/* </View> */}
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Description"
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
                // onPress={register}
                >
                <Text style={styles.loginText}>Save</Text>
              </TouchableHighlight>

            </View>
          </View>
          
          </Card>
          
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
export default Products;