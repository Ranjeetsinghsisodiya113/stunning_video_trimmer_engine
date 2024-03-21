import React, { Component, useRef } from 'react'
import {
    View, Text, SafeAreaView, StatusBar, ImageBackground, Image, TouchableOpacity,
    TextInput, BackHandler, Alert, Keyboard
} from 'react-native'

import {
    config, msgProvider, localStorage, apifuntion, msgText, msgTitle, consolepro,
    Lang_chg, Font, Colors, mobileH, mobileW, localimag, notification
} from './Provider/utilslib/Utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';

export default class FlightMingle extends Component {
    _didFocusSubscription;
    _willBlurSubscription;
    constructor(props) {
        super(props)
        this.state = {
            airline:'',
            ticket_number:'',
            flight_number:'',
            pnr:'',
           
            scanStatus:this.props.route.params.scanStatus
        }

    }
    componentDidMount() {

        const { navigation } = this.props;
        this.focusListener = navigation.addListener('focus', () => {
            this.setState({ scanStatus:this.props.route.params.scanStatus})
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
                            source={localimag.whitebackIcon}
                        ></Image>
                    </TouchableOpacity>
                    <Text style={{

                        textAlign: 'center',
                        color: Colors.whiteColor,
                        fontFamily: Font.FontMedium,
                        fontSize: mobileW * 5.2 / 100,

                    }}>{Lang_chg.FlightMingle[config.language]}</Text>

                    <View style={{
                        width: mobileW * 8 / 100
                    }}>

                    </View>
                </LinearGradient>
                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        width: '100%',
                        paddingBottom: mobileH * 15 / 100,
                        alignItems: 'center',
                        backgroundColor: Colors.whiteColor
                    }}
                    showsVerticalScrollIndicator={false}>

                    {/* .....................Text input............... */}

                    {
                        this.state.scanStatus==false ?
                    
                    <TouchableOpacity
                        activeOpacity={0.9}
onPress={()=>{
    this.props.navigation.navigate('ScanScreen')
}}
                        style={{

                            width: mobileW * 90 / 100,
                        }}>
                        <ImageBackground
                            imageStyle={{

                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                height: mobileH * 10 / 100,
                                width: mobileW * 90 / 100,
                                resizeMode: 'contain'
                            }}
                            style={{
                                marginTop: mobileH * 4 / 100,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: mobileH * 10 / 100,
                                width: mobileW * 90 / 100,
                                resizeMode: 'contain'
                            }}
                            source={localimag.ScanticketBg}
                        >
                            <Image
                                style={{
                                    marginRight: mobileW * 2 / 100,
                                    height: mobileW * 7 / 100,
                                    width: mobileW * 7 / 100,
                                    resizeMode: 'contain'
                                }}
                                source={localimag.scanwhiteIcon}
                            ></Image>
                            <Text style={{
                                alignSelf: 'center',


                                textAlign: 'center',
                                color: Colors.whiteColor,
                                fontFamily: Font.FontSemiBold,
                                fontSize: mobileW * 4.5 / 100,
                            }}>
                                {"Scan Ticket"}
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    :
                    <Image
                    style={{marginTop:mobileH*3/100,
                        height: mobileH * 25 / 100,
                                width: mobileW * 90 / 100,
                                borderRadius:mobileW*4/100,
                    }}
                    source={localimag.TicketCardImage}
                    >

                    </Image>
    }
                    <View
                        style={{
                            marginTop: mobileH * 3 / 100,
                            width: mobileW * 88 / 100,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >

                        <Image
                            style={{

                                height: mobileW * 2 / 100,
                                width: mobileW * 38 / 100,
                                resizeMode: 'contain'
                            }}
                            source={localimag.Line}
                        ></Image>
                        <Text style={{

                            textAlign: 'center',
                            color: Colors.new_text_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 4.5 / 100,
                        }}>
                            {Lang_chg.or_txt[config.language]}
                        </Text>
                        <Image
                            style={{

                                height: mobileW * 2 / 100,
                                width: mobileW * 38 / 100,
                                resizeMode: 'contain'
                            }}
                            source={localimag.Line}
                        ></Image>
                    </View>

                    <Text style={{
                        marginTop: mobileH * 3 / 100,
                        textAlign: 'center',
                        color: Colors.black_color,
                        fontFamily: Font.FontSemiBold,
                        fontSize: mobileW * 4.5 / 100,

                    }}>{Lang_chg.Entermanuallydetails[config.language]}</Text>








                    <View style={{
                        marginTop: mobileH * 4 / 100,
                        alignSelf: 'center',
                        width: (mobileW * 90) / 100,
                        alignItems: 'center',
                        borderBottomColor: Colors.theme_color2,
                        borderBottomWidth: (mobileW * 0.1) / 100,
                    }}>


                        <View style={{
                            alignSelf: 'center',

                            height: mobileH * 6 / 100,
                            flexDirection: 'row',
                            width: (mobileW * 85) / 100,
                            alignItems: 'center', justifyContent: 'space-between'
                        }}>

                            <Image
                                style={{
                                    width: (mobileW * 6) / 100,
                                    height: (mobileW * 6) / 100,
                                    resizeMode: 'contain',
                                    alignSelf: 'center',
                                    tintColor: "#B48EFB"
                                }}
                                source={localimag.planeIcon}
                            />
                            <TextInput
                                style={{
                                    fontFamily: Font.FontRegular,
                                    width: (mobileW * 75) / 100,
                                    fontSize: (mobileW * 3.5) / 100,


                                    color: Colors.black_color,
                                    paddingLeft: 0,
                                }}
                                placeholderTextColor={Colors.greyColor}
                                placeholder={Lang_chg.Airline[config.language]}
                                keyboardType="default"
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
                                    this.setState({ airline: txt });
                                }}
                                maxLength={100}
                                value={this.state.airline}
                            />
                        </View>
                    </View>



                    <View style={{
                        marginTop: mobileH * 4 / 100,
                        alignSelf: 'center',
                        width: (mobileW * 90) / 100,
                        alignItems: 'center',
                        borderBottomColor: Colors.theme_color2,
                        borderBottomWidth: (mobileW * 0.1) / 100,
                    }}>


                        <View style={{
                            alignSelf: 'center',

                            height: mobileH * 6 / 100,
                            flexDirection: 'row',
                            width: (mobileW * 85) / 100,
                            alignItems: 'center', justifyContent: 'space-between'
                        }}>

                            <Image
                                style={{
                                    width: (mobileW * 6) / 100,
                                    height: (mobileW * 6) / 100,
                                    resizeMode: 'contain',
                                    alignSelf: 'center',
                                    tintColor: "#B48EFB"
                                }}
                                source={localimag.ticketIcon}
                            />
                            <TextInput
                                style={{
                                    fontFamily: Font.FontRegular,
                                    width: (mobileW * 75) / 100,
                                    fontSize: (mobileW * 3.5) / 100,


                                    color: Colors.black_color,
                                    paddingLeft: 0,
                                }}
                                placeholderTextColor={Colors.greyColor}
                                placeholder={Lang_chg.Ticket_number[config.language]}
                                keyboardType="default"
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
                                    this.setState({ ticket_number: txt });
                                }}
                                maxLength={100}
                                value={this.state.ticket_number}
                            />
                        </View>
                    </View>
                    <View style={{
                        marginTop: mobileH * 4 / 100,
                        alignSelf: 'center',
                        width: (mobileW * 90) / 100,
                        alignItems: 'center',
                        borderBottomColor: Colors.theme_color2,
                        borderBottomWidth: (mobileW * 0.1) / 100,
                    }}>


                        <View style={{
                            alignSelf: 'center',

                            height: mobileH * 6 / 100,
                            flexDirection: 'row',
                            width: (mobileW * 85) / 100,
                            alignItems: 'center', justifyContent: 'space-between'
                        }}>

                            <Image
                                style={{
                                    width: (mobileW * 6) / 100,
                                    height: (mobileW * 6) / 100,
                                    resizeMode: 'contain',
                                    alignSelf: 'center',
                                    tintColor: "#B48EFB"
                                }}
                                source={localimag.planeIcon}
                            />
                            <TextInput
                                style={{
                                    fontFamily: Font.FontRegular,
                                    width: (mobileW * 75) / 100,
                                    fontSize: (mobileW * 3.5) / 100,


                                    color: Colors.black_color,
                                    paddingLeft: 0,
                                }}
                                placeholderTextColor={Colors.greyColor}
                                placeholder={Lang_chg.FlightNumber[config.language]}
                                keyboardType="default"
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
                                    this.setState({ flight_number: txt });
                                }}
                                maxLength={100}
                                value={this.state.flight_number}
                            />
                        </View>
                    </View>
                    <View style={{
                        marginTop: mobileH * 4 / 100,
                        alignSelf: 'center',
                        width: (mobileW * 90) / 100,
                        alignItems: 'center',
                        borderBottomColor: Colors.theme_color2,
                        borderBottomWidth: (mobileW * 0.1) / 100,
                    }}>


                        <View style={{
                            alignSelf: 'center',

                            height: mobileH * 6 / 100,
                            flexDirection: 'row',
                            width: (mobileW * 85) / 100,
                            alignItems: 'center', justifyContent: 'space-between'
                        }}>

                            <Image
                                style={{
                                    width: (mobileW * 6) / 100,
                                    height: (mobileW * 6) / 100,
                                    resizeMode: 'contain',
                                    alignSelf: 'center',
                                    tintColor: "#B48EFB"
                                }}
                                source={localimag.ticketIcon}
                            />
                            <TextInput
                                style={{
                                    fontFamily: Font.FontRegular,
                                    width: (mobileW * 75) / 100,
                                    fontSize: (mobileW * 3.5) / 100,


                                    color: Colors.black_color,
                                    paddingLeft: 0,
                                }}
                                placeholderTextColor={Colors.greyColor}
                                placeholder={Lang_chg.PNR[config.language]}
                                keyboardType="default"
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
                                    this.setState({ pnr: txt });
                                }}
                                maxLength={100}
                                value={this.state.pnr}
                            />
                        </View>
                    </View>



                    <TouchableOpacity
                        onPress={() => {

                            this.props.navigation.navigate("AllFlightMingle")
                        }}
                        activeOpacity={0.7}
                        style={{
                            width: (mobileW * 90) / 100,

                            marginTop: (mobileH * 4) / 100,
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
                                height: (mobileH * 7) / 100,

                            }}>
                            <Text
                                style={{
                                    fontSize: (mobileW * 3.8) / 100,
                                    color:
                                        Colors.whiteColor,
                                    fontFamily: Font.FontSemiBold,
                                }}>
                                {Lang_chg.verify_ticket[config.language]}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>





                </KeyboardAwareScrollView>


            </SafeAreaView>
        )
    }
}
