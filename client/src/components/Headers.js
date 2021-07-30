import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, Button, Card, Container, IconButton, Toolbar, Typography } from '@material-ui/core';

import NewMemberForm from './newMember.js';
import Arrowdown from '@material-ui/icons/ExpandMore';
import Mainheader from './Mainheader';
import duneanal from './images/duneanal.jpg'
import landscape from './images/Cryptoland.jpg'
import Popup from 'reactjs-popup';
import Footer from './Footer.js';
import { Modal } from "react-responsive-modal";
import dune from './images/dune.png'
import kusama from './images/Kus.jpg'
import sol from './images/solana.jpg'
import eth from './images/eth.jpg'
import btc from './images/btc.jpg'


const useStyles = makeStyles((theme)=>({
root:{
       
    
   
        
        
        
},
    title:{
        color:"#fff",
        // backgroundColor:"#fff",
        fontFamily:'Benne',
        fontSize:'3.5rem',
        marginRight:'5rem',
        //  borderBottom: 'solid',
        // borderBottomColor: 'cornsilk',
    
    },
    title2:{
        color:"#fff",
        fontFamily:'Benne',
        fontSize:'1.5rem',
        marginRight:'5rem',
    },
    title3:{
        color:"white",
        fontFamily:'Benne',
        fontSize:'2.5rem',
        // position:'absolute',
        // right:'60%',
        // top:'8rem'

    },
    title5:{
        color:"white",
        fontFamily:'Benne',
        fontSize:'2.5rem',
        position:'absolute',
        margin:'10rem 27rem'
    },
    title4:{
        color:"white",
        fontFamily:'Benne',
        fontSize:'1.5rem',
        // position:'absolute',
        // right:'40%',
        // top:'18rem'

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
    newcover:{
        border:'solid',
        borderColor:'white',
        backgroundImage: 'linear-gradient(147deg, #923cb5 0%, #000000 74%)', 
               position:'relative',
        borderWidth:'10px',
        backgroundColor:'black',
        // display:'flex',
        width:'500px',
        // height:'300px',
        
        padding:'30px',
        // width:'30%',
        // height:'80%',
        position:'absolute',
        top:'20%',
        marginLeft:'5%',
     
    },
    cover1:{
       
        backgroundColor:'white',
        width:'100%',
        height:'80%',
        alignItems:'center',
        textAlign:'center',
        position:'absolute',
        top:'80%',
        

        
      
    
    },
    goDown:{
        color:'#FFF',
        fontSize:'2.5rem',
    },
    filler:{
        position:'absolute',

        top:'0%',
        right:'0%',
        height:'200px',
        width:'100%',
        backgroundColor:'purple',
    },
    filler3:{
        position:'absolute',

        top:'228%',
        right:'0%',
        height:'50px',
        width:'100%',
        backgroundColor:'purple',
    },
    form:{
       
      


        
    },
    video:{
        position:'relative',
        margin:'0 auto',
        top:'50rem'
    },
    formColor:{
        backgroundColor: 'white',      
        position:'absolute',
        top:'0%', 
        margin:'0 auto',
        width:'100%',
        height:'100%',

        

    },
    buttons:{
        border:'solid white',
        display: 'inline-block',
        padding: '25px 30px',
        margin: '40px 30px',
        color: '#bc03f4',
        textDecoration: 'none',
        textTransform: 'uppercase',
        transition: '0.5s',
        letterSpacing: '4px',
        overflow: 'hidden',
        '&:hover':{
            background: '#bc03f4',
            color: '#050801',
            boxShadow: '0 0 50px #bc03f4'
                       
        }
          
    },
    images:{
        position:'absolute',
        top : '0%',
        right:'5%',
        maxWidth:'80%',
        maxHeight:'100%'
    },
    images2:{
        position:'absolute',
        top : '160%',
        right:'5%',
        maxWidth:'60%',
        maxHeight:'80%'

    },
    formContainer:{
        backgroundColor:'white'
    },
    formExit:{
        position:'absolute',
        top:'65%',
        right:'47%',
        padding:'10px'

    },
    footer:{
        position:'relative',
        top:'165%'
    },
    finalfiller:{
        maxWidth:'200rem',
        height:'500px',
        position:'absolute',
        top:'160%',
       
        backgroundColor:'black'

    },
    images3:{
      position:'absolute',
      top:'50%',
      left:'10%',
        // position:'absolute',
        // left:'5rem',
        // top:'9rem',
        maxWidth:'30%',
        maxHeight:'40%'

    },
    images4:{
        position:'absolute',
        top:'10%',
        left:'10%',
        // position:'absolute',
        // right:'10rem',
        // top:'10rem',
        maxWidth:'30%',
        maxHeight:'40%'

    },
    images5:{
        position:'absolute',
        top:'10%',
        right:'8%',
        // marginBottom:'9rem',
        maxWidth:'30%',
        maxHeight:'40%'

    },
    images6:{
        position:'absolute',
      top:'54%',
      right:'17%',
        // position:'absolute',
        // right:'45%',
        // top:'20rem',
     
        maxWidth:'25%',
        maxHeight:'30%'

    },
  




   


}));

export default function Header(){

    const [popup, setPopup] = useState(false)
    const classes = useStyles();

    return(
        
       
        <div className = {classes.root}>
            <Mainheader>
            
            </Mainheader>
     
            <div className = {classes.filler}></div>
            <div className = {classes.cover}> 
              <Typography className = {classes.title}><br />Join the financial revolution</Typography>
              
              <IconButton>
                  <Arrowdown className = {classes.goDown}></Arrowdown>
            </IconButton>
            <Typography className = {classes.title2}><br />We are a community that aims to educate and build blockchain protocols on the decentralized web</Typography>
            <Button className = {classes.buttons} variant="filled" >
        Learn More
      </Button>
      
  
      <NewMemberForm className = {classes.form}></NewMemberForm>
      
     
      
      
            <div className = {classes.cover1}>
                <Container className = {classes.newcover}>
                <Typography className = {classes.title3}>What is Blockchain?</Typography>
            <Typography className = {classes.title4}><br />Blockchain is the fastest growing decentralized ledger system. <br></br>
            The technology has the potential to disrupt a huge amount of industries through automating services by code.
            
            </Typography>
           
                </Container>
                <img src = {landscape} className = {classes.images} ></img> 
               
            {/* <iframe className = {classes.video} width="560" height="315" src="https://www.youtube.com/embed/3xGLc-zz9cA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>" */}
               
            </div>
            <Container className = {classes.finalfiller}>
               
                
                <Typography className = {classes.title5}>Contribute to the ever-evolving landscape</Typography>
                
                <img className = {classes.images3} src = {eth} alt = "this is eth"></img>
                <img className = {classes.images4} src= {kusama} alt = "this is kusama"></img> 
            

                <img className = {classes.images6} src = {btc} alt = "this is sol"></img>
               <img className = {classes.images5} src = {sol} alt = "this is sol"></img>
            </Container>
         
      <div className = {classes.filler3}></div>
              <div className = {classes.footer}>   <Footer className = {classes.footer} ></Footer></div>
         
           
            
           
          </div>
          
        
          
         
                
           </div>
           
       
        
        
    )
}