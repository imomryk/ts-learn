import * as React from 'react';
import "./SearchFormDropdownElement.module.scss"

interface ISearchFormDropdownElementProps {
    country: string,
    name: string
    lat: number
    lon: number
    getQueryParams: (lat:number, lon:number) => void;
}

const SearchFormDropdownElement: React.FunctionComponent<ISearchFormDropdownElementProps> = ({country, name, lat, lon,getQueryParams}) => {
  return (
      <div className='SearchFormDropdownElement' onClick={()=>getQueryParams(lat,lon)}>
          <span>{name}, </span>
          <span>{country}</span>
      </div>
  );
};

export default SearchFormDropdownElement;
