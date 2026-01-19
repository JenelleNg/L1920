

// import React, { useState, useEffect } from 'react';
// import { FlatList, StatusBar, Text, TextInput, View, Image } from 'react-native';

// let originalData = [];

// const App = () => {
//     const [mydata, setMydata] = useState([]);

//     useEffect(() => {
//         const myurl = 'https://onlinecardappwebservice-o2ua.onrender.com/allcards';
//         fetch(myurl)
//             .then((response) => {
//                 return response.json();
//             })
//             .then((myJson) => {
//                 setMydata(myJson);
//                 originalData = myJson;
//             });
//     }, []);

//     const FilterData = (text) => {
//         if (text != '') {
//             let myFilteredData = originalData.filter((item) =>
//                 item.card_name.toLowerCase().includes(text.toLowerCase())
//                 //basically changing the search and card_name into all lower case so even if you have Uppercase in the search, it will convert into lowercase to find matching name.
//             );
//             setMydata(myFilteredData);
//         } else {
//             setMydata(originalData);
//         }
//     };

//     const renderItem = ({ item }) => {
//         return (
//             <View
//                 style={{
//                     borderWidth: 1,
//                     padding: 10,
//                     marginVertical: 5,
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     alignItems: 'center'
//                 }}
//             >
//                 <Text style={{ flex: 1, fontWeight: 'bold' }}> {item.card_name}</Text>

//                 <Image
//                     source={{ uri: item.card_pic }}
//                     style={{ width: 180, height: 210 }}
//                     resizeMode="contain"
//                 />
//             </View>
//         );
//     };
//     return (
//         <View style={{ padding: 10 }}>
//             <StatusBar />
//             <Text>Search:</Text>

//             <TextInput
//                 style={{ borderWidth: 1, marginBottom: 10 }}
//                 onChangeText={(text) => {
//                     FilterData(text);
//                 }}
//             />

//             <FlatList
//                 data={mydata}
//                 renderItem={renderItem}
//                 keyExtractor={(item, index) => index.toString()}
//             />
//         </View>
//     );
// };

export default App;
