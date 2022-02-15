import React from 'react';
import {
  Button,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
  View,
  Text,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl
} from 'react-native';
import {FlutterwaveInit,FlutterwaveButton,PayWithFlutterwave} from 'flutterwave-react-native';
import { WebView } from 'react-native-webview';

const Settings = ({navigation}) => {

  const [data, setData] = React.useState({
      username: '',
      password: '',
      confirm_password: '',
      check_textInputChange: false,
      secureTextEntry: true,
      confirm_secureTextEntry: true,
  });

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
      <View style={[styles.buttonsContainer, {marginBottom: 5}]}>
       {/* <Card> */}
       <TouchableOpacity 
       onPress={()=>navigation.navigate('Feedback')}       
          style={[styles.roundButton, {backgroundColor: 'purple'}]}>
             <Image
          style={{width: 75, height: 75}}
          source={require('../images/loan.png')}
          />
          
          <Text style={{color: '#fff', fontSize: 12}}> Feedback</Text>
        </TouchableOpacity>
       {/* </Card> */}
       {/* <Card> */}
       <TouchableOpacity
        onPress={()=>navigation.navigate('Change_password')}
          style={[styles.roundButton, {backgroundColor: 'yellowgreen'}]}>
             <Image
          style={{width: 75, height: 75}}
          source={require('../images/loan.png')}
          />
          <Text style={{color: '#fff', fontSize: 12}}> Change Password</Text>
        </TouchableOpacity>
       {/* </Card> */}
       
      </View>
      <View style={[styles.buttonsContainer, {marginBottom:5}]}>
       {/* <Card> */}
       <TouchableOpacity
       onPress={()=>navigation.navigate('Contact')}
          style={[styles.roundButton,{marginLeft:0}, {backgroundColor: 'pink'}]}>
             <Image
          style={{width: 75, height: 75}}
          source={require('../images/loan.png')}
          />
          <Text style={{color: '#fff', fontSize: 12}}> Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>navigation.navigate('Profile')}
          style={[styles.roundButton,{marginLeft:1}, {backgroundColor: 'violet'}]}
          >
             <Image
          style={{width: 75, height: 75}}
          source={require('../images/loan.png')}
          /> 
           <Text style={{color: '#fff', fontSize: 12}}> Profile</Text>
        </TouchableOpacity>
       
      </View>
        </View>

    </View>
  );
};

export default Settings;


// class Settings extends React.Component {
//   abortController = null;
// constructor(){
//   super();
//   this.state={
//     isPending:false,
//     payment:'',
//     name:'',
//     phoneNumber:'',
//     email:'',
//     card_number:'',
//     cvv:"",
//     expiry_month:"",
//     expiry_year:"",
//     currency:"UGX",
//     amount:"",
//     tx_ref:"",
//     res:[],
//     status_:'',
//     otp_url:''
    
//   }
// }
//   componentWillUnmout() {
//     if (this.abortController) {
//       this.abortController.abort();
//     }
//   }
//   generateTransactionRef(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * 
//  charactersLength));
//    }
//    return result;
// }



//   onSubmitMomo=()=>{
//     this.setState({payment:'momo'});
    
//   }
//   onSubmitCard=()=>{
//     this.setState({payment:'card'});

//   }
//   pay=()=>{
//     this.setState({isPending:true});
// // if(this.state.payment === 'momo'){
// //   if(this.state.name!=''){
// //     if(this.state.phoneNumber!=''){
// //       if(this.state.email!=''){
// //         if(this.state.amount!=''){
// //           fetch('https://api.flutterwave.com/v3/charges?type=mobile_money_uganda', {
// //             method: 'POST',
// //             headers: {
// //               Accept: 'application/json',
// //               'Content-Type': 'application/json',
// //               Authorization: 'FLWSECK-f94c405c66699ba066c51157c132a0da-X',
// //             },
// //             body: JSON.stringify({
// //               tx_ref:"mMC-44556343",
// //               amount:this.state.amount,
// //               email:this.state.email,
// //               phone_number:this.state.phoneNumber,
// //               currency:"UGX",
// //               fullname:this.state.name,
// //               redirect_url:"https://rave-webhook.herokuapp.com/receivepayment",
// //               voucher:128373,
// //               // network:"AIRTELUG"
// //             }),
// //           })
// //             .then(response => response.json())
// //             .then(responseJson => {
             
// //               console.log(responseJson.meta.authorization.redirect);
// //         this.setState({otp_url:responseJson.meta.authorization.redirect});
              
// //             })
// //             .catch(error => {
// //               console.error(error);
        
