console.log("Foo")
const MAL_ADDRESS = "https://myanimelist.net/"

const getARandomProfile = async () => {
    const response = await fetch(MAL_ADDRESS, {mode: 'cors'})
    const text = await response.text()
    console.log(text)
}

getARandomProfile()
    
