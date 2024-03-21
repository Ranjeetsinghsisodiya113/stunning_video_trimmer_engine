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
} from '../Provider/utilslib/Utils';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      country_code_modal: false,
      country_code_arr: [
        {
          code: '1',
          status: false,
          flag: localimag.canada,
          name: 'Canada',
        },
        {
          code: '91',
          status: true,
          flag: localimag.india,
          name: 'India',
        },
      ],
      social_data: 'NA',
      password_hide: false,
      email_edit: true,
      fullname_edit: true,
      otp_loader: false,
      name: '',
      isModelVisible: false
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('focus', () => {
      this.setProfileData();
    });
    this.setState({ social_data: 'NA' });
    this.setProfileData();
  }
  //---------set profile while social login---------//
  setProfileData = async () => {
    let result = await localStorage.getItemObject('socialdata');
    // alert(JSON.stringify(result))
    consolepro.consolelog({ result });
    if (result != null) {
      let email = result.social_email;
      let fullname = result.social_name;
      if (email != null) {
        this.setState({
          email: email,
          email_edit: false,
          social_data: result,
          password_hide: true,
        });
      }
      if (fullname != null) {
        this.setState({
          fullname: fullname,
          fullname_edit: false,
          social_data: result,
          password_hide: true,
        });
      }
    }
  };

  //---------for password-------------
  eyepress1 = () => {
    if (this.state.securetext1) {
      this.setState({ securetext1: false });
    } else {
      this.setState({ securetext1: true });
    }
  };

  //-----------------for confirm password-----------------
  eyepress2 = () => {
    if (this.state.securetext2) {
      this.setState({ securetext2: false });
    } else {
      this.setState({ securetext2: true });
    }
  };

  //-------------for accept terms and conditions---------------
  remember_me = () => {
    if (this.state.remember_me) {
      this.setState({ remember_me: false });
    } else {
      this.setState({ remember_me: true });
    }
  };

  //------------------signup function--------------
  signup_btn = () => {
    Keyboard.dismiss();
    let {
      fullname,
      email,
      mobile,
      password,
      confirmpassword,
      remember_me,
      address,
      pincode,
      country_code,
    } = this.state;
    consolepro.consolelog({
      fullname,
      email,
      mobile,
      password,
      confirmpassword,
      remember_me,
      address,
      pincode,
      country_code,
    });
    //  alert(fullname+email+mobile+password+confirmpassword)
    //------------------fullname===================
    if (fullname.length <= 0) {
      msgProvider.toast(msgText.emptyName[config.language], 'center');
      return false;
    }
    if (fullname.length <= 2) {
      msgProvider.toast(msgText.nameMinLength[config.language], 'center');
      return false;
    }
    //======================================mobile============================
    if (mobile.length <= 0) {
      msgProvider.toast(msgText.emptyMobile[config.language], 'center');
      return false;
    }
    if (mobile.length < 7) {
      msgProvider.toast(msgText.mobileMinLength[config.language], 'center');
      return false;
    }
    var mobilevalidation = config.mobilevalidation;
    if (mobilevalidation.test(mobile) !== true) {
      msgProvider.toast(msgText.validMobile[config.language], 'center');
      return false;
    }
    //=======================================email============================
    if (email.length <= 0) {
      msgProvider.toast(msgText.emptyEmail[config.language], 'center');
      return false;
    }
    var emailvalidation = config.emailvalidation;
    if (emailvalidation.test(email) !== true) {
      msgProvider.toast(msgText.validEmail[config.language], 'center');
      return false;
    }

    //==================================password===================
    if (password.length <= 0) {
      msgProvider.toast(msgText.emptyPassword[config.language], 'center');
      return false;
    }
    if (password.length <= 5) {
      msgProvider.toast(msgText.passwordMinLength[config.language], 'center');
      return false;
    }
    if (password.length > 15) {
      msgProvider.toast(msgText.passwordMaxLength[config.language], 'center');
      return false;
    }
    var pattern = config.passwordvalidation;
    if (pattern.test(password) !== true) {
      msgProvider.toast(msgText.validPassword[config.language], 'center');
      return false;
    }

    //==================================confirmpassword===================
    if (confirmpassword.length <= 0) {
      msgProvider.toast(
        msgText.emptyConfirmPassword[config.language],
        'center',
      );
      return false;
    }
    if (confirmpassword.length <= 5) {
      msgProvider.toast(
        msgText.confirmPasswordMinLength[config.language],
        'center',
      );
      return false;
    }
    if (confirmpassword !== password) {
      msgProvider.toast(msgText.passwordNotMatch[config.language], 'center');
      return false;
    }
    if (remember_me == false) {
      msgProvider.toast(msgText.acceptTerms[config.language], 'center');
      return false;
    }
    let url = config.baseURL + 'signup.php';
    var data = new FormData();
    data.append('name', fullname);
    data.append('email', email);
    data.append('mobile', mobile);
    data.append('password', password);
    data.append('login_type', config.login_type);
    data.append('device_type', config.device_type);
    data.append('player_id', player_id_me1);

    consolepro.consolelog('data', data);
    consolepro.consolelog('url', url);
    // return false
    apifuntion
      .postApi(url, data)
      .then(obj => {
        consolepro.consolelog('user_arr', obj);
        if (obj.success == 'true') {
          var user_arr = obj.user_details;
          var user_id = user_arr.user_id;
          var email_arr = obj.email_arr;
          var otp = user_arr.otp;
          var otp_verify = user_arr.otp_verify;

          localStorage.setItemString('user_id', JSON.stringify(user_id));
          localStorage.setItemObject('user_arr', user_arr);
          localStorage.setItemString('password', this.state.password);
          localStorage.setItemString('email', this.state.email);
          //-------otp page redirection here....
          this.props.navigation.navigate('OtpVerification');
        } else {
          setTimeout(() => {
            msgProvider.alert(
              msgTitle.information[config.language],
              obj.msg[config.language],
              false,
            );
            return false;
          }, 300);
        }
      })
      .catch(error => {
        consolepro.consolelog('-------- error ------- ' + error);
      });
  };

  //----------function for social login ----------------//

  _btnSocialDataSubmit = () => {
    consolepro.consolelog('I am in social login');
    Keyboard.dismiss();
    return false;
    let {
      fullname,
      email,
      mobile,
      password,
      confirmpassword,
      remember_me,
      address,
      pincode,
      country_code,
    } = this.state;
    consolepro.consolelog({
      fullname,
      email,
      mobile,
      password,
      confirmpassword,
      remember_me,
      address,
      pincode,
      country_code,
    });
    //  alert(fullname+email+mobile+password+confirmpassword)
    //======================================mobile============================
    if (mobile.length <= 0) {
      msgProvider.toast(msgText.emptyMobile[config.language], 'center');
      return false;
    }
    if (mobile.length < 9) {
      msgProvider.toast(msgText.mobileMinLength[config.language], 'center');
      return false;
    }
    if (mobile.length > 10) {
      msgProvider.toast(msgText.mobileMaxLength[config.language], 'center');
      return false;
    }
    var mobilevalidation = config.mobilevalidation;
    if (mobilevalidation.test(mobile) !== true) {
      msgProvider.toast(msgText.validMobile[config.language], 'center');
      return false;
    }

    //------------------address===================
    if (address.length <= 0) {
      msgProvider.toast(msgText.emptyAddress[config.language], 'center');
      return false;
    }
    if (address.length <= 2) {
      msgProvider.toast(msgText.addressMinLength[config.language], 'center');
      return false;
    }
    // if (address.length > 500) {
    //     msgProvider.toast(msgText.addressMaxLength[config.language], 'center')
    //     return false
    // }
    // var addressvalidation = config.addressvalidation;
    // if (addressvalidation.test(address) !== true) {
    //     msgProvider.toast(msgText.validAddress[config.language], 'center')
    //     return false
    // }

    //------------------pincode===================
    if (pincode.trim().length <= 0) {
      msgProvider.toast(msgText.emptyPincode[config.language], 'center');
      return false;
    }

    if (pincode.trim().length > 6) {
      msgProvider.toast(msgText.pincodeMaxLength[config.language], 'center');
      return false;
    }
    var mobilevalidation = config.mobilevalidation;
    if (mobilevalidation.test(pincode) !== true) {
      msgProvider.toast(msgText.validPincode[config.language], 'center');
      return false;
    }

    if (remember_me == false) {
      msgProvider.toast(msgText.acceptTerms[config.language], 'center');
      return false;
    }

    let url = config.baseURL + 'signup.php';
    var data = new FormData();
    data.append('name', fullname);
    data.append('email', email);
    data.append('mobile', mobile);
    data.append('address', address.trim());
    data.append('pincode', pincode);
    data.append('phone_code', country_code);
    data.append('login_type', this.state.social_data.logintype);
    data.append('social_id', this.state.social_data.social_id);
    data.append('device_type', config.device_type);
    data.append('player_id', player_id_me1);

    consolepro.consolelog('data', data);
    apifuntion
      .postApi(url, data)
      .then(obj => {
        consolepro.consolelog('user_arr', obj);
        // alert(JSON.stringify(obj))
        if (obj.success == 'true') {
          var user_arr = obj.user_details;
          var user_id = user_arr.user_id;
          var notification_arr = obj.notification_arr;
          consolepro.consolelog({ notification_arr });
          consolepro.consolelog({ notification_arr });
          if (notification_arr != 'NA') {
            consolepro.consolelog({ notification_arr });
            notification.notification_arr(notification_arr);
          }

          localStorage.setItemString('user_id', JSON.stringify(user_id));
          localStorage.setItemObject('user_arr', user_arr);
          localStorage.setItemString('email', this.state.email);
          localStorage.removeItem('socialdata');
          this.props.navigation.navigate('Home');
        } else {
          msgProvider.alert(
            msgTitle.information[config.language],
            obj.msg[config.language],
            false,
          );
          return false;
        }
      })
      .catch(error => {
        consolepro.consolelog('-------- error ------- ' + error);
      });
  };

  //---------------------SetCountryCode function -------------
  SetCountryCode = (item, index) => {
    consolepro.consolelog({ item, index });
    let data = this.state.country_code_arr;
    let len = this.state.country_code_arr.length;
    for (let i = 0; i < len; i++) {
      data[i].status = false;
    }

    data[index].status = !data[index].status;
    this.setState({
      country_code: data[index].code,
      country_code_modal: false,
      country_code_arr: data,
    });
  };

  //----------------SetCountryCode funtion end------------//

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
        <View
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
          onPress={()=>{
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
          <View style={{
            height: mobileH * 4 / 100,
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
            paddingHorizontal: mobileW * 2.5 / 100,
            width: mobileW * 30 / 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <View style={{
              width: mobileW * 18 / 100,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Image
                style={{
                  width: (mobileW * 4) / 100,
                  height: (mobileW * 4) / 100,
                  resizeMode: 'contain',


                }}
                source={localimag.country_icon}
              />
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 3.2) / 100,
                  textAlign: 'center',
                  fontFamily: Font.FontMedium,

                }}>
                {'English'}
              </Text>
            </View>
            <Image
              style={{
                width: (mobileW * 3) / 100,
                height: (mobileW * 3) / 100,
                resizeMode: 'contain',
              }}
              source={localimag.dropdown_icon}
            />

          </View>

        </View>

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            width: mobileW, height: mobileH * 88 / 100,

          }}
          keyboardShouldPersistTaps="handled">

          
          <Image
            style={{
              marginTop:(-mobileW*8/100),
              width: (mobileW * 40) / 100,
              height: (mobileW * 40) / 100,
              resizeMode: 'contain',
              alignSelf: 'center',
             
            }}
            source={localimag.welocme_logo}
          />

          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 5) / 100,
              textAlign: 'center',
              fontFamily: Font.FontBold,

            }}>
            {Lang_chg.Signup_txt[config.language]}
          </Text>

          <Text
            style={{
              marginTop: mobileH * 1 / 100,
              color: Colors.black_color,
              fontSize: (mobileW * 3.5) / 100,
              textAlign: 'center',
              fontFamily: Font.FontMedium,

            }}>
            {Lang_chg.SignInDescription_txt[config.language]}
          </Text>

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
                source={localimag.user}
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
                placeholder={Lang_chg.nameTxt[config.language]}
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
          {/* Password */}
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
                source={localimag.password_icon}
              />
              <TextInput
                style={{
                  fontFamily: Font.FontRegular,
                  width: (mobileW * 57) / 100,
                  fontSize: (mobileW * 3.5) / 100,


                  color: Colors.black_color,
                  paddingLeft: 0,
                }}
                secureTextEntry={this.state.securetext1}
                placeholderTextColor={Colors.greyColor}
                placeholder={Lang_chg.PasswordTxt[config.language]}
                keyboardType="default"
                returnKeyLabel="done"
                returnKeyType="done"
                
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                onFocus={() => {
                  this.setState({ errorno: 0, activeinput: 1 });
                }}
                onChangeText={txt => {
                  this.setState({ password: txt });
                }}
                maxLength={16}
                value={this.state.password}
              />
               <TouchableOpacity
              activeOpacity={0.9}
              onPress={()=>{
                this.eyepress1()
              }}
              
              >
              <Text
                style={{
                  width: (mobileW * 15) / 100,
                  color: Colors.theme_color2,
                  fontSize: (mobileW * 3.5) / 100,

                  fontFamily: Font.FontMedium,
                }}
              >
                {
                  this.state.securetext1==true?
                Lang_chg.Show[config.language]
                :
                Lang_chg.Hide[config.language]
                }
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* confirm password */}

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
                source={localimag.password_icon}
              />
              <TextInput
                style={{
                  fontFamily: Font.FontRegular,
                  width: (mobileW * 57) / 100,
                  fontSize: (mobileW * 3.5) / 100,


                  color: Colors.black_color,
                  paddingLeft: 0,
                }}
                placeholderTextColor={Colors.greyColor}
                placeholder={Lang_chg.ConfirmPasswordTxt[config.language]}
                keyboardType="default"
                returnKeyLabel="done"
                returnKeyType="done"
                secureTextEntry={this.state.securetext2}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                onFocus={() => {
                  this.setState({ errorno: 0, activeinput: 1 });
                }}
                onChangeText={txt => {
                  this.setState({ confirmpassword: txt });
                }}
                maxLength={16}
                value={this.state.confirmpassword}
              />
               <TouchableOpacity
              activeOpacity={0.9}
              onPress={()=>{
                this.eyepress2()
              }}
              
              >
              <Text
                style={{
                  width: (mobileW * 15) / 100,
                  color: Colors.theme_color2,
                  fontSize: (mobileW * 3.5) / 100,

                  fontFamily: Font.FontMedium,
                }}
              >
                {
                  this.state.securetext2==true?
                Lang_chg.Show[config.language]
                :
                Lang_chg.Hide[config.language]
                }
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Accept terms and condition */}

          <View style={{
            marginTop: mobileH * 3 / 100,
            width: mobileW * 85 / 100,
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Image
              style={{
                borderRadius: mobileW * 2 / 100,
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
                backgroundColor: "#B48EFB"

              }}
              source={localimag.password_icon}
            />
            <Text
              style={{
                marginHorizontal: mobileW * 2 / 100,
                textAlign: 'center',
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMedium,
              }}
            >
              {Lang_chg.iaccept_txt[config.language]}
            </Text>
            <Text
              style={{
                color: "#B48EFB",
                textAlign: 'center',

                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMedium,
              }}
            >
              {Lang_chg.terms_and_condition_txt[config.language]}
            </Text>
            <Text
              style={{
                marginHorizontal: mobileW * 2 / 100,
                color: Colors.black_color,
                textAlign: 'center',

                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMedium,
              }}
            >
              {Lang_chg.and_txt[config.language]}
            </Text>

          </View>
          <Text
            style={{
              color: "#B48EFB",
              textAlign: 'center',
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontMedium,
            }}
          >
            {Lang_chg.privacy_policy_txt[config.language]}
          </Text>
          {/* signUp */}

          <TouchableOpacity
            onPress={() => {
           
              this.props.navigation.navigate("OtpVerification")
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
                {Lang_chg.Signup_txt[config.language]}
              </Text>
            </LinearGradient>
          </TouchableOpacity>






          {/* Already have an account */}


          <View style={{ position: 'absolute', justifyContent: 'center', alignSelf: 'center', bottom: 5, flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontSemiBold,
                color: Colors.black_color,
                alignSelf: 'center',
              }}>{Lang_chg.alreadyhaveAnAccount[config.language]}</Text>

            <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate("Login")} style={{
              width: mobileW * 20 / 100,
              alignSelf: 'center'
            }}>
              <Text
                style={{
                  fontSize: (mobileW * 3.8) / 100,
                  fontFamily: Font.FontBold,
                  color: Colors.theme_color,
                  alignSelf: 'center',

                }}>{Lang_chg.SignIn_txt[config.language]}</Text>
            </TouchableOpacity>
          </View>

        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
export default Signup;

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
