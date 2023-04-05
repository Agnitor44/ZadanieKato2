import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
const urlFirst = `https://api.openweathermap.org/data/2.5/forecast?q=`;
const urlSecond = `,&appid=`;

export const fetchData = (location, setState, setError, setIsLoading) => {
  setIsLoading(true);
  axios
    .get(
      `${urlFirst}${location}${urlSecond}${process.env.NEXT_PUBLIC_APP_ID}`,
      {}
    )
    .then((res) => {
      setState(res.data.list);
      setIsLoading(false);
    })
    .catch((e) => {
      setError(e.message);
      setIsLoading(false);
    });
};
