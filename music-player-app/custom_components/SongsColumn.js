import { Text, StyleSheet, FlatList, Pressable } from "react-native";
import { recentlyPlayedEvent } from "../utils/events/recentlyPlayedEvent";

function Song({ songTitle, albumName, metaData }) {
    return (
        <Pressable style={styles.songButtonStyle}
            onPress={() => recentlyPlayedEvent(metaData)}>
            <Text style={styles.songTextStyle}>{songTitle}</Text>
            <Text style={styles.albumNameTextStyle}>{albumName}</Text>
        </Pressable>
    )
}

export function SongsColumn({ allSongs }) {
    return (
        <FlatList
            data={allSongs}
            renderItem={({ item }) =>
            (
                item?.duration !== 0 &&
                <Song
                    songTitle={item?.filename}
                    albumName={item?.albumName}
                    metaData={item}
                />
            )
            }
            keyExtractor={item => String(item?.id)}
            contentContainerStyle={allSongs.length === 0 && styles.emptyListContainer}
            ListEmptyComponent={() =>
                <Text
                    style={styles.text}>
                    No Songs Available
                </Text>
            }
        />
    )
}

const styles = StyleSheet.create({
    emptyListContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        color: 'white'
    },
    songTextStyle: {
        color: 'white',
        fontSize: 16
    },
    songButtonStyle: {
        borderBottomWidth: 1,
        borderColor: '#737373',
        padding: 16
    },
    albumNameTextStyle: {
        color: '#a1a1a1',
        fontSize: 12
    }
});