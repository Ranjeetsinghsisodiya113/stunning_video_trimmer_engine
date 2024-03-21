import React, { Component, useRef } from 'react'
import {
    View, Text, SafeAreaView, StatusBar, ImageBackground, Image, TouchableOpacity,
    TextInput, BackHandler, Alert, Keyboard, StyleSheet
} from 'react-native'

import {
    config, msgProvider, localStorage, apifuntion, msgText, msgTitle, consolepro,
    Lang_chg, Font, Colors, mobileH, mobileW, localimag, notification
} from './Provider/utilslib/Utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';

export default class ScanScreen extends Component {
    _didFocusSubscription;
    _willBlurSubscription;
    constructor(props) {
        super(props)
        this.state = {
            otpText: '',
            otp: '',
            user_id: 0,
            showbtn: true,

        }

    }
    componentDidMount() {
setTimeout(() => {
    this.props.navigation.navigate('FlightMingle',{scanStatus:true})
}, 1000);

    }


    render() {
        return (

            <ImageBackground
     
            source={localimag.ScanBG}
            
            style={styles.container}>
                 <StatusBar
                hidden={false}
                translucent={false}
                barStyle="light-content"
                networkActivityIndicatorVisible={true}
                backgroundColor={Colors.theme_color}
              />
              
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.theme_color,
    },
    logo: {
      resizeMode: 'contain',
      width: mobileW,
    },
  });