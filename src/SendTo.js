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
import HideWithKeyboard from 'react-native-hide-with-keyboard';


class SendTo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lastname: '',
            firstname: '',
            mobile: '',
            btn: true,
            email: '',
            password: '',
            securetext1: true,
            securetext2: true,
            password: '',
            confirmpassword: '',
            firstname: '',
            lastname: '',
            remember_me: false,
            user_id: '',
            otp: '',
            showbtn: false,
            fullname: '',
            country_code: '91',
            picturesArray: [
                { image: localimag.girlImage },
                { image: localimag.addMoreFullImage },
            ],
            isSwitchOn: true,
            isoutSider: false,

            peopleList: [
                { image: require('./Icons/image6.png') },
                { image: require('./Icons/image5.png') },
                { image: require('./Icons/image4.png') },
                { image: require('./Icons/image3.png') },
                { image: require('./Icons/image2.png') },
                { image: require('./Icons/image6.png') },
                { image: require('./Icons/image5.png') },
                { image: require('./Icons/image4.png') },
                { image: require('./Icons/image3.png') },
                { image: require('./Icons/image2.png') },
            ]
        }

    }

    onToggleSwitch() {
        this.setState({ isSwitchOn: !this.state.isSwitchOn })
    }
    onOutsiderSwitch() {
        this.setState({ isoutSider: !this.state.isoutSider })
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

                    }}>{Lang_chg.sendTo_txt[config.language]}</Text>

                    <View style={{

                        width: mobileW * 15 / 100
                    }}>


                    </View>
                </LinearGradient>
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

                            }}
                            source={localimag.searchThemeIcon}
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
                            placeholder={Lang_chg.search_peoples_txt[config.language]}
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
                                this.setState({ email: txt });
                            }}
                            maxLength={100}
                            value={this.state.email}
                        />
                    </View>
                </View>
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        width: mobileW,
                        marginTop: mobileH * 2 / 100,
                        paddingBottom: mobileH * 20 / 100,
                    }}
                    keyboardShouldPersistTaps="handled">


                    <FlatList
                        data={this.state.peopleList}
                        renderItem={({ item, index }) =>
                            <View


                                style={{
                                    marginTop: mobileH * 3 / 100,
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


                                <Image
                                    style={{
                                        borderRadius: mobileW * 6 / 100,
                                        height: mobileW * 12 / 100,
                                        width: mobileW * 12 / 100,

                                    }}
                                    source={item.image}
                                ></Image>

                                <View style={{ width: mobileW * 50 / 100 }}>
                                    <Text style={{

                                        marginHorizontal: mobileW * 2 / 100,
                                        color: Colors.black_color,
                                        fontFamily: Font.FontSemiBold,
                                        fontSize: mobileW * 3.8 / 100,

                                    }}>{"Hanif Adamu"}</Text>

                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginTop: mobileH * 0.3 / 100,
                                    }}>
                                        <Image
                                            source={localimag.othercountry_icon}
                                            style={{
                                                marginHorizontal: mobileW * 2 / 100,
                                                width: mobileW * 5 / 100,
                                                height: mobileW * 5 / 100
                                            }}
                                        >

                                        </Image>
                                        <Text style={{

                                            textAlign: 'center',
                                            color: Colors.black_color,
                                            fontFamily: Font.FontRegular,
                                            fontSize: mobileW * 3.5 / 100,

                                        }}>{"Abuja"}</Text>
                                    </View>
                                </View>
                                <LinearGradient
                                    colors={[Colors.theme_color3, Colors.theme_color]}
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 0, y: 0 }}
                                    useAngle={true}
                                    angle={90}

                                    style={{
                                        borderRadius: mobileW * 1.5 / 100,


                                        paddingHorizontal: mobileH * 3 / 100,
                                        alignSelf: 'center',

                                    }}>
                                    <View style={{
                                        height: mobileH * 3.5 / 100,
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                    }}>
                                        <Text style={{


                                            color: Colors.whiteColor,
                                            fontFamily: Font.FontMedium,
                                            fontSize: mobileW * 3.5 / 100,

                                        }}>{Lang_chg.select_txt[config.language]}</Text>

                                    </View>
                                </LinearGradient>
                            </View>

                        }
                    >




                    </FlatList>




                </KeyboardAwareScrollView>
                <HideWithKeyboard>
                    <TouchableOpacity
                        onPress={() => {

                            this.props.navigation.navigate('MyEvents')
                        }}
                        activeOpacity={0.7}
                        style={{
                            bottom: mobileH * 2 / 100,
                            position: 'absolute',
                            width: (mobileW * 90) / 100,
                            alignSelf: 'center',
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
                                height: (mobileH * 6.5) / 100,
                                // width: mobileW * 50/100,
                            }}>
                            <Text
                                style={{
                                    fontSize: (mobileW * 3.8) / 100,
                                    color:
                                        Colors.whiteColor,
                                    fontFamily: Font.FontSemiBold,
                                }}>
                                {Lang_chg.sendTxt[config.language]}
                            </Text>
                        </LinearGradient>


                    </TouchableOpacity>

                </HideWithKeyboard>
            </SafeAreaView>
        );
    }
}
export default SendTo;

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
