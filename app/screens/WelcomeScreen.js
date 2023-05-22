import React from 'react'
import { View,StyleSheet,Text, TouchableOpacity} from 'react-native';


 function WelcomeScreen({children, navigation}) {
  return (
    <View style={styles.screen}>
        <View style={styles.topContainer}>
         
         <View style={styles.welcomeMessageContainer}>
             <Text style={styles.brandName}>CHOICE</Text>
             <Text style={styles.welcomeMessage}>Discover and choose the stories based on your interest</Text>
         </View>
        </View>
        <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
                <Text style={styles.buttonTitle}>Get Started</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
     screen: {
        flex:1,
        paddingHorizontal:20,
        marginTop: 100,   
     },
     welcomeMessageContainer:{
        padding:30,
     },
     welcomeMessage: {
        textTransform:"uppercase",
        fontSize: 30,
        fontWeight:"bold",
        lineHeight:30,
        marginTop:100,  
     },
     topContainer:{
        flex:0.8,
        alignItems: "flex-start"
     },
     bottomContainer: {
        flex:0.2,
        alignItems:"center",
     },
     brandName:{
        letterSpacing:30,
        fontSize:24,  
     },
     button:{
        backgroundColor:'black',
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:8,
        width:"100%",
        alignItems:"center",
        justifyContent:"center", 
     },
     buttonTitle:{
        color:"white",
     }
})


export default WelcomeScreen;
