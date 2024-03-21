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


export default class MyEvents extends Component {
    _didFocusSubscription;
    _willBlurSubscription;
    constructor(props) {
        super(props)
        this.state = {
            event_heading_status: 0,
            otpText: '',
            otp: '',
            user_id: 0,
            showbtn: true,
            myeventList: [
                { mens: 30, women: 40, title: 'Social Gathering', image: require('./Icons/Event1.png'), event_status: 0 },
                { mens: 50, women: 45, title: 'Birthday', image: require('./Icons/Event2.png'), event_status: 1 },


            ],
            joineventList: [
                { mens: 30, women: 40, title: 'Social Gathering', image: require('./Icons/Event1.png'), event_status: 0 },
                { mens: 50, women: 45, title: 'Birthday', image: require('./Icons/Event2.png'), event_status: 1 },


            ]

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

                            this.props.navigation.goBack()
                        }}
                        style={{

                            width: mobileW * 15 / 100,
                            height: (mobileH * 10) / 100,

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
                    <Text style={{

                        textAlign: 'center',
                        color: Colors.whiteColor,
                        fontFamily: Font.FontMedium,
                        fontSize: mobileW * 5.2 / 100,

                    }}>{Lang_chg.MyEvents[config.language]}</Text>

                    <View style={{

                        width: mobileW * 15 / 100
                    }}>


                    </View>
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
                        marginVertical: mobileH * 3 / 100,
                        width: mobileW * 100 / 100,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                this.setState({ event_heading_status: 0 })
                            }}
                            style={{
                                width: mobileW * 50 / 100,
                                height: mobileH * 6 / 100,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomColor: this.state.event_heading_status == 0 ? Colors.theme_color4 : Colors.whiteColor,
                                borderBottomWidth: mobileW * 0.5 / 100
                            }}
                        >
                            <Text style={{
                                textAlign: 'center',
                                color: this.state.event_heading_status == 0 ? Colors.theme_color4 : Colors.black_color,
                                fontFamily: Font.FontSemiBold,
                                fontSize: mobileW * 3.8 / 100,
                            }}>
                                {Lang_chg.MyEvents[config.language]}
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                this.setState({ event_heading_status: 1 })
                            }}
                            style={{
                                width: mobileW * 50 / 100,
                                height: mobileH * 6 / 100,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomColor: this.state.event_heading_status == 1 ? Colors.theme_color4 : Colors.whiteColor,
                                borderBottomWidth: mobileW * 0.5 / 100
                            }}
                        >

                            <Text style={{
                                textAlign: 'center',
                                color: this.state.event_heading_status == 1 ? Colors.theme_color4 : Colors.black_color,
                                fontFamily: Font.FontSemiBold,
                                fontSize: mobileW * 3.8 / 100,
                            }}>
                                {Lang_chg.JoinEvent[config.language]}
                            </Text>

                        </TouchableOpacity>

                    </View>

                    
                   {
this.state.event_heading_status==0?
                    <>
                    <TouchableOpacity
                        onPress={() => {

                            this.props.navigation.navigate("CreateEvent")
                        }}
                        activeOpacity={0.7}
                        style={{
                            width: (mobileW * 90) / 100,
                            alignSelf: 'center',
                            marginVertical: (mobileH * 2) / 100,
                        }}>
                        <LinearGradient
                            colors={[Colors.theme_color3, Colors.theme_color4]}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                            useAngle={true}
                            angle={90}
                            style={{
                                borderRadius: (mobileW * 3) / 100,
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: (mobileH * 6.5) / 100,
                                flexDirection: 'row',
                            }}>
                            <Image
                                style={{
                                    marginRight: mobileW * 2 / 100,
                                    height: mobileW * 5 / 100,
                                    width: mobileW * 5 / 100,
                                    resizeMode: 'contain'
                                }}
                                source={localimag.PlusIconWithWhiteBg}
                            ></Image>

                            <Text
                                style={{
                                    fontSize: (mobileW * 4) / 100,
                                    color:
                                        Colors.whiteColor,
                                    fontFamily: Font.FontSemiBold,
                                }}>
                                {Lang_chg.Create_event_txt[config.language]}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <View>
                        <FlatList
                            contentContainerStyle={{ padding: mobileH * 2 / 100 }}
                            numColumns={2}
                            data={this.state.myeventList}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => {
                                        this.props.navigation.navigate('EventMingleDetails')
                              }}
                                    style={[
                                        index >= 2 && index % 2 == 1 && {
                                            bottom: mobileH * (index / 2) / 100 + index
                                        },

                                        {
                                            marginRight: index % 2 == 0 ? mobileW * 3 / 100 : 0,
                                            marginBottom: mobileH * 2 / 100,
                                            borderRadius: mobileW * 3 / 100,
                                            paddingBottom: mobileH * 1 / 100,
                                            shadowColor: '#000',
                                            shadowOffset: {
                                                width: 0,
                                                height: 7,
                                            },
                                            shadowOpacity: 0.43,
                                            shadowRadius: 9.51,
                                            backgroundColor: Colors.whiteColor,
                                            height: index % 2 == 0 ? mobileH * 32 / 100 : mobileH * 30 / 100,

                                            elevation: 15,
                                        }]}>

                                    <ImageBackground

                                        source={item.image}
                                        imageStyle={{

                                            width: mobileW * 44 / 100,
                                            height: index % 2 == 0 ? mobileH * 22 / 100 : mobileH * 20 / 100
                                            ,
                                            borderRadius: mobileW * 3 / 100,

                                        }}
                                        style={{
                                            borderRadius: mobileW * 3 / 100,
                                            width: mobileW * 44 / 100,
                                            height: index % 2 == 0 ? mobileH * 22 / 100 : mobileH * 20 / 100

                                        }}>

                                        <View style={{
                                            marginVertical: mobileH * 1 / 100,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            alignSelf: 'flex-start',
                                            marginLeft: mobileW * 2 / 100,
                                            paddingHorizontal: mobileW * 2 / 100,
                                            borderRadius: mobileW * 17.25 / 100,
                                            backgroundColor: Colors.theme_color4,
                                            height: mobileH * 3 / 100
                                        }}>

                                            <Text style={{

                                                textAlign: 'center',
                                                color: Colors.whiteColor,
                                                fontFamily: Font.FontRegular,
                                                fontSize: mobileW * 3 / 100,

                                            }}>{
                                                    item.event_status == 0 ?
                                                        "Public" :
                                                        "Private"

                                                }</Text>
                                        </View>

                                    </ImageBackground>

                                    <Text style={{
                                        marginTop: mobileH * 0.5 / 100,
                                        marginHorizontal: mobileW * 2 / 100,
                                        color: Colors.black_color,
                                        fontFamily: Font.FontSemiBold,
                                        fontSize: mobileW * 3.2 / 100,

                                    }}>{item.title}</Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginTop: mobileH * 0.3 / 100,
                                        marginHorizontal: mobileW * 2 / 100,
                                    }}>
                                        <Text style={{


                                            color: Colors.black_color,
                                            fontFamily: Font.FontMedium,
                                            fontSize: mobileW * 3.2 / 100,

                                        }}>{item.mens + " " + Lang_chg.mens_txt[config.language]}</Text>
                                        <Image
                                            style={{
                                                tintColor: Colors.greyColor,
                                                marginHorizontal: mobileW * 1 / 100,
                                                width: mobileW * 1.5 / 100,
                                                height: mobileW * 1.5 / 100
                                            }}
                                            source={localimag.pointImage}
                                        >


                                        </Image>

                                        <Text style={{


                                            color: Colors.black_color,
                                            fontFamily: Font.FontMedium,
                                            fontSize: mobileW * 3.2 / 100,

                                        }}>{item.women + " " + Lang_chg.womens_txt[config.language]}</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginTop: mobileH * 0.3 / 100,
                                    }}>
                                        <Image
                                            source={localimag.othercountry_icon}
                                            style={{
                                                marginHorizontal: mobileW * 2 / 100,
                                                width: mobileW * 4.5 / 100,
                                                height: mobileW * 4.5 / 100
                                            }}
                                        >

                                        </Image>
                                        <Text style={{

                                            textAlign: 'center',
                                            color: Colors.black_color,
                                            fontFamily: Font.FontRegular,
                                            fontSize: mobileW * 3 / 100,

                                        }}>{"Abuja"}</Text>
                                    </View>

                                </TouchableOpacity>
                            }
                        >

                        </FlatList>
                    </View>
                    </>
                    :
                    <View>
                    <FlatList
                        contentContainerStyle={{ padding: mobileH * 2 / 100 }}
                        numColumns={2}
                        data={this.state.myeventList}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => {
                                    this.props.navigation.navigate('JoinedEventMingleDetails')
                                }}
                                style={[
                                    index >= 2 && index % 2 == 1 && {
                                        bottom: mobileH * (index / 2) / 100 + index
                                    },

                                    {
                                        marginRight: index % 2 == 0 ? mobileW * 3 / 100 : 0,
                                        marginBottom: mobileH * 2 / 100,
                                        borderRadius: mobileW * 3 / 100,
                                        paddingBottom: mobileH * 1 / 100,
                                        shadowColor: '#000',
                                        shadowOffset: {
                                            width: 0,
                                            height: 7,
                                        },
                                        shadowOpacity: 0.43,
                                        shadowRadius: 9.51,
                                        backgroundColor: Colors.whiteColor,
                                        height: index % 2 == 0 ? mobileH * 32 / 100 : mobileH * 30 / 100,

                                        elevation: 15,
                                    }]}>

                                <ImageBackground

                                    source={item.image}
                                    imageStyle={{

                                        width: mobileW * 44 / 100,
                                        height: index % 2 == 0 ? mobileH * 22 / 100 : mobileH * 20 / 100
                                        ,
                                        borderRadius: mobileW * 3 / 100,

                                    }}
                                    style={{
                                        borderRadius: mobileW * 3 / 100,
                                        width: mobileW * 44 / 100,
                                        height: index % 2 == 0 ? mobileH * 22 / 100 : mobileH * 20 / 100

                                    }}>

                                    

                                </ImageBackground>

                                <Text style={{
                                    marginTop: mobileH * 0.5 / 100,
                                    marginHorizontal: mobileW * 2 / 100,
                                    color: Colors.black_color,
                                    fontFamily: Font.FontSemiBold,
                                    fontSize: mobileW * 3.2 / 100,

                                }}>{item.title}</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: mobileH * 0.3 / 100,
                                    marginHorizontal: mobileW * 2 / 100,
                                }}>
                                    <Text style={{


                                        color: Colors.black_color,
                                        fontFamily: Font.FontMedium,
                                        fontSize: mobileW * 3.2 / 100,

                                    }}>{item.mens + " " + Lang_chg.mens_txt[config.language]}</Text>
                                    <Image
                                        style={{
                                            tintColor: Colors.greyColor,
                                            marginHorizontal: mobileW * 1 / 100,
                                            width: mobileW * 1.5 / 100,
                                            height: mobileW * 1.5 / 100
                                        }}
                                        source={localimag.pointImage}
                                    >


                                    </Image>

                                    <Text style={{


                                        color: Colors.black_color,
                                        fontFamily: Font.FontMedium,
                                        fontSize: mobileW * 3.2 / 100,

                                    }}>{item.women + " " + Lang_chg.womens_txt[config.language]}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: mobileH * 0.3 / 100,
                                }}>
                                    <Image
                                        source={localimag.othercountry_icon}
                                        style={{
                                            marginHorizontal: mobileW * 2 / 100,
                                            width: mobileW * 4.5 / 100,
                                            height: mobileW * 4.5 / 100
                                        }}
                                    >

                                    </Image>
                                    <Text style={{

                                        textAlign: 'center',
                                        color: Colors.black_color,
                                        fontFamily: Font.FontRegular,
                                        fontSize: mobileW * 3 / 100,

                                    }}>{"Abuja"}</Text>
                                </View>

                            </TouchableOpacity>
                        }
                    >

                    </FlatList>
                </View> 
    }




                </KeyboardAwareScrollView>


            </SafeAreaView>
        )
    }
}
