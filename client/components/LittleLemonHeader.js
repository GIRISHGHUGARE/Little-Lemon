import { View, Text } from "react-native";

export const LittleLemonHeader = () => {
    return (
        <>
            <View
                style={{
                    backgroundColor: '#EE9972',
                    paddingTop: 40
                }}>
                <Text
                    style={{
                        fontSize: 28,
                        fontWeight:600,
                        color: 'black',
                        textAlign: 'center',
                        margin:10
                    }}>
                    Little Lemon
                </Text>
            </View>
        </>
    )
}
