import axios from 'axios'
import React, {useEffect,useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NewMemberForm from './newMember';

//SHOW USERNAMES OF MEMBERS WITH COOL PROFILE PICTURES MAYBE ADD SKILLS SECTION
const useStyles = makeStyles((theme)=>({
    // root:{
    //     backgroundImage:'none',
    // },
    filler:{
        position:'absolute',

        top:'0%',
        right:'0%',
        height:'200px',
        width:'900px',
        backgroundColor:'green',
        
        
    },
    cover:{
       
        backgroundColor:'black',
        width:'100%',
        height:'100%',
        alignItems:'center',
        textAlign:'center',
        position:'absolute',
        right:'0%',
       top:'20%',

        
      
    
    },
    


}));



    


       
    

   




    



const dataResults = []
export default function ShowMembers(){
    const [items, setItems] = useState(null)
    const classes = useStyles();
    useEffect(async ()=>{
        const response = await axios.get('http://localhost:5000/members')
        console.log(response)
        const data = JSON.stringify(response.data)
        dataResults.push(data) 
        setItems((dataResults.id));
      
    },[])
  




    return(
     
       <div>
<button onClick = {()=>{
    setItems(dataResults)
}}></button>
    <p>Users:{items}  </p>  
       </div>
      
           
       
    
    
 
    
    )
    }
    
  
  
    