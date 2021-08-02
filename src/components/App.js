// create your App component here
import React, {useState, useEffect} from 'react'

function App(){

    const [theDogImg, setTheDogImg] = useState('')

useEffect( () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(r => r.json())
    .then(data => setTheDogImg(data.message))
}, [])

    return(
<>
<p>{theDogImg ? null : 'Loading...'}</p> 
{theDogImg ? <img src={theDogImg} alt = "A Random Dog"/> : null}
</>
    )
}

export default App