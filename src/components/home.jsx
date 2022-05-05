import React, { useState,useEffect } from 'react';
import '.././App.css';
import Card from './card'
import Search from './search'
import Paging from './paging'
import Details from '.././details.json'


function Home() {
  window.scrollTo(0,0);
  const [student,setStudent] = useState(Details)
  return (
    <div>
      <Card student={student} />
    </div>
  )
}
export default Home;