import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 3,
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    borderBottomLeftRadius: 30,    
    borderBottomRightRadius: 30,
    padding: 30
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  welcome: {
    marginVertical: 30,
    
    fontWeight: 'bold',
    fontSize: 25
  },
  text: {
    fontSize: 19,
    textAlign: 'center',
    marginVertical: 30
  },
  btn: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    backgroundColor: '#ff0043',
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 60,
  },
  textBtn: {
    color: '#fff',
    fontSize: 20
  }

})
