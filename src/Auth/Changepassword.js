import React, { Component } from "react";
import {
  Text,
  BackHandler,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Alert,
  View,
  StyleSheet,
  Keyboard,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  ScrollView,
  RadioButton,
  Button,
  TextInput,
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
  notification,
} from "../Provider/utilslib/Utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LinearGradient from "react-native-linear-gradient";
class Changepassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      securetext1: true,
      securetext2: true,
      securetext3: true,
      oldpassword: "",
      newpassword: "",
      cpassword: "",
      user_id: 0,
    };
  }

  componentDidMount() {
    this.getUserDetails();
    consolepro.consolelog("iam change password");
  }

  //-------------------function for set user id-----------------

  getUserDetails = async () => {
    let result = await localStorage.getItemString("user_id");
    consolepro.consolelog("result", result);
    if (result != null) {
      let user_id_get = "";
      if (result != null) {
        user_id_get = result;
      }
      this.setState({
        user_id: user_id_get,
      });
    }
  };
  eyepress1 = () => {
    if (this.state.securetext1) {
      this.setState({ securetext1: false });
    } else {
      this.setState({ securetext1: true });
    }
  };
  eyepress2 = () => {
    if (this.state.securetext2) {
      this.setState({ securetext2: false });
    } else {
      this.setState({ securetext2: true });
    }
  };
  eyepress3 = () => {
    if (this.state.securetext3) {
      this.setState({ securetext3: false });
    } else {
      this.setState({ securetext3: true });
    }
  };

  //--------------------------function for update password---------------

  submit_btn = () => {
    if (config.app_status == 0) {
      //----for prototype----------//
      consolepro.consolelog("iam prototype");
      this.props.navigation.goBack();
      return false;
    } else {
      let { user_id, oldpassword, newpassword, confirmpassword } = this.state;
      consolepro.consolelog({
        user_id,
        oldpassword,
        newpassword,
        confirmpassword,
      });
      var pattern = config.passwordvalidation;
      // ===============================oldpassword===================
      if (oldpassword.length <= 0) {
        msgProvider.toast(msgText.emptyOldPassword[config.language], "center");
        return false;
      }
      if (oldpassword.length <= 5) {
        msgProvider.toast(
          msgText.oldPasswordMinLength[config.language],
          "center"
        );
        return false;
      }
      //======================================= newpassword===================
      if (newpassword.length <= 0) {
        msgProvider.toast(msgText.emptyNewPassword[config.language], "center");
        return false;
      }
      if (newpassword.length <= 5) {
        msgProvider.toast(
          msgText.newPasswordMinLength[config.language],
          "center"
        );
        return false;
      }
      //================================confirmpassword===================
      if (confirmpassword.length <= 0) {
        msgProvider.toast(
          msgText.emptyConfirmPassword[config.language],
          "center"
        );
        return false;
      }
      if (confirmpassword.length <= 5) {
        msgProvider.toast(
          msgText.confirmPasswordMinLength[config.language],
          "center"
        );
        return false;
      }
      if (confirmpassword !== newpassword) {
        msgProvider.toast(msgText.passwordNotMatch[config.language], "center");
        return false;
      }

      //----------------------api calling----------

      let url = config.baseURL + "change_password.php";
      var data = new FormData();
      data.append("user_id", user_id);
      data.append("password_old", oldpassword);
      data.append("password_new", newpassword);
      consolepro.consolelog("data", data);
      apifuntion
        .postApi(url, data)
        .then((obj) => {
          consolepro.consolelog("user_arr", obj);
          if (obj.success == "true") {
            localStorage.setItemString("password", newpassword);
            setTimeout(() => {
              msgProvider.toast(obj.msg[config.language], "center");
            }, 300);

            this.props.navigation.goBack();
          } else {
            if (obj.account_active_status == 0) {
              config.checkUserDeactivate(this.props.navigation);
              return false;
            }
            msgProvider.alert(
              msgTitle.information[config.language],
              obj.msg[config.language],
              false
            );
            return false;
          }
        })
        .catch((error) => {
          consolepro.consolelog("-------- error ------- " + error);
        });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          hidden={false}
          backgroundColor={Colors.theme_color}
          translucent={false}
          barStyle="light-content"
          networkActivityIndicatorVisible={true}
        />

        {/* // -------- Header ------------------- */}
        <View
          style={{
            width: (mobileW * 90) / 100,
            height: (mobileH * 7) / 100,
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            activeOpacity={0.7}
          >
            <Image
              style={{
                height: (mobileW * 5) / 100,
                width: (mobileW * 5) / 100,
              }}
              source={localimag.blackback}
            ></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: (mobileW * 5) / 100,
              fontFamily: Font.FontSemiBold,
              color: Colors.black_color,
            }}
          >
            {Lang_chg.changepassword_txt[config.language]}
          </Text>

          <View
            style={{
              width: (mobileW * 8) / 100,
            }}
          ></View>
        </View>
        {/* // -------- Header End ------------------- */}

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ width: mobileW, alignItems: "center" }}
          keyboardShouldPersistTaps="handled"
        >
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
                secureTextEntry={this.state.securetext1}
                placeholderTextColor={Colors.greyColor}
                placeholder={Lang_chg.currentpasswordText[config.language]}
                keyboardType="default"
                returnKeyLabel="done"
                returnKeyType="done"
                ref={(input) => {
                  this.mobilefield = input;
                }}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                onFocus={() => {
                  this.setState({ errorno: 0, activeinput: 1 });
                }}
                onChangeText={(txt) => {
                  this.setState({ oldpassword: txt });
                }}
                maxLength={16}
                value={this.state.oldpassword}
              />

              <TouchableOpacity
                onPress={() => {
                  this.eyepress1();
                }}
                activeOpacity={0.7}
              >
                {this.state.securetext1 ? (
                  <Text
                    style={{
                      width: (mobileW * 15) / 100,
                      color: Colors.theme_color2,
                      fontSize: (mobileW * 3.5) / 100,

                      fontFamily: Font.FontMedium,
                    }}
                  >
                    {" "}
                    {Lang_chg.Show[config.language]}
                  </Text>
                ) : (
                  <Text
                    style={{
                      width: (mobileW * 15) / 100,
                      color: Colors.theme_color2,
                      fontSize: (mobileW * 3.5) / 100,

                      fontFamily: Font.FontMedium,
                    }}
                  >
                    {" "}
                    {Lang_chg.Hide[config.language]}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>

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
                secureTextEntry={this.state.securetext2}
                placeholderTextColor={Colors.greyColor}
                placeholder={Lang_chg.newpasswordText[config.language]}
                keyboardType="default"
                returnKeyLabel="done"
                returnKeyType="done"
                ref={(input) => {
                  this.mobilefield = input;
                }}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                onFocus={() => {
                  this.setState({ errorno: 0, activeinput: 1 });
                }}
                onChangeText={(txt) => {
                  this.setState({ newpassword: txt });
                }}
                maxLength={16}
                value={this.state.newpassword}
              />

              <TouchableOpacity
                onPress={() => {
                  this.eyepress2();
                }}
                activeOpacity={0.7}
              >
                {this.state.securetext2 ? (
                  <Text
                    style={{
                      width: (mobileW * 15) / 100,
                      color: Colors.theme_color2,
                      fontSize: (mobileW * 3.5) / 100,

                      fontFamily: Font.FontMedium,
                    }}
                  >
                    {" "}
                    {Lang_chg.Show[config.language]}
                  </Text>
                ) : (
                  <Text
                    style={{
                      width: (mobileW * 15) / 100,
                      color: Colors.theme_color2,
                      fontSize: (mobileW * 3.5) / 100,

                      fontFamily: Font.FontMedium,
                    }}
                  >
                    {" "}
                    {Lang_chg.Hide[config.language]}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>

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
                secureTextEntry={this.state.securetext3}
                placeholderTextColor={Colors.greyColor}
                placeholder={Lang_chg.cpass_txt[config.language]}
                keyboardType="default"
                returnKeyLabel="done"
                returnKeyType="done"
                ref={(input) => {
                  this.mobilefield = input;
                }}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                onFocus={() => {
                  this.setState({ errorno: 0, activeinput: 1 });
                }}
                onChangeText={(txt) => {
                  this.setState({ confirmpassword: txt });
                }}
                maxLength={16}
                value={this.state.confirmpassword}
              />

              <TouchableOpacity
                onPress={() => {
                  this.eyepress3();
                }}
                activeOpacity={0.7}
              >
                {this.state.securetext3 ? (
                  <Text
                    style={{
                      width: (mobileW * 15) / 100,
                      color: Colors.theme_color2,
                      fontSize: (mobileW * 3.5) / 100,

                      fontFamily: Font.FontMedium,
                    }}
                  >
                    {" "}
                    {Lang_chg.Show[config.language]}
                  </Text>
                ) : (
                  <Text
                    style={{
                      width: (mobileW * 15) / 100,
                      color: Colors.theme_color2,
                      fontSize: (mobileW * 3.5) / 100,

                      fontFamily: Font.FontMedium,
                    }}
                  >
                    {" "}
                    {Lang_chg.Hide[config.language]}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            activeOpacity={0.7}
            style={{
              width: (mobileW * 90) / 100,
              alignSelf: "center",
              marginTop: (mobileH * 3) / 100,
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
                {Lang_chg.changepassword_txt[config.language]}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
export default Changepassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.back_color,
  },
});
