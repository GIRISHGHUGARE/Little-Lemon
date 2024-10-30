import { View, Text, ScrollView } from "react-native";

const menuItemsToDisplay = [
    '\n Hummus \n Falafel \n Tabbouleh \n Baba Ganoush \n Pita Bread \n Stuffed Grape Leaves \n Lentil Soup \n Shakshuka \n Baklava \n Mint Tea \n Fattoush Salad \n Grilled Chicken Shawarma \n Beef Kofta \n Vegetable Tagine \n Couscous \n Olive Oil Cake'
];

export const MenuItems = () => {
    return (
        <>
            <View style={{
                flex: 0.3,
                backgroundColor: 'black'
            }}>
                <ScrollView
                    // horizontal={true}
                    style={{
                        padding: 10
                    }}>
                    <Text
                        style={{
                            fontSize: 40,
                            flexWrap: 'wrap',
                            color: 'white'
                        }}>
                        View Menu
                        <Text 
                            style={{
                                fontSize: 20, 
                            }}>
                            {menuItemsToDisplay[0]}
                        </Text>
                    </Text>
                </ScrollView>
            </View>
        </>
    )
}