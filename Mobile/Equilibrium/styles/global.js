import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0149C1',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Roboto-Regular',
      },
    left: {
        alignItems: 'flex-end',
    },
    input: {
        height: 40,
        margin: 10,
        marginHorizontal: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#0149C1',
    },
    card: {
        backgroundColor: '#E1FEFE',
        width: 320,
    borderRadius: 14,
    },
    btnDiv: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
      },
    btnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
      },
    btn: {
        alignItems: 'center',
        padding: 10,
        width: 120,
        borderRadius: 40,
        backgroundColor: '#0149C1',
      },
      btnTextInLine: {
        alignItems: 'center',
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0149C1',
      },
    });