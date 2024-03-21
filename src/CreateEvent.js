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
import { Switch } from 'react-native-paper'

class CreateEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description:'',
            isSwitchOn: true,
            isoutSider: false
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

                    }}>{Lang_chg.Create_event_txt[config.language]}</Text>

                    <View style={{

                        width: mobileW * 15 / 100
                    }}>


                    </View>
                </LinearGradient>

                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        width: mobileW,
                        paddingBottom: mobileH * 5 / 100,
                    }}
                    keyboardShouldPersistTaps="handled">

                    <View style={{
                        marginVertical: mobileH * 3 / 100,
                        borderRadius: (mobileW * 3) / 100,
                        alignSelf: 'center',
                        width: mobileW * 90 / 100,
                        height: mobileH * 22 / 100,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderStyle: 'dashed',
                        borderWidth: mobileW * 0.3 / 100,
                        borderColor: Colors.theme_color
                    }}>
                        <View style={{
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.43,
                            shadowRadius: 9.51,
                            backgroundColor: Colors.whiteColor,
                            borderRadius: (mobileW * 3) / 100,
                            elevation: 15,
                            width: mobileW * 86 / 100,
                            height: mobileH * 20 / 100,
                            backgroundColor: Colors.whiteColor,
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>


                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    style={{

                                        height: mobileW * 8 / 100,
                                        width: mobileW * 8 / 100,
                                        resizeMode: 'contain'
                                    }}
                                    source={localimag.Select_gallery_event}
                                ></Image>
                                <Text style={{

                                    textAlign: 'center',
                                    color: Colors.black_color,
                                    fontFamily: Font.FontMediumItalic,
                                    fontSize: mobileW * 4 / 100,

                                }}>{Lang_chg.upload_event_image[config.language]}</Text>

                            </View>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        width: mobileW * 90 / 100,
                        alignSelf: 'center',
                        justifyContent: 'space-between'
                    }}>

                        <View style={{
                            marginTop: mobileH * 2 / 100,
                            alignSelf: 'center',
                            width: (mobileW * 40) / 100,
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.43,
                            shadowRadius: 9.51,
                            backgroundColor: Colors.whiteColor,
                            borderRadius: (mobileW * 2) / 100,
                            elevation: 15,
                        }}>


                            <View style={{
                                alignSelf: 'center',
                                height: mobileH * 6 / 100,
                                flexDirection: 'row',
                                width: (mobileW * 35) / 100,
                                alignItems: 'center', justifyContent: 'space-between'
                            }}>

                                <Image
                                    style={{
                                        width: (mobileW * 6) / 100,
                                        height: (mobileW * 6) / 100,
                                        resizeMode: 'contain',
                                        alignSelf: 'center',

                                    }}
                                    source={localimag.calendar_icon}
                                />
                                <Text
                                    style={{
                                        fontFamily: Font.FontRegular,
                                        width: (mobileW * 16) / 100,
                                        fontSize: (mobileW * 3.5) / 100,
                                        color: Colors.black_color,

                                    }}

                                >
                                    {Lang_chg.Date_txt[config.language]}
                                </Text>
                                <Image
                                    style={{
                                        width: (mobileW * 6) / 100,
                                        height: (mobileW * 6) / 100,
                                        resizeMode: 'contain',
                                        alignSelf: 'center',

                                    }}
                                    source={localimag.downthemeIcon}
                                />
                            </View>
                        </View>



                        <View style={{
                            marginTop: mobileH * 2 / 100,
                            alignSelf: 'center',
                            width: (mobileW * 40) / 100,
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.43,
                            shadowRadius: 9.51,
                            backgroundColor: Colors.whiteColor,
                            borderRadius: (mobileW * 2) / 100,
                            elevation: 15,
                        }}>


                            <View style={{
                                alignSelf: 'center',
                                height: mobileH * 6 / 100,
                                flexDirection: 'row',
                                width: (mobileW * 35) / 100,
                                alignItems: 'center', justifyContent: 'space-between'
                            }}>

                                <Image
                                    style={{
                                        width: (mobileW * 6) / 100,
                                        height: (mobileW * 6) / 100,
                                        resizeMode: 'contain',
                                        alignSelf: 'center',

                                    }}
                                    source={localimag.clock_icon}
                                />
                                <Text
                                    style={{
                                        fontFamily: Font.FontRegular,
                                        width: (mobileW * 16) / 100,
                                        fontSize: (mobileW * 3.5) / 100,
                                        color: Colors.black_color,

                                    }}

                                >
                                    {Lang_chg.Time_txt[config.language]}
                                </Text>
                                <Image
                                    style={{
                                        width: (mobileW * 7) / 100,
                                        height: (mobileW * 7) / 100,
                                        resizeMode: 'contain',
                                        alignSelf: 'center',

                                    }}
                                    source={localimag.updown_icon}
                                />
                            </View>
                        </View>

                    </View>


                    <View style={{
                        marginTop: mobileH * 2 / 100,
                        alignSelf: 'center',
                        width: (mobileW * 90) / 100,
                        alignItems: 'center',
                        borderRadius: mobileW * 2 / 100,
                        borderBottomColor: Colors.theme_color2,
                        borderBottomWidth: (mobileW * 0.1) / 100,
                    }}>


                        <View style={{
                            alignSelf: 'center',

                            height: mobileH * 15 / 100,
                            flexDirection: 'row',
                            width: (mobileW * 85) / 100,
                            justifyContent: 'space-between'
                        }}>

                            <Image
                                style={{
                                    marginTop: mobileH * 1 / 100,
                                    width: (mobileW * 7) / 100,
                                    height: (mobileW * 7) / 100,
                                    resizeMode: 'contain',

                                    tintColor: "#B48EFB"
                                }}
                                source={localimag.penIcon}
                            />
                            <TextInput
                                style={{
                                    height: mobileH * 15 / 100,
                                    textAlignVertical: 'top',
                                    fontFamily: Font.FontRegular,
                                    width: (mobileW * 75) / 100,
                                    fontSize: (mobileW * 3.5) / 100,
                                    color: Colors.black_color,
                                    paddingLeft: 0,
                                }}
                                placeholderTextColor={Colors.greyColor}
                                placeholder={Lang_chg.Discription_of_event[config.language]}
                                keyboardType="default"
                                returnKeyLabel="done"
                                returnKeyType="done"
                                ref={input => {
                                    this.mobilefield = input;
                                }}
                                multiline={true}
                                onSubmitEditing={() => {
                                    Keyboard.dismiss();
                                }}
                                onFocus={() => {
                                    this.setState({ errorno: 0, activeinput: 1 });
                                }}
                                onChangeText={txt => {
                                    this.setState({ description: txt });
                                }}
                                maxLength={100}
                                value={this.state.description}
                            />
                        </View>
                    </View>
                    {/* Venue */}
                    <View style={{
                        marginTop: mobileH * 2 / 100,
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
                                source={localimag.location_pin}
                            />
                            <Text
                                style={{
                                    fontFamily: Font.FontMedium,
                                    width: (mobileW * 66) / 100,
                                    fontSize: (mobileW * 3.5) / 100,
                                    color: Colors.black_color,

                                }}

                            >
                                {Lang_chg.venue_txt[config.language]}
                            </Text>
                            <View
                                style={{
                                    width: (mobileW * 6) / 100,
                                    height: (mobileW * 6) / 100,
                                    resizeMode: 'contain',
                                    alignSelf: 'center',

                                }}

                            />
                        </View>
                    </View>



                    <View style={{
                        marginTop: mobileH * 2 / 100,
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
                                source={localimag.location_pin}
                            />
                            <Text
                                style={{
                                    fontFamily: Font.FontRegular,
                                    width: (mobileW * 66) / 100,
                                    fontSize: (mobileW * 3.5) / 100,
                                    color: Colors.black_color,

                                }}

                            >
                                {Lang_chg.location_txt[config.language]}
                            </Text>
                            <Image
                                style={{
                                    width: (mobileW * 6) / 100,
                                    height: (mobileW * 6) / 100,
                                    resizeMode: 'contain',
                                    alignSelf: 'center',

                                }}
                                source={localimag.downthemeIcon}
                            />
                        </View>
                    </View>



                    <View style={{
                        marginTop: mobileH * 2 / 100,
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
                                source={localimag.event_type_icon}
                            />
                            <Text
                                style={{
                                    fontFamily: Font.FontRegular,
                                    width: (mobileW * 66) / 100,
                                    fontSize: (mobileW * 3.5) / 100,
                                    color: Colors.black_color,

                                }}

                            >
                                {Lang_chg.EventType[config.language]}
                            </Text>
                            <Image
                                style={{
                                    width: (mobileW * 6) / 100,
                                    height: (mobileW * 6) / 100,
                                    resizeMode: 'contain',
                                    alignSelf: 'center',

                                }}
                                source={localimag.downthemeIcon}
                            />
                        </View>
                    </View>

                    <View style={{
                        marginTop: mobileH * 10 / 100,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: mobileW * 90 / 100,
                        alignSelf: 'center',
                    }}>
                        <Text
                            style={{
                                marginLeft: mobileW * 3 / 100,
                                fontFamily: Font.FontSemiBold,
                                width: (mobileW * 66) / 100,
                                fontSize: (mobileW * 3.8) / 100,
                                color: Colors.theme_color4,

                            }}

                        >
                            {Lang_chg.private_txt[config.language]}
                        </Text>


                        <View
                            style={{
                                paddingVertical: (mobileW * 1) / 100,

                            }}>
                            <Switch
                                trackColor={{
                                    false: '#767577',
                                    true: Colors.hobby_bg,
                                }}
                                thumbColor={
                                    this.state.isSwitchOn
                                        ? Colors.theme_color
                                        : Colors.white_color
                                }
                                onValueChange={() => {
                                    this.setState({ isSwitchOn: !this.state.isSwitchOn })

                                }}

                                value={this.state.isSwitchOn}></Switch>
                        </View>

                    </View>

                    <View style={{
                        marginTop: mobileH * 2 / 100,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: mobileW * 90 / 100,
                        alignSelf: 'center',
                    }}>
                        <Text
                            style={{
                                marginLeft: mobileW * 3 / 100,
                                fontFamily: Font.FontSemiBold,
                                width: (mobileW * 66) / 100,
                                fontSize: (mobileW * 3.8) / 100,
                                color: Colors.theme_color4,

                            }}

                        >
                            {Lang_chg.outsiders_txt[config.language]}
                        </Text>


                        <View
                            style={{
                                paddingVertical: (mobileW * 1) / 100,

                            }}>
                            <Switch
                                trackColor={{
                                    false: 'lightgray',
                                    true: Colors.hobby_bg,
                                }}
                                thumbColor={
                                    this.state.isoutSider
                                        ? Colors.theme_color
                                        : Colors.greyColor
                                }
                                onValueChange={() => {
                                    this.setState({ isoutSider: !this.state.isoutSider })

                                }}

                                value={this.state.isoutSider}></Switch>
                        </View>

                    </View>


                    <TouchableOpacity
                        onPress={() => {

                            this.props.navigation.navigate('OrganizerDetails')
                        }}
                        activeOpacity={0.7}
                        style={{
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
                                {Lang_chg.continueTxt[config.language]}
                            </Text>
                        </LinearGradient>


                    </TouchableOpacity>

                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}
export default CreateEvent;

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
