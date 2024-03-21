import React, { Component } from 'react';
import {
    Text,
    BackHandler,
    SafeAreaView,
    StatusBar,
    Alert,
    View,
    StyleSheet,
    Keyboard,
    TouchableOpacity,
    Image,
    TextInput,
    ImageBackground,
    Modal,
    FlatList,
    ScrollView,
} from 'react-native';
import {
    config,
    msgProvider,
    localStorage,
    apifuntion,
    msgText,
    msgTitle,
    consolepro,
    Lang_chg,
    Font,
    Colors,
    mobileH,
    mobileW,
    localimag,
    firebaseprovider,
} from './Provider/utilslib/Utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';


class Pricing_Plan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pricing_plan_arr: [
                {
                    plan_list: Lang_chg.Daily_explore_txt[config.language], price_txt: '$0.99', plan_arr: [
                        { description: 'Dip your toes in the dating pool with a daily pass.' },
                        { description: 'Access one event per day - Perfect for spontaneous adventures!' },
                        { description: 'Love what you see? Upgrade anytime for more!' },
                    ]
                },
                {
                    plan_list: Lang_chg.month_voyager_txt[config.language], price_txt: '$0.99', plan_arr: [
                        { description: 'Make every day a chance for romance.' },
                        { description: 'Get access to one unique event daily at an unbeatable price.' },
                        { description: 'Explore, connect, repeat - all month long!' },
                    ]
                },
                {
                    plan_list: Lang_chg.yearly_adventurer_txt[config.language], price_txt: '$0.99', plan_arr: [
                        { description: 'Make every day a chance for romance.' },
                        { description: 'Get access to one unique event daily at an unbeatable price.' },
                        { description: 'Explore, connect, repeat - all month long!' },
                    ]
                },
            ]
        }

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    hidden={false}
                    translucent={false}
                    barStyle="light-content"
                    networkActivityIndicatorVisible={true}
                    backgroundColor={Colors.theme_color}
                />
                {/* <View
                    style={{

                        alignSelf: 'center',
                        width: (mobileW * 90) / 100,
                        height: (mobileH * 10) / 100,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            this.props.navigation.navigate('Login')
                        }}

                    >
                        <Image
                            style={{
                                width: (mobileW * 6) / 100,
                                height: (mobileW * 6) / 100,
                                resizeMode: 'contain',


                            }}
                            source={localimag.blackback}
                        />
                    </TouchableOpacity>
                    <View>

                    </View>
                </View> */}
                <ImageBackground style={{ flex: 1, width: mobileW }} imageStyle={{ alignItems: 'center' }} source={localimag.iPhone13mini}>
                    <KeyboardAwareScrollView
                        showsVerticalScrollIndicator={false} style={{ paddingBottom: mobileH * 3 / 100 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                style={{
                                    width: (mobileW * 50) / 100,
                                    height: (mobileH * 13) / 100,
                                    marginTop: (mobileH * 1) / 100,
                                    resizeMode: 'contain',
                                }}
                                source={localimag.INGLE_logo}
                            />
                            <Text
                                style={{
                                    color: Colors.whiteColor,
                                    fontSize: (mobileW * 6) / 100,
                                    fontFamily: Font.FontSemiBold,

                                }}>
                                {Lang_chg.Pricing_Plans[config.language]}
                            </Text>

                            <Text
                                style={{
                                    color: Colors.whiteColor,
                                    fontSize: (mobileW * 3.8) / 100,
                                    fontFamily: Font.FontRegular,
                                    marginTop: mobileH * 1 / 100,
                                    textAlign: 'center'
                                }}>
                                {Lang_chg.subscription_txt[config.language]}
                            </Text>
                        </View>

                        <View style={{ width: mobileW * 90 / 100, alignSelf: 'center', backgroundColor: Colors.whiteColor, borderWidth: mobileH * 0.2 / 100, borderColor: Colors.theme_color2, borderRadius: mobileW * 5 / 100, marginTop: mobileH * 3 / 100, paddingHorizontal: mobileH * 2 / 100, paddingVertical: mobileH * 2 / 100, }}>
                            <FlatList
                                contentContainerStyle={{}}
                                data={this.state.pricing_plan_arr}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) =>
                                    <View>
                                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: mobileH * 2 / 100, }}>
                                            <Text style={{
                                                color: Colors.ingle_color,
                                                fontFamily: Font.FontSemiBold,
                                                fontSize: mobileW * 3.8 / 100,
                                            }}>{item.plan_list}</Text>
                                            <Text style={{
                                                color: Colors.theme_color4,
                                                fontFamily: Font.FontSemiBold,
                                                fontSize: mobileW * 3.8 / 100,
                                            }}>{item.price_txt}</Text>
                                        </View>
                                        <FlatList
                                            contentContainerStyle={{}}
                                            data={item.plan_arr}
                                            showsVerticalScrollIndicator={false}
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={({ item, index }) =>
                                                <View style={{ flexDirection: 'row', paddingVertical: mobileH * 0.3 / 100, width: mobileW * 85 / 100, alignSelf: 'center', paddingHorizontal: mobileH * 1 / 100 }}>
                                                    <View style={{ width: mobileW * 1.5 / 100, height: mobileW * 1.5 / 100, backgroundColor: Colors.black_color, borderRadius: mobileW * 5 / 100, marginTop: mobileH * 0.7 / 100 }}></View>
                                                    <Text style={{
                                                        color: Colors.black_color,
                                                        fontFamily: Font.FontRegular,
                                                        fontSize: mobileW * 2.8 / 100,
                                                        marginLeft: mobileH * 1 / 100
                                                    }}>{item.description}</Text>
                                                </View>
                                            }
                                        >
                                        </FlatList>
                                    </View>
                                }
                            >
                            </FlatList>
                        </View>

                        <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={()=>{
                            this.props.navigation.navigate('Home')
                        }}
                        style={{  
                            alignSelf: 'center',
                            marginTop: (mobileH * 2) / 100,
                        width: (mobileW * 90) / 100,
                    }}
                        >
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
                                width: (mobileW * 90) / 100,
                                alignSelf: 'center',
                              
                            }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', width: mobileW * 85 / 100, justifyContent: 'space-between' }}>
                                <Text style={{
                                    color: Colors.whiteColor,
                                    fontFamily: Font.FontSemiBold,
                                    fontSize: mobileW * 5 / 100,
                                    marginLeft: mobileH * 1 / 100
                                }}>{"$0.99"}</Text>
                                <View style={{ width: mobileW * 20 / 100, height: mobileH * 4 / 100, backgroundColor: Colors.whiteColor, borderRadius: mobileW * 2 / 100, alignItems: 'center', justifyContent: "center" }}>
                                    <Text style={{
                                        color: Colors.ingle_color,
                                        fontFamily: Font.FontMedium,
                                        fontSize: mobileW * 3 / 100,
                                    }}>{Lang_chg.buy_now_txt[config.language]}</Text>
                                </View>
                            </View>
                        </LinearGradient>
                        </TouchableOpacity>
                        <View
                            style={{
                                borderRadius: (mobileW * 3) / 100,
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: (mobileH * 6.5) / 100,
                                width: (mobileW * 90) / 100,
                                alignSelf: 'center',
                                marginTop: (mobileH * 2) / 100,
                                backgroundColor: Colors.whiteColor,
                            }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', width: mobileW * 85 / 100, justifyContent: 'space-between' }}>
                                <Text style={{
                                    color: Colors.border_txt_color,
                                    fontFamily: Font.FontSemiBold,
                                    fontSize: mobileW * 5 / 100,
                                    marginLeft: mobileH * 1 / 100
                                }}>{"$24.99"}</Text>
                                <View style={{ width: mobileW * 20 / 100, height: mobileH * 4 / 100, backgroundColor: Colors.theme_color4, borderRadius: mobileW * 2 / 100, alignItems: 'center', justifyContent: "center" }}>
                                    <Text style={{
                                        color: Colors.whiteColor,
                                        fontFamily: Font.FontMedium,
                                        fontSize: mobileW * 3 / 100,
                                    }}>{Lang_chg.buy_now_txt[config.language]}</Text>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                borderRadius: (mobileW * 3) / 100,
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: (mobileH * 6.5) / 100,
                                width: (mobileW * 90) / 100,
                                alignSelf: 'center',
                                marginTop: (mobileH * 2) / 100,
                                marginBottom: mobileH * 5 / 100,
                                backgroundColor: Colors.whiteColor,
                            }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', width: mobileW * 85 / 100, justifyContent: 'space-between' }}>
                                <Text style={{
                                    color: Colors.border_txt_color,
                                    fontFamily: Font.FontSemiBold,
                                    fontSize: mobileW * 5 / 100,
                                    marginLeft: mobileH * 1 / 100
                                }}>{"$199.99"}</Text>
                                <View style={{ width: mobileW * 20 / 100, height: mobileH * 4 / 100, backgroundColor: Colors.theme_color4, borderRadius: mobileW * 2 / 100, alignItems: 'center', justifyContent: "center" }}>
                                    <Text style={{
                                        color: Colors.whiteColor,
                                        fontFamily: Font.FontMedium,
                                        fontSize: mobileW * 3 / 100,
                                    }}>{Lang_chg.buy_now_txt[config.language]}</Text>
                                </View>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
export default Pricing_Plan;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: Colors.whiteColor,
    },
    // otp pop start ===================
    otptitle: {
        fontFamily: Font.FontBold,
        fontSize: 26,
        textAlign: 'center',
        marginTop: 10,
    },
    optTxt: {
        textAlign: 'center',
        fontFamily: Font.FontSemiBold,
        fontSize: 14,
        color: '#CBC9C9',
    },
    otpInpoutType: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '80%',
        alignSelf: 'center',
        textAlign: 'center',
        height: 40,
        marginTop: 15,
        marginBottom: 20,
    },
    verifyBox: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#ccc',
        marginTop: 10,
    },
    resendboxLeft: {
        width: '50%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: '#ccc',
        paddingTop: 15,
        paddingBottom: 15,
    },
    resendbox: {
        width: '50%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
    },
    OTpLeftverify: {
        color: Colors.theme_color,
        fontFamily: Font.FontBold,
        fontSize: (mobileW * 4) / 100,
    },
});
