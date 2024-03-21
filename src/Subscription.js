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

export default class Subscription extends Component {
    _didFocusSubscription;
    _willBlurSubscription;
    constructor(props) {
        super(props)
        this.state = {
            otpText: '',
            otp: '',
            user_id: 0,
            showbtn: true,
            subscription_arr: [
                { booking_no: '#7878787878', change_status: 'Active', subscription_date: '26 jul 24, 08:00AM', subscription_type: 'Monthly Voyager', end_date: '26 jul 25, 08:00PM', payment_status: 'Paid' },
                { booking_no: '#7878787878', change_status: 'Active', subscription_date: '26 jul 24, 08:00AM', subscription_type: 'Monthly Voyager', end_date: '26 jul 25, 08:00PM', payment_status: 'Paid' },
                { booking_no: '#7878787878', change_status: 'Active', subscription_date: '26 jul 24, 08:00AM', subscription_type: 'Monthly Voyager', end_date: '26 jul 25, 08:00PM', payment_status: 'Paid' },
                { booking_no: '#7878787878', change_status: 'Active', subscription_date: '26 jul 24, 08:00AM', subscription_type: 'Monthly Voyager', end_date: '26 jul 25, 08:00PM', payment_status: 'Paid' },
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
                <View
                    style={{
                        width: mobileW * 90 / 100,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
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

                    }}>{Lang_chg.subscrition_history[config.language]}</Text>

                    <View style={{
                        width: mobileW * 20 / 100
                    }}>
                    </View>
                </View>
                <View style={{ flex: 1, width: mobileW, alignItems: 'center', backgroundColor: Colors.whiteColor }}>
                    <FlatList
                        contentContainerStyle={{ padding: mobileH * 2 / 100 }}
                        data={this.state.subscription_arr}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) =>
                            <View style={{ width: mobileW * 90 / 100, alignSelf: 'center', backgroundColor: Colors.whiteColor, paddingVertical: mobileH * 2 / 100, elevation: 2, shadowColor: '#000', shadowOffset: { width: 1, height: 1, }, shadowOpacity: 0.5, marginTop: mobileH * 1 / 100, borderRadius: mobileH * 3 / 100, paddingHorizontal: mobileH * 2 / 100 }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row', }}>
                                    <Text style={{
                                        color: Colors.theme_color2,
                                        fontFamily: Font.FontSemiBold,
                                        fontSize: mobileW * 4 / 100,
                                    }}>{item.booking_no}</Text>
                                    <Text style={{
                                        color: Colors.greenColor,
                                        fontFamily: Font.FontSemiBold,
                                        fontSize: mobileW * 3.5 / 100,
                                        backgroundColor: Colors.light_green,
                                        paddingHorizontal: mobileW * 2 / 100, marginLeft: mobileH * 1 / 100, borderRadius: mobileW * 1 / 100, paddingVertical: mobileW * 0.5 / 100,
                                    }}>{item.change_status}</Text>
                                    <Text style={{
                                        color: Colors.black_color,
                                        fontFamily: Font.FontRegular,
                                        fontSize: mobileW * 3.3 / 100,
                                        marginLeft: mobileH * 3 / 100,
                                    }}>{item.subscription_date}</Text>
                                </View>
                                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: mobileH * 1 / 100 }}>
                                    <Text style={{
                                        color: Colors.black_color,
                                        fontFamily: Font.FontMedium,
                                        fontSize: mobileW * 3.5 / 100,
                                    }}>{Lang_chg.subscribe_type_txt[config.language]}</Text>
                                    <Text style={{
                                        color: Colors.black_color,
                                        fontFamily: Font.FontSemiBold,
                                        fontSize: mobileW * 3.5 / 100,
                                    }}>{item.subscription_type}</Text>
                                </View>
                                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: mobileH * 0.5 / 100 }}>
                                    <Text style={{
                                        color: Colors.black_color,
                                        fontFamily: Font.FontMedium,
                                        fontSize: mobileW * 3.5 / 100,
                                    }}>{Lang_chg.end_date[config.language]}</Text>
                                    <Text style={{
                                        color: Colors.black_color,
                                        fontFamily: Font.FontSemiBold,
                                        fontSize: mobileW * 3.5 / 100,
                                    }}>{item.end_date}</Text>
                                </View>
                                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: mobileH * 0.5 / 100 }}>
                                    <Text style={{
                                        color: Colors.black_color,
                                        fontFamily: Font.FontMedium,
                                        fontSize: mobileW * 3.5 / 100,
                                    }}>{Lang_chg.payment_txt[config.language]}</Text>
                                    <Text style={{
                                        color: Colors.black_color,
                                        fontFamily: Font.FontSemiBold,
                                        fontSize: mobileW * 3.5 / 100,
                                    }}>{item.payment_status}</Text>
                                </View>
                                <View style={{ paddingVertical: mobileH * 0.5 / 100, alignItems: 'flex-end' }}>
                                    <Text style={{
                                        color: Colors.redColor,
                                        fontFamily: Font.FontRegular,
                                        fontSize: mobileW * 3.5 / 100,
                                        textDecorationColor: Colors.redColor,
                                        textDecorationLine: 'underline'
                                    }}>{Lang_chg.cancel_subscription[config.language]}</Text>
                                </View>
                            </View>
                        }
                    >
                    </FlatList>
                </View>

            </SafeAreaView>
        )
    }
}
