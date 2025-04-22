import { View, Text } from "react-native";

export const LittleLemonFooter = () => {
    return (
        <>
            <View
                style={{
                    backgroundColor: '#EE9972',
                    paddingBottom: 20,
                }}>
                <Text
                    style={{
                        fontSize: 18,
                        color: 'black',
                        textAlign: 'center',
                        margin:10
                    }}>
                    All rights reserved by Little Lemon, 2022{' '}
                </Text>
            </View>
        </>
    )
}
