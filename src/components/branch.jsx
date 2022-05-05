import React from 'react'
import { useParams } from "react-router-dom";
import Details from '.././details.json'
import Card from './card'


function Branch() {
  window.scrollTo(0,0);
  const { branch } = useParams()
  const data = Details.filter( student => (
    student.branch === branch.toUpperCase()
  ))
  return (
    <Card student={data} />
  )
}

export default Branch;