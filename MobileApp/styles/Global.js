import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#298CEF',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Roboto-Regular',
        padding: 20,
      },

      loginContainer: {
        flex: 1,
        backgroundColor: '#0149C1',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Roboto-Regular',
      },

      criarContainer: {
        flex: 1,
        backgroundColor: '#E1FEFE',
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
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#0149C1',
    },

    card: {
      backgroundColor: '#f6fff8',
      height: 130,
      width: 320,
      marginHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      borderRadius: 14,
      flexDirection: 'row',
    },

    select: {
      alignItems: 'center',
      width: 320,
      margin: 20,
    },

    icon: {
      marginVertical: 26,
      marginHorizontal: 10,
    },

    textBox: {
      width: 220,
      paddingHorizontal: 20,
      padding: 10,
    },

    titulo: {
      fontSize: 18,
      fontWeight: '700',
      color:'#0149C1',
      marginBottom: 4,
    },

    cardClear: {
      width: 320,
    },

    cardLogin: {
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