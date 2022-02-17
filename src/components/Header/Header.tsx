import * as React from "react";
import "./Header.module.scss";
import SearchForm from "./SearchForm";
// import styles from "./Header.module.scss"

export interface IHeader {
  getQueryParams: (lat:number, lon:number) => void;
}

export const Header: React.FunctionComponent<IHeader> = ({ getQueryParams }) => {
  
  return (
    <header>
      <h1>The Weather</h1>
      <SearchForm  getQueryParams={getQueryParams}/>
    </header>
  );
};
