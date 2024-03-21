import React, { Component } from "react";
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
} from "react-native";
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
} from "../Provider/utilslib/Utils";
import Fontisto from "react-native-vector-icons/Fontisto";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LinearGradient from "react-native-linear-gradient";
class Login extends Component {
  _didFocusSubscription;
  _willBlurSubscription;
  constructor(props) {
    super(props);

    this.state = {
      //predefined don't change
      securetext: true,
      remember_me: false,
      email: "",
      password: "",
      //your variable start here
    };
    this._didFocusSubscription = props.navigation.addListener(
      "focus",
      (payload) =>
        BackHandler.addEventListener("hardwareBackPress", this.handleBackPress)
    );
  }
  componentDidMount() {
    this.checkRememberMe();
    this._willBlurSubscription = this.props.navigation.addListener(
      "blur",
      (payload) =>
        BackHandler.removeEventListener(
          "hardwareBackPress",
          this.handleBackPress
        )
    );
  }
  //-------do not change ------------//
  //--------------remember me check function---------------------
  checkRememberMe = async () => {
    var remember_me = await localStorage.getItemString("remember_me");
    consolepro.consolelog("rememberme", remember_me);
    if (remember_me == "yes") {
      let email = await localStorage.getItemString("email");
      let password = await localStorage.getItemString("password");
      consolepro.consolelog("email", email);
      consolepro.consolelog("password", password);
      this.setState({
        email: email,
        password: password,
        remember_me: true,
      });
    } else {
      this.setState({
        email: "",
        password: "",
        remember_me: false,
      });
    }
  };
  //    for backhandler
  handleBackPress = () => {
    Alert.alert(
      Lang_chg.go_back_txt[config.language],
      Lang_chg.do_you_want_exit_txt[config.language],
      [
        {
          text: Lang_chg.no_txt[config.language],
          onPress: () => consolepro.consolelog("Cancel Pressed"),
        },
        {
          text: Lang_chg.yes_txt[config.language],
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      }
    ); // works best when the goBack is async
    return true;
  };
  // for password hide show
  eyepress = () => {
    if (this.state.securetext) {
      this.setState({ securetext: false });
    } else {
      this.setState({ securetext: true });
    }
  };
  // for remember me
  remember_me = () => {
    if (this.state.remember_me) {
      this.setState({ remember_me: false });
    } else {
      this.setState({ remember_me: true });
    }
  };
  //-------function for login start---
  loginBtn = () => {
    Keyboard.dismiss();
    if (config.app_status == 0) {
      //----for prototype----------//
      consolepro.consolelog("iam prototype");
      this.props.navigation.navigate("Home");
      return false;
    } else {
      //----for dynamic----------//
      consolepro.consolelog("iam dynamic");
      let { email, password, remember_me } = this.state;
      consolepro.consolelog({ email, password, remember_me });

      //======================================email============================
      if (email.length <= 0) {
        msgProvider.toast(msgText.emptyEmail[config.language], "center");
        return false;
      }
      var reg = config.emailvalidation;
      if (reg.test(email) !== true) {
        msgProvider.toast(msgText.validEmail[config.language], "center");
        return false;
      }
      //=====================================password===================
      if (password.length <= 0) {
        msgProvider.toast(msgText.emptyPassword[config.language], "center");
        return false;
      }
      if (password.length <= 5) {
        msgProvider.toast(msgText.passwordMinLength[config.language], "center");
        return false;
      }
      let url = config.baseURL + "login.php";
      var data = new FormData();
      data.append("email", email);
      data.append("password", password);
      data.append("login_type", config.login_type);
      data.append("device_type", config.device_type);
      data.append("player_id", player_id_me1);

      consolepro.consolelog("data", data);
      consolepro.consolelog("url", url);
      apifuntion
        .postApi(url, data)
        .then((obj) => {
          consolepro.consolelog("user_arr", obj);

          if (obj.success == "true") {
            var user_arr = obj.user_details;
            var user_id = user_arr.user_id;
            var email_arr = obj.email_arr;
            var otp_verfiy = user_arr.otp_verify;
            if (remember_me) {
              localStorage.setItemString("remember_me", "yes");
            } else {
              localStorage.setItemString("remember_me", "no");
            }
            localStorage.setItemString("user_id", JSON.stringify(user_id));
            localStorage.setItemObject("user_arr", user_arr);
            localStorage.setItemString("password", this.state.password);
            localStorage.setItemString("email", this.state.email);
            firebaseprovider.firebaseUserCreate();
            // firebaseprovider.getMyInboxAllData();
            firebaseprovider.getMyInboxAllDataBooking();
            if (otp_verfiy == 1) {
              this.props.navigation.navigate("Home");
            } else {
              //-------otp page redirection here....
              this.props.navigation.navigate("OtpVerification");
            }
          } else {
            if (obj.active_status == 0) {
              config.checkUserDeactivate(this.props.navigation);
              return false;
            }
            setTimeout(() => {
              msgProvider.alert(
                msgTitle.information[config.language],
                obj.msg[config.language],
                false
              );
              return false;
            }, 300);
          }
        })
        .catch((error) => {
          consolepro.consolelog("-------- error ------- " + error);
        });
    }
  };

  //-------function for login end---

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
            alignSelf: "center",
            width: (mobileW * 90) / 100,
            height: (mobileH * 10) / 100,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              this.props.navigation.navigate("WelcomeScreens");
            }}
          >
            <Image
              style={{
                width: (mobileW * 6) / 100,
                height: (mobileW * 6) / 100,
                resizeMode: "contain",
              }}
              source={localimag.blackback}
            />
          </TouchableOpacity>
          <View
            style={{
              height: (mobileH * 4) / 100,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.43,
              shadowRadius: 9.51,
              backgroundColor: Colors.whiteColor,
              borderRadius: (mobileW * 1) / 100,
              elevation: 15,
              paddingHorizontal: (mobileW * 2.5) / 100,
              width: (mobileW * 30) / 100,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: (mobileW * 18) / 100,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                style={{
                  width: (mobileW * 4) / 100,
                  height: (mobileW * 4) / 100,
                  resizeMode: "contain",
                }}
                source={localimag.country_icon}
              />
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 3.2) / 100,
                  textAlign: "center",
                  fontFamily: Font.FontMedium,
                }}
              >
                {"English"}
              </Text>
            </View>
            <Image
              style={{
                width: (mobileW * 3) / 100,
                height: (mobileW * 3) / 100,
                resizeMode: "contain",
              }}
              source={localimag.dropdown_icon}
            />
          </View>
        </View>

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            width: mobileW,
            height: (mobileH * 88) / 100,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            style={{
              width: (mobileW * 40) / 100,
              height: (mobileW * 40) / 100,
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={localimag.welocme_logo}
          />

          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 5) / 100,
              textAlign: "center",
              fontFamily: Font.FontBold,
            }}
          >
            {Lang_chg.SignIn_txt[config.language]}
          </Text>

          <Text
            style={{
              marginTop: (mobileH * 1) / 100,
              color: Colors.black_color,
              fontSize: (mobileW * 3.5) / 100,
              textAlign: "center",
              fontFamily: Font.FontMedium,
            }}
          >
            {Lang_chg.SignInDescription_txt[config.language]}
          </Text>
          <View
            style={{
              marginTop: (mobileH * 4) / 100,
              alignSelf: "center",
              width: (mobileW * 90) / 100,
              alignItems: "center",
              borderBottomColor: Colors.theme_color2,
              borderBottomWidth: (mobileW * 0.1) / 100,
            }}
          >
            <View
              style={{
                alignSelf: "center",

                height: (mobileH * 6) / 100,
                flexDirection: "row",
                width: (mobileW * 85) / 100,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                style={{
                  width: (mobileW * 6) / 100,
                  height: (mobileW * 6) / 100,
                  resizeMode: "contain",
                  alignSelf: "center",
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
                
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                onFocus={() => {
                  this.setState({ errorno: 0, activeinput: 1 });
                }}
                onChangeText={(txt) => {
                  this.setState({ email: txt });
                }}
                maxLength={100}
                value={this.state.email}
              />
            </View>
          </View>
          {/* Password */}
          <View
            style={{
              marginTop: (mobileH * 2) / 100,
              alignSelf: "center",
              width: (mobileW * 90) / 100,
              alignItems: "center",
              borderBottomColor: Colors.theme_color2,
              borderBottomWidth: (mobileW * 0.1) / 100,
            }}
          >
            <View
              style={{
                alignSelf: "center",

                height: (mobileH * 6) / 100,
                flexDirection: "row",
                width: (mobileW * 85) / 100,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                style={{
                  width: (mobileW * 6) / 100,
                  height: (mobileW * 6) / 100,
                  resizeMode: "contain",
                  alignSelf: "center",
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
                secureTextEntry={this.state.securetext}
                placeholderTextColor={Colors.greyColor}
                placeholder={Lang_chg.PasswordTxt[config.language]}
                keyboardType="defualt"
                returnKeyLabel="done"
                returnKeyType="done"
                
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                onFocus={() => {
                  this.setState({ errorno: 0, activeinput: 1 });
                }}
                onChangeText={(txt) => {
                  this.setState({ password: txt });
                }}
                maxLength={16}
                value={this.state.password}
              />
              <TouchableOpacity
              activeOpacity={0.9}
              onPress={()=>{
                this.eyepress()
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
                  this.state.securetext==true?
                Lang_chg.Show[config.language]
                :
                Lang_chg.Hide[config.language]
                }
              </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* signIn */}

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
            activeOpacity={0.7}
            style={{
              width: (mobileW * 90) / 100,
              alignSelf: "center",
              marginTop: (mobileH * 4) / 100,
            }}
          >
            <LinearGradient
              colors={[Colors.theme_color, Colors.theme_color2]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
              useAngle={true}
              angle={90}
              style={{
                borderRadius: (mobileW * 3) / 100,
                alignItems: "center",
                justifyContent: "center",
                height: (mobileH * 6.5) / 100,
                // width: mobileW * 50/100,
              }}
            >
              <Text
                style={{
                  fontSize: (mobileW * 3.8) / 100,
                  color: Colors.whiteColor,
                  fontFamily: Font.FontSemiBold,
                }}
              >
                {Lang_chg.signInTxt[config.language]}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* forgot passowrd */}

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Forgotpassword")}
            activeOpacity={0.7}
            style={{
              alignSelf: "center",
              marginTop: (mobileH * 4) / 100,
            }}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                textDecorationColor: Colors.black_color,
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontSemiBold,
              }}
            >
              {Lang_chg.forgotPasswordLogin[config.language]}
            </Text>
          </TouchableOpacity>

          {/* dont have an account */}

          <View
            style={{
              position: "absolute",
              justifyContent: "center",
              alignSelf: "center",
              bottom: 30,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontSemiBold,
                color: Colors.black_color,
                alignSelf: "center",
              }}
            >
              {Lang_chg.donthaveanAccount[config.language]}
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => this.props.navigation.navigate("Signup")}
              style={{
                width: (mobileW * 20) / 100,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontSize: (mobileW * 3.8) / 100,
                  fontFamily: Font.FontBold,
                  color: Colors.theme_color,
                  alignSelf: "center",
                }}
              >
                {Lang_chg.Signup_txt[config.language]}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.whiteColor,
  },
  view1: {
    backgroundColor: Colors.back_color,
    height: (mobileH * 8) / 100,

    flexDirection: "row",
    width: (mobileW * 88) / 100,
    alignSelf: "center",
    alignItems: "center",
  },
});
