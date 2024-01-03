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

  export const formHeading = {
    marginTop: 70,

    borderRadius: 7,
    backgroundColor: colors.color2,
    color: colors.color4,
    padding: 5,
  };

  export const inputOptions = {
    style: inputStyling,
    model: "outlined",
    activeOutlineColor: colors.color3,
  };

  export const formStyles = StyleSheet.create({
    LoginStyle: {
      fontSize: 25,
      fontWeight: "700",
      textAlign: "center",
      color: colors.color4,
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: colors.color2,
      color: colors.color4,
      borderRadius: 10,
      justifyContent: "center",
      elevation: 10,
    },
    forgettext: {
      color: colors.color4,
      marginHorizontal: 20,
      marginVertical: 10,
      alignSelf: "flex-end",
      fontWeight: "100",
    },
  
    btn: {
      backgroundColor: colors.color3,
      margin: 20,
      padding: 10,
    },
    or: {
      alignSelf: "center",
      fontSize: 20,
      fontWeight: "100",
      color: colors.color4,
    },
    link: {
      color: colors.color4,
      alignSelf: "center",
      fontSize: 18,
      textTransform: "uppercase",
      marginVertical: 10,
      marginHorizontal: 20,
    },
  });

  export const defaultAvatar = 'https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png'
