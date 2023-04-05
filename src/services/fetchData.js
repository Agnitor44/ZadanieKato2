import axios from 'axios';
  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const urlFirst = `https://samples.openweathermap.org/data/2.5/forecast?q=`
const urlSecond = `,us&appid=`

export const fetchData = (location, setState, setError, setIsLoading,) => {
    setIsLoading(true)
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location},&appid=${process.env.NEXT_PUBLIC_APP_ID}`, {
       
    })
    .then(res => {
        setState(res.data.list)
    setIsLoading(false)

    }).catch(e => {
        setError(e.message)
    setIsLoading(false)
        
    })
}