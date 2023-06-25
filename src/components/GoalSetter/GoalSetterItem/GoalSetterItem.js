import React from 'react'
import "./GoalSetterItem.css"
function GoalSetterItem(props) {
  return (
    <li className='goalDisplay'>
      <p className='goalText' onClick={()=>props.onDeleteHandler(props.goal.id)}>{props.goal.text}</p>
    </li>
  )
}

export default GoalSetterItem
