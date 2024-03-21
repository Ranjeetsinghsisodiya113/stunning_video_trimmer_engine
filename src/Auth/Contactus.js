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
} from "../Provider/utilslib/Utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LinearGradient from "react-native-linear-gradient";
class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      message: "",
      user_id: 0,
    };
  }

  componentDidMount() {
    consolepro.consolelog("I am on student contact us  page");
    this._setUserProfile();
  }

  //-----------set user profile details from local------------------------
  _setUserProfile = async () => {
    let result = await localStorage.getItemObject("user_arr");
    console.log("result", result);
    if (result != null) {
      this.setState({
        name: result.name,
        user_id: result.user_id,
        email: result.email,
      });
    }
  };

  //------------submit btn------------//
  submitBtn = () => {
    consolepro.consolelog("I am in submit btn");
    if (config.app_status == 0) {
      this.props.navigation.goBack();
    } else {
      let { user_id, name, email, message } = this.state;
      consolepro.consolelog({ user_id, name, email, message });

      //------------------name===================
      if (name.trim().length <= 0) {
        msgProvider.toast(msgText.emptyName[config.language], "center");
        return false;
      }
      if (name.trim().length <= 2) {
        msgProvider.toast(msgText.nameMinLength[config.language], "center");
        return false;
      }
      //===========email============================
      if (email.length <= 0) {
        msgProvider.toast(msgText.emptyEmail[config.language], "center");
        return false;
      }
      var emailvalidation = config.emailvalidation;
      if (emailvalidation.test(email) !== true) {
        msgProvider.toast(msgText.validEmail[config.language], "center");
        return false;
      }

      //-----------------------message--------------
      if (message.trim().length <= 0) {
        msgProvider.toast(
          msgText.emptyContactMessage[config.language],
          "center"
        );
        return false;
      }
      if (message.trim().length <= 2) {
        msgProvider.toast(msgText.messageMinLength[config.language], "center");
        return false;
      }
      let url = config.baseURL + "contact_us.php";
      var data = new FormData();
      data.append("user_id", user_id);
      data.append("name", name.trim());
      data.append("email", email);
      data.append("message", message.trim());

      consolepro.consolelog("data", data);
      apifuntion
        .postApi(url, data)
        .then((obj) => {
          consolepro.consolelog("email_arr", obj);
          if (obj.success == "true") {
            let email_arr = obj.email_arr;
            setTimeout(() => {
              msgProvider.toast(obj.msg[config.language], "center");
            }, 300);
            this.props.navigation.goBack();
            return false;
          } else {
            if (obj.active_status == 0) {
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
            {Lang_chg.Contactus[config.language]}
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
                  tintColor: "#B48EFB",
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
                  this.setState({ name: txt });
                }}
                maxLength={100}
                value={this.state.name}
              />
            </View>
          </View>

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
                  this.setState({ email: txt });
                }}
                maxLength={100}
                value={this.state.email}
              />
            </View>
          </View>

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
                flexDirection: "row",
                width: (mobileW * 85) / 100,
                justifyContent: "space-between",
              }}
            >
              <Image
                style={{
                  width: (mobileW * 6) / 100,
                  height: (mobileW * 6) / 100,
                  resizeMode: "contain",
                  top: (mobileH * 1) / 100,
                }}
                source={localimag.email_icon}
              />
              <TextInput
                style={{
                  fontFamily: Font.FontRegular,
                  width: (mobileW * 75) / 100,
                  fontSize: (mobileW * 3.5) / 100,
                  height: 130,
                  color: Colors.black_color,
                  paddingLeft: 0,
                  textAlignVertical: "top",
                }}
                multiline={true}
                maxLength={250}
                placeholderTextColor={Colors.greyColor}
                placeholder={Lang_chg.massage_txt[config.language]}
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
                  this.setState({ message: txt });
                }}
                value={this.state.message}
              />
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
              marginTop: (mobileH * 7) / 100,
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
                {Lang_chg.submit_txt[config.language]}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
export default Contactus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.back_color,
  },
});
