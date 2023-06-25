import React,{useState} from 'react'
import Button from '../../UI/Button';
import styles from  "./GoalSetter.module.css"
import styled from 'styled-components';

const FormControl=styled.input`
    
    {
        width: 20rem;
        max-width: 100%;
        border: 2px solid ${props=>
            props.invalid?'rgb(255, 51, 51)':'black'
        };
        border-radius: 0.4rem;
        padding: 0.5rem 0.8rem;
        color: rgb(4, 2, 11);
        font-size: 17px;
        background-color: ${props=>
            props.invalid?'rgba(203, 111, 111,0.4)':'transparent'};
        

    }
    // &.active{
    //     background-color: rgba(203, 111, 111,0.4);
    //     border: 2px solid rgb(255, 51, 51);
    // }

`

function GoalSetterInput(props) {
    const [isValid,setIsValid]=useState(true);
    const [enteredValue,setEnteredValue]=useState("");
    const typeOnChangeHandler=(e)=>{
        setEnteredValue(e.target.value)
        setIsValid(true)
    }
    
    const FormSubmit=(e)=>{
        e.preventDefault();
        if(enteredValue.trim().length===0){
            setIsValid(false)
            return;
        }
        
        props.onAddHandler(enteredValue)
        setEnteredValue("")
    }


    return (
    <div>
      <form className={styles.goalInput} onSubmit={FormSubmit}>
        <FormControl type="text" 
                name="enteredtext" 
                onChange={typeOnChangeHandler}
                value={enteredValue} 
                invalid={!isValid}

            />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default GoalSetterInput
