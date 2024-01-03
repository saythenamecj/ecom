import {StyleSheet, Platform, StatusBar} from 'react-native'

export const colors = {

    color1 : '#222831',
    color2 : '#393E46',
    color3 : '#AADDB5',
    color4 : '#EEEEEE',
    color5 : '#99c6a2',
    color7 : '#d3d3d3',
}

export const colorsdark = {
    color1 : '#EEEEEE',
    color2 : '#AADDB5',
    color3 : '#393E46',
    color4 : '#222831',
}

export const defaultStyle = StyleSheet.create({

    padding:15,
    paddingtop:Platform.OS==="android" ? StatusBar.currentHeight : 0,
    flex:1,
    backgroundColor: colors.color4,

})

export const inputStyling = StyleSheet.create({

    height: 50,
    backgroundColor: colors.color4,
    marginVertical:10,
    marginHorizontal:20,
    
    

})

export const bsStyle = StyleSheet.create({

    shadowColor: "#000000",
    shadowOffset: {
    width: 0,
    height: 7,
},
shadowOpacity:  0.21,
shadowRadius: 7.68,
elevation: 10
})

export const pmiconOptions = StyleSheet.create({ 
    size: 20,
   
      borderRadius: 5,
      backgroundColor: colors.color5,
      height: 25,
      width: 25,
    
  });