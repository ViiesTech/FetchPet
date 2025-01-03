import React, { useEffect } from 'react'
import Routes from './routes'
import { LogBox } from 'react-native'

// const SplashScreen = () => {

//   const splashImageTranslateX = useRef(new Animated.Value(-responsiveWidth(50))).current;
//   const mainLogoOpacity = useRef(new Animated.Value(0)).current;
//   const groupCatsOpacity = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.sequence([
//       Animated.timing(splashImageTranslateX, {
//         toValue: responsiveWidth(0),
//         duration: 1000,
//         easing: Easing.out(Easing.quad),
//         useNativeDriver: true,
//       }),
//       Animated.parallel([
//         Animated.timing(mainLogoOpacity, {
//           toValue: 1,
//           duration: 800,
//           useNativeDriver: true,
//         }),
//         Animated.timing(groupCatsOpacity, {
//           toValue: 1,
//           duration: 800,
//           useNativeDriver: true,
//         }),
//       ]),
//     ]).start();
//   }, []);


//   return (
//     <View style={{ flex: 1, backgroundColor: colors.primary }}>
//       <Animated.Image source={images.splashimage1} style={{
//         position: 'absolute',
//         top: responsiveHeight(4),
//         right: responsiveHeight(21),
//         height: responsiveHeight(55),
//         width: responsiveHeight(55),
//         transform: [{ translateX: splashImageTranslateX }],
//       }} />
//       <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
//         <Animated.Image source={images.logo} style={{
//           height: responsiveHeight(25),
//           marginBottom: responsiveHeight(8),
//           width: responsiveHeight(25),
//           opacity: mainLogoOpacity,
//         }} />
//         <Animated.Image resizeMode='contain' style={{ alignSelf: 'center', height: responsiveHeight(30), width: responsiveWidth(100), opacity: groupCatsOpacity, }} source={images.group_cats} />
//       </View>
//     </View>
//   )
// }


const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  
  return (
    <Routes />
  )
}

export default App
