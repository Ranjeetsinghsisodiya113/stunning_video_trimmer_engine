import React, { Component, useRef } from 'react'
import {
    View, Text, SafeAreaView, StatusBar, ImageBackground, Image, TouchableOpacity,
    TextInput, BackHandler, Alert, Keyboard, StyleSheet
} from 'react-native'

import {
    config, msgProvider, localStorage, apifuntion, msgText, msgTitle, consolepro,
    Lang_chg, Font, Colors, mobileH, mobileW, localimag, notification
} from './Provider/utilslib/Utils';


export default class VideoCall extends Component {
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


    }


    render() {
        return (

            <ImageBackground
     
            source={localimag.VideoCallBG}
            
            style={styles.container}>
                 <StatusBar
                hidden={false}
                translucent={false}
                barStyle="light-content"
                networkActivityIndicatorVisible={true}
                backgroundColor={Colors.theme_color}
              />
              <Image
              source={require('./Icons/image6.png')}
              style={{
                borderRadius:mobileW*3/100,
                position:'absolute',
                top:mobileW*7/100,
                right:mobileW*5/100,
                width:mobileW*35/100,
                height:mobileW*45/100,
            }}
              >

              </Image>


              <View style={{
                position:'absolute',
                bottom:0,
paddingHorizontal:mobileW*5/100,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                width:mobileW,
                height:mobileH*12/100,
                backgroundColor:'#00000040'
              }}>
                <Image
                        source={localimag.videoMic}
                        style={{

                            borderRadius: mobileW * 5 / 100,
                            width: mobileW * 12 / 100,
                            height: mobileW * 12/ 100,
                        }}>


                    </Image>
                    <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={()=>{
                        this.props.navigation.navigate('ChatScreen')
                    }}
                    
                    >
                    <Image
                        source={localimag.videoCallCut}
                        style={{

                            borderRadius: mobileW * 5 / 100,
                            width: mobileW * 12 / 100,
                            height: mobileW * 12/ 100,
                        }}>


                    </Image>
                    </TouchableOpacity>
                    
                    <Image
                        source={localimag.videoPause}
                        style={{

                            borderRadius: mobileW * 5 / 100,
                            width: mobileW * 12 / 100,
                            height: mobileW * 12 / 100,
                        }}>


                    </Image>

              </View>
              
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
     
      backgroundColor: Colors.theme_color,
    },
    logo: {
      resizeMode: 'contain',
      width: mobileW,
    },
  });