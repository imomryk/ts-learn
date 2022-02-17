import * as React from "react";
import SearchFormDropdownContainer from "./SearchFormDropdownContainer";

interface ISearchFormProps {
    getQueryParams: (lat:number, lon:number) => void;

}

const SearchForm: React.FunctionComponent<ISearchFormProps> = ({
 getQueryParams
}) => {


  const [cityByFirstLetter, setCityByFirstLetter] = React.useState("");
  const [citiesDropdownList, setCitiesDropdownList] = React.useState<{name:string, lat:number, lon:number, country:string,}[]|[]>([]);

  React.useEffect(() => {
    if (cityByFirstLetter !== "") {
      const requestCities = async () => {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${cityByFirstLetter.split(' ').join('+')}&limit=5&appid=3f6281baa1b7ff790a876ca17e719ac6`
        );
        const data = await response.json();
        if (!data.cod) {
          setCitiesDropdownList(data);
        }
      };
      requestCities();
    } else {
      setCitiesDropdownList([]);
    }
  }, [cityByFirstLetter]);

  const getQueryParamsHelper =(e:React.FormEvent)=>{
      e.preventDefault()
      if(citiesDropdownList.length!==0){
          const lat:number = citiesDropdownList[0].lat
          const lon:number = citiesDropdownList[0].lon
          getQueryParams(lat,lon)
      }
  }
  

  return (
    <form onSubmit={(e)=>getQueryParamsHelper(e)}>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCityByFirstLetter(e.target.value);
        }}
      />
      <SearchFormDropdownContainer cities={citiesDropdownList} getQueryParams={getQueryParams}/>
      <button>Go</button>
    </form>
  );
};

export default SearchForm;
