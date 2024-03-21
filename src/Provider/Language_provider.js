import {Alert, ToastAndroid, I18nManager, Platform} from 'react-native';
import {localStorage} from './localStorageProvider';
import {AsyncStorage} from 'react-native';
import {config} from './configProvider';
import RNRestart from 'react-native-restart';
import {consolepro} from './Messageconsolevalidationprovider/Consoleprovider';
global.language_key = 1;
class Language_provider {
  language_get = async () => {
    var item = await localStorage.getItemObject('language');
    console.log('check launguage option', item);

    consolepro.consolelog('is rtl', I18nManager.isRTL);
    consolepro.consolelog('is rtl config', config.textalign);

    if (item != null) {
      console.log('kya bat h developer', config.language);
      config.language = item;
    }
    console.log('language_key123', config.language);
    if (item != null) {
      if (item == 0) {
        config.textalign = 'left';
        config.inverted = false;
      } else {
        config.textalign = 'right';
        config.inverted = true;
      }
    } else {
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);
      config.textalign = 'left';
      config.inverted = false;
      localStorage.setItemObject('language', 0);
    }
  };

  language_set = async languagem => {
    console.log('I18nManager.isRTL Developer', I18nManager.isRTL);
    if (languagem == 0) {
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);
      config.textalign = 'left';
      config.inverted = false;
      localStorage.setItemObject('language', 0);
      localStorage.removeItem('languagecathc');
      localStorage.removeItem('languagesetenglish');
      config.language = 0;
    } else {
      I18nManager.forceRTL(true);
      I18nManager.allowRTL(true);
      config.textalign = 'right';
      config.inverted = true;
      localStorage.setItemObject('language', 1);
      localStorage.setItemObject('languagecathc', 0);
      config.language = 1;
    }

    setTimeout(() => {
      RNRestart.Restart();
    }, 500);
  };
  // Media option ///////////////////
  MediaCamera = ['Camera', ''];
  Mediagallery = ['Gallery', ''];
  cancelmedia = ['Cancel', ''];

  //-----------not for developer use start ------------------//
  go_back_txt = ['Go back!', 'Go back'];
  do_you_want_exit_txt = [
    'Do you want to exit app?',
    'Do you want to exit app',
  ];
  exitApp=['Exit APP']
  do_you_want_goback_txt = ['Do you want to go back', 'Do you want to go back'];
  verify_txt = ['Verify', 'Verify'];
  resend_txt = ['Resend', 'Resend'];
  email_txt = ['Email', 'Email'];
  OTP_txt = ['OTP', 'OTP'];
  Logout_txt = ['Logout', 'Logout'];
  are_you_logout = [
    'Are you sure , you want to logout?',
    'Are you sure , you want to logout?',
  ];
  notification_arr = ['Notification', 'Notification'];
  terms_and_condition_txt = ['Terms & Conditions', 'Terms and Conditions'];
  privacy_policy_txt = ['Privacy Policy', 'Privacy Policy'];
  about_us_txt = ['About Us', 'About Us'];
  delete_account_txt = ['Delete Account', 'حذف الحساب'];
  are_you_sure_delete_txt = ['Are you sure you want to delete your account?', 'هل انت متأكد من حذف الحساب؟'];
  content_not_found = ['Content Not Available', 'Content Not Available'];
  Contactus = ['Contact Us', 'Contact Us'];
  changepassword_txt = ['Change Password', 'Change Password'];
  Setting = ['Settings', 'Setting'];
  notification = ['notification', 'notification'];
  rate_app = ['Rate App', 'Rate App'];
  share_app = ['Share App', 'Share App'];
  Logout = ['Logout', 'Logout'];
  Show = ['Show', 'Show'];
  Hide = ['Hide', 'Hide'];

  //--for chat start --------

  online_txt = ['Online'];
  offline_txt = ['Offline'];
  type_something_txt = ['Type Something'];

  //-----------------------chat page-------------------------------//
  chattextinputmessage = ['Message', ''];
  chataction = ['Action', 'Action', ''];
  chatreport = ['Report User', ''];
  chatclear = ['Clear Chat', ''];
  chatcancel = ['Cancel', ''];
  reportmessagepopup = ['Are your sure you want to ? report', ''];
  chatclearpopup = ['Are your sure you to ? clear chat', ''];
  ChooseMedia = ['Choose', ''];
  Confirm = ['Confirm', ''];
  block_permission = ['Are you sure? you want to block this user', ''];
  unblock_permission = ['Are you sure? you want to unblock this user', ''];
  select_option_txt = ['Select Option', ''];
  report_txt = ['Report', ''];
  chats_txt = ['Chats', ''];
  block_txt = ['Block', ''];
  unblock_txt = ['Unblock', ''];
  cancel_txt = ['Cancel', ''];
  submit_txt = ['Submit', ''];
  reason_txt = ['Reason', ''];
  search_here_txt = ['Search here'];
  you_blocked_this_user = ['You Block this person'];
  no_txt = ['No', 'No'];
  yes_txt = ['Yes', 'Yes'];
  //--for chat end --------

  //-------create password start-------------//
  create_password_txt = ['Create Password'];
  //-------create password end -------------//
  //-------Delete Account start-------------//
  delete_acc_txt = ['DELETE ACCOUNT'];
  //-------Delete Account end -------------//
  //-------FAQ's"start-------------//
  faq_txt = ["FAQ's"];
  //-------FAQ's"end -------------//

  //-----------notification start ---------//
  notifications_txt = ['Notifications'];
  clear_all = ['Clear All'];
  info = ['Information'];
  areyousure_txt = ['Are you sure , you want to clear notifications?'];
  //-----------notification end

  //----------signup----------//
  signup_txt = ['Signup'];
  fullname_txt = ['Full Name'];
  mobile_no_txt = ['Mobile Number'];
  address_txt = ['Address'];
  pincode_txt = ['Pin Code'];
  cpass_txt = ['Confirm Password'];
  iaccept_txt = ['I accept all'];
  terms_txt = ['Terms & Conditions'];
  changepassword_txt = ['Change Password'];
  and_txt = ['and'];
  Privacy_policy_txt = ['Privacy Policy'];
  you_already_txt = ['You already have an account?'];
  email_txt = ['Email'];
  india_txt = ['India'];
  canada_txt = ['Canada'];
  enter_password = ['Password'];
  login_txt = ['Login'];
  // ---------------------------------------------------------------------------------------
  welcomeToElevate = ['Welcome To Elevate'];
  a_personGuide = [
    'A personal guide to inspirational living and mental success at the palm of your hands',
  ];

