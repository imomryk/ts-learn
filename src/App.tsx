import * as React from "react";
import Header from "./components/Header";
interface QueryProps{
  lat?:number,
  lon?:number
}
function App() {
  
  const [queryParams, setQueryParams] = React.useState<QueryProps>({})
  const [forecast,setForecast]=React.useState<object>({})


  React.useEffect(()=>{
    if(Object.entries(queryParams).length!==0){
      const getForecast = async () => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${queryParams.lat}&lon=${queryParams.lon}&exclude=minutely,alerts,current&appid=3f6281baa1b7ff790a876ca17e719ac6`
        );
        const data = await response.json();
        if (!data.cod) {
          setForecast(data);
        }
      };
      getForecast()
    }
  },[queryParams])
  const getQueryParams =(lat:number, lon:number)=>{
    setQueryParams({
      lat:lat,
      lon:lon
    })
  }
  console.log(forecast)
  return (
    <>
      <Header getQueryParams={getQueryParams}/>
      
    </>
  );
}

export default App;
