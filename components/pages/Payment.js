import React ,{useState} from 'react';
import {
  Button,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
  View,
  Text,
  // Modal,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  TextInput
} from 'react-native';
import Modal from "react-native-modal";
import {FlutterwaveInit,FlutterwaveButton,PayWithFlutterwave} from 'flutterwave-react-native';
import { WebView } from 'react-native-webview';

const Payment = ({navigation}) => {

  const [data, setData] = React.useState({
      username: '',
      password: '',
      confirm_password: '',
      check_textInputChange: false,
      secureTextEntry: true,
      confirm_secureTextEntry: true,
  });

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const close=()=>{
    setModalSubscribe(false);
    setModalVisible(false);
  }
  const submit=()=>{
    setModalVisible(false);
    setModalSubscribe(false);
    alert('Thanks for the subscription');
    // navigation.navigate('Payment', { screen: 'Home' });
    // navigation.navigate('Payment');
  }
  const MOMO=()=>{
    setModalVisible(false);
    setModalSubscribe(false);
    alert('Thanks for the subscription');
    // navigation.navigate('Payment', { screen: 'Home' });
    // navigation.navigate('Payment');
  }

  const [isModalSubscribe, setModalSubscribe] = useState(false);
  const toggleModals = () => {
    setModalSubscribe(!isModalSubscribe);
  };

  const textInputChange = (val) => {
      if( val.length !== 0 ) {
          setData({
              ...data,
              username: val,
              check_textInputChange: true
          });
      } else {
          setData({
              ...data,
              username: val,
              check_textInputChange: false
          });
      }
  }

  const handlePasswordChange = (val) => {
      setData({
          ...data,
          password: val
      });
  }

  const handleConfirmPasswordChange = (val) => {
      setData({
          ...data,
          confirm_password: val
      });
  }

  const updateSecureTextEntry = () => {
      setData({
          ...data,
          secureTextEntry: !data.secureTextEntry
      });
  }

  const updateConfirmSecureTextEntry = () => {
      setData({
          ...data,
          confirm_secureTextEntry: !data.confirm_secureTextEntry
      });
  }

  return (
      <View style={{flex: 1}}>
      <View style={{justifyContent:'center',alignItems:"center",marginTop:40}}>
      <Text style={{color: 'darkgreen', fontSize: 19,marginBottom:10}}> Select payment method of your choice</Text>
      <View style={[styles.buttonsContainer, {marginBottom: 5}]}>
     
       {/* <Card> */}
       <TouchableOpacity 
       onPress={toggleModals}       
          style={[styles.roundButton, {backgroundColor: 'purple'}]}>
             <Image
          style={{width: 75, height: 75}}
          source={require('../images/visa-logo.jpg')}
          />
          
          <Text style={{color: '#fff', fontSize: 12}}>VISA CARD</Text>
        </TouchableOpacity>
       {/* </Card> */}
       {/* <Card> */}
       <TouchableOpacity
        onPress={toggleModal}
          style={[styles.roundButton, {backgroundColor: 'yellowgreen'}]}>
             <Image
          style={{width: 75, height: 75}}
          source={require('../images/momo.jpg')}
          />
          <Text style={{color: '#fff', fontSize: 12}}> MOMO</Text>
        </TouchableOpacity>
       {/* </Card> */}
       
      </View>
      
        </View>
        <View>
      <Modal style={styles.modalViewEdit} isVisible={isModalVisible}>
        <ScrollView>
        <View style={{ flex: 1 }}>
        {/* {isLoading? <ActivityIndicator size="large" color="#00ff00" />:null} */}
        <Text style={{fontSize:18,color:'blue',marginBottom:1,marginTop:20,marginLeft:60}}>PAYMENT BY MOMO</Text>
          
          <View  style={{marginTop:10,alignItems:'center',alignContent:'center'}}>
          <View style={styles.inputContainer}>
            <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Select provider(mtn/airtel)"
                  style={styles.inputs}
                  autoCapitalize="none"
                  // onChangeText={name => setname(name)}
                  // value={name}

                  // onChangeText={(displayName) => this.setState({displayName})}
                  // value={this.state.displayName}
                /></View>
              <View style={styles.inputContainer}>
            <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Phone Number "
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
                  placeholder="Amount"
                  style={styles.inputs}
                  autoCapitalize="none"
                  // onChangeText={name => setname(name)}
                  // value={name}

                  // onChangeText={(displayName) => this.setState({displayName})}
                  // value={this.state.displayName}
                />
                </View>
          </View>
          
          
          
          <View style={{justifyContent:'space-around',flexDirection:'row',alignItems:'center',alignContent:'center',marginTop:10}}>
            {/* <View>
            <Button type='outline' color='grey' title="CHAT WITH OWNER" onPress={chatWithOwner} />
            </View> */}
            <View>
            <Button  color='darkorange' title="MOMO" onPress={MOMO}/>
            </View>
          
          </View>
          
        </View>
        </ScrollView>
      </Modal>
</View>
<View>
      <Modal style={styles.modalViewEdit} isVisible={isModalSubscribe}>
      <TouchableOpacity
                style={{justifyContent:'flex-end',flexDirection:'row'}}
                onPress={close}>
                <Text style={styles.textStyle}>X</Text>
              </TouchableOpacity>
      <View style={{width: 290, height: 500,alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize:18,color:'blue',marginBottom:10,marginTop:1,marginLeft:20}}>PAYMENT BY VISA CARD</Text>
            <ScrollView>              

            
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Name on Card"
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
                  placeholder="Amount"
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
                  placeholder="Card Number"
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
                  placeholder="Expiry Month"
                  style={styles.inputs}
                  autoCapitalize="none"
                />
                </View>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Expiry Year"
                  style={styles.inputs}
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="CVV"
                  autoCapitalize="none"
                  // keyboardType="number"
                  style={styles.inputs}
                />
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <TouchableHighlight
                    style={{marginBottom: 10, marginTop: 10}}
                    onPress={submit}
                    >
                    <Text style={styles.loginText}>Submit</Text>
                  </TouchableHighlight>
    
                </View>
            </ScrollView>
            </View>
      </Modal>
</View>

    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
    roundButton: {
      width: 150,
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'red',
    },
    roundButtono: {
      width: 150,
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 1,
      borderRadius: 10,
      backgroundColor: 'red',
      marginEnd:115,
    },
    roundButton2: {
      width: 50,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: 'green',
    },
    buttonsContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      paddingHorizontal: 0,
      alignItems: 'center',
      // marginLeft:25,
  
      marginTop: 10,
    },
    imageConatiner: {
      width: '2%',
    },
    modalViewEdit: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      // paddingTop: 35,
      paddingLeft: 10,
      paddingRight: 15,
      paddingBottom: 10,
      // alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      height: 400,
      // shadowOpacity: 0.25,
      // shadowRadius: 4,
      // elevation: 5,
      // marginTop:20
    },
    textText: {
      color: 'black',
      marginHorizontal: 1,
      fontSize: 17,
      fontWeight: 'bold',
    },
    modalView: {
      margin: 100,
      // padding:70,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  
    bbutton: {
      marginBottom: 20,
    },
    inputContainer: {
      borderColor: '#000',
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      // borderBottomWidth: 1,
      borderWidth: 1,
      width: 220,
      height: 45,
      marginBottom: 20,
      alignItems: 'center',
    },
    
  });