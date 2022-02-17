import * as React from 'react';
import SearchFormDropdownElement from './SearchFormDropdownElement';

interface ISearchFormDropdownContainerProps {
    cities: {name:string, lat:number, lon:number, country:string,}[]|[]
    getQueryParams: (lat:number, lon:number) => void;
}

const SearchFormDropdownContainer: React.FunctionComponent<ISearchFormDropdownContainerProps> = ({cities,getQueryParams}) => {
    
  return (
      <div className='SearchFormDropdownContainer'>
          {cities.length!==0&&cities.map((city,index)=>{
              return <SearchFormDropdownElement country={city.country} name={city.name} lon={city.lon} lat={city.lat} key={index} getQueryParams={getQueryParams}/>
          })}
      </div>
  );
};

export default SearchFormDropdownContainer;
