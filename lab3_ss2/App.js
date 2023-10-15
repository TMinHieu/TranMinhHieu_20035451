import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <Image style = {styles.ip} source={require('./vs_blue.png')}></Image>
        <Text style = {styles.tdt}>Điện Thoại Vsmart Joy 3 <br></br>Hàng chính hãng</Text>
      </View>
      <View style = {styles.v2}>
        <Text style = {styles.tchonm}>Chọn một màu bên dưới:</Text>
        <Pressable onPress={()=>{
        setImage(require('./vs_nlue.png'));//chuyen trang thai
      }}></Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  v1:{
    height: 140,
    width: '100%',
    bottom:10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ip:{
    width:112,
    height:132,
  },
  tdt:{
    fontSize: 15,
    right: 115,
    top : 17,
  },
  v2:{
    backgroundColor: '#C4C4C4',
    width: '100%',
    height: 491,
  },
  tchonm: {
    width: '250px',
    height: '21px',
    top: 10,
    left: '17px',
    fontSize: 18,
  }
});
