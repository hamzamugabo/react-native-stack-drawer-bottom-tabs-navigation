import React,{useState} from 'react';

import {View, Image, TouchableOpacity,StyleSheet,Text , Alert, Modal, Pressable } from 'react-native';
import Dialog, { DialogFooter, DialogButton, DialogContent,PixelRatio } from 'react-native-popup-dialog';

const ActionBarImage = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const logout=()=>{return navigation.navigate('Home')};
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity 
      //  onPress={() => setModalVisible(true)}
       >
      <Image
        source={require('./images/settings-icon.png')}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginRight: 10,
        }}
      />
</TouchableOpacity>
<View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View>
       <View style={styles.modalView}>  
      <TouchableOpacity
     onPress={() => setModalVisible(false)}
    >
     <Text  style={styles.options}>Profile</Text>
     </TouchableOpacity>
     <TouchableOpacity
     onPress={() => setModalVisible(false)}
    >
    <Text  style={styles.options}>Account</Text>
     </TouchableOpacity>
     <TouchableOpacity
     onPress={logout}
    >
    <Text  style={styles.options}>Logout</Text>
     </TouchableOpacity>
     <TouchableOpacity
     style={{marginTop:20}}
     onPress={() => setModalVisible(false)}
    >
      <Text style={styles.textStyle}>Cancle</Text>
    </TouchableOpacity>
        </View>
        
        </View>
      </Modal>
    
    </View>
      </View>

      
  );
};

export default ActionBarImage;

const styles = StyleSheet.create({
  
  centeredView: {
    marginTop: 22,
    justifyContent:'flex-end'
  },
 options:{
fontSize:18,
padding:10
 },
  modalView: {
    marginTop: 60,
    marginLeft: 60,
    marginRight: 60,
    backgroundColor: "white",
    borderRadius: 10,
    paddingTop: 35,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // marginTop:20
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
fontSize:20
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});