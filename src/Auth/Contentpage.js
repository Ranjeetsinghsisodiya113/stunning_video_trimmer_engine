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
import HTMLView from "react-native-htmlview";
class Contentpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagename: this.props.route.params.pagename,
      contentpage: this.props.route.params.contentpage,
      data_not_found: "",
      datafound: "NA",
    };
  }
  componentDidMount() {
    if (config.app_status == 1) {
      this.getContent();
    }
    consolepro.consolelog("global content arr", content_arr);
  }
  //---------function for get all content-------//
  getContent = async () => {
    if (content_arr == "NA") {
      let url = config.baseURL + "get_all_content.php?user_id=1";
      consolepro.consolelog("url", url);
      apifuntion
        .getApi(url)
        .then((obj) => {
          consolepro.consolelog(obj);
          if (obj.success == "true") {
            consolepro.consolelog("content_obj", obj);
            var data = obj.content_arr;
            if (data != "NA") {
              this.setState({ datafound: obj.content_arr });
              content_arr = obj.content_arr;
            } else {
              this.setState({
                datafound: "NA",
                data_not_found: Lang_chg.content_not_found[config.language],
              });
            }
          } else {
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
          msgProvider.alert(
            msgTitle.internet[config.language],
            msgText.networkconnection[config.language],
            false
          );
        });
    } else {
      consolepro.consolelog("if content arr not NA", content_arr);
      var data = content_arr;
      if (data != "NA") {
        this.setState({ datafound: content_arr });
      } else {
        this.setState({
          datafound: "NA",
          data_not_found: Lang_chg.content_not_found[config.language],
        });
      }
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          hidden={false}
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
            activeOpacity={0.9}
          >
            <Image
              resizeMode="contain"
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
            {this.state.pagename}
          </Text>
          <View
            style={{
              width: (mobileW * 8) / 100,
            }}
          ></View>
        </View>
        {/* // -------- Header End ------------------- */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ width: mobileW }}
          keyboardShouldPersistTaps="handled"
        >
          {config.app_status == 1 && (
            <View
              style={{
                alignItems: "center",
                marginTop: (mobileH * 2) / 100,
                width: (mobileW * 90) / 100,
                alignSelf: "center",
              }}
            >
              {this.state.datafound != "NA" ? (
                this.state.datafound.map((item, index) =>
                  item.content_type == this.state.contentpage ? (
                    <HTMLView
                      value={config.language == 0 ? item.content : item.content}
                      stylesheet={styles12}
                    />
                  ) : null
                )
              ) : (
                <Text
                  style={{ alignSelf: "center", marginTop: 10, fontSize: 19 }}
                >
                  {this.state.data_not_found}
                </Text>
              )}
            </View>
          )}
          {config.app_status == 0 && (
            <View
              style={{
                alignItems: "center",
                
                width: (mobileW * 90) / 100,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                fontFamily : Font.FontSemiBold,
                fontSize : mobileW * 3.5 / 100 ,
                color : Colors.black_color,
                textAlign : 'justify'
                }}
              >
                This Mobile Application End User Terms and conditions and
                Privacy Policy is a binding agreement between us.This Agreement
                governs your use of the APP on the MOBILE PLATFORMS and MOBILE
                DEVICES. The Application will be used by you. YOU ACKN- OWLEDGE
                THAT YOU HAVE READ AND UNDERSTAND THIS Terms and conditions and
                Privacy Policy; You REPRESENT THAT YOU ARE OF LEGAL AGE TO ENTER
                INTO A BINDING AGREEMENT AND ACCEPT THIS AGREEMENT AND AGREE
                THAT YOU ARE LEGALLY BOUND BY ITS TERMS AND CONDI- TIONS and
                PRIVACY POLICY. IF YOU DO NOT AGREE TO THESE TERMS AND CONDITION
                and PRIVACY POLICY, DO NOT DOWNLOAD/ INSTALL/USE THE APPLICATION
                AND DELETE IT FROM YOUR MOBILE DEVICE. License Grant. Subject to
                the terms of this Agreement, We grant you a limited,non-
                exclusive, and non-transferable license to download, install and
                use the Application for your personal, non-commercial use on a
                mobile device owned or otherwise controlled by you ("Mobile
                Device") strictly in accordance with the Application's
                documentation access ,stream, download and use on such Mobile
                Device the Content and Services made available in or otherwise
                accessible through the Application, strictly in accordance with
                this Agreement and the Terms of Use applicable to such Content
                and Services as set forth in. License Restrictions.Licensee
                shall not: copy the Application, except as expressly permitted
                by this license; modify, translate, adapt or otherwise create
                derivative works or improvements, whether or not patentable, of
                the Application; reverse engineer disassemble, decompile, decode
                or otherwise attempt to derive or gain access to the source code
                of the Application or any part thereof; remove, delete,alter or
                obscure any trademarks or any copyright, trademark, patent or
                other intellectual property or proprietary rights notices from
                the Application, including any copy thereof; rent, lease, lend,
                sell, sublicense, assign, distribute, publish, transfer or
                otherwise make available the Application or any features or
                functionality of the appl- cation, to any third party for any
                reason, including by making the Application available on a
                network where it is capable of being accessed by more than one
                device at any time; remove, disable, circumvent or otherwise
                create or implement any workaround to any copy protection,
                rights management or security features in or protecting the
                Application; or use the Application in, or in association with,
                the design, construction, maintenance or operation of any
                hazardous environments or systems, including any power
                generation systems; aircraft navigation or communication
                systems, air traffic control systems or any other transport
                management systems; safety-critical applications, including
                medical or life-support systems, vehicle operation applications
                or any police, fire or other safety response systems; and
                military or aerospace applications, weapons systems or
                environments. Reservation of Rights. You acknowledge and agree
                that the Application is provided under license, and will be used
                by you. You do not acquire any ownership interest in the
                Application under this Agreement, or any other rights thereto
              </Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default Contentpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
const styles12 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // backgroundColor: 'red'
  },
  button: {
    marginBottom: 13,
    borderRadius: 6,
    paddingVertical: 12,
    width: "50%",
    margin: 15,
    backgroundColor: "#fa5252",
  },
  textbutton: {
    borderBottomColor: "#f2f2f2",
    borderBottomWidth: 1,
    paddingVertical: 16,
    width: "95%",
    alignSelf: "center",
  },
  textfont: {
    fontSize: 13,
    paddingLeft: 10,
  },
  p: {
    fontWeight: "300",
    color: "black",
    marginBottom: -50,
    lineHeight: 24,
    letterSpacing: 0.8,
    fontStyle: "normal",
  },
});
