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
} from '../Provider/utilslib/Utils';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';


class CreateProfile extends Component {
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
            picturesArray:[
                {image:localimag.girlImage},
                {image:localimag.addMoreFullImage},
            ]
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
                        onPress={() => {
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
                    <View>

                    </View>
                </View>

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
                            marginTop: (-mobileW * 8 / 100),
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
                        {Lang_chg.Create_profile_txt[config.language]}
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
                            color: Colors.theme_color2,
                            fontSize: (mobileW * 3.5) / 100,
                            textAlign: 'center',
                            fontFamily: Font.FontMedium,
                            textDecorationLine: 'underline'
                        }}>
                        {Lang_chg.Upload_profile_picture_txt[config.language]}
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

                                }}
                                source={localimag.birthdayCalendar}
                            />
                            <Text
                                style={{
                                    fontFamily: Font.FontRegular,
                                    width: (mobileW * 66) / 100,
                                    fontSize: (mobileW * 3.5) / 100,
                                    color: Colors.black_color,
                                    paddingLeft: 0,
                                }}
                               
                            >
                          {Lang_chg.date_of_birdth[config.language]}
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

                     {/* Height */}
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
                                source={localimag.heightIcon}
                            />
                            <Text
                                style={{
                                    fontFamily: Font.FontRegular,
                                    width: (mobileW * 66) / 100,
                                    fontSize: (mobileW * 3.5) / 100,
                                    color: Colors.black_color,
                                    
                                }}
                               
                            >
                          {Lang_chg.Height_txt[config.language]}
                            </Text>
                            <View
                                style={{
                                    width: (mobileW * 6) / 100,
                                    height: (mobileW * 6) / 100,
                                    resizeMode: 'contain',
                                    alignSelf: 'center',

                                }}

                            />
                        </View>
                    </View>
                 
                 
 {/* Religion */}
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
                                source={localimag.ReligionIcon}
                            />
                            <Text
                                style={{
                                    fontFamily: Font.FontRegular,
                                    width: (mobileW * 66) / 100,
                                    fontSize: (mobileW * 3.5) / 100,
                                    color: Colors.black_color,
                                    
                                }}
                               
                            >
                          {Lang_chg.Religion_txt[config.language]}
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
                 

{/* Occupation */}
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
                                source={localimag.OccupationIcon}
                            />
                            <Text
                                style={{
                                    fontFamily: Font.FontRegular,
                                    width: (mobileW * 66) / 100,
                                    fontSize: (mobileW * 3.5) / 100,
                                    color: Colors.black_color,
                                    
                                }}
                               
                            >
                          {Lang_chg.Occupation_txt[config.language]}
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
                 
            {/* // bio        */}

            <View style={{
                        marginTop: mobileH * 2 / 100,
                        alignSelf: 'center',
                        width: (mobileW * 90) / 100,
                        alignItems: 'center',
                        borderRadius:mobileW*2/100,
                        borderColor: Colors.theme_color2,
                        borderWidth: (mobileW * 0.1) / 100,
                    }}>


                        <View style={{
                            alignSelf: 'center',

                            height: mobileH * 20 / 100,
                            flexDirection: 'row',
                            width: (mobileW * 85) / 100,
                             justifyContent: 'space-between'
                        }}>

                            <Image
                                style={{marginTop:mobileH*1/100,
                                    width: (mobileW * 6) / 100,
                                    height: (mobileW * 6) / 100,
                                    resizeMode: 'contain',
                                   
                                    tintColor: "#B48EFB"
                                }}
                                source={localimag.penIcon}
                            />
                            <TextInput
                                style={{
                                    height: mobileH * 20 / 100,
                                    textAlignVertical:'top',
                                    fontFamily: Font.FontRegular,
                                    width: (mobileW * 75) / 100,
                                    fontSize: (mobileW * 3.5) / 100,
                                    color: Colors.black_color,
                                    paddingLeft: 0,
                                }}
                                placeholderTextColor={Colors.greyColor}
                                placeholder={Lang_chg.BIo_txt[config.language]}
                                keyboardType="default"
                                returnKeyLabel="done"
                                returnKeyType="done"
                                ref={input => {
                                    this.mobilefield = input;
                                }}
                                multiline={true}
                                onSubmitEditing={() => {
                                    Keyboard.dismiss();
                                }}
                                onFocus={() => {
                                    this.setState({ errorno: 0, activeinput: 1 });
                                }}
                                onChangeText={txt => {
                                    this.setState({ bio: txt });
                                }}
                                maxLength={100}
                                value={this.state.bio}
                            />
                        </View>
                    </View>
<View style={{ marginTop: mobileH * 2 / 100,width:mobileW*90/100,alignSelf:'center'}}>
                    <Text
                        style={{
                            color: Colors.theme_color2,
                            fontSize: (mobileW * 3.8) / 100,
                          
                            fontFamily: Font.FontSemiBold,

                        }}>
                        {Lang_chg.Upload_picture_txt[config.language]}
                    </Text>

                    <Text
                        style={{
                            marginVertical: mobileH * 1.5 / 100,
                            color: Colors.black_color,
                            fontSize: (mobileW * 3) / 100,
                           
                            fontFamily: Font.FontMedium,

                        }}>
                        {Lang_chg.upload_minimum_5[config.language]}
                    </Text>

                    <FlatList
                    numColumns={4}
                    data={this.state.picturesArray}
                    renderItem={({item,index})=>
                    <View>
                        <ImageBackground
                         style={{marginRight:mobileW*3/100,
                         width: (mobileW * 20) / 100,
                         height: (mobileW * 20) / 100,
                        borderRadius:mobileW*3/100
                        
                     }}
                     imageStyle={{
                       
                     marginRight:mobileW*3/100,  
                     width: (mobileW * 20) / 100,
                     height: (mobileW * 20) / 100,
                     borderRadius:mobileW*3/100
                    
                    
                 }}
                     source={item.image}
                        
                        >

                        </ImageBackground>
                    </View>
                }
                    
                    >

                    </FlatList>
                    </View>
                    {/* OtpVerification */}

                    <TouchableOpacity
                        onPress={() => {

                            this.props.navigation.navigate("SelectHobby")
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
                                {Lang_chg.continue_txt[config.language]}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>



                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}
export default CreateProfile;

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
