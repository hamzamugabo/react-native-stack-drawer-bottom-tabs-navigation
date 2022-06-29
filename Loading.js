// Loading.js
// import React from 'react';
import React,{Component,useEffect,useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Text, ActivityIndicator, StyleSheet, Image} from 'react-native';

// import firebase, * as firbase from "firebase";
// import auth from '@react-native-firebase/auth';

export function Loading(props: any) {
  const [cred, setcred] = useState(false);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cred');
       if(jsonValue != null){
        props.navigation.navigate('AppStack')
       }
        else{
          props.navigation.navigate('AuthStack');
        }
        
      console.log(jsonValue);
      console.log(props);

    } catch (e) {
      console.log(e);
    }
  };
  // getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('@cred');
  //     return jsonValue != null
  //       ? navigation.navigate('Home')
  //       : navigation.navigate('Login');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <View style={styles.container}>
     
     <ActivityIndicator size="large" color="#0000ff"/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
// export default class Loading extends Component {

//     constructor(props:any) {
//       // super(props:any);
//       state = {
//         email   : '',
//         password: '',
//         username:''
//       }
//     }
//     componentDidMount(){
      
//         this.getData();
//     }
//    getData = async () => {
//     try {
//       const jsonValue = await AsyncStorage.getItem('@cred');
//       return jsonValue != null
//         ? navigation.navigate('Home')
//         : navigation.navigate('Login');
//     } catch (e) {
//       console.log(e);
//     }
//   };
//       render(){
//       return (
//               <View style={styles.container}>
               
//                <ActivityIndicator size="large" color="#0000ff"/>
              
//               </View>
//             );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });



// import database from '@react-native-firebase/database';
// export default class Loading extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       loading: false,
//       disabled: false,
//       errorMessage: null,
//       terms: false,
//       currentUser: null,
//     };
//   }
//   componentDidMount() {
//     auth().onAuthStateChanged((user) => {
//       if (user) {
//         console.log(user);
//         this.props.navigation.navigate('NewHome');
      
//       } else {
//         this.props.navigation.navigate('Login');
//       }
//     });
//   }
//   render() {
//     return (
//       <View style={styles.container}>
       
//        <ActivityIndicator size="large" color="#0000ff"/>
      
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
