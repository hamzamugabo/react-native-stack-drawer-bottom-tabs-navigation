import React from 'react';
import {View, Button,TouchableOpacity,StyleSheet,Text,TextInput,ScrollView,TouchableHighlight,ActivityIndicator} from 'react-native';
import {FlutterwaveInit,FlutterwaveButton,PayWithFlutterwave} from 'flutterwave-react-native';
import { WebView } from 'react-native-webview';
import Card from './Card';
const Subscriptions = ({navigation}) => {
 
  // const abortController = null;
// constructor(){
//   super();
//   this.state={
    
    
//   }
// }
const [data, setData] = React.useState({
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
});
  // componentWillUnmout() {
  //   if (this.abortController) {
  //     this.abortController.abort();
  //   }
  // }
  const generateTransactionRef=(length) =>{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

const onSubmitMomo=()=>{
    this.setState({payment:'momo'});
    
  }
  const  onSubmitCard=()=>{
    this.setState({payment:'card'});

  }
  const pay=()=>{
    // this.setState({isPending:true});
// if(payment === 'momo'){
//   if(name!=''){
//     if(phoneNumber!=''){
//       if(email!=''){
//         if(amount!=''){
//           fetch('https://api.flutterwave.com/v3/charges?type=mobile_money_uganda', {
//             method: 'POST',
//             headers: {
//               Accept: 'application/json',
//               'Content-Type': 'application/json',
//               Authorization: 'FLWSECK-f94c405c66699ba066c51157c132a0da-X',
//             },
//             body: JSON.stringify({
//               tx_ref:"mMC-44556343",
//               amount:amount,
//               email:email,
//               phone_number:phoneNumber,
//               currency:"UGX",
//               fullname:name,
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

  if(name!=''){
    if(phoneNumber!=''){
      if(email!=''){
        if(amount!=''){
          fetch('https://api.flutterwave.com/v3/payments', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'FLWSECK-f94c405c66699ba066c51157c132a0da-X',
            },
            body: JSON.stringify({
              tx_ref:"hooli-tx-1920bbtytty",
              amount:amount,
           currency:"UGX",
           redirect_url:"https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
           payment_options:"card",
           meta:{
              consumer_id:23,
              consumer_mac:"92a3-912ba-1192a"
           },
           customer:{
            email:email,
              phonenumber:phoneNumber,
              name:name
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
    // this.setState({isPending:true});
        
              // this.setState({loading: false, disabled: false});
            });
        }else{alert('Enter Amount')}
      }else{alert('Enter Email')}
    }else{alert('Enter phone number')}
  }else{alert('Enter Full Name')}
  
// }
  }

  // https://flutterwave.com/pay/tszdetudzbc9
  // render() {
    // const {isPending} = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <ScrollView>

          <Card style={{width:300}}>
          <Text style={{fontSize:18,color:'#7d7d78',marginBottom:20,marginLeft:'25%'}}>SELECT PLAN</Text>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:18,color:'blue',marginBottom:20}}>Basic plan</Text>
          </View>
          <View style={{justifyContent:'center',alignItems:"center",marginTop:10}}>
            
            <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
              color:'black'
            }}>
            Period:2 Month 
          </Text>
            
          </View>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:18,color:'green',marginBottom:20}}>Price:Ugx 20000</Text>
          </View>

          <View style={{justifyContent:'center',alignItems:"center",marginTop:20}}>
                  <Button
                    onPress={() => navigation.navigate('Payment')}
                    title="Subscribe"
                      />            
            </View>
          
         </Card>
         <View>
         <Card style={{width:300}}>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:18,color:'blue',marginBottom:10}}>Bronze</Text>
          </View>
          <View style={{justifyContent:'center',alignItems:"center",marginTop:10}}>
            
            <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
              color:'black'
            }}>
            Period:4 Months 
          </Text>
            
          </View>

          <View style={{justifyContent:'center',alignItems:"center",marginTop:20}}>
            
            <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
              color:'green'
            }}>
            Price:Ugx 35000 
          </Text>
            
            </View>
            <View style={{justifyContent:'center',alignItems:"center",marginTop:10}}>
            
            <Button
              onPress={() => navigation.navigate('Payment')}
              title="Subscribe"
                />

            </View>
          
         </Card>
         </View>
         <View>
         <Card style={{width:300}}>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:18,color:'blue',marginBottom:10}}>Silver</Text>
          </View>
          <View style={{justifyContent:'center',alignItems:"center",marginTop:10}}>
            
            <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
              color:'black'
            }}>
            Period:6 Month 
          </Text>
            
          </View>

          <View style={{justifyContent:'center',alignItems:"center",marginTop:20}}>
            
            <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
              color:'green'
            }}>
            Price:Ugx 55000 
          </Text>
            
          </View>
            <View style={{justifyContent:'center',alignItems:"center",marginTop:10}}>
            
            <Button
              onPress={() => navigation.navigate('Payment')}
              title="Subscribe"
                />

            </View>
          
         </Card>
         </View>
         </ScrollView> 
      

      </View>
    );
  // }
};

// export default Subscriptions
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
  loginText:{
    fontSize:19
  }
});
 export default Subscriptions;
