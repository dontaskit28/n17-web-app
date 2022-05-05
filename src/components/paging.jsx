import React from 'react'

const Paging = ({totalStudents,studentsPerPage,pageClick,page}) => {
  window.scrollTo(0,0);
  let pagesArr = []
  for(let i=1;i<=Math.ceil(totalStudents/studentsPerPage);i++){
    pagesArr.push(i);
  }
  let displayArr = []
  if (page > 1) {
    displayArr = pagesArr.slice(page-2,page+7)
  }else{
    displayArr = pagesArr.slice(page-1,page+8)
  }
  
  return(
    <div className="pagingBtn">
      <button onClick={ ()=> pageClick(1)}>{'<<'}</button>
      {displayArr.map( (number) => (
        <button key={number} onClick={()=> pageClick(number)}>{number}</button>
      ))}
      <button onClick={ ()=> pageClick(Math.ceil(totalStudents/studentsPerPage))}>{'>>'}</button>
    </div>
    )
}

export default Paging;