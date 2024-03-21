import React, { Component } from "react"
import {
    View, Dimensions,
    Modal,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    Text,
} from "react-native"
import { Colors,Font,config,Lang_chg, mobileH, mobileW } from '../utilslib/Utils';
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);


export default class Cameragallery extends Component {
    render() {
        return (
            <Modal
             animationType="slide"
             transparent={true}
             visible={this.props.mediamodal}
             onRequestClose={() => {
                  this.setState({modalVisible:false})
             }}>

            <View style={{ flex: 1, backgroundColor: '#00000030', alignItems: 'center',}}>
                <View style={{ position: 'absolute', bottom:2, width:screenWidth, backgroundColor : Colors.whiteColor, height : mobileH * 25/100}}>
                <View style={{ marginTop: 15, alignSelf: 'center', width: '100%',paddingHorizontal : mobileW * 4/100  }}>
                            <Text style={{fontFamily:Font.FontRegular, fontSize: screenWidth*4/100, color:Colors.todayColor}}>{"selct option"}</Text>
                    </View>
                    <View style={{ alignSelf: 'center',width:'100%',  paddingHorizontal : mobileW * 4/100, marginTop : mobileH * 1/100 }}>
                     <TouchableOpacity style={{width:'100%',alignSelf:'center',}} activeOpacity={0.9} onPress={()=>{this.props.Camerapopen()}}>
                       <View style={{  width:'100%',backgroundColor:Colors.mediabackground,paddingVertical:screenWidth*3.5/100  }}>
                            <Text style={{ fontFamily:Font.FontRegular, fontSize: screenWidth*4/100, color:Colors.mediatextcolor}}>{"Camera"}</Text>
                        </View>
                        </TouchableOpacity>
                       <TouchableOpacity style={{width:'100%',alignSelf:'center',marginTop:3,justifyContent: 'center', alignItems: 'center'}} onPress={()=>{this.props.Galleryopen()}}>
                        <View style={{ width:'100%',backgroundColor:Colors.mediabackground,paddingVertical:screenWidth*3.5/100 }}>
                            <Text style={{fontFamily:Font.FontRegular, fontSize: screenWidth*4/100, color:Colors.mediatextcolor }}>{"gallery"}</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 5, alignSelf: 'center', width: '100%', justifyContent: 'center', alignItems: 'center',borderTopColor : Colors.todayColor, borderTopWidth : mobileW * 0.2/100 ,  paddingHorizontal : mobileW * 4/100  }}>
                        <TouchableOpacity onPress={() => {this.props.Canclemedia() }} style={{ alignSelf: 'center',  width: '100%',paddingVertical:screenWidth*3.5/100}}>
                            <Text style={{fontFamily:Font.FontSemiBold, fontSize: screenWidth*4/100, color:Colors.redColor}}>{Lang_chg.cancelmedia[config.language]}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        justifyContent: "center",
        backgroundColor: '#00000040',
        top: 0, left: 0, bottom: 0, right: 0
    },

    activityIndicatorWrapper: {
        height: 80,
        width: 80,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 6,
        justifyContent: "space-around",
        alignItems: "center",
        alignSelf: "center",
    }
})