// ---------------------------------------------------------------------

today = ['Today'];
elevateOftheday = ['Elevate of the day'];
letsgetStarted = ["LET'S GET STARTED"];
selfAwareness = ["Self-Awareness"];
checkOutnew = ["CHECK OUT NEW"];
featuredVideo = ["Featured Video"];
subscribe = ["SUBSCRIBE"];
favourite = ["FAVORITES"];
resources = ["RESOURCES"];
share = ["SHARE"];
settings = ["SETTINGS"];
rateNow = ["RATE NOW"];
suppport = ["SUPPORT"];
signIntocontinue = ["Sign in to continue"];
PasswordTxt = ["Password"];
signInTxt = ["Sign In"];
forgotPassword = ["Forgot Password"];
forgotPasswordLogin = ["Forgot Password?"];
skipTxt = ["Skip"];
donthaveanAccount = ["Don't have an account?"];
sign_up_txt = ["Sign Up"];
signUptocontinue = ["Sign up to continue"];
ConfirmPasswordTxt = ["Confirm Password"];
nameTxt = ["Name"];
resetPassword = ["Reset Password"];
sendTxt = ["Send"];
readytoelevateHigher = ["Ready to Elevate Higher?"];
recurringBilling = ["Recurring billing, cancel anytime."];
restorePurchase = ["Restore purchase"];
continueTxt = ["Continue"];
resources = ["RESOURCES"];
nationalSuicide = ["National Suicide Prevention Lifeline: 1-800-273-8255"];
nationalHopeline = ["National Hopeline Network: 1-800-442-HOPE"];
samshaNationalline = ["SAMHSA National Helpline: 1-800-662-HELP"];
mentalhealthLIne = ["National Institute of Mental Health: 1-866-615-6464"];
mentalIllenesLIne = ["The National Alliance of Mental Illness: 1-800-950-6264"];
bySigningupyouagree = ["By signing up you agree to our "];
termsOfUse = ["Terms of use"];
andTxt = ["& "];
alreadyhaveAnAccount = ["Already have an account?"];
sign_in_txt = ["Sign In"];
nofavouritesavailable = ["No Favourites Available"];
Pushnotification = ["Push Notification"];

Usernametxt = ["Username"];
sign_out_txt = ["Sign Out"];
deactivateAcc = ["Deactivate Account"];
gainunlimited = ["Gain unlimited access to hundreds of motivational content that will inspire you to be successful in every part of your life."];
elevateTogetherWithPeople = ["Elevate together with people like you"];
headlinesTxt = ["Headlines"];

