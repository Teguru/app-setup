import { View, Text, StyleSheet, Pressable } from "react-native";
import { GalleryVerticalEnd, ListMusic, Heart, Clock2, Settings, ChevronRight } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const navigationButtonsInfo = [
    {
        name: "All Songs",
        icon: GalleryVerticalEnd,
    },
    {
        name: "Playlists",
        icon: ListMusic
    },
    {
        name: "Favourite",
        icon: Heart
    },
    {
        name: "Recently Played",
        icon: Clock2
    },
    {
        name: "Settings",
        icon: Settings
    }
]

function NavigationButton({ buttonText, ButtonIcon, goToPage }) {
    const navigation = useNavigation()
    return (
        <Pressable
            style={styles.navigationButton}
            onPress={() => navigation.navigate(goToPage)}>
            <View style={styles.leftSection}>
                {ButtonIcon ? <ButtonIcon color="white" size={40} /> : null}
                <Text style={styles.navigationButtonText}>{buttonText}</Text>
            </View>
            <ChevronRight color="white" style={styles.navigationNextIcon} />
        </Pressable>
    )
}

export function HomeScreen() {
    return (
        <View style={styles.container}>
            {navigationButtonsInfo.map(button => (
                <NavigationButton
                    key={button.name}
                    buttonText={button.name}
                    ButtonIcon={button.icon}
                    goToPage={button.name}
                />
            ))}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        backgroundColor: 'black'
    },
    navigationButton: {
        borderBottomWidth: 1,
        borderColor: '#737373',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 24,
        justifyContent: 'space-between'
    },
    navigationButtonText: {
        color: 'white',
        textAlign: 'start',
        fontSize: 20,
        marginLeft: 12
    },
    navigationNextIcon: {

    },
    leftSection: {
        flexDirection: "row",
        alignItems: "center",
    },
})