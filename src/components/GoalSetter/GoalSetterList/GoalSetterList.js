import React from 'react'
import GoalSetterItem from '../GoalSetterItem/GoalSetterItem'
import "./GoalSetterList.css"
function GoalSetterList(props) {
    console.log(props)
    return (
    <ul className='goalList'>
      {
            props.goals.map((goal)=>{
                return <GoalSetterItem 
                    key={goal.id}
                    goal={goal}
                    onDeleteHandler={props.onDeleteHandler}
                    />
            })
      }
    </ul>
  )
}

export default GoalSetterList
