import React, { Component } from 'react';
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

// dont change auth page start---
import Splash from '../Provider/Splash';
import Login from '../Auth/login';
import OtpVerification from '../Auth/OtpVerification';
import Forgotpassword from '../Auth/Forgotpassword';
import Contentpage from '../Auth/Contentpage';
import Setting from '../Auth/Settings';
import Contactus from '../Auth/Contactus';
import Changepassword from '../Auth/Changepassword';
import DeleteAccount from '../Auth/DeleteAccount';
import ForgotOTPVerify from '../Auth/ForgotOtpVerify';
import CreatePassword from '../Auth/CreatePassword';
import Signup from '../Auth/Signup';
import Faq from '../Auth/Faq';
import Notification from '../Auth/Notification';
import WelcomeScreens from '../Auth/WelcomeScreens';

//-------for chat section start ------------
import Chat from '../ChatProvider/Chat';
import Inbox from '../ChatProvider/Inbox';
import ViewImage from '../ChatProvider/ViewImage';
import ChatReport from '../ChatProvider/ChatReport';

//------- for booking chat
import ChatBooking from '../ChatProvider/ChatBooking';
import InboxBooking from '../ChatProvider/InboxBooking';
//-------for chat section end ------------


import CreateProfile from '../Auth/CreateProfile';
import SelectHobby from '../Auth/SelectHobby';
import SelectInterest from '../Auth/SelectInterest';
import Home from '../Home';
import FlightMingle from '../FlightMingle';
import EventMingle from '../EventMingle';
import ScanScreen from '../ScanScreen';
import AllFlightMingle from '../AllFlightMingle';
import FlightMingleUserDetails from '../FlightMingleUserDetails';
import ChatScreen from '../ChatScreen';
import VideoCall from '../VideoCall';
import AllEventMingle from '../AllEventMingle';
import MyEvents from '../MyEvents';
import EventMingleDetails from '../EventMingleDetails';
import JoinEventMingleDetails from '../JoinEventMingleDetails';
import Profile from '../Profile';
import HobbyViewAll from '../HobbyViewAll';
import InterestViewAll from '../InterestViewAll';
import ImagesViewAll from '../ImagesViewAll';
import EditProfile from '../Auth/EditProfile'
import Favourite from '../Favourite';
import JoinedEventMingleDetails from '../JoinedEventMingleDetails';
import CreateEvent from '../CreateEvent';
import OrganizerDetails from '../OrganizerDetails';
import SendTo from '../SendTo';
import Message from '../Message';
import Language from '../Language';
import Subscription from '../Subscription';
import Pricing_Plan from '../Pricing_Plan';


// dont change auth page end---

// Drawer -------------------



const Stack = createStackNavigator();

const Stacknav = navigation => {
  return (
    <Stack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WelcomeScreens"
        component={WelcomeScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpVerification"
        component={OtpVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Forgotpassword"
        component={Forgotpassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotOTPVerify"
        component={ForgotOTPVerify}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreatePassword"
        component={CreatePassword}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contentpage"
        component={Contentpage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contactus"
        component={Contactus}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Changepassword"
        component={Changepassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeleteAccount"
        component={DeleteAccount}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Faq" component={Faq} options={{ headerShown: false }} />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      {/* for chat start  */}
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewImage"
        component={ViewImage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatReport"
        component={ChatReport}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatBooking"
        component={ChatBooking}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InboxBooking"
        component={InboxBooking}
        options={{ headerShown: false }}
      />
      {/* ------------------ */}



      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CreateProfile"
        component={CreateProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectHobby"
        component={SelectHobby}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SelectInterest"
        component={SelectInterest}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="FlightMingle"
        component={FlightMingle}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EventMingle"
        component={EventMingle}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AllFlightMingle"
        component={AllFlightMingle}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="FlightMingleUserDetails"
        component={FlightMingleUserDetails}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="VideoCall"
        component={VideoCall}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AllEventMingle"
        component={AllEventMingle}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyEvents"
        component={MyEvents}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EventMingleDetails"
        component={EventMingleDetails}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="JoinEventMingleDetails"
        component={JoinEventMingleDetails}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false, }}
      />
      <Stack.Screen
        name="HobbyViewAll"
        component={HobbyViewAll}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InterestViewAll"
        component={InterestViewAll}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ImagesViewAll"
        component={ImagesViewAll}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Favourite"
        component={Favourite}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="JoinedEventMingleDetails"
        component={JoinedEventMingleDetails}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrganizerDetails"
        component={OrganizerDetails}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="SendTo"
        component={SendTo}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="Language"
        component={Language}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="Subscription"
        component={Subscription}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="Pricing_Plan"
        component={Pricing_Plan}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>

    

    
  );
};
export default Stacknav;
