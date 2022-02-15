import React from 'react';
import {View, TouchableOpacity,StyleSheet,Text,TextInput,TouchableHighlight,ActivityIndicator} from 'react-native';
import {FlutterwaveInit,FlutterwaveButton,PayWithFlutterwave} from 'flutterwave-react-native';
import { WebView } from 'react-native-webview';
class Notifications extends React.Component {
  abortController = null;
constructor(){
  super();
  this.state={
    isPending:false,
    payment:'',
    name:'',
    phoneNumber:'',
    email:'',
    card_number:'',
    cvv:"",
    expiry_month:"",
    expiry_year:"",
    currency:"UGX",
    amount:"",
    tx_ref:"",
    res:[],
    status_:'',
    otp_url:''
    
  }
}
  componentWillUnmout() {
    if (this.abortController) {
      this.abortController.abort();
    }
  }
  generateTransactionRef(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

  onSubmitMomo=()=>{
    this.setState({payment:'momo'});
    
  }
  onSubmitCard=()=>{
    this.setState({payment:'card'});

  }
  pay=()=>{
    this.setState({isPending:true});
// if(this.state.payment === 'momo'){
//   if(this.state.name!=''){
//     if(this.state.phoneNumber!=''){
//       if(this.state.email!=''){
//         if(this.state.amount!=''){
//           fetch('https://api.flutterwave.com/v3/charges?type=mobile_money_uganda', {
//             method: 'POST',
//             headers: {
//               Accept: 'application/json',
//               'Content-Type': 'application/json',
//               Authorization: 'FLWSECK-f94c405c66699ba066c51157c132a0da-X',
//             },
//             body: JSON.stringify({
//               tx_ref:"mMC-44556343",
//               amount:this.state.amount,
//               email:this.state.email,
//               phone_number:this.state.phoneNumber,
//               currency:"UGX",
//               fullname:this.state.name,
//               redirect_url:"https://rave-webhook.herokuapp.com/receivepayment",
//               voucher:128373,
//               // network:"AIRTELUG"
//             }),
//           })
//             .then(response => response.json())
//             .then(responseJson => {
             
//               console.log(responseJson.meta.authorization.redirect);
//         this.setState({otp_url:responseJson.meta.authorization.redirect});
              
//             })
//             .catch(error => {
//               console.error(error);
        
//               // this.setState({loading: false, disabled: false});
//             });  
//         }else{alert('Enter Amount')}
//       }else{alert('Enter Email')}
//     }else{alert('Enter phone number')}
//   }else{alert('Enter full name')}
  
// }else{

  if(this.state.name!=''){
    if(this.state.phoneNumber!=''){
      if(this.state.email!=''){
        if(this.state.amount!=''){
          fetch('https://api.flutterwave.com/v3/payments', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'FLWSECK-f94c405c66699ba066c51157c132a0da-X',
            },
            body: JSON.stringify({
              tx_ref:"hooli-tx-1920bbtytty",
              amount:this.state.amount,
           currency:"UGX",
           redirect_url:"https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
           payment_options:"card",
           meta:{
              consumer_id:23,
              consumer_mac:"92a3-912ba-1192a"
           },
           customer:{
            email:this.state.email,
              phonenumber:this.state.phoneNumber,
              name:this.state.name
           },
           customizations:{
              title:"Pied Piper Payments",
              description:"Middleout isn't free. Pay the price",
              logo:"http://nehemiahstemresearch.com/logo/payment.png"
           }
          //     card_number:"4556052704172643",
          //  cvv:"899",
          //  expiry_month:"01",
          //  expiry_year:"21",
          //     tx_ref:"MC-1585230950508",
          //     amount:"1500",
          //     email:"user@flw.com",
          //     currency:"NGN",
          //     fullname:"John Madakin",
          //     redirect_url:"https://rave-webhook.herokuapp.com/receivepayment",
          //     type: "card"
            }),
          })
            .then(response => response.json())
            .then(responseJson => {
             
              // console.log(responseJson.status);
        // this.setState({otp_url:responseJson.meta.authorization.redirect});
        this.setState({otp_url:responseJson.data.link,isPending:false});
            })
            .catch(error => {
              console.error(error);
    this.setState({isPending:true});
        
              // this.setState({loading: false, disabled: false});
            });
        }else{alert('Enter Amount')}
      }else{alert('Enter Email')}
    }else{alert('Enter phone number')}
  }else{alert('Enter Full Name')}
  
// }
  }

  // https://flutterwave.com/pay/tszdetudzbc9
  render() {
    const {isPending} = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
          {isPending? <ActivityIndicator size="large" color="#0000ff" />:null}
          {this.state.otp_url?
            <WebView source={{ uri: this.state.otp_url }}
          startInLoadingState={true}
          scalesPageToFit={true}
          style={{
            width: 350,
            height: 300,
          }}
          />:
          <View style={{justifyContent:'center',alignItems:"center",marginTop:40}}>

            <View>
            <Text
                    style={{
                      fontSize: 25,
                      textAlign: 'center',
                      marginBottom: 16,
                    }}>
                    This is Notifications Page 
                  </Text>
            </View>
          </View>
          }
                  
      

      </View>
    )
  }
}
const styles = StyleSheet.create({

  button: {
    width: 250,
    marginTop: 20,
    backgroundColor: "green",
    padding: 15,
    borderRadius: 50,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
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
});
 export default Notifications;
