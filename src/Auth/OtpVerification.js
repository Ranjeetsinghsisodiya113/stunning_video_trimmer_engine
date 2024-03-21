import React, { Component, useRef } from 'react'
import { View, Text, SafeAreaView, StatusBar, ImageBackground, Image, TouchableOpacity, TextInput, BackHandler, Alert, Keyboard } from 'react-native'
import OTPTextView from 'react-native-otp-textinput'
import { config, msgProvider, localStorage, apifuntion, msgText, msgTitle, consolepro, Lang_chg, Font, Colors, mobileH, mobileW, localimag, notification } from '../Provider/utilslib/Utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CountDown from 'react-native-countdown-component';
import LinearGradient from 'react-native-linear-gradient';
export default class OtpVerification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            otpText: '',
            otp: '',
            user_id: 0,
            showbtn: true,
        }
    }
    componentDidMount() {
        consolepro.consolelog('Iam otp page ')
    }


    //--------------------------resend funcation ---------------------
    Resendotpbtn = async () => {
        if (config.app_status == 0) {
            this.setState({ showbtn: false, })
            return false
        } else {
            Keyboard.dismiss()
            let result = await localStorage.getItemString('user_id');
            consolepro.consolelog('result', result);
            let user_id_get = 0;
            if (result != null) {
                user_id_get = result;
                this.setState({
                    user_id: user_id_get,
                })
            }
            let url = config.baseURL + "resend_otp.php";
            var data = new FormData();
            data.append('user_id', user_id_get)
            consolepro.consolelog('data', data)
            apifuntion.postApi(url, data, 1).then((obj) => {
                consolepro.consolelog('user_arr', obj)
                if (obj.success == 'true') {
                    let otp = (obj.otp).toString();
                    var email_arr = obj.email_arr;
                    consolepro.consolelog('resend', obj);
                    this.setState({ showbtn: false, })
                }
                else {
                    msgProvider.alert(msgTitle.information[config.language], obj.msg[config.language], false);
                    return false;
                }
            }).catch((error) => {
                consolepro.consolelog("-------- error ------- " + error);

            });
        }
    }

    //-------------------otp verification funcation----------------------


    Otpveryfication = async () => {

        if (config.app_status == 0) {
            this.props.navigation.navigate('Home')
            return false
        } else {
            Keyboard.dismiss()
            let result = await localStorage.getItemString('user_id');
            consolepro.consolelog('result', result);
            let user_id_get = 0;
            if (result != null) {
                user_id_get = result;
                this.setState({
                    user_id: user_id_get,
                })
            }
            var otp = this.state.otp;
            if (otp.length <= 0) {
                msgProvider.toast(msgText.emptyOtp[config.language], 'center')
                return false
            }
            if (otp.length < 4) {
                msgProvider.toast(msgText.otpMinLength[config.language], 'center')
                return false
            }
            let url = config.baseURL + "otp_verify.php";
            var data = new FormData();
            data.append('user_id', user_id_get)
            data.append('otp', otp)
            consolepro.consolelog('data', data)
            apifuntion.postApi(url, data, 1).then((obj) => {
                consolepro.consolelog('otp res', obj)
                if (obj.success == 'true') {
                    var user_arr = obj.user_details;
                    let user_id = user_arr.user_id;
                    let email = user_arr.email;
                    let otp_verify = user_arr.otp_verify;
                    let profile_complete = user_arr.profile_complete;
                    var notification_arr = obj.notification_arr;
                    consolepro.consolelog({ notification_arr })
                    if (otp_verify == 0) {
                        this.setState({
                            user_id: user_id,
                            email: email,
                            showbtn: false
                        })
                    }
                    if (otp_verify == 1) {
                        {
                            consolepro.consolelog({ notification_arr })
                            if (notification_arr != "NA") {
                                consolepro.consolelog({ notification_arr })
                                notification.notification_arr(notification_arr);
                            }
                            this.setState({
                                otppopup: false,
                            })
                            localStorage.setItemString('user_id', JSON.stringify(user_id));
                            localStorage.setItemObject('user_arr', user_arr);
                            localStorage.setItemString('email', this.state.email);
                            this.props.navigation.navigate('Home')
                        }
                    }
                }
                else {
                    setTimeout(() => {
                        msgProvider.alert(msgTitle.information[config.language], obj.msg[config.language], false);
                        return false;
                    }, 300);

                }
            }).catch((error) => {
                consolepro.consolelog("-------- error ------- " + error);
            });
        }
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
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.goBack() }}
                        style={{
                            marginLeft: mobileW * 5 / 100,
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

                    {/* .....................Text input............... */}

                    < Text
                        style={{


                            color: Colors.black_color,
                            fontSize: (mobileW * 7) / 100,
                            textAlign: 'center',
                            fontFamily: Font.FontBold,

                        }}>
                        {Lang_chg.OTPVerification_txt[config.language]}
                    </Text>

                    <Text
                        style={{
                            alignSelf: 'center',
                            width: mobileW * 85 / 100,
                            marginTop: mobileH * 1 / 100,
                            color: Colors.black_color,
                            fontSize: (mobileW * 3.8) / 100,
                            textAlign: 'center',
                            fontFamily: Font.FontMedium,

                        }}>
                        {Lang_chg.we_sent_an_SMS[config.language]}
                        <Text style={{
                            marginTop: mobileH * 1 / 100,
                            color: Colors.black_color,
                            fontSize: (mobileW * 3.8) / 100,
                            textAlign: 'center',
                            fontFamily: Font.FontMedium,

                        }}>
                            {"albert@gmaii.com" + '.'}
                        </Text>
                        <Text style={{
                            marginTop: mobileH * 1 / 100,
                            color: Colors.black_color,
                            fontSize: (mobileW * 3.8) / 100,
                            textAlign: 'center',
                            fontFamily: Font.FontMedium,

                        }}>
                            {Lang_chg.Please_enter_it[config.language]}
                        </Text>
                    </Text>


                    <OTPTextView
                        handleTextChange={(text) => {
                            this.setState({ otp: text }),
                                console.log(text)
                        }}
                        containerStyle={{
                            marginVertical: mobileW * 8 / 100,
                            width: mobileW * 80 / 100,
                            alignSelf: 'center'
                        }}
                        textInputStyle={{
                            borderRadius: mobileW * 1 / 100,
                            borderWidth: mobileW * 0.2 / 100,
                            width: mobileW * 15 / 100,
                            height: mobileW * 13 / 100,
                            color: Colors.orange
                        }}
                        inputCount={4}
                        inputCellLength={1}
                        tintColor={Colors.theme_color2}
                        offTintColor={Colors.theme_color2}
                    />
                    {/* ..............button............. */}
                    {/* signIn */}

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('CreateProfile')
                            //this.Otpveryfication
                        }}
                        activeOpacity={0.7}
                        style={{
                            width: (mobileW * 90) / 100,
                            alignSelf: 'center',
                            marginTop: (mobileH * 2) / 100,
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
                                    color: Colors.whiteColor,
                                    fontFamily: Font.FontSemiBold,
                                }}>
                                {Lang_chg.verify_txt[config.language]}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    {this.state.showbtn == false ?
                        <CountDown
                            until={59.5 * 2}
                            size={mobileW * 3.3 / 100}
                            onFinish={() => { this.setState({ showbtn: true }) }}
                            digitStyle={{ backgroundColor: Colors.whiteColor }}
                            digitTxtStyle={{ color: Colors.redColor }}
                            timeLabelStyle={{ color: Colors.time_lable_color, fontSize: 1, }}
                            timeToShow={['M', 'S']}
                            timeLabels={{ m: '', s: '' }}
                            showSeparator={true}
                            separatorStyle={{ color: Colors.redColor }}
                            style={{
                                paddingTop: 5.5,
                                paddingBottom: 5.5
                            }}
                        />
                        :
                        <View>
                            <Text style={{
                                marginTop: mobileH * 4 / 100, textAlign: 'center',
                                color: Colors.greyColor, fontSize: mobileW * 3.8 / 100,
                                fontFamily: Font.FontMedium, alignItems: 'center'
                            }}>
                                {Lang_chg.didntReceiveOTP[config.language]}</Text>

                            <TouchableOpacity
                                onPress={() => this.Resendotpbtn()}
                                activeOpacity={0.7}
                                style={{ marginTop: mobileH * 1 / 100, alignItems: 'center' }}
                            >
                                <View  >
                                    <Text style={{ color: "#D64252", fontSize: mobileW * 4 / 100, fontFamily: Font.FontBold, alignItems: 'center' }}>{Lang_chg.SendOTPAgain[config.language]}</Text>

                                </View>
                            </TouchableOpacity>

                            <Text style={{
                                textDecorationLine: 'underline',
                                marginTop: mobileH * 3 / 100,
                                textAlign: 'center', color: Colors.black_color, fontSize: mobileW * 4.2 / 100,
                                fontFamily: Font.FontBold, alignItems: 'center'
                            }}>
                                {Lang_chg.change_email[config.language]}</Text>

                        </View>
                    }
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}
