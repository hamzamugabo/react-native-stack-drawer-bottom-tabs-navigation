import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = (props) => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    // width: 155,
    // height: 120,
    alignItems:'flex-start',
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    marginTop:5,
    
    
  },
});

export default Card;
