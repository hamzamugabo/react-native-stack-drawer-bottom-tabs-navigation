import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Profile = ({navigation}) => {
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
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            marginBottom: 16,
          }}>
          Logged in user Profile  
        </Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 0,
    alignItems: 'center',
    // marginLeft:25,

    marginTop: 10,
  },
});
export default Profile;