//  New language


welcome_description=["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "]
 continue_with_google=['Continue with Google']
 continue_with_apple=['Continue with Apple']
 //-----------not for developer use end ------------------//
 SignInSignup_txt=['Sign In/Sign Up']

// Login
 SignIn_txt=['Sign In']
 SignInDescription_txt=['Enter your details to proceed further']
 Signup_txt=['Sign Up']
 SignInSignup_txt=['Sign In/Sign Up']
 SignInSignup_txt=['Sign In/Sign Up']

 // OTP verification
 OTPVerification_txt=['OTP Verification']
 we_sent_an_SMS=['We sent an SMS with a 4-digit code to your ']
Please_enter_it=[' Please enter it so we can be sure that this email belongs to you.']
didntReceiveOTP=["Didn't receive the OTP?"]
SendOTPAgain=['Send OTP again']
change_email=['Change Email']

Create_profile_txt=['Create Profile']
date_of_birdth=['Date of Birth']
mobile_no_txt=['Mobile Number']
Gender_txt=['Gender']
Height_txt=['Height']
Religion_txt=['Religion']
Occupation_txt=['Occupation']
BIo_txt=['Bio']
Upload_picture_txt=['Upload pictures']
Upload_profile_picture_txt=['Upload profile picture']
upload_minimum_5=['Upload minimum 5 photos']
add_more=['Add more']
continue_txt=['Continue']
select_hobby_txt=['Select Hobby']
select_Interest_txt=['Select Interest']
select_IngleMode_txt=['Select Ingle Mode']
FlightMingle=['Flight Mingle']
EventMingle=['Event Mingle']
Entermanuallydetails=["Enter Manually Details"]
scanticket=['Scan Ticket']
or_txt=['Or']
Airline=['Airline']
Ticket_number=['Ticket Number']
FlightNumber=['Flight Number']
PNR=['PNR']
verify_ticket=['Verify Ticket']
hobby_txt=['Hobby']
Interest_txt=['Interest']
Images_txt=['Images']
viewall=['View all']
sendMessage_txt=['Send Message']
Type_your_message_here=['Type your message here...']
womens_txt=['womens']
mens_txt=['mens']

MyEvents=['My Events']
JoinEvent=['Join Events']
Create_event_txt=['Create Event']
Date_and_time_ofEvent=['Date & time of event']
venue_txt=['Venue']
Description_txt=['Description']
event_organizer_details=['Event organizer details']
read_more=['Read more']
Joined_txt=['Joined']

Update_txt=['Update']
EditprofileTxt=['Edit Profile']

Favourite_txt=['Favourite']
Date_txt=['Date']
Time_txt=['Time']
Discription_of_event=['Discription of event']
location_txt=['Location']
EventType=['Event type']
private_txt=['Private']
outsiders_txt=['Outsiders']
upload_event_image=['Upload event image']
OrganizerDetails_txt=['Organizer Details']
first_name_txt=['First Name']
last_name_txt=['Last Name']

sendTo_txt=['Send to']
search_peoples_txt=['Search peoples']
select_txt=['Select']
Messages_txt=['Messages']
active_users=['Active Users']


subscrition_history = ['Subscription History']
  subscribe_type_txt = ['Subscription Type']
  end_date = ['End Date']
  payment_txt = ['Payment status']
  cancel_subscription = ['Cancel Subscription']
  Pricing_Plans = ['Pricing Plans']
  subscription_txt = ['Choose a subscription plan to unlock all \n the functionality of the app']
  Daily_explore_txt = ['DAILY EXPLORER']
  month_voyager_txt = ['MONTHLY VOYAGER']
  yearly_adventurer_txt = ['YEARLY ADVENTURER']
  buy_now_txt = ['Buy Now']


  Setting = ['Settings', 'Setting'];
terms_and_condition_txt = ['Terms & Conditions'];
privacy_policy_txt = ['Privacy Policy'];
about_us_txt = ['About Us'];
subscriptionsText = ['Subscriptions'];
Contactus = ['Contact Us'];
languageText = ['Language'];
changepassword_txt = ['Change Password'];
rate_app = ['Rate App'];
share_app = ['Share App'];
delete_account_txt = ['Delete Account'];
Logout = ['Log Out'];

currentpasswordText = ['Current Password'];
newpasswordText = ['New Password'];

massage_txt=['Message']
ConfirmNewPassword=['Confirm New Password']
Search_Location=['Search location']
}
export const Lang_chg = new Language_provider();
