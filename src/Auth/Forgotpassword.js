import React, {Component} from 'react';
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
} from '../Provider/utilslib/Utils';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';

class Forgotpassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            type:1 //1=email,2=mobile
        }
    }
    componentDidMount() {
        consolepro.consolelog('I am on forgot password page')
    }

    forgot_btn = () => {
        Keyboard.dismiss()
        if (config.app_status == 0) {
            this.props.navigation.navigate('ForgotOTPVerify',{
                forgot_type:this.state.type,
                email_mobile:'jack@mailinator.com',
                user_id:0,
                forgot_id:0,
                otp:4512,
                otp_auto_fill:true
            })

        }else
        {
        let { email,type } = this.state;

        if(type==1){
            //=======================================email============================
        if (email.length <= 0) {
            msgProvider.toast(msgText.emptyEmail[config.language], 'center')
            return false
        }
        var reg = config.emailvalidation;
        if (reg.test(email) !== true) {
            msgProvider.toast(msgText.validEmail[config.language], 'center')
            return false
        }
        }else
        {   
            if (email.length <=0) {
                msgProvider.toast(msgText.emptyMobile[config.language], 'center')
                return false
            }
            if (email.length < 7) {
                msgProvider.toast(msgText.mobileMinLength[config.language], 'center')
                return false
            }
            var mobilevalidation = config.mobilevalidation;
            if (mobilevalidation.test(email) !== true) {
                msgProvider.toast(msgText.validMobile[config.language], 'center')
                return false
            }
        }
        
        let url = config.baseURL + "forgot_password.php";
        var data = new FormData();
        data.append('email_mobile', email)
        data.append('forgot_type',type) //----1=email,2=mobile
        consolepro.consolelog('data', data)
        apifuntion.postApi(url, data).then((obj) => {
            consolepro.consolelog('res', obj)
            if (obj.success == 'true') {

                var user_id=obj.user_id;
                var forgot_id=obj.forgot_id;
                var otp=obj.otp;

                var otp_auto_fill=obj.otp_auto_fill;

                if(otp_auto_fill==false)
                {
                    otp=''
                }

                consolepro.consolelog({user_id})
                this.props.navigation.navigate('ForgotOTPVerify',{
                    forgot_type:type,
                    email_mobile:email,
                    user_id:user_id,
                    forgot_id:forgot_id,
                    otp:otp,
                    otp_auto_fill:otp_auto_fill
                })

            }
            else {
                if (obj.active_status == 0) {
                    config.checkUserDeactivate(this.props.navigation);
                    return false;
                }
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

            <SafeAreaView style={styles.container}>
            <StatusBar
              hidden={false}
              translucent={false}
              barStyle="light-content"
              networkActivityIndicatorVisible={true}
              backgroundColor={Colors.theme_color}
            />
    
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{width: mobileW, height: mobileH}}
              keyboardShouldPersistTaps="handled">
              <ImageBackground
                source={localimag.AppBackground}
                style={{
                  flex: 1,
                  width: mobileW,
                }}
                resizeMode="cover">
            
                <Image
                  style={{
                    width: (mobileW * 35) / 100,
                    height: (mobileW * 35) / 100,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    marginTop: (-mobileH * 2) / 100,
                  }}
                  source={localimag.Reju_logo}
                />
    
                <Text
                  style={{
                    color: Colors.whiteColor,
                    fontSize: (mobileW * 7.5) / 100,
                    textAlign: 'center',
                    fontFamily: Font.FontSemiBold,
                    marginTop: (-mobileH * 2) / 100,
                  }}>
                  {Lang_chg.forgotPassword[config.language]}
                </Text>
                <View
                  style={{
                    width: (mobileW * 90) / 100,
                    paddingVertical: (mobileH * 4) / 100,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                    backgroundColor: Colors.whiteColor,
                    alignSelf: 'center',
                    marginTop: (mobileH * 5) / 100,
                    borderRadius: (mobileW * 3) / 100,
                    padding: (mobileW * 7) / 100,
                  }}>
                  {/* Email */}
                  <View>
                    <Text
                      style={{
                        fontSize: (mobileW * 3) / 100,
                        color: Colors.todayColor,
                        fontFamily: Font.FontMedium,
                      }}>
                      {Lang_chg.email_txt[config.language]}
                    </Text>
    
                    <TextInput
                      style={{
                        fontFamily: Font.FontRegular,
                        width: (mobileW * 75) / 100,
                        fontSize: (mobileW * 4.5) / 100,
                        backgroundColor: Colors.white_color,
                        borderBottomColor: Colors.todayColor,
                        borderBottomWidth: (mobileW * 0.1) / 100,
                        color: Colors.black_color,
                        paddingLeft: 0,
                      }}
                      placeholderTextColor={Colors.black_color}
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
                        this.setState({errorno: 0, activeinput: 1});
                      }}
                      onChangeText={txt => {
                        this.setState({email: txt});
                      }}
                      maxLength={100}
                      value={this.state.email}
                    />
                  </View>
    
                 
                  {/* send */}
    
                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Login")}
                    activeOpacity={0.7}
                    style={{
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 7,
                      },
                      shadowOpacity: 0.43,
                      shadowRadius: 9.51,
                      backgroundColor: Colors.whiteColor,
                      width: (mobileW * 65) / 100,
    
                      borderRadius: (mobileW * 10) / 100,
                      elevation: 15,
                      alignSelf: 'center',
                      marginTop: (mobileH * 7) / 100,
                    }}>
                    <LinearGradient
                      colors={["#E77919", "#C6290A"]}
                      start={{x: 1, y: 0}}
                      end={{x: 0, y: 0}}
                      useAngle={true}
                      angle={90}
                      style={{
                        borderRadius: (mobileW * 30) / 100,
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
                        {Lang_chg.sendTxt[config.language]}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
    
                  {/* reset passowrd */}
    
                  <TouchableOpacity
                    onPress={() => {}}
                    activeOpacity={0.7}
                    style={{
                      alignSelf: 'center',
                      marginTop: (mobileH * 5) / 100,
                    }}>
                    <Text
                      style={{
                        color: Colors.black_color,
                        fontSize: (mobileW * 4) / 100,
                        fontFamily: Font.FontSemiBold,
                      }}>
                      {Lang_chg.resetPassword[config.language]}
                    </Text>
                  </TouchableOpacity>
                </View>
    
                {/* dont have an account */}
    
                <Text
                  style={{
                    fontSize: (mobileW * 3) / 100,
                    marginTop: (mobileH * 4) / 100,
                    letterSpacing: 2,
                    fontFamily: Font.FontSemiBold,
                    color: Colors.todayColor,
                    alignSelf: 'center',
                  }}>
                  {'......................................................'}
                </Text>
    
                <Text
                  style={{
                    fontSize: (mobileW * 3) / 100,
                    marginTop: (mobileH * 4) / 100,
                    fontFamily: Font.FontSemiBold,
                    color: Colors.todayColor,
                    alignSelf: 'center',
                  }}>{Lang_chg.donthaveanAccount[config.language]}</Text>
    
                <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate("Signup")} style = {{
                  width : mobileW * 20/100,
                  alignSelf : 'center'
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 3.8) / 100,
                    marginTop: (mobileH * 2) / 100,
                    fontFamily: Font.FontSemiBold,
                    color: Colors.black_color,
                    alignSelf: 'center',
                    textDecorationLine : 'underline'
                  }}>{Lang_chg.sign_up_txt[config.language]}</Text>
                </TouchableOpacity>
              </ImageBackground>
            </KeyboardAwareScrollView>
          </SafeAreaView>


        )
    }
} export default Forgotpassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
    
        backgroundColor: Colors.whiteColor,
      },
    view1:
    {
        backgroundColor: Colors.back_color,
        height: mobileH * 8 / 100,

        flexDirection: 'row',
        width: mobileW * 88 / 100,
        alignSelf: 'center',
        alignItems: 'center',

    },



})

