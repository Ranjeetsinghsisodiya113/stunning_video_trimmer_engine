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

class OrganizerDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lastname:'',
            firstname:'',
            mobile: '',
            btn: true,
            email: '',
            gender:'',
            
           
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

                    }}>{Lang_chg.OrganizerDetails_txt[config.language]}</Text>

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

                    <Image
                        style={{
                            borderRadius: mobileW * 13.5 / 100,
                            borderWidth: mobileW * 0.5 / 100,
                            borderColor: Colors.theme_color2,
                            marginTop: (mobileH * 4 / 100),
                            width: (mobileW * 27) / 100,
                            height: (mobileW * 27) / 100,

                            alignSelf: 'center',

                        }}
                        source={localimag.userplaceholder}
                    />


                    <Text
                        style={{
                            marginTop: mobileH * 1 / 100,
                            color: Colors.theme_color4,
                            fontSize: (mobileW * 3.5) / 100,
                            textAlign: 'center',
                            fontFamily: Font.FontMedium,
                            textDecorationLine: 'underline'
                        }}>
                        {Lang_chg.Upload_profile_picture_txt[config.language]}
                    </Text>


                   

                    <View style={{
                        marginTop: mobileH * 2 / 100,
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
                            borderBottomColor: Colors.theme_color2,
                        borderBottomWidth: (mobileW * 0.1) / 100,
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
                                <TextInput
                                style={{
                                  
                                   
                                    fontFamily: Font.FontRegular,
                                    width: (mobileW * 25) / 100,
                                    fontSize: (mobileW * 3.5) / 100,
                                    color: Colors.black_color,
                                    paddingLeft: 0,
                                }}
                                placeholderTextColor={Colors.greyColor}
                                placeholder={Lang_chg.first_name_txt[config.language]}
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
                                    this.setState({ firstname: txt });
                                }}
                                maxLength={25}
                                value={this.state.firstname}
                            />
                                
                            </View>
                        </View>



                        <View style={{
                            marginTop: mobileH * 2 / 100,
                            alignSelf: 'center',
                            width: (mobileW * 40) / 100,
                            alignItems: 'center',
                            borderBottomColor: Colors.theme_color2,
                        borderBottomWidth: (mobileW * 0.1) / 100,
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
                                <TextInput
                                style={{
                                    
                                   
                                    fontFamily: Font.FontRegular,
                                    width: (mobileW * 25) / 100,
                                    fontSize: (mobileW * 3.5) / 100,
                                    color: Colors.black_color,
                                    paddingLeft: 0,
                                }}
                                placeholderTextColor={Colors.greyColor}
                                placeholder={Lang_chg.last_name_txt[config.language]}
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
                                    this.setState({ lastname: txt });
                                }}
                                maxLength={25}
                                value={this.state.lastname}
                            />
                                
                            </View>
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
                                    tintColor: "#B48EFB"
                                }}
                                source={localimag.mobileIcon}
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
                                placeholder={Lang_chg.mobile_no_txt[config.language]}
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
                                    this.setState({ name: txt });
                                }}
                                maxLength={100}
                                value={this.state.name}
                            />
                        </View>
                    </View>
                    
                    {/* Gender */}
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
                                source={localimag.GenderIcon}
                            />
                            <Text
                                style={{
                                    fontFamily: Font.FontRegular,
                                    width: (mobileW * 66) / 100,
                                    fontSize: (mobileW * 3.5) / 100,
                                    color: Colors.black_color,
                                    
                                }}
                               
                            >
                          {Lang_chg.Gender_txt[config.language]}
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
                source={localimag.email_icon}
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
                placeholder={Lang_chg.email_txt[config.language]}
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
                  this.setState({ email: txt });
                }}
                maxLength={100}
                value={this.state.email}
              />
            </View>
          </View>
                   
                    <TouchableOpacity
                        onPress={() => {

                            this.props.navigation.navigate('SendTo')
                        }}
                        activeOpacity={0.7}
                        style={{
                            width: (mobileW * 90) / 100,
                            alignSelf: 'center',
                            marginTop: (mobileH * 14) / 100,
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
export default OrganizerDetails;

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