// //               // this.setState({loading: false, disabled: false});
// //             });  
// //         }else{alert('Enter Amount')}
// //       }else{alert('Enter Email')}
// //     }else{alert('Enter phone number')}
// //   }else{alert('Enter full name')}
  
// // }else{

//   if(this.state.name!=''){
//     if(this.state.phoneNumber!=''){
//       if(this.state.email!=''){
//         if(this.state.amount!=''){
//           fetch('https://api.flutterwave.com/v3/payments', {
//             method: 'POST',
//             headers: {
//               Accept: 'application/json',
//               'Content-Type': 'application/json',
//               Authorization: 'FLWSECK-f94c405c66699ba066c51157c132a0da-X',
//             },
//             body: JSON.stringify({
//               tx_ref:"hooli-tx-1920bbtytty",
//               amount:this.state.amount,
//            currency:"UGX",
//            redirect_url:"https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
//            payment_options:"card",
//            meta:{
//               consumer_id:23,
//               consumer_mac:"92a3-912ba-1192a"
//            },
//            customer:{
//             email:this.state.email,
//               phonenumber:this.state.phoneNumber,
//               name:this.state.name
//            },
//            customizations:{
//               title:"Pied Piper Payments",
//               description:"Middleout isn't free. Pay the price",
//               logo:"http://nehemiahstemresearch.com/logo/payment.png"
//            }
//           //     card_number:"4556052704172643",
//           //  cvv:"899",
//           //  expiry_month:"01",
//           //  expiry_year:"21",
//           //     tx_ref:"MC-1585230950508",
//           //     amount:"1500",
//           //     email:"user@flw.com",
//           //     currency:"NGN",
//           //     fullname:"John Madakin",
//           //     redirect_url:"https://rave-webhook.herokuapp.com/receivepayment",
//           //     type: "card"
//             }),
//           })
//             .then(response => response.json())
//             .then(responseJson => {
             
//               // console.log(responseJson.status);
//         // this.setState({otp_url:responseJson.meta.authorization.redirect});
//         this.setState({otp_url:responseJson.data.link,isPending:false});
//             })
//             .catch(error => {
//               console.error(error);
//     this.setState({isPending:true});
        
//               // this.setState({loading: false, disabled: false});
//             });
//         }else{alert('Enter Amount')}
//       }else{alert('Enter Email')}
//     }else{alert('Enter phone number')}
//   }else{alert('Enter Full Name')}
  
// // }
//   }
  

//   // https://flutterwave.com/pay/tszdetudzbc9
//   render() {
//     const {isPending} = this.state;
    
 
//     return (
//       <View style={{flex: 1}}>
//         <View style={{justifyContent:'center',alignItems:"center",marginTop:40}}>
//         <View style={[styles.buttonsContainer, {marginBottom: 5}]}>
//          {/* <Card> */}
//          <TouchableOpacity 
//          onPress={()=>navigation.navigate('Feedback')}
         
//             style={[styles.roundButton, {backgroundColor: 'purple'}]}>
//                <Image
//             style={{width: 75, height: 75}}
//             source={require('../images/loan.png')}
//             />
            
//             <Text style={{color: '#fff', fontSize: 12}}> Feedback</Text>
//           </TouchableOpacity>
//          {/* </Card> */}
//          {/* <Card> */}
//          <TouchableOpacity
//           onPress={()=>this.props.navigation.navigate('Change_password')}
//             style={[styles.roundButton, {backgroundColor: 'yellowgreen'}]}>
//                <Image
//             style={{width: 75, height: 75}}
//             source={require('../images/loan.png')}
//             />
//             <Text style={{color: '#fff', fontSize: 12}}> Change Password</Text>
//           </TouchableOpacity>
//          {/* </Card> */}
         
//         </View>
//         <View style={[styles.buttonsContainer, {marginBottom:5}]}>
//          {/* <Card> */}
//          <TouchableOpacity
//          onPress={()=>this.props.navigation.navigate('Contact')}
//             style={[styles.roundButton,{marginLeft:0}, {backgroundColor: 'pink'}]}>
//                <Image
//             style={{width: 75, height: 75}}
//             source={require('../images/loan.png')}
//             />
//             <Text style={{color: '#fff', fontSize: 12}}> Contact Us</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//           onPress={()=>this.props.navigation.navigate('Profile')}
//             style={[styles.roundButton,{marginLeft:1}, {backgroundColor: 'violet'}]}
//             >
//                <Image
//             style={{width: 75, height: 75}}
//             source={require('../images/loan.png')}
//             /> 
//              <Text style={{color: '#fff', fontSize: 12}}> Profile</Text>
//           </TouchableOpacity>
         
//         </View>
//           </View>

//       </View>
//     )
//   }
// }
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
//  export default Settings;
