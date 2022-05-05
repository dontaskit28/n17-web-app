import React,{useState} from 'react'
import '.././App.css'
import Paging from './paging'
import Grades from '.././grades.json'

const Card = ({student}) => {

  const [page,setPage]=useState(1)
  const studentsPerPage = 10;

  const pageEnd = page * studentsPerPage
  const pageStart = pageEnd - studentsPerPage

  const pageClick = (number) => {
    setPage(number);
  }

  const points = (id) =>{
    const out = Grades.filter(grade => grade.id == id);
    if (out.length == 0) return "Unknown";
    return out[0].points;
  }
  return(
    <div>
      {student.slice(pageStart,pageEnd).map((each) =>(
        <div className="card" key= {each.id}>
          <h1 className="name" >{each.name}{', '+each.id}</h1>
          <h2>{each.branch}</h2>
         <h2>Points : {points(each.id)}</h2>
          <h2>{each.dob}</h2>
        <img className="images" src={`https://intranet.rguktn.ac.in/SMS/usrphotos/user/${each.id}.jpg`} alt={each.id}/>
      </div>
      ))}
      <Paging totalStudents={student.length} studentsPerPage={studentsPerPage} pageClick={pageClick} page={page} />
    </div>
  )
}

export default Card;