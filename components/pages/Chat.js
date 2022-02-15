import React from 'react';
import {View, TouchableOpacity,Image,StyleSheet,Text,TextInput,TouchableHighlight,ActivityIndicator} from 'react-native';
import {FlutterwaveInit,FlutterwaveButton,PayWithFlutterwave} from 'flutterwave-react-native';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-community/async-storage';
import Card from './Card';

class Chat extends React.Component {
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
    otp_url:'',
    data2:'',
    loan:''
    
  }
}
async componentDidMount(){
  try {
    const jsonValue2 = await AsyncStorage.getItem('@payment');
    this.setState({loan:JSON.parse(jsonValue2)});
    
  }
  catch (e) {
    // error reading value
    console.log(e);
  }
}
makeid(length){
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

getData_ = async () => {
  this.setState({isPending:true});

  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    // return jsonValue != null ? JSON.parse(jsonValue) : null;
    this.setState({data2:JSON.parse(jsonValue)});
    // console.log(data2);

    fetch('https://ubuntusx.com/server_files/userProfile.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: this.state.data2.phone,

        password: this.state.data2.pass,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        // setData3(responseJson);
        responseJson.forEach(data => {
          this.setState({name:data.name,email:data.email,phoneNumber:data.phone_number});
        });
      
        if(this.state.amount!=''){
         

// console.log(this.makeid(5));
          fetch('https://api.flutterwave.com/v3/payments', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'FLWSECK-f94c405c66699ba066c51157c132a0da-X',
            },
            body: JSON.stringify({
              tx_ref:this.makeid(10),
              amount:this.state.amount,
           currency:"UGX",
           redirect_url:"https://ubuntusx.com/webhook.php",
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
        
            }),
          })
            .then(response => response.json())
            .then(responseJson_ => {
             
              console.log(this.state.loan.payment_date);
        this.setState({otp_url:responseJson_.data.link,isPending:false});

      //   fetch('https://ubuntusx.com/server_files/loan_payment.php', {
      //     method: 'POST',
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       id: this.state.loan.id,
    
      //       newpay: (this.state.loan.monthly_pay - this.state.amount),
      //     }),
      //   })
      //     .then(response => response.json())
      //     .then(responseJson_message => {
      //       if(responseJson_message === 'Loan updated!')
      //       {
      //         console.log(responseJson_message);
      //       }else{
      //         console.log(responseJson_message);
      //       }
      //  })
      // .catch(error => {
      //   console.error(error);

      //   // this.setState({loading: false, disabled: false});
      // });
            })
            .catch(error => {
              console.error(error);
    this.setState({isPending:false});
        
            });
        }else{
    this.setState({isPending:false});
          
          alert('Enter Amount')}

        async function fetchUser() {
          try {
            const jsonValue = JSON.stringify(responseJson);
            await AsyncStorage.setItem('@userprofile', jsonValue);
            // console.log(e);
          } catch (e) {
            // saving error
            console.log(e);
          }
        }
        fetchUser();
        // this.setState({loading: false, disabled: false});
      })
      .catch(error => {
        console.error(error);

        // this.setState({loading: false, disabled: false});
      });
  } catch (e) {
    // error reading value
    console.log(e);
  }
};
// componentDidMount({route}){
//   console.log(route.params.paramKey);

// }
  componentWillUnmout() {

    if (this.abortController) {
      this.abortController.abort();
    }
    // this.getData_();
  }
 

  onSubmitMomo=()=>{
    this.setState({payment:'momo'});
    
  }
  onSubmitCard=()=>{
    this.setState({payment:'card'});

  }
  
  pay=()=>{
    this.getData_();

  }

  render() {
    const {isPending} = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
     
     <Card style={{width:300}}>
          <View 
          // style={{alignItems:'center',justifyContent:'center'}}
          >
             <Image
            style={{width: 25, height: 25,marginLeft:190}}
            source={require('../images/loan.png')}
            />
            <Text style={{fontSize:12,marginLeft:220,color:'blue',marginBottom:20}}>Hello</Text>
          </View>
          <View 
          // style={{alignItems:'center',justifyContent:'center'}}
          >
             <Image
            style={{width: 25, height: 25}}
            source={require('../images/loan.png')}
            />
            <Text style={{fontSize:12,color:'blue',marginBottom:20}}>Hello</Text>
          </View>
          <View 
          // style={{alignItems:'center',justifyContent:'center'}}
          >
             <Image
            style={{width: 25, height: 25,marginLeft:190}}
            source={require('../images/loan.png')}
            />
            <Text style={{fontSize:12,marginLeft:220,color:'blue',marginBottom:20}}>At what time should i expect to receive the the tractor</Text>
          </View>
          <View 
          // style={{alignItems:'center',justifyContent:'center'}}
          >
             <Image
            style={{width: 25, height: 25}}
            source={require('../images/loan.png')}
            />
            <Text style={{fontSize:12,color:'blue',marginBottom:20}}>Before the Day ends</Text>
          </View>
          <View 
          // style={{alignItems:'center',justifyContent:'center'}}
          >
             <Image
            style={{width: 25, height: 25,marginLeft:190}}
            source={require('../images/loan.png')}
            />
            <Text style={{fontSize:12,marginLeft:220,color:'blue',marginBottom:20}}>thanks boss</Text>
          </View>
     </Card>       
      

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
 export default Chat;
