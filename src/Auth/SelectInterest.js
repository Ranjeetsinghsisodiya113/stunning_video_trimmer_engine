import React, { Component, useRef } from 'react'
import { View, Text, SafeAreaView, StatusBar, ImageBackground, Image, TouchableOpacity, TextInput, BackHandler, Alert, Keyboard } from 'react-native'

import { config, msgProvider, localStorage, apifuntion, msgText, msgTitle, consolepro, Lang_chg, Font, Colors, mobileH, mobileW, localimag, notification } from '../Provider/utilslib/Utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
export default class SelectInterest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            otpText: '',
            otp: '',
            user_id: 0,
            showbtn: true,
            sub_interest_arr: [
                { id: 0, title: 'Martial Arts', status: false },
                { id: 1, title: 'Boxing', status: false },
                { id: 2, title: 'Dancing', status: false },
                { id: 3, title: 'WeightLifting and BodyBiulding', status: false },
                { id: 4, title: 'Martial Arts', status: false },
                { id: 5, title: 'Making New Friends', status: false },
                { id: 6, title: 'Outdoor Activities', status: false },
                { id: 7, title: 'Sight Seeing', status: false },
                { id: 8, title: 'Making New Friends', status: false },
                { id: 9, title: 'Animals', status: false },
                { id: 10, title: 'Martial Arts', status: false },
                { id: 11, title: 'Martial Arts', status: false },
                { id: 12, title: 'Boxing', status: false },
                { id: 13, title: 'Dancing', status: false },
                { id: 14, title: 'WeightLifting and BodyBiulding', status: false },
                { id: 15, title: 'Martial Arts', status: false },
            ]
        }
    }
    componentDidMount() {
        consolepro.consolelog('Iam Interest page ')
    }


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


                <KeyboardAwareScrollView

                    showsVerticalScrollIndicator={false}>
                    <View
                    style={{
                        width:mobileW*90/100,
                        alignSelf:'center',
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-between'
                    }}
                    >

                    
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.goBack() }}
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
                            source={localimag.blackback}
                        ></Image>
                    </TouchableOpacity>
                    <Text style={{
                        color: Colors.black_color,
                        fontFamily: Font.FontBold,
                        fontSize: mobileW * 5 / 100,
                       
                    }}>{Lang_chg.select_Interest_txt[config.language]}</Text>
                     <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('Home') }}>
                    <Text style={{
                       width: mobileW * 15 / 100,
                       textAlign:'right',
                        color: Colors.theme_color2,
                        fontFamily: Font.FontMedium,
                        fontSize: mobileW * 3.5 / 100,
                        textDecorationLine:'underline',
                    }}>{Lang_chg.skipTxt[config.language]}</Text>
                    </TouchableOpacity>
                    </View>
                    {/* .....................Text input............... */}


                    <View style={{ width: '90%', flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', alignItems: 'center', marginTop: mobileW * 2 / 100 }}>
                        {this.state.sub_interest_arr != 'NA' &&
                            <>
                                {this.state.sub_interest_arr.map((data, index1) => (
                                    <View style={{}}>
                                        <TouchableOpacity
                                        activeOpacity={1}
                                            onPress={() => {
                                               
                                            }}
                                            style={[{
                                                marginTop: mobileW * 2 / 100,
                                                marginRight: mobileW * 2 / 100,
                                                borderRadius: mobileW * 1 / 100,
                                                paddingVertical: mobileW * 1 / 100,
                                                paddingHorizontal: mobileW * 2 / 100,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderWidth: mobileW * 0.3 / 100,
                                            }, { flexDirection: 'row', borderColor: Colors.theme_color2 }]}>
                                            <Text style={{
                                                color: Colors.black_color,
                                                fontFamily: Font.FontMedium,
                                                fontSize: mobileW * 3.8 / 100,
                                                marginLeft: mobileW * 0.5 / 100
                                            }}>{data.title}</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </>
                        }
                    </View>











                </KeyboardAwareScrollView>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Pricing_Plan')
                        //this.Otpveryfication
                    }}
                    activeOpacity={0.7}
                    style={{
                        bottom: 0,
                        position: 'absolute',
                        width: (mobileW * 90) / 100,
                        alignSelf: 'center',
                        marginBottom: (mobileH * 2) / 100,
                    }}>
                    <LinearGradient
                        colors={[Colors.theme_color, Colors.theme_color2]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 0 }}
                        useAngle={true}
                        angle={90}
                        style={{
                            borderRadius: (mobileW * 3) / 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: (mobileH * 6.5) / 100,
                           
                        }}>
                        <Text
                            style={{
                                fontSize: (mobileW * 3.8) / 100,
                                color: Colors.whiteColor,
                                fontFamily: Font.FontSemiBold,
                            }}>
                            {Lang_chg.continue_txt[config.language]}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
