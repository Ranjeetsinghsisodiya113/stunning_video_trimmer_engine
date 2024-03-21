import React, {Component} from 'react';
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
} from '../Provider/utilslib/Utils';
import Entypo from 'react-native-vector-icons/Entypo';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {DrawerActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class DeleteAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      user_id: '',
      delete : ""
    };
  }
  componentDidMount() {
    consolepro.consolelog('iamdelete account');
  }
  //-----------------------------function for submit report-------------

  submit_btn = async () => {
    if (config.app_status == 0) {
      this.props.navigation.navigate('Login');
      return false;
    } else {
      let {message} = this.state;
      let result = await localStorage.getItemString('user_id');
      consolepro.consolelog('result', result);
      let user_id_get = '';
      if (result != null) {
        if (result != null) {
          user_id_get = result;
        }
        this.setState({
          user_id: user_id_get,
        });
      }
      consolepro.consolelog({message, user_id_get});
      //-----------------------message--------------
      if (message.trim().length <= 0) {
        msgProvider.toast(
          msgText.emptyDeleteReasonMessage[config.language],
          'center',
        );
        return false;
      }
      if (message.trim().length <= 2) {
        msgProvider.toast(msgText.enterMinimumThree[config.language], 'center');
        return false;
      }
      //-------------------api calling--------------

      let url = config.baseURL + 'delete_account.php';
      var data = new FormData();
      data.append('user_id', user_id_get);
      data.append('comment', message.trim());
      consolepro.consolelog('data', data);
      apifuntion
        .postApi(url, data)
        .then(obj => {
          consolepro.consolelog('res_arr', obj);

          if (obj.success == 'true') {
            setTimeout(() => {
              msgProvider.toast(obj.msg[config.language], 'center');
            }, 300);
            this.props.navigation.navigate('Login');
          } else {
            if (obj.active_status == 0) {
              config.checkUserDeactivate(this.props.navigation);
              return false;
            }
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
    }
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignSelf: 'center',
          backgroundColor: Colors.whiteColor,
        }}>
        <StatusBar
          hidden={false}
          translucent={false}
          barStyle="dark-content"
          networkActivityIndicatorVisible={true}
          backgroundColor={Colors.whiteColor}
        />
        
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{width: mobileW, flex : 1, backgroundColor : Colors.whiteColor}}
          keyboardShouldPersistTaps="handled">
          {/* write review */}

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
            {Lang_chg.delete_account_txt[config.language]}
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
                  this.setState({ delete: txt });
                }}
                value={this.state.delete}
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

         

          {/* send button */}


        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
export default DeleteAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.back_color,
  },
});
