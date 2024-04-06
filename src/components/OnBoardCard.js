import { View, Text, Dimensions, Image } from 'react-native'
import { } from 'react'
import styles from './Styles'
const OnBoardCard = ({ item }) => {
    const width = Dimensions.get('screen').width;
    const height = Dimensions.get('screen').height;
    console.log("width", width / 2)
    return (
        <View style={styles.card}>
            <Text style={styles.delicaciesTxt}>{item.heading}</Text>
            <Text style={styles.restaurentPeraTxt}>{item.paragrapgh}</Text>
            <View style={[{ flexDirection: 'row', alignSelf: 'center', margin: 16 }]}>
                <Image source={item.image} style={{height:"100%",width:"100%"}}/>
                {/* <Image source={require('../assets/images/unfilled_tab.png')} width={26} height={6} />
                <Image style={styles.tabs} source={require('../assets/images/image.png')} width={26} height={6} />
                <Image source={require('../assets/images/image.png')} width={26} height={6} /> */}
            </View>
            <View style={{ justifyContent: "space-between", flexDirection: 'row' }}>
                <Text style={styles.skipStyle}>Skip</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.skipStyle}>Next</Text>
                    <Text>mccm</Text>
                </View>


            </View>

        </View>
    )
}
export default OnBoardCard;