import React, { Component, useRef } from 'react'
import { View, Text, SafeAreaView, StatusBar, ImageBackground, Image, TouchableOpacity,
     TextInput, BackHandler, Alert, Keyboard } from 'react-native'

import {
    config, msgProvider, localStorage, apifuntion, msgText, msgTitle, consolepro,
    Lang_chg, Font, Colors, mobileH, mobileW, localimag, notification
} from './Provider/utilslib/Utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './Provider/Footer';
export default class Home extends Component {
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
        this._didFocusSubscription = props.navigation.addListener(
            'focus',
            payload =>
              BackHandler.addEventListener('hardwareBackPress', this.handleBackPress),
          );
    }
    componentDidMount() {
        this._willBlurSubscription = this.props.navigation.addListener(
            'blur',
            payload =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                this.handleBackPress,
              ),
          );
        consolepro.consolelog('Iam Home page ')
    }

    handleBackPress = () => {
        Alert.alert(
          Lang_chg.exitApp[config.language],
          Lang_chg.do_you_want_exit_txt[config.language],
          [
            {
              text: Lang_chg.no_txt[config.language],
              onPress: () => console.log(),
              style: 'Yes',
            },
            {
              text: Lang_chg.yes_txt[config.language],
              onPress: () => BackHandler.exitApp(),
            },
          ],
          {
            cancelable: false,
          },
        ); // works best when the goBack is async
        return true;
      };
    render() {
        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
                <StatusBar
                    hidden={false}
                    translucent={false}
                    barStyle="light-content"
                    networkActivityIndicatorVisible={true}
                    backgroundColor={Colors.theme_color}
                />
                {/* ........................Background...................... */}

                <LinearGradient
                    colors={[Colors.theme_color3, Colors.theme_color]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    useAngle={true}
                    angle={90}

                    style={{
                        borderBottomRightRadius: mobileW * 10 / 100,
                        borderBottomLeftRadius: mobileW * 10 / 100,
                        width: mobileW,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >


                    <View style={{
                        width: mobileW * 15 / 100
                    }}>

                    </View>
                    <Image
                        style={{

                            height: mobileW * 30 / 100,
                            width: mobileW * 30 / 100,
                            resizeMode: 'contain'
                        }}
                        source={localimag.welcomelogowhite}
                    ></Image>
                    <TouchableOpacity
                    activeOpacity={0.9}
                        onPress={() => {  }}
                        style={{

                            width: mobileW * 15 / 100,
                            height: (mobileH * 10) / 100,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Image
                            style={{

                                height: mobileW * 5 / 100,
                                width: mobileW * 5 / 100,
                                resizeMode: 'contain'
                            }}
                            source={localimag.notification}
                        ></Image>
                    </TouchableOpacity>
                </LinearGradient>
                <KeyboardAwareScrollView
                    contentContainerStyle={{ width: '100%',
                    paddingBottom:mobileH*15/100,
                    
                    backgroundColor: Colors.whiteColor }}
                    showsVerticalScrollIndicator={false}>

                    {/* .....................Text input............... */}

                    <Text style={{
                      marginTop:mobileH*2/100,
                       textAlign:'center',
                        color: Colors.black_color,
                        fontFamily: Font.FontMedium,
                        fontSize: mobileW * 5 / 100,
                        
                    }}>{Lang_chg.select_IngleMode_txt[config.language]}</Text>

                    <TouchableOpacity
                    activeOpacity={0.9}    
                    style={{marginVertical:mobileH*1/100,}}
                    onPress={()=>{
                    this.props.navigation.navigate('FlightMingle',{scanStatus:false})
                    }}>
                    <ImageBackground
                     imageStyle={{
                           
                     height: mobileH * 40 / 100,
                     width: mobileW * 100 / 100,
                     resizeMode: 'contain'
                 }}
                        style={{
                            marginVertical:mobileH*1.5/100,
                            height: mobileH * 40 / 100,
                            width: mobileW * 100 / 100,
                            resizeMode: 'contain'
                        }}
                        source={localimag.HomeFlightMingleImage}
                    >

                       <Text style={{
                        alignSelf:'center',
                        bottom:0,
                        marginBottom:mobileH*3/100,
                       position:'absolute',
                        textAlign:'center',
                         color: Colors.black_color,
                         fontFamily: Font.FontSemiBold,
                         fontSize: mobileW *4 / 100,
                       }}>
                        {Lang_chg.FlightMingle[config.language]}
                        </Text> 
                    </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                    activeOpacity={0.9}    
                    style={{marginVertical:mobileH*1/100,}}
                    onPress={()=>{
                    this.props.navigation.navigate('EventMingle')
                    }}>
                    <ImageBackground
                     imageStyle={{marginBottom:mobileH*2/100,
                           
                     height: mobileH * 40 / 100,
                     width: mobileW * 100 / 100,
                     resizeMode: 'contain'
                 }}
                        style={{
                            marginBottom:mobileH*2/100,
                            height: mobileH * 40 / 100,
                            width: mobileW * 100 / 100,
                            resizeMode: 'contain'
                        }}
                        source={localimag.HomeEventMingleImage}
                    >

                       <Text style={{
                        alignSelf:'center',
                        bottom:0,
                        marginBottom:mobileH*4/100,
                       position:'absolute',
                        textAlign:'center',
                         color: Colors.black_color,
                         fontFamily: Font.FontSemiBold,
                         fontSize: mobileW *4 / 100,
                       }}>
                        {Lang_chg.EventMingle[config.language]}
                        </Text> 
                    </ImageBackground>
</TouchableOpacity>

                 










                </KeyboardAwareScrollView>
                <Footer
        activepage="Home"
        usertype={1}
        footerpage={[
          {
            name: 'Home',
            image: localimag.FooterHomeDActive,
            activeimage: localimag.FooterHomeActive,
            countshow: 0,
            inbox_count: 0,
          },
          {
            name: 'Message',
            image: localimag.FooterMessagesDActive,
            activeimage: localimag.FooterMessagesActive,
            countshow: 0,
            inbox_count: 0,
          },
          {
            name: 'Favourite',
            image: localimag.FooterFavouriteDActive,
            activeimage: localimag.FooterFavouriteActive,
            countshow: 0,
            inbox_count: 0,
          },
          
          {
            name: 'Profile',
            image: localimag.FooterProfileDActive,
            activeimage: localimag.FooterProfileActive,
            countshow: 0,
            inbox_count: 0,
          },
        ]}
        navigation={this.props.navigation}
        imagestyle1={{
          width: (mobileW * 6) / 100,
          height: (mobileW * 6) / 100,
          backgroundColor: Colors.white_color,
          countcolor: Colors.white_color,
          countbackground: Colors.welcome_text_color,
        }}
        count_inbox={false}
      />

            </SafeAreaView>
        )
    }
}
