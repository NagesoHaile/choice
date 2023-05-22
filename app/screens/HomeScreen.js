import React from 'react'
import { View,Text,Image,StyleSheet,ScrollView,ImageBackground} from 'react-native';

function SmallerContent(){
    return(
        <View style={styles.gridContentContainer}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <View style={{padding:10,width:"50%",justifyContent:"center",alignItems:"center"}}>
          <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>ChatGPT is disrupting the world. It actually disrupts many industry</Text>
          </View>
           <View style={{width:"50%",}}>
           <Image source={require('../../assets/kid.jpg')}  
              style={{
                 height: "80%",
                }} resizeMode='cover' />
           </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",
        
      alignItems:"center",
      paddingHorizontal:20}}>
          <View 
          style={{
          flexDirection:"row",
          alignItems:"center",
          paddingHorizontal:10,
          
       }}>
      
            <View style={{
              width:30,
              height:30,
              backgroundColor:"white",
              borderRadius:15,
              marginHorizontal:5,
            }}>
              
            </View>
            <Text style={{color:"white"}}>Choice</Text>
     
         
        </View>
        <Text style={{color:"white"}}>4 hours ago</Text>
        </View>
   </View> 
    )
}

function WiderContentContainer(){
    return(
        <View style={styles.widerContent}>
        <View style={{
           flex:1,
           width:"100%",
           padding:0,
        }}>
          <Image source={require('../../assets/kid.jpg')}  
          style={{
           height:"80%", width:"100%"}} resizeMode='cover' />
        </View>
       <View style={{paddingVertical:10,}}>
        <View style={{
           //width:"100%",
           padding:20,
          }}>
           <Text style={{color:"white", fontSize:24,fontWeight:"bold"}}>Now a days, kids are getting more smarter than ever before.</Text>
           <Text style={{color:"white",}}>Now a days, kids are getting more smarter than ever befor. Now a days, kids are getting more smarter than ever before...</Text>
        </View>
        <View style={{
           flexDirection:"row",
           paddingHorizontal:20,
           alignItems:"center",
           justifyContent:"space-between",
        }}>
       <View style={{flexDirection:"row",
   alignItems:"center"}}>
           <View style={{
               width:30,
               height:30,
               borderRadius:15,
               backgroundColor: "white",
               justifyContent:"center",
               alignItems:"center",
               marginHorizontal:10,
           }}>
                
           </View>
           <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>choice</Text>
         </View>
         <Text style={{
           color:"white",
         }}>3 days ago</Text>
        </View>
   </View>
   </View>
    )
}

 function HomeScreen() {
  return (
 <ScrollView style={{padding:10, backgroundColor:"black" }}  >
    <Text style={{
        fontSize:20,
        textTransform:"uppercase",
        fontWeight:"bold",
        color:"white",
    }}>Latest news</Text>
 
   <WiderContentContainer />
   <SmallerContent />
   <SmallerContent />
   <SmallerContent />
   <WiderContentContainer />
   <SmallerContent />
   <SmallerContent />
   <SmallerContent />
    
   
 </ScrollView>
  )
}

const styles = StyleSheet.create({
    homescreen:{
      //flex:1,
      padding:10,
    },
    topContent:{
        //flex:0.5,
        backgroundColor:"#000"
    },
    widerContent:{
       
       backgroundColor:"#000",
       height: 400,
       borderColor:"grey",
       borderBottomWidth:0.5,
        marginVertical:3,
        paddingVertical:10,
        
    },
    row:{
        flexDirection: "row",
        justifyContent:"space-between",
        marginVertical:6,
      

    },
    rowContent:{
        width:"49%",
        height:200,
        backgroundColor:"grey",  
    },
    gridContentContainer: {
        marginVertical:2,
        backgroundColor: "black",
        width:"100%",
        height:160,
        borderColor:"grey",
        borderBottomWidth:0.5,
        
        
    },
    headerImage:{
        width: "100%",
        height: 100,
    }
})
export default HomeScreen;
