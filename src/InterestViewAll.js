import React, { Component, useRef } from 'react'
import { View, Text, SafeAreaView, StatusBar, ImageBackground, Image, TouchableOpacity, TextInput, BackHandler, Alert, Keyboard } from 'react-native'

import { config, msgProvider, localStorage, apifuntion, msgText, msgTitle, consolepro, Lang_chg, Font, Colors, mobileH, mobileW, localimag, notification } from './Provider/utilslib/Utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
export default class IneterestViewAll extends Component {
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
                
            ]
        }
    }
    componentDidMount() {
        consolepro.consolelog('Iam Hobby page ')
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
                            
                            width: mobileW * 20 / 100,
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
                       
                    }}>{Lang_chg.Interest_txt[config.language]}</Text>
                    
                    <View style={{
                                flexDirection: 'row', alignItems: 'center',
                                justifyContent: 'space-between',
                                width: mobileW * 20 / 100
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => {

                                      
                                    }}
                                    style={{

                                        width: mobileW * 8 / 100,
                                        height: (mobileH * 10) / 100,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Image
                                        style={{

                                            height: mobileW * 9 / 100,
                                        width: mobileW * 9 / 100,
                                            resizeMode: 'contain'
                                        }}
                                        source={localimag.PlusGradientIcon}
                                    ></Image>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => {
                                    }}
                                    style={{

                                        height: mobileW * 9 / 100,
                                        width: mobileW * 9 / 100,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Image
                                        style={{

                                            height: mobileW * 9 / 100,
                                            width: mobileW * 9 / 100,
                                            resizeMode: 'contain'
                                        }}
                                        source={localimag.EditGradientIcon}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                    </View>
                    {/* .....................Text input............... */}


                    <View style={{ width: '90%', flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', alignItems: 'center', marginTop: mobileW * 5 / 100 }}>
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
                                                borderWidth: mobileW * 0.2 / 100,
                                            }, { flexDirection: 'row', borderColor: Colors.theme_color4 }]}>
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
                
            </SafeAreaView>
        )
    }
}
