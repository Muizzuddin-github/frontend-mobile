import { TouchableOpacity,Text, Image } from "react-native";

const LogoutButton = ({ navigation }) => {
  
  return(
    <>
      <TouchableOpacity title="Logout" className="text-white"
      onPress={() => {navigation.replace('Login')}}>
        <Image source={{uri : 'https://img.icons8.com/ios-glyphs/30/FFFFFF/exit.png'}} className='w-7 h-7' />
      </TouchableOpacity>
        
    </>
  )
}
export default LogoutButton

// icon logout white = https://img.icons8.com/ios-glyphs/30/FFFFFF/exit.png
// icon logout black = https://img.icons8.com/sf-regular-filled/48/1A1A1A/exit.png