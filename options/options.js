const styles = StyleSheet.create({
  hr: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  container: { flex: 1, height: 120, padding: 13 },
  text: { color: "black", fontSize: 20 },
  buttonPressed: { backgroundColor: "aquamarine" },
  buttonNotPressed: { backgroundColor: "blue" },
  button: { borderRadius: 4, padding: 15, marginTop: 10 },
  buttonText: { color: "white", textAlign: "center", fontSize: 16 }
})

export const globalOptions = {
  name: "app_creation_aline__35782",
  url: "https://app_creation_aline__35782.botics.co",
  api: "https://app_creation_aline__35782.botics.co/api/v1"
}

export const modulesOptions = {
  "@modules/app-menu": {
    title: "App MenuOp",
    copy: "Routes available!",
    styles: styles
  }
}
