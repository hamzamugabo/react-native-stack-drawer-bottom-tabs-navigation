import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState} from 'react';
import {  
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
  View,
  Text,TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,TouchableWithoutFeedback,
  RefreshControl
} from 'react-native';
import { Button } from 'react-native-elements';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import {Picker} from '@react-native-community/picker';
import CheckBox from '@react-native-community/checkbox';
import Card
 from './Card';

import { Icon } from 'react-native-elements';
import Dummy from './Dummy';
import Modal from "react-native-modal";

// export default class Home extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [],
//       isLoading: true
//     };
//   }
const Home = ({navigation}) => {
  const [isLoading, setisLoading] = useState(true);
  // const [modal, setmodal] = useState(false);
  const [data, setData] = useState(
[{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":"259"}},{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}},{"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","rating":{"rate":2.1,"count":430}},{"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":4.6,"count":400}},{"id":6,"title":"Solid Gold Petite Micropave ","price":168,"description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.","category":"jewelery","image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3.9,"count":70}},{"id":7,"title":"White Gold Plated Princess","price":9.99,"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...","category":"jewelery","image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3,"count":400}},{"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":1.9,"count":100}},{"id":9,"title":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ","price":64,"description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system","category":"electronics","image":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg","rating":{"rate":3.3,"count":203}},{"id":10,"title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s","price":109,"description":"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)","category":"electronics","image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg","rating":{"rate":2.9,"count":470}},{"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,"description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.","category":"electronics","image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg","rating":{"rate":4.8,"count":319}},{"id":12,"title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive","price":114,"description":"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty","category":"electronics","image":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg","rating":{"rate":4.8,"count":400}},{"id":13,"title":"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin","price":599,"description":"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz","category":"electronics","image":"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg","rating":{"rate":2.9,"count":250}},{"id":14,"title":"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ","price":999.99,"description":"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag","category":"electronics","image":"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg","rating":{"rate":2.2,"count":140}},{"id":15,"title":"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats","price":56.99,"description":"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates","category":"women's clothing","image":"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg","rating":{"rate":2.6,"count":235}},{"id":16,"title":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket","price":29.95,"description":"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON","category":"women's clothing","image":"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg","rating":{"rate":2.9,"count":340}},{"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}},{"id":18,"title":"MBJ Women's Solid Short Sleeve Boat Neck V ","price":9.85,"description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem","category":"women's clothing","image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg","rating":{"rate":4.7,"count":130}},{"id":19,"title":"Opna Women's Short Sleeve Moisture","price":7.95,"description":"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort","category":"women's clothing","image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg","rating":{"rate":4.5,"count":146}},{"id":20,"title":"DANVOUY Womens T Shirt Casual Cotton Short","price":12.99,"description":"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.","category":"women's clothing","image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg","rating":{"rate":3.6,"count":145}}]

  );
  const [loanAmount, setloanAmount] = useState();
  const [loanLender, setloanLender] = useState();
  const [date, setdate] = useState('');
  const [time, settime] = useState('');
  const [loanId, setloanId] = useState();
  const [title, setname] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState([]);
  const [pendingLoan, setpendingLoan] = useState([]);
  const [pendingDisburseLoan, setpendingDisburseLoan] = useState([]);
  const [duration, setduration] = useState();
  const [item_id, setitem_id] = useState('');
  const [user_id, setuser_id] = useState();
  const [user_role, setuser_role] = useState();
  const [approvedLoans, setapprovedLoans] = useState([]);
  const [repayLoans, setrepayLoans] = useState([]);
  const [retry, setretry] = useState(false);
  const [isSelected, setisSelected] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);
  const [scaleAnimationDialogLoan, setScaleAnimationDialogLoan] = useState(
    false,
  );


  

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const [isModalSubscribe, setModalSubscribe] = useState(false);
  const toggleModals = () => {
    setModalSubscribe(!isModalSubscribe);
  };

  const [ScaleAnimationDialogRepayLoan, setScaleAnimationDialogRepayLoan] = useState(
    false,
  );
  const [
    scaleAnimationDialogApprovedLoan,
    setScaleAnimationDialogApprovedLoan,
  ] = useState(false);
  const [
    scaleAnimationDialogApproveLoan,
    setScaleAnimationDialogApproveLoan,
  ] = useState(false);
  const [
    scaleAnimationDialogDisburseLoan,
    setScaleAnimationDialogDisburseLoan,
  ] = useState(false);
  // const { itemId, otherParam  } = route.params;
  const getData_ = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      // return jsonValue != null ? JSON.parse(jsonValue) : null;
      setData2(JSON.parse(jsonValue));
      // console.log(data2);

      fetch('https://ubuntusx.com/server_files/userProfile.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: data2.phone,

          password: data2.pass,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          setData3(responseJson);
          responseJson.forEach(data => {
            setuser_id(data.id);
            setuser_role(data.role);
          });
          // console.log(data3);

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
  const chatWithOwner=()=>{
    navigation.navigate('Chat');
  }
  const PrecedeToPayment=()=>{
    navigation.navigate('Payment');
    // navigation.navigate('Home', { screen: 'Payment' });
  }
  const submit=()=>{
    setModalVisible(false);
    setModalSubscribe(false);
    alert('ur booking will be put in considerations');
    // navigation.navigate('Payment', { screen: 'Home' });
    // navigation.navigate('Payment');
  }
  const reload = () => {
    setretry(false);

    setisLoading(true);

    fetch(
      // 192.168.42.153
      'https://ubuntusx.com/server_files/pending_loans.php',
      // 'https://reactnative.dev/movies.json'
    )
      .then(response => response.json())
      .then(json => {
        setpendingLoan(json);
        setisLoading(false);
      })
      .catch(error => {
        console.error(error);
        setisLoading(false);
      });
  };
  // useEffect(() => {
  //   setisLoading(true);
  //   setScaleAnimationDialog(false);
  //   setScaleAnimationDialogLoan(false);
  //   getData_();
  //   fetch(
  //     // 192.168.42.153
  //     'https://ubuntusx.com/server_files/loans.php',
  //     // 'https://reactnative.dev/movies.json'
  //   )
  //     .then(response => response.json())
  //     .then(json => {
  //       // setData(json);
  //       setisLoading(false);
  //     })
  //     .catch(error => {
  //       if (error) {
  //         console.error(error);
  //         setisLoading(false);
  //         setretry(true);
  //       }
  //     })
  //     .finally(() => setisLoading(false));

  //     disburseloan();
    
  // }, []);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const disburseloan=()=>{
    fetch(
      // 192.168.42.153
      'https://ubuntusx.com/server_files/disburse_pending_loans.php',
    )
      .then(pendinDisburseLoan_data => pendinDisburseLoan_data.json())
      .then(loan => {
        if(loan ==='Error description:')
        {console.log(loan);
        
        // console.log(pendingDisburseLoan.length);
        // console.log(pendingDisburseLoan);
        setisLoading(false);

      }
        else{
          
          setpendingDisburseLoan(loan);
          // console.log(loan);
        }
        setisLoading(false);
      })
      .catch(error => {
        // if (error) {
        console.error(error);
        setisLoading(false);
        // }
      });
  }

  const request = item => () => {
    // setloan(item);
    setloanAmount(item[1]);
    setloanId(item[0]);
    setloanLender(item[2]);
    setScaleAnimationDialog(true);

    // alert(item);
  };

  const loanApplication = () => {
    setScaleAnimationDialog(false);

    setScaleAnimationDialogLoan(true);
  };
  const loan_application = () => {
    if (!user_id) {
      getData_();
    }
    setisLoading(true);
    fetch('https://ubuntusx.com/server_files/loan_application.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user_id,
        amount: loanAmount,
        interest: '0.12',
        period: duration,
        bank: loanLender,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson === 'Loan Applied!') {
          setisLoading(false);
          setScaleAnimationDialogLoan(false);
        } else {
          // console.log(responseJson);
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
  const approve_loans = () => {
    // if(){};
    setScaleAnimationDialogApproveLoan(true);

    setisLoading(true);

    fetch(
      // 192.168.42.153
      'https://ubuntusx.com/server_files/pending_loans.php',
    )
      .then(pendinLoan_data => pendinLoan_data.json())
      .then(loan => {
        if(loan!=='Error')
       { setpendingLoan(loan);
        setisLoading(false);}else{
          setisLoading(false);
        }
      })
      .catch(error => {
        // if (error) {
        console.error(error);
        setisLoading(false);
        // }
      });
  };
  const approve = response => {
    if (response) {
      setisLoading(true);
    }
    // console.log(isSelected);
    // console.log(response);
    fetch('https://ubuntusx.com/server_files/approve_loan.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        loan_id: response.loan_id,
        user_id: response.user_id,
        amount: response.amount,
        interest: response.interest,
        name: response.name,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson === 'Loan disbursed!') {
          setisLoading(false);
          setScaleAnimationDialogApproveLoan(false);
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
  const approved_loans = () => {
    setScaleAnimationDialogApprovedLoan(true);
    if (!user_id) {
      getData_();
    }
    setisLoading(true);
    fetch('https://ubuntusx.com/server_files/approved_loans.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user_id,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson!='No Approved Loan') {
          setapprovedLoans(responseJson);
          setisLoading(false);
          // setScaleAnimationDialogApprovedLoan(false);
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
  const display_loan_to_disburse = () => {
    // if(){};
    setScaleAnimationDialogDisburseLoan(true);

    disburseloan();
  };
  const disburse = response => {
    if (response) {
      setisLoading(true);
    }
    // console.log(response);
    fetch('https://ubuntusx.com/server_files/approve_disburse_loan.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        disburse_id: response.id,
        loan_id: response.loan_no,
        user_id: response.user_id,
        amount: response.amount,
        interest: response.interest,
        name: response.full_name,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson === 'Loan disbursed!') {
          setisLoading(false);
          setScaleAnimationDialogDisburseLoan(false);
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
  const repay_loan = () => {
    setScaleAnimationDialogRepayLoan(true);
    if (!user_id) {
      getData_();
    }
    setisLoading(true);
    fetch('https://ubuntusx.com/server_files/repay_loan.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user_id,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson!='No Approved Loan') {
          setrepayLoans(responseJson);
          setisLoading(false);
          // setScaleAnimationDialogApprovedLoan(false);
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
  const storeData = async () => {
    let obj = {    
      phone: phone, 
      pass: password
      // role:responseJson   
    } 
    try {
      const jsonValue = JSON.stringify(obj)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
// alert(e);

    } catch (e) {
      // saving error
alert(e);
    }
  }
  const close=()=>{
    setModalSubscribe(false);
    setModalVisible(false);
  }
  const makepayments =()=>{
    navigation.navigate('MakePayments');
  }
  const makeLoanpayments =async (data)=>{
    try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem('@payment', jsonValue)
// alert(e);
navigation.navigate('MakePayments');
setScaleAnimationDialogRepayLoan(false);
    } catch (e) {
      // saving error
alert(e);
    }
    // navigation.navigate('MakePayments');
    setScaleAnimationDialogRepayLoan(false);

// console.log(data);
  }
 const item=(id)=>{
   setitem_id(id);
toggleModal();
// alert(item_id);
// alert(id);
  }
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      <View
        style={{
          paddingTop: 35,
          paddingLeft: 35,
          paddingRight: 35,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'darkorange',
        }}>


          <View style={[styles.buttonsContainer, {marginBottom: 5}]}>
          <TouchableOpacity style={{marginBottom: 20}} >
            {/* <Text style={{color: '#fff', fontSize: 16}}> Make Payments</Text> */}
            <Image
            style={{width: 200, height: 200}}
            source={require('../images/tech.jpeg')}
            />
          </TouchableOpacity>


          </View>

        
       
      </View>
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
          <View style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            marginTop:10,
            marginLeft:10,
            marginBottom:10,
            // justifyContent: 'center',
        alignItems: 'center',
        

          }}>
          {

          data.map((pro,index)=>(  
            // <View key={index}>;this.setEditedItem(pro.id),this.setInputText(pro.text)}
            
            // style={{marginBottom:20,flexDirection:'column'}}
            // <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View key={index} style={{alignItems:'center',alignContent:'center',justifyContent: 'center',width: '50%',marginBottom:10,marginTop:10}} >
                  <View  style={{backgroundColor:'darkgreen',padding:10}}>
                  

                  <TouchableOpacity onPress={item.bind(this,pro.id)} >

                  <Image
                    style={{width: 20, height: 20,alignItems:'center'}}
                    source={{uri:pro.image}}
                    />
                    
                    <Text>{pro.title}</Text>
                    <Text>${pro.price}</Text>
                  </TouchableOpacity>
                  {/* </ScrollView> */}

                  </View>

              </View>
              // {/* </ScrollView> */}
          
          
            

          ))
          }
          </View>
          {/* </ScrollView> */}
<View>
      <Modal style={styles.modalViewEdit} isVisible={isModalVisible}>
        <ScrollView>
        <View style={{ flex: 1,marginTop:50 }}>
        {/* {isLoading? <ActivityIndicator size="large" color="#00ff00" />:null} */}
        {

        data.filter(id => id.id == item_id).map((pro2,one)=>(
          
          <View>
            <View key={one} style={{alignItems:'center',alignContent:'center'}}>
            <Text style={{fontSize:18,color:'blue',marginBottom:20}}>OVERVIEW OF {pro2.id}</Text>
          <Image
            style={{width: 70, height: 70}}
            source={{uri:pro2.image}}
            /> 
            {/* <Text>{pro2.id}</Text> */}
            <Text>{pro2.title}</Text>
            <Text>Ugx{pro2.price}</Text>
          <Text>{pro2.description}</Text>
           

          </View>
          
          <View key={one} style={{alignItems:'center',alignContent:'center'}}>
            <Text style={{fontSize:18,color:'blue',marginBottom:20,marginTop:20}}>OWNER DETAILS</Text>
          <Image
            style={{width: 70, height: 70}}
            source={{uri:pro2.image}}
            /> 
            {/* <Text>{pro2.id}</Text> */}
            <Text>Name:Tumusiime Mpoza</Text>
            <Text>Address:Kawempe</Text>
          <Text>Contact:0773155188</Text>
          <Text>Booking Date:{new Date().getDate() +'/'+(new Date().getMonth()+1) +'/'+new Date().getFullYear() }</Text>
           <Text>Booking Time:{new Date().getHours() +':'+(new Date().getMinutes()) +':'+new Date().getSeconds() }</Text>

          </View>
          


          </View>
          ))
          }
          
          <View style={{justifyContent:'space-around',flexDirection:'row',alignItems:'center',alignContent:'center',marginTop:10}}>
            <View>
            <Button type='outline' color='grey' title="CHAT WITH OWNER" onPress={chatWithOwner} />
            </View>
            <View>
            <Button  color='darkorange' title="BOOK NOW" onPress={toggleModals} />
            </View>
          
          </View>
          
        </View>
        </ScrollView>
      </Modal>
</View>
<View>
      <Modal style={styles.modalViewEdit} isVisible={isModalSubscribe}>
      <TouchableOpacity
                style={{justifyContent:'flex-end',flexDirection:'row'}}
                onPress={close}>
                <Text style={styles.textStyle}>X</Text>
              </TouchableOpacity>
      <View style={{width: 290, height: 500,alignItems: 'center', justifyContent: 'center'}}>
            <ScrollView>              

            <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Duration Type"
                  autoCapitalize="none"
                  // keyboardType="phone-pad"
                  keyboardType="phone-pad"
                  style={styles.inputs}
                  // onChangeText={phoneNumber => setphoneNumber(phoneNumber)}
                  // value={phoneNumber}

                  // onChangeText={(text) => this.setState({email: text})}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="select start Date"
                  style={styles.inputs}
                  autoCapitalize="none"
                  // onChangeText={name => setname(name)}
                  // value={name}

                  // onChangeText={(displayName) => this.setState({displayName})}
                  // value={this.state.displayName}
                />
                </View>
                <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="select end Date"
                  style={styles.inputs}
                  autoCapitalize="none"
                  // onChangeText={name => setname(name)}
                  // value={name}

                  // onChangeText={(displayName) => this.setState({displayName})}
                  // value={this.state.displayName}
                />
                </View>
                <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Village"
                  style={styles.inputs}
                  autoCapitalize="none"
                  // onChangeText={name => setname(name)}
                  // value={name}

                  // onChangeText={(displayName) => this.setState({displayName})}
                  // value={this.state.displayName}
                />
                </View>
                <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="parish"
                  style={styles.inputs}
                  autoCapitalize="none"
                />
                </View>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Subcountry"
                  style={styles.inputs}
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="County"
                  autoCapitalize="none"
                  // keyboardType="number"
                  style={styles.inputs}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="District"
                  style={styles.inputs}
                  
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Location"
                  autoCapitalize="none"
                  keyboardType="default"
                  style={styles.inputs}
                 
                />
              </View>
             
          
              
              {/* </View> */}
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Select radio button, pick up/delivery"
                  autoCapitalize="none"
                  keyboardType="default"
                  style={styles.inputs}
                 
                  // onChangeText={(text) => this.setState({phoneNumber: text})}
                />
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <TouchableHighlight
                    style={{marginBottom: 10, marginTop: 10}}
                    onPress={submit}
                    >
                    <Text style={styles.loginText}>Submit</Text>
                  </TouchableHighlight>
    
                </View>
            </ScrollView>
            </View>
      </Modal>
</View>
      <View style={[styles.buttonsContainer, {marginBottom: 5}]}>
         {/* <Card> */}
         <TouchableOpacity
            style={[styles.roundButton, {backgroundColor: 'pink'}]}>
               <Image
            style={{width: 75, height: 75}}
            source={require('../images/loan.png')}
            />
            <Text style={{color: '#fff', fontSize: 12}}> Land</Text>
          </TouchableOpacity>
         {/* </Card> */}
         {/* <Card> */}
         <TouchableOpacity
            style={[styles.roundButton, {backgroundColor: 'yellowgreen'}]}>
               <Image
            style={{width: 75, height: 75}}
            source={require('../images/loan.png')}
            />
            <Text style={{color: '#fff', fontSize: 12}}> Machine</Text>
          </TouchableOpacity>
         {/* </Card> */}
         
        </View>
        <View style={[styles.buttonsContainer, {marginBottom: 5}]}>
         {/* <Card> */}
         <TouchableOpacity
            style={[styles.roundButton, {backgroundColor: 'pink'}]}>
               <Image
            style={{width: 75, height: 75}}
            source={require('../images/loan.png')}
            />
            <Text style={{color: '#fff', fontSize: 12}}> Weather</Text>
          </TouchableOpacity>
         {/* </Card> */}
         {/* <Card> */}
         <TouchableOpacity
            style={[styles.roundButton, {backgroundColor: 'yellowgreen'}]}>
               <Image
            style={{width: 75, height: 75}}
            source={require('../images/loan.png')}
            />
            <Text style={{color: '#fff', fontSize: 12}}> Diseases</Text>
          </TouchableOpacity>
         {/* </Card> */}
         
        </View>
        <View style={[styles.buttonsContainer, {marginBottom: 5}]}>
         {/* <Card> */}
         <TouchableOpacity
            style={[styles.roundButton, {backgroundColor: 'pink'}]}>
               <Image
            style={{width: 75, height: 75}}
            source={require('../images/loan.png')}
            />
            <Text style={{color: '#fff', fontSize: 12}}> Subscriptions</Text>
          </TouchableOpacity>
         {/* </Card> */}
         {/* <Card> */}
         <TouchableOpacity
            style={[styles.roundButton, {backgroundColor: 'yellowgreen'}]}>
               {/* <Image
            style={{width: 75, height: 75}}
            source={require('../images/loan.png')}
            /> */}
            <Text >
              <FontAwesome 
                    name="users"
                    color='grey'
                    size={20}
                />
            </Text>
            
            <Text style={{color: '#fff', fontSize: 12}}> Profile</Text>
          </TouchableOpacity>
         {/* </Card> */}
         
        </View>
        <View style={{marginBottom: 5}, [styles.buttonsContainer, {marginBottom: 5}]}>
         {/* <Card> */}
         <TouchableOpacity
            style={[styles.roundButton, {backgroundColor: 'pink'}]}>
               <Image
            style={{width: 75, height: 75}}
            source={require('../images/loan.png')}
            />
            <Text style={{color: '#fff', fontSize: 12}}> Chats</Text>
          </TouchableOpacity>
         {/* </Card> */}
         {/* <Card> */}
         <TouchableOpacity
            style={[styles.roundButton, {backgroundColor: 'yellowgreen'}]}>
               <Image
            style={{width: 75, height: 75}}
            source={require('../images/loan.png')}
            />
            <Text style={{color: '#fff', fontSize: 12}}> Group Chat</Text>
          </TouchableOpacity>
         {/* </Card> */}
         
        </View>
      </ScrollView>
      </SafeAreaView>
      
    </View>
  );
  // }
};
export default Home;
const styles = StyleSheet.create({
  roundButton: {
    width:150,//Dimensions.get('window'),
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginLeft:10,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent:'center',flexWrap:'wrap',flex:1
  },
  roundButtonq: {
    // width:150,//Dimensions.get('window'),
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginLeft:10,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent:'center',flexWrap:'wrap',flex:1
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
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
  loginText:{
    fontSize:22,
    color:'green'
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
