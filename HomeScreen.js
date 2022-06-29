import React, { useState } from "react";
import { FlatList,View, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import {COLORS} from './Constant/Color';
import {FONTS} from './Constant/Font';
import {ListItem, Avatar} from 'react-native-elements';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
// ];
const COMMENTS=[
    
        
            {
                "id": "60d2235267d0d8992e61187c",
                "message": "Breathtaking shot",
                "owner": {
                    "id": "60d0fe4f5311236168a109d0",
                    "title": "mr",
                    "firstName": "Emre",
                    "lastName": "Asikoglu",
                    "picture": "https://randomuser.me/api/portraits/med/men/23.jpg"
                },
                "post": "60d21b7967d0d8992e610d1b",
                "publishDate": "2020-05-24T18:55:34.984Z"
            },
            {
                "id": "60d223c567d0d8992e6119d1",
                "message": "😄😄😄 Excellent shot!!!",
                "owner": {
                    "id": "60d0fe4f5311236168a109ce",
                    "title": "mr",
                    "firstName": "Rudi",
                    "lastName": "Droste",
                    "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"
                },
                "post": "60d21b5467d0d8992e610caf",
                "publishDate": "2020-05-24T12:40:02.693Z"
            },
            {
                "id": "60d2234f67d0d8992e611875",
                "message": "🤔🤔🤔🤔🤔 Impressive pic",
                "owner": {
                    "id": "60d0fe4f5311236168a10a22",
                    "title": "mr",
                    "firstName": "Nikolaj",
                    "lastName": "Larsen",
                    "picture": "https://randomuser.me/api/portraits/med/men/22.jpg"
                },
                "post": "60d21b2c67d0d8992e610c37",
                "publishDate": "2020-05-24T08:07:42.506Z"
            },
            {
                "id": "60d2239b67d0d8992e61194f",
                "message": "😊😊 Excellent post",
                "owner": {
                    "id": "60d0fe4f5311236168a109f2",
                    "title": "mr",
                    "firstName": "Albert",
                    "lastName": "Diez",
                    "picture": "https://randomuser.me/api/portraits/med/men/73.jpg"
                },
                "post": "60d21bb667d0d8992e610dcc",
                "publishDate": "2020-05-24T02:08:38.321Z"
            },
            {
                "id": "60d2233267d0d8992e611823",
                "message": "Wonderful pic!",
                "owner": {
                    "id": "60d0fe4f5311236168a109eb",
                    "title": "ms",
                    "firstName": "Nella",
                    "lastName": "Koivisto",
                    "picture": "https://randomuser.me/api/portraits/med/women/77.jpg"
                },
                "post": "60d21af967d0d8992e610ba3",
                "publishDate": "2020-05-23T17:17:53.854Z"
            },
            {
                "id": "60d2238667d0d8992e611912",
                "message": "Cool photo",
                "owner": {
                    "id": "60d0fe4f5311236168a10a1e",
                    "title": "mr",
                    "firstName": "Niklas",
                    "lastName": "Baltzersen",
                    "picture": "https://randomuser.me/api/portraits/med/men/2.jpg"
                },
                "post": "60d21af667d0d8992e610b98",
                "publishDate": "2020-05-23T16:45:09.912Z"
            },
            {
                "id": "60d2230f67d0d8992e6117b9",
                "message": "😸😸😸😸😸 Ideal picture!",
                "owner": {
                    "id": "60d0fe4f5311236168a10a20",
                    "title": "mr",
                    "firstName": "Mem",
                    "lastName": "Rocha",
                    "picture": "https://randomuser.me/api/portraits/med/men/59.jpg"
                },
                "post": "60d21af667d0d8992e610b98",
                "publishDate": "2020-05-23T06:40:40.688Z"
            },
            {
                "id": "60d2252f67d0d8992e611aa8",
                "message": "Impressive shot",
                "owner": {
                    "id": "60d0fe4f5311236168a109dd",
                    "title": "mr",
                    "firstName": "Miguel",
                    "lastName": "Lima",
                    "picture": "https://randomuser.me/api/portraits/med/men/31.jpg"
                },
                "post": "60d21b2267d0d8992e610c1b",
                "publishDate": "2020-05-23T02:48:31.080Z"
            },
            {
                "id": "60d223a567d0d8992e61196a",
                "message": "😆😆😆😆😆 Ideal image",
                "owner": {
                    "id": "60d0fe4f5311236168a10a27",
                    "title": "mr",
                    "firstName": "Tomothy",
                    "lastName": "Hawkins",
                    "picture": "https://randomuser.me/api/portraits/med/men/48.jpg"
                },
                "post": "60d21be167d0d8992e610e4f",
                "publishDate": "2020-05-22T23:47:26.438Z"
            },
            {
                "id": "60d2233d67d0d8992e611840",
                "message": "😘😘🤗🤗🤗 Exciting photo",
                "owner": {
                    "id": "60d0fe4f5311236168a10a18",
                    "title": "mr",
                    "firstName": "Jeremy",
                    "lastName": "Morin",
                    "picture": "https://randomuser.me/api/portraits/med/men/60.jpg"
                },
                "post": "60d21b2d67d0d8992e610c3a",
                "publishDate": "2020-05-22T19:19:29.180Z"
            },
            {
                "id": "60d2238567d0d8992e61190f",
                "message": "Impressive picture",
                "owner": {
                    "id": "60d0fe4f5311236168a109ec",
                    "title": "mr",
                    "firstName": "Lucas",
                    "lastName": "Larsen",
                    "picture": "https://randomuser.me/api/portraits/med/men/50.jpg"
                },
                "post": "60d21bfc67d0d8992e610ea5",
                "publishDate": "2020-05-22T18:53:22.794Z"
            },
            {
                "id": "60d2250567d0d8992e611a1e",
                "message": "Excellent post!!!",
                "owner": {
                    "id": "60d0fe4f5311236168a10a16",
                    "title": "mr",
                    "firstName": "Sergio",
                    "lastName": "Ferrer",
                    "picture": "https://randomuser.me/api/portraits/med/men/29.jpg"
                },
                "post": "60d21ae867d0d8992e610b70",
                "publishDate": "2020-05-22T13:21:56.710Z"
            },
            {
                "id": "60d2238367d0d8992e611909",
                "message": "Breathtaking post!",
                "owner": {
                    "id": "60d0fe4f5311236168a10a27",
                    "title": "mr",
                    "firstName": "Tomothy",
                    "lastName": "Hawkins",
                    "picture": "https://randomuser.me/api/portraits/med/men/48.jpg"
                },
                "post": "60d21ae467d0d8992e610b66",
                "publishDate": "2020-05-22T08:49:08.277Z"
            },
            {
                "id": "60d2239567d0d8992e61193c",
                "message": "Cool shot",
                "owner": {
                    "id": "60d0fe4f5311236168a10a25",
                    "title": "ms",
                    "firstName": "Kitty",
                    "lastName": "Steward",
                    "picture": "https://randomuser.me/api/portraits/med/women/78.jpg"
                },
                "post": "60d21bd067d0d8992e610e1a",
                "publishDate": "2020-05-22T07:20:31.141Z"
            },
            {
                "id": "60d2231b67d0d8992e6117dd",
                "message": "😌😌😌😌 Perfect photo",
                "owner": {
                    "id": "60d0fe4f5311236168a10a14",
                    "title": "mr",
                    "firstName": "Cameron",
                    "lastName": "Mendoza",
                    "picture": "https://randomuser.me/api/portraits/med/men/95.jpg"
                },
                "post": "60d21bf367d0d8992e610e8a",
                "publishDate": "2020-05-21T21:03:02.341Z"
            },
            {
                "id": "60d2232e67d0d8992e611817",
                "message": "Wonderful photo",
                "owner": {
                    "id": "60d0fe4f5311236168a10a09",
                    "title": "miss",
                    "firstName": "Clea",
                    "lastName": "Dubois",
                    "picture": "https://randomuser.me/api/portraits/med/women/11.jpg"
                },
                "post": "60d21b3967d0d8992e610c5e",
                "publishDate": "2020-05-21T07:58:48.020Z"
            },
            {
                "id": "60d2235f67d0d8992e6118a3",
                "message": "😺😺👍 Nice photo",
                "owner": {
                    "id": "60d0fe4f5311236168a10a03",
                    "title": "mr",
                    "firstName": "Andri",
                    "lastName": "Leclerc",
                    "picture": "https://randomuser.me/api/portraits/med/men/57.jpg"
                },
                "post": "60d21bd767d0d8992e610e2f",
                "publishDate": "2020-05-21T00:03:54.192Z"
            },
            {
                "id": "60d2250c67d0d8992e611a34",
                "message": "Perfect shot!",
                "owner": {
                    "id": "60d0fe4f5311236168a10a02",
                    "title": "mr",
                    "firstName": "Cristobal",
                    "lastName": "Soler",
                    "picture": "https://randomuser.me/api/portraits/med/men/31.jpg"
                },
                "post": "60d21b7367d0d8992e610d0a",
                "publishDate": "2020-05-20T17:27:01.474Z"
            },
            {
                "id": "60d2252367d0d8992e611a83",
                "message": "👍 Handsome pic!",
                "owner": {
                    "id": "60d0fe4f5311236168a109f6",
                    "title": "miss",
                    "firstName": "Madison",
                    "lastName": "Ambrose",
                    "picture": "https://randomuser.me/api/portraits/med/women/15.jpg"
                },
                "post": "60d21b2267d0d8992e610c1b",
                "publishDate": "2020-05-19T23:35:25.549Z"
            },
            {
                "id": "60d2236b67d0d8992e6118c4",
                "message": "😊😊😊😊 Pretty pic",
                "owner": {
                    "id": "60d0fe4f5311236168a109fb",
                    "title": "mr",
                    "firstName": "Sohan",
                    "lastName": "Pierre",
                    "picture": "https://randomuser.me/api/portraits/med/men/77.jpg"
                },
                "post": "60d21ba367d0d8992e610d94",
                "publishDate": "2020-05-19T22:07:50.370Z"
            }
     
]
    const DATA = [
        {
            "id": "60d21b4667d0d8992e610c85",
            "image": "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
            "likes": 43,
            "tags": [
                "animal",
                "dog",
                "golden retriever"
            ],
            "text": "adult Labrador retriever",
            "publishDate": "2020-05-24T14:53:17.598Z",
            "owner": {
                "id": "60d0fe4f5311236168a109ca",
                "title": "ms",
                "firstName": "Sara",
                "lastName": "Andersen",
                "picture": "https://randomuser.me/api/portraits/women/58.jpg"
            }
        },
        {
            "id": "60d21b4967d0d8992e610c90",
            "image": "https://img.dummyapi.io/photo-1510414696678-2415ad8474aa.jpg",
            "likes": 31,
            "tags": [
                "snow",
                "ice",
                "mountain"
            ],
            "text": "ice caves in the wild landscape photo of ice near ...",
            "publishDate": "2020-05-24T07:44:17.738Z",
            "owner": {
                "id": "60d0fe4f5311236168a10a0b",
                "title": "miss",
                "firstName": "Margarita",
                "lastName": "Vicente",
                "picture": "https://randomuser.me/api/portraits/med/women/5.jpg"
            }
        },
        {
            "id": "60d21b8667d0d8992e610d3f",
            "image": "https://img.dummyapi.io/photo-1515376721779-7db6951da88d.jpg",
            "likes": 16,
            "tags": [
                "dog",
                "pet",
                "canine"
            ],
            "text": "@adventure.yuki frozen grass short-coated black do...",
            "publishDate": "2020-05-24T05:44:55.297Z",
            "owner": {
                "id": "60d0fe4f5311236168a109ed",
                "title": "miss",
                "firstName": "Kayla",
                "lastName": "Bredesen",
                "picture": "https://randomuser.me/api/portraits/med/women/13.jpg"
            }
        },
        {
            "id": "60d21b3a67d0d8992e610c60",
            "image": "https://img.dummyapi.io/photo-1581804928342-4e3405e39c91.jpg",
            "likes": 7,
            "tags": [
                "canine",
                "pet",
                "mammal"
            ],
            "text": "Hiking with my dog in the woods. black labrador re...",
            "publishDate": "2020-05-23T22:56:11.424Z",
            "owner": {
                "id": "60d0fe4f5311236168a109d5",
                "title": "mrs",
                "firstName": "Sibylle",
                "lastName": "Leibold",
                "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
            }
        },
        {
            "id": "60d21bf967d0d8992e610e9b",
            "image": "https://img.dummyapi.io/photo-1574457547512-5b1646994eea.jpg",
            "likes": 28,
            "tags": [
                "dog",
                "human",
                "animal"
            ],
            "text": "Two boys hug their dogs in a leaf pile in the fall...",
            "publishDate": "2020-05-23T18:52:32.613Z",
            "owner": {
                "id": "60d0fe4f5311236168a109f7",
                "title": "mrs",
                "firstName": "Jolanda",
                "lastName": "Lacroix",
                "picture": "https://randomuser.me/api/portraits/med/women/32.jpg"
            }
        },
        {
            "id": "60d21b7d67d0d8992e610d25",
            "image": "https://img.dummyapi.io/photo-1498534928137-473daa67f5c4.jpg",
            "likes": 18,
            "tags": [
                "dog",
                "animal",
                "pet"
            ],
            "text": "Bone salt and pepper schnauzer puppy",
            "publishDate": "2020-05-23T14:42:22.808Z",
            "owner": {
                "id": "60d0fe4f5311236168a109e4",
                "title": "mr",
                "firstName": "Pwry",
                "lastName": "Shylyrd",
                "picture": "https://randomuser.me/api/portraits/med/men/37.jpg"
            }
        },
        {
            "id": "60d21bd767d0d8992e610e31",
            "image": "https://img.dummyapi.io/photo-1576707064479-3139e7e8aace.jpg",
            "likes": 19,
            "tags": [
                "animal",
                "canine",
                "dog"
            ],
            "text": "Sleeping dogs lie two dogs lying on black textile",
            "publishDate": "2020-05-23T12:55:22.576Z",
            "owner": {
                "id": "60d0fe4f5311236168a10a0f",
                "title": "mr",
                "firstName": "Kaya",
                "lastName": "Basoglu",
                "picture": "https://randomuser.me/api/portraits/med/men/59.jpg"
            }
        },
        {
            "id": "60d21baa67d0d8992e610da7",
            "image": "https://img.dummyapi.io/photo-1500879747858-bb1845b61beb.jpg",
            "likes": 242,
            "tags": [
                "dog",
                "animal",
                "golden retriever"
            ],
            "text": "Dog in a forest at sunset dog in forest with sun r...",
            "publishDate": "2020-05-22T22:27:12.912Z",
            "owner": {
                "id": "60d0fe4f5311236168a10a29",
                "title": "ms",
                "firstName": "Vanessa",
                "lastName": "Ramos",
                "picture": "https://randomuser.me/api/portraits/med/women/33.jpg"
            }
        },
        {
            "id": "60d21af967d0d8992e610ba1",
            "image": "https://img.dummyapi.io/photo-1568572933382-74d440642117.jpg",
            "likes": 79,
            "tags": [
                "dog",
                "animal",
                "husky"
            ],
            "text": "black and white Husky",
            "publishDate": "2020-05-22T20:05:03.653Z",
            "owner": {
                "id": "60d0fe4f5311236168a109e4",
                "title": "mr",
                "firstName": "Pwry",
                "lastName": "Shylyrd",
                "picture": "https://randomuser.me/api/portraits/med/men/37.jpg"
            }
        },
        {
            "id": "60d21aeb67d0d8992e610b79",
            "image": "https://img.dummyapi.io/photo-1579562243430-4732bcb09d91.jpg",
            "likes": 17,
            "tags": [
                "dog",
                "pet",
                "animal"
            ],
            "text": "Milo durmiendo después de un largo día de jugar en...",
            "publishDate": "2020-05-22T07:50:38.093Z",
            "owner": {
                "id": "60d0fe4f5311236168a109ce",
                "title": "mr",
                "firstName": "Rudi",
                "lastName": "Droste",
                "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"
            }
        },
        {
            "id": "60d21bad67d0d8992e610daf",
            "image": "https://img.dummyapi.io/photo-1568480541687-16c2f73eea4c.jpg",
            "likes": 12,
            "tags": [
                "dog",
                "beach",
                "shoreline"
            ],
            "text": "Gratitude short-coated tan dog on seashore",
            "publishDate": "2020-05-22T06:33:02.593Z",
            "owner": {
                "id": "60d0fe4f5311236168a109dd",
                "title": "mr",
                "firstName": "Miguel",
                "lastName": "Lima",
                "picture": "https://randomuser.me/api/portraits/med/men/31.jpg"
            }
        },
        {
            "id": "60d21bee67d0d8992e610e79",
            "image": "https://img.dummyapi.io/photo-1517884467367-ac2e21e46d0b.jpg",
            "likes": 43,
            "tags": [
                "pet",
                "canine",
                "grey"
            ],
            "text": "@adventure.yuki peekaboo adult short-coated black ...",
            "publishDate": "2020-05-22T03:10:54.820Z",
            "owner": {
                "id": "60d0fe4f5311236168a109e6",
                "title": "miss",
                "firstName": "Milla",
                "lastName": "Pollari",
                "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
            }
        },
        {
            "id": "60d21bd267d0d8992e610e21",
            "image": "https://img.dummyapi.io/photo-1548658146-f142deadf8f7.jpg",
            "likes": 92,
            "tags": [
                "dog",
                "grey",
                "puppy"
            ],
            "text": "front view of black and white puppy sitting on bro...",
            "publishDate": "2020-05-21T22:15:26.266Z",
            "owner": {
                "id": "60d0fe4f5311236168a10a12",
                "title": "mr",
                "firstName": "Kenneth",
                "lastName": "Carter",
                "picture": "https://randomuser.me/api/portraits/med/men/40.jpg"
            }
        },
        {
            "id": "60d21b1a67d0d8992e610c05",
            "image": "https://img.dummyapi.io/photo-1535008652995-e95986556e32.jpg",
            "likes": 15,
            "tags": [
                "human",
                "ocean",
                "nature"
            ],
            "text": "Random man walking with his dogs man and dogs on t...",
            "publishDate": "2020-05-21T15:53:26.275Z",
            "owner": {
                "id": "60d0fe4f5311236168a109e7",
                "title": "mr",
                "firstName": "Joey",
                "lastName": "Oliver",
                "picture": "https://randomuser.me/api/portraits/med/men/61.jpg"
            }
        },
        {
            "id": "60d21be267d0d8992e610e52",
            "image": "https://img.dummyapi.io/photo-1580734075803-ac9cdb54fb03.jpg",
            "likes": 3,
            "tags": [
                "dog",
                "canine",
                "animal"
            ],
            "text": "Majestic looking dog on a lake white and brown sho...",
            "publishDate": "2020-05-21T15:15:02.703Z",
            "owner": {
                "id": "60d0fe4f5311236168a109e3",
                "title": "mr",
                "firstName": "Vetle",
                "lastName": "Aasland",
                "picture": "https://randomuser.me/api/portraits/med/men/97.jpg"
            }
        },
        {
            "id": "60d21b3667d0d8992e610c56",
            "image": "https://img.dummyapi.io/photo-1558556249-076e42967a24.jpg",
            "likes": 27,
            "tags": [
                "dog",
                "animal",
                "canine"
            ],
            "text": "two puppies next to each other",
            "publishDate": "2020-05-21T07:03:58.248Z",
            "owner": {
                "id": "60d0fe4f5311236168a10a1a",
                "title": "mr",
                "firstName": "Vaino",
                "lastName": "Sakala",
                "picture": "https://randomuser.me/api/portraits/med/men/56.jpg"
            }
        },
        {
            "id": "60d21b0767d0d8992e610bcf",
            "image": "https://img.dummyapi.io/photo-1556526588-a0bd9b5a42c3.jpg",
            "likes": 54,
            "tags": [
                "canine",
                "dog",
                "pet"
            ],
            "text": "two white dogs",
            "publishDate": "2020-05-21T02:10:33.421Z",
            "owner": {
                "id": "60d0fe4f5311236168a109fa",
                "title": "ms",
                "firstName": "Ann",
                "lastName": "Mason",
                "picture": "https://randomuser.me/api/portraits/med/women/18.jpg"
            }
        },
        {
            "id": "60d21afd67d0d8992e610bad",
            "image": "https://img.dummyapi.io/photo-1575495679620-2ff225c75d5a.jpg",
            "likes": 20,
            "tags": [
                "pet",
                "animal",
                "mammal"
            ],
            "text": "A picture of my golden doodle, Yogi Bear white dog",
            "publishDate": "2020-05-20T21:49:33.321Z",
            "owner": {
                "id": "60d0fe4f5311236168a10a2c",
                "title": "mr",
                "firstName": "Toralf",
                "lastName": "Streicher",
                "picture": "https://randomuser.me/api/portraits/med/men/80.jpg"
            }
        },
        {
            "id": "60d21b0467d0d8992e610bc5",
            "image": "https://img.dummyapi.io/photo-1549937334-e94f33e69787.jpg",
            "likes": 5,
            "tags": [
                "dog",
                "pet",
                "mammal"
            ],
            "text": "long-coated brown dog",
            "publishDate": "2020-05-20T21:00:40.371Z",
            "owner": {
                "id": "60d0fe4f5311236168a10a0d",
                "title": "mr",
                "firstName": "Lyam",
                "lastName": "Morin",
                "picture": "https://randomuser.me/api/portraits/med/men/95.jpg"
            }
        },
        {
            "id": "60d21bf367d0d8992e610e88",
            "image": "https://img.dummyapi.io/photo-1564849444446-f876dcef378e.jpg",
            "likes": 40,
            "tags": [
                "plant",
                "mammal",
                "pet"
            ],
            "text": "A feral cat short-fur gray and orange cat on green...",
            "publishDate": "2020-05-20T18:51:23.478Z",
            "owner": {
                "id": "60d0fe4f5311236168a109f4",
                "title": "mr",
                "firstName": "Benjamin",
                "lastName": "Holland",
                "picture": "https://randomuser.me/api/portraits/med/men/58.jpg"
            }
        }
    ]
    const renderItem = ({item}) => (
        <ListItem
        //   onPress={() => createChatList(item)}
          bottomDivider
          containerStyle={styles.listStyle}>
          <Avatar
            source={{uri: item.image}}
            rounded
            title={item.owner.firstName}
            size="medium"
          />
          <ListItem.Content>
          {[item.owner].map((news, i)=>(
    
    <View style={{alignItems:'center',justifyContent:"space-around",flexDirection:'row'}} key={i}>
     <View style={{marginRight:5}}>
     <Text>{news.firstName}</Text>
     </View>
      
       <View style={{marginRight:10}}>
       <Text>{news.lastName}</Text>
       </View>
     
    </View>
  )
)}
            <ListItem.Title style={{fontFamily: FONTS.Medium, fontSize: 14}}>
              {/* {item.text} */}
            </ListItem.Title>
            <ListItem.Subtitle
              style={{fontFamily: FONTS.Regular, fontSize: 12,}}
              numberOfLines={1}>
              {item.text}
             
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text>{item.image}</Text>
    <Text>{item.publishDate}</Text>
    <Text>{item.text}</Text>
  </TouchableOpacity>
);
export function HomeScreen(props: any) {

// const HomeScreen = (props:any) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem1 = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#fffafa" : "#f5fffa";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

// export default HomeScreen;