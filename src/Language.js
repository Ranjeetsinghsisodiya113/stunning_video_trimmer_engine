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
} from "./Provider/utilslib/Utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LinearGradient from "react-native-linear-gradient";

export default class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: [
        { id: 1, language: "English", status: true },
        { id: 2, language: "Arabic", status: false },
        { id: 3, language: "French", status: false },
        { id: 4, language: "Russian", status: false },
        { id: 5, language: "Spanish", status: false },
      ],
    };
  }

  languagechange(item, index) {
    var data = this.state.language;

    for (var i = 0; i < data.length; i++) {
      if (data[i]["status"] == true) {
        data[i]["status"] = false;
      }
    }
    data[index]["status"] = true;

    this.setState({
      language: data,
    });
  }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.back_color,
        }}
      >
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
            {Lang_chg.languageText[config.language]}
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
          <FlatList
            contentContainerStyle={{
              paddingBottom: (mobileH * 10) / 100,
              width: (mobileW * 90) / 100,
              marginTop: (mobileH * 1.5) / 100,
            }}
            data={this.state.language}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => this.languagechange(item, index)}
                activeOpacity={0.7}
                style={{
                  marginVertical: (mobileH * 
                    1.5) / 100,
                  flexDirection: "row",
                  alignItems: "center",
                  width: (mobileW * 90) / 100,
                  alignSelf: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: (mobileW * 3.5) / 100,
                    fontFamily: Font.FontBold,
                    color:
                      item.status == true
                        ? Colors.theme_color4
                        : Colors.black_color,
                  }}
                >
                  {item.language}
                </Text>

                {item.status == true && (
                  <Image
                    style={{
                      height: (mobileW * 5) / 100,
                      width: (mobileW * 5) / 100,
                    }}
                    source={localimag.rightIcon}
                  ></Image>
                )}
              </TouchableOpacity>
            )}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
