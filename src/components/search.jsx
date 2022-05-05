import React from 'react'
import { useParams } from "react-router-dom";
import Details from '.././details.json'
import Card from './card'
import '.././App.css'


const Search = () => {
  const { id } = useParams()
  const searchData = Details.filter(e =>{
      return (Object.keys(e).some(key =>
        e[key].includes(id.toUpperCase())))
    })
  return (searchData.length==0 ? <h1>Search Not Found</h1> : <Card student={searchData} />)
}


export default Search;
