import React from 'react';
import { View,StyleSheet,FlatList,TouchableOpacity, Image,Dimensions,Text,ScrollView } from 'react-native';

const data = [
  {key:0,image: require('../../assets/kid.jpg'),category: "Technology"},
  {key:1,image: require('../../assets/kid.jpg'),category: "Educational"},
  {key:3,image: require('../../assets/kid.jpg'),category: "Science"},
  {key:4,image: require('../../assets/kid.jpg'),category: "Entertainment"},
  {key:5,image: require('../../assets/kid.jpg'),category: "Business"},
  
]

const numColumns = 2;
const itemWidth = Dimensions.get('window').width / numColumns; // calculate item base on device width

 function CategoryScreen() {

     const renderItem = ({item }) => (
      <TouchableOpacity style={styles.itemContainer} >
        <Image style={styles.itemImage} source={item.image} />
        <Text style={{
          color:"white",
          fontWeight:"bold",
          fontSize:20,
          position:"absolute",
          bottom:30,
          left:20,
      }}>#{item.category}</Text>
      </TouchableOpacity>
     )
  return (
    <View style={styles.container}>
        <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item)=> item.key}
        numColumns={numColumns}
        extraData={(item)=>item.category}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:5,
    backgroundColor:"black"
  },
  itemContainer:{
    position:"relative",
    width:itemWidth ,
    height:itemWidth ,
    margin:5,
    justifyContent:"center",
    alignItems:"center",

  },
  itemImage:{
    resizeMode:'cover',
    width:itemWidth,
    height:itemWidth,
  },
})
export default CategoryScreen;