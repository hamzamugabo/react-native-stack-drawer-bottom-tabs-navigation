import React, {useEffect, useState} from 'react';
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
import Card from '../pages/Card';

const Contact = ({navigation}) => {
  const [pendingLoan, setpendingLoan] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([]);


  const approved = response => {
    if (response) {
      setisLoading(true);
    }
    fetch('https://ubuntusx.com/server_files/approve_loan.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        loan_id: response.loan_id,
        user_id: response.user_id,
        amount: response.user_id,
        interest: response.interest,
        name: response.name,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson === 'Loan disbursed!') {
          setisLoading(false);
          setScaleAnimationDialogLoan(false);
        } else {
          console.log(responseJson);
          setisLoading(false);
        }
        //
      })
      .catch(error => {
        setisLoading(false);

        if (error) {
          console.error(error);
        }
      });
  };

  useEffect(() => {
    setisLoading(true);
    fetch('https://ubuntusx.com/server_files/pending_loans.php')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setisLoading(false));
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
       <Card>
       <View
          >
          <Text
          style={{
            fontSize: 20,
            // textAlign: 'center',
            marginBottom: 10,
          }}>
         +256 700 3534 36 
        </Text>
        <Text
          style={{
            fontSize: 20,
            // textAlign: 'center',
            marginBottom: 10,
          }}>
          sales@farm-rent.com 
        </Text>
        <Text
          style={{
            fontSize: 20,
            // textAlign: 'center',
            marginBottom: 10,
          }}>
          support@farm-rent.com 
        </Text>
        <Text
          style={{
            fontSize: 20,
            // textAlign: 'center',
            marginBottom: 10,
          }}>
         Plot 0000 Nyeru-Nairobi
        </Text>
        </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 18, color: 'blue', marginBottom: 20,marginLeft:50}}>
                 Any meesage for us
                </Text>
              </View>
              <View style={{width: 290, height: 250}}>
                {/* <ScrollView> */}
                  <View style={styles.inputContainer}>
                    <TextInput
                      underlineColorAndroid="transparent"
                      placeholder="Logged in user email"
                      style={styles.inputs}
                      autoCapitalize="none"
                      // onChangeText={Title => setTitle(Title)}
                      // value={this.state.Title}
                    />
                  </View>
    
                  <View style={styles.inputContainer}>
                    <TextInput
                      underlineColorAndroid="transparent"
                      placeholder="message"
                      autoCapitalize="none"
                      style={styles.inputs}
                      // onChangeText={New_password => setNew_password(New_password)}
                      // value={this.state.New_password}
    
                    />
                  </View>
                
               
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <TouchableHighlight
                    style={{marginBottom: 30, marginTop: 30}}
                    // onPress={submit}
                    >
                    <Text style={styles.loginText}>Submit</Text>
                  </TouchableHighlight>
    
                </View>
              </View>
            {/* </Card> */}
        
        
        </Card>
        
    </View>
    
  );
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
export default Contact;
