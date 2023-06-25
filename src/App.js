import { useState } from 'react';
import './App.css';
import GoalSetterInput from './components/GoalSetter/GoalSetterInput/GoalSetterInput';
import GoalSetterList from './components/GoalSetter/GoalSetterList/GoalSetterList';

function App() {
  let goalsItems=[
    {
      text:'reds',
      id:'swefd'
    },
    {
      text:'redds',
      id:'dswefd'
    },
  ]
  const [goals,setGoals]=useState(goalsItems)
  let content="";
  const onAddHandler=(enteredItem)=>{ 
    let enteredGoal={
      text:enteredItem,
      id:Math.random().toString(),
    }
    setGoals((prev)=>{
      const updatedGoals=[...prev];
      updatedGoals.unshift(enteredGoal)
      return updatedGoals
    })
    console.log(enteredGoal)
  }

  if(goals.length === 0){
    content=<h1 className='nomsg'> No Goals are found</h1>
  }

  const onDeleteHandler=(deleteItemId)=>{
      console.log(deleteItemId)
      setGoals((prev)=>{ return prev.filter((goal)=>goal.id!==deleteItemId)})

  }
  
  return (
    <div className="App">
      <h1>Goal Setter</h1>
        <section id='goal-form'>
          <GoalSetterInput onAddHandler={onAddHandler}/>
        </section>
        <section id='goals'>
          {content}
          <GoalSetterList 
          goals={goals}
          onDeleteHandler={onDeleteHandler} />  
        </section>
        
    </div>
  );
}

export default App;
