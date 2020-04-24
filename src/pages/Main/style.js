
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#2A2A2A',
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },

    textHeader: {
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold'
    },

    textHome: {
        marginTop: 30,
        alignSelf: "center",
        fontSize: 26,
        color: "#FFF",
        fontStyle: 'italic'
    },

    cards: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    card: {
        borderRadius: 8,
        backgroundColor: '#656565',
        height: 50,
        width: '31%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },

    textConfirmeds: {
        color: '#57D7FF',
        fontSize: 18,
        fontWeight: 'bold'
    },

    textRecovered: {
        color: '#6AF578',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textDeaths: {
        color: '#FB5A5A',
        fontSize: 18,
        fontWeight: 'bold'
    },

    containerStates: {
        marginTop: "10%"
    },

    federativeState: {
        height: 75,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#656565',
        flexDirection: 'row',
        alignItems: "center"
    },

    flagState: {
        marginLeft: 20,
        height: 45,
        width: 60
    },
    infoState: {
        flex: 1,
        alignItems: "center",
        marginRight: 40
    },
    titleState: {
        alignSelf: "center",
        fontSize: 22,
        color: "#FFF",
        fontWeight: 'bold'
    },
    stateConfirmed: {
        color: '#57D7FF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    stateDeaths: {
        color: '#FB5A5A',
        fontSize: 18,
        fontWeight: 'bold'
    }
});