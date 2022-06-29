import React,{useEffect,useState} from 'react';
import { ApplicationProvider, Layout, Input } from '@ui-kitten/components'
import { View, Button, Text, StyleSheet ,FlatList,Image,TextInput,ActivityIndicator } from 'react-native';
import { ContactScreen } from './ContactScreen';
import {SearchBar} from 'react-native-elements';
const lists=[
    { "name": "Rakesh Saini", "country": "India" },
    { "name": "Ajay Kumar", "country": "America" },
    { "name": "Tinku jaiswal", "country": "China" },
    { "name": "Mukesh ghintala", "country": "Germany" },
    { "name": "Jai mathur", "country": "Australia" },
    { "name": "Rakesh Saini", "country": "India" },
    { "name": "Ajay Kumar", "country": "America" },
    { "name": "Tinku jaiswal", "country": "China" },
    { "name": "Mukesh ghintala", "country": "Germany" },
    { "name": "Jai mathur", "country": "Australia" },
]
export function DetailsScreen({ route, navigation }: any) {
    const [list, setlist] = useState(false);
    const [loading, setloading] = useState(false);
    const [value, setvalue] = useState('');
    useEffect(() => {
        setloading(true);

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            
            setlist(json);
            setloading(false);
        
        })
    }, []);
   
  
     const searchFilterFunction = text => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            
            setlist(json);
            // setloading(false);
        
        })
        
        setvalue(text);
    
        const newData = list.filter(item => {
          const itemData = `${item.title.toUpperCase()} ${item.description.toUpperCase()}`;
          const textData = text.toUpperCase();
    
          return itemData.indexOf(textData) > -1;
        });
        
        text!=''? setlist(newData):setlist(list)

      };
    
      const renderHeader = () => {
        return (
          <SearchBar
            placeholder="Search..."
            lightTheme
            round
            onChangeText={text => searchFilterFunction(text)}
            autoCorrect={false}
            value={value}
          />
        );
      };
    
    return (
        <>
        <View style={{flex: 1, backgroundColor:'#50C878'}}>
        <SearchBar
            placeholder="Search..."
            lightTheme
            round
            onChangeText={text => searchFilterFunction(text)}
            autoCorrect={false}
            value={value}
          />
        <View style={{alignItems:'center'}}>
        {/* {loading ? <ActivityIndicator size="large" color="#fff" /> : null} */}

        </View>
            <View >
            {loading ? <ActivityIndicator size="large" color="#fff" /> : 
            <FlatList
            style={styles.flatList}
            data={list}
            renderItem={({ item }) =>
                <View style={styles.container}>
                    <View style={{marginRight:10}}>
                    <Image 
                    source={{uri:item.image }} 
                    style={{width: 50, height: 50,borderRadius:50}} 
                />
                    </View>
                    <View style={{justifyContent:'center',flexDirection:'column',marginRight:10}}>
                    <View style={{justifyContent:'center',marginRight:10}}>
                        {
                            item.title.length>17? <Text style={styles.titleTextTitle}>{item.title.slice(0, 17)}...</Text>
                            : <Text style={styles.titleTextTitle}>{item.title}</Text>
                        }

                   
                    </View>
                    <View>
                        <Text>Region</Text>
                    </View>
                    </View>
                    <View style={{justifyContent:'center'}}>

                    <Text style={styles.titleText}>${item.price}</Text>
                    </View>
                </View>
            }
            // ListHeaderComponent={renderHeader} 
            />
            }
            

            </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F9F6EE',
        padding: 15,
        marginTop: 15,
        borderRadius: 10,
        justifyContent:'space-around'
    },

    flatList: {
        margin: 10,
        // padding: 20,
    },

    titleText: {
        fontSize: 13,
    },
    titleText: {
        fontSize: 13,
        fontWeight:'bold'
    },

})
