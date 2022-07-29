import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#90E0EF",
    //padding: 20,
    minWidth: 320,
  },


  left: {
    alignItems: 'flex-end',
  },

  center: {
    alignItems: 'center',
  },

  inLine: {
    flexDirection: "row",
  },

  card: {
    backgroundColor: "#DCE9F6",
    flexDirection: "row",
    minHeight: 110,
    margin: 20,
    marginTop: 20,
    marginBottom: 0,
    padding: 10,
    borderRadius: 12,
  },

  cardList: {
    backgroundColor: "#DCE9F6",
    minHeight: 110,
    margin: 20,
    marginVertical: 10,
    padding: 10,
    borderRadius: 12,
  },

  selectView: {
    margin: 20,
  },

  //Caixas de texto.
  textBox: {
    width: 220,
    marginHorizontal: 10,
    marginBottom: 10,
  },

  textBoxFull: {
    marginHorizontal: 10,
    marginBottom: 10,
  },

  textBoxLine: {
    marginHorizontal: 10,
    marginBottom: 10,
  },

  //Fontes de texto. 
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  
  textBody: {
    justifyContent: "center",
    fontSize: 14,
  },

  textHighlight: {
    color: "#0149C1",
    fontSize: 14,
  },

  tag: {
    margin: 2,
    marginStart: 0,
    padding: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: "#C4C7DB",
  },

  textTag:{
    color: "#00B4D8",
    fontSize: 10,
    marginEnd: 2,
  },

  //Botões
  inLineButtons:{
    fontSize: 14,
    fontWeight: "bold",
    color: "#0149C1",
  },

  iconHome: {
    justifyContent: "center",
    margin: 10,
  }

});