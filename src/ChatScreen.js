import React, { Component, useRef } from 'react'
import {
    FlatList,
    View, Text, SafeAreaView, StatusBar, ImageBackground, Image, TouchableOpacity,
    TextInput, BackHandler, Alert, Keyboard
} from 'react-native'

import {
    config, msgProvider, localStorage, apifuntion, msgText, msgTitle, consolepro,
    Lang_chg, Font, Colors, mobileH, mobileW, localimag, notification
} from './Provider/utilslib/Utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';


export default class ChatScreen extends Component {
    _didFocusSubscription;
    _willBlurSubscription;
    constructor(props) {
        super(props)
        this.state = {
            chatmsg:''

        }

    }
    componentDidMount() {

        const { navigation } = this.props;
        this.focusListener = navigation.addListener('focus', () => {

        });

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
                        height: mobileH * 14 / 100,
                        paddingHorizontal: mobileH * 3 / 100,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {

                            this.props.navigation.navigate('Message')
                        }}
                        style={{

                            width: mobileW * 8 / 100,
                            height: (mobileH * 8) / 100,
                            justifyContent: 'center'
                        }}>
                        <Image
                            style={{

                                height: mobileW * 8 / 100,
                                width: mobileW * 8 / 100,
                                resizeMode: 'contain'
                            }}
                            source={localimag.whitebackIcon}
                        ></Image>
                    </TouchableOpacity>
                    <View>
                        <Text style={{

                            textAlign: 'center',
                            color: Colors.whiteColor,
                            fontFamily: Font.FontMedium,
                            fontSize: mobileW * 4.5 / 100,

                        }}>{'Hanif Adamu'}</Text>
                        <View style={{
                            marginVertical: mobileH * 1 / 100,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            width: mobileW * 22 / 100,
                            borderRadius: mobileW * 2 / 100,
                            backgroundColor: Colors.whiteColor,
                            height: mobileH * 3.5 / 100
                        }}>
                            <View style={{
                                width: mobileW * 2 / 100,
                                height: mobileW * 2 / 100,
                                backgroundColor: Colors.greenColor,
                                borderRadius: mobileW * 1 / 100,
                                marginRight: mobileW * 1 / 100
                            }}>

                            </View>
                            <Text style={{

                                textAlign: 'center',
                                color: Colors.greenColor,
                                fontFamily: Font.FontMedium,
                                fontSize: mobileW * 3.2 / 100,

                            }}>{"Online"}</Text>
                        </View>

                    </View>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {

                            this.props.navigation.navigate("VideoCall")
                        }}
                        style={{

                            width: mobileW * 8 / 100,
                            height: (mobileH * 10) / 100,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Image
                            style={{

                                height: mobileW * 8 / 100,
                                width: mobileW * 8 / 100,
                                resizeMode: 'contain'
                            }}
                            source={localimag.videoCallIcon}
                        ></Image>
                    </TouchableOpacity>

                </LinearGradient>
                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        width: '100%',
                        paddingBottom: mobileH * 10 / 100,
                        alignItems: 'center',

                        backgroundColor: Colors.whiteColor
                    }}
                    showsVerticalScrollIndicator={false}>
                    <View style={{
                        marginTop: mobileH * 2 / 100,
                        borderRadius: mobileW * 1 / 100,
                        backgroundColor: Colors.hobby_bg,
                        width: mobileW * 90 / 100,
                        alignItems: 'center',
                        height: mobileH * 6 / 100,
                        justifyContent: 'center'
                    }}>
                        <Text style={{

                            textAlign: 'center',
                            color: Colors.today_txt_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 3.8 / 100,

                        }}>{"Today"}</Text>
                    </View>

                    <View style={{
                        marginTop: mobileH * 5 / 100,

                        width: mobileW * 90 / 100,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: "flex-end"
                    }}>
                        <View style={{
                            marginTop: mobileH * 2 / 100,
                            alignSelf: 'flex-end',
                            borderBottomLeftRadius: mobileW * 2 / 100,
                            borderBottomRightRadius: mobileW * 2 / 100,
                            borderTopLeftRadius: mobileW * 2 / 100,
                            paddingVertical: mobileH * 1.5 / 100,
                            paddingHorizontal: mobileW * 3 / 100,
                            backgroundColor: Colors.theme_color3,
                            marginHorizontal: mobileW * 2 / 100,

                        }}>
                            <Text style={{

                                textAlign: 'center',
                                color: Colors.whiteColor,
                                fontFamily: Font.FontRegular,
                                fontSize: mobileW * 3.8 / 100,

                            }}>{"Hello Anif!"}</Text>
                        </View>
                        <Image
                            source={localimag.girlImage}
                            style={{
                                bottom: mobileH * 2 / 100,
                                borderRadius: mobileW * 5 / 100,
                                width: mobileW * 10 / 100,
                                height: mobileW * 10 / 100,
                            }}>


                        </Image>
                    </View>
                    <View style={{
                        marginTop: mobileH * 2 / 100,

                        width: mobileW * 90 / 100,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: "flex-end"
                    }}>
                        <View style={{
                            marginTop: mobileH * 2 / 100,
                            alignSelf: 'flex-end',
                            borderBottomLeftRadius: mobileW * 2 / 100,
                            borderBottomRightRadius: mobileW * 2 / 100,
                            borderTopLeftRadius: mobileW * 2 / 100,
                            paddingVertical: mobileH * 1.5 / 100,
                            paddingHorizontal: mobileW * 3 / 100,
                            backgroundColor: Colors.theme_color4,
                            marginHorizontal: mobileW * 2 / 100,

                        }}>
                            <Text style={{

                                textAlign: 'center',
                                color: Colors.whiteColor,
                                fontFamily: Font.FontRegular,
                                fontSize: mobileW * 4 / 100,

                            }}>{"How are you?"}</Text>

                        </View>
                        <Image
                            source={{}}
                            style={{
                                bottom: mobileH * 2 / 100,
                                borderRadius: mobileW * 5 / 100,
                                width: mobileW * 10 / 100,
                                height: mobileW * 10 / 100,
                            }}>


                        </Image>
                    </View>
                    <Text style={{
                        alignSelf: 'flex-end',
                        marginTop: mobileH * 1 / 100,
                        marginRight: mobileW * 17 / 100,
                        color: Colors.black_color,
                        fontFamily: Font.FontSemiBold,
                        fontSize: mobileW * 2.8 / 100,

                    }}>{"07:45 AM"}</Text>




                    <View style={{
                        marginTop: mobileH * 2 / 100,
                        width: mobileW * 90 / 100,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: "flex-start"
                    }}>
                        <Image
                            source={require('./Icons/image6.png')}
                            style={{
                                bottom: mobileH * 2 / 100,
                                borderRadius: mobileW * 5 / 100,
                                width: mobileW * 10 / 100,
                                height: mobileW * 10 / 100,
                            }}>


                        </Image>
                        <View style={{
                            marginTop: mobileH * 2 / 100,
                            alignSelf: 'flex-end',
                            borderBottomLeftRadius: mobileW * 2 / 100,
                            borderBottomRightRadius: mobileW * 2 / 100,
                            borderTopRightRadius: mobileW * 2 / 100,
                            paddingVertical: mobileH * 1.5 / 100,
                            paddingHorizontal: mobileW * 3 / 100,
                            backgroundColor: Colors.whiteColor,
                            marginHorizontal: mobileW * 2 / 100,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.43,
                            shadowRadius: 9.51,
                            backgroundColor: Colors.whiteColor,
                            borderRadius: (mobileW * 1) / 100,
                            elevation: 15,
                        }}>
                            <Text style={{

                                textAlign: 'center',
                                color: Colors.black_color,
                                fontFamily: Font.FontRegular,
                                fontSize: mobileW * 4 / 100,

                            }}>{"I am good! what about you"}</Text>

                        </View>

                    </View>
                    <Text style={{
                        alignSelf: 'flex-start',
                        marginTop: mobileH * 1 / 100,
                        marginLeft: mobileW * 17 / 100,
                        color: Colors.black_color,
                        fontFamily: Font.FontSemiBold,
                        fontSize: mobileW * 2.8 / 100,

                    }}>{"07:45 AM"}</Text>






                </KeyboardAwareScrollView>

                <View style={{
                    position: 'absolute',
                    width: mobileW,
                    bottom: 0,
                    marginTop: mobileH * 2 / 100,
                    alignSelf: 'flex-end',
                    borderRadius: mobileW * 2 / 100,
                    backgroundColor: Colors.whiteColor,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 7,
                    },
                    height:mobileH*7/100,
                    paddingHorizontal:mobileW*3/100,
                    shadowOpacity: 0.43,
                    shadowRadius: 9.51,
                    backgroundColor: Colors.whiteColor,
                    borderRadius: (mobileW * 1) / 100,
                    elevation: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:'space-between'
                }}>
                    <Image
                        source={localimag.PlusIcon}
                        style={{

                            borderRadius: mobileW * 5 / 100,
                            width: mobileW * 6 / 100,
                            height: mobileW * 6 / 100,
                        }}>


                    </Image>
                    <Image
                        source={localimag.VoiceIcon}
                        style={{

                            borderRadius: mobileW * 5 / 100,
                            width: mobileW * 6 / 100,
                            height: mobileW * 6 / 100,
                        }}>


                    </Image>
                    <TextInput
                        style={{
                            fontFamily: Font.FontSemiBold,
                            width: (mobileW * 60) / 100,
                            fontSize: (mobileW * 4) / 100,


                            color: Colors.black_color,
                            paddingLeft: 0,
                        }}
                        placeholderTextColor={Colors.black_color}
                        placeholder={Lang_chg.Type_your_message_here[config.language]}
                        keyboardType="email-address"
                        returnKeyLabel="done"
                        returnKeyType="done"
                        ref={input => {
                            this.mobilefield = input;
                        }}
                        onSubmitEditing={() => {
                            Keyboard.dismiss();
                        }}
                        onFocus={() => {
                            this.setState({ errorno: 0, activeinput: 1 });
                        }}
                        onChangeText={txt => {
                            this.setState({ chatmsg: txt });
                        }}
                        maxLength={100}
                        value={this.state.chatmsg}
                    />
                    

                    <Image
                        source={localimag.SendIcon}
                        style={{

                            borderRadius: mobileW * 5 / 100,
                            width: mobileW * 8 / 100,
                            height: mobileW * 8 / 100,
                        }}>


                    </Image>
                </View>
            </SafeAreaView>
        )
    }
}
