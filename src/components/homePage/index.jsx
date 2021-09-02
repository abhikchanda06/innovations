import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../navbar';
import MyImg from '../../assets/aboutMe-removebg-preview.png';
import { Typography } from '@material-ui/core';
import { display } from '@material-ui/system';

const useStyles = makeStyles((theme)=>({
    root: {
        // marginTop:"2rem",
      minWidth: 275,
    height:"100%",
    background:"#082032",
    display:"flex",
    alignItems:"center",
    flexDirection:"column",

   
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    upperDiv:{
        marginTop:"5rem",
        display:"flex",
    alignItems:"center",
    flexDirection:"row",
    width:"100%",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    img:{
        [theme.breakpoints.down(650)]: {
            // height:"0rem",
            // width:"0rem"
            display:"none",
          },
    },
    leftDiv:{
        boxShadow:"none",display:"flex",flex:"1",marginLeft:"2rem",background:"#082032",
        justifyContent:"flex-end",
        alignContent:"center",
        [theme.breakpoints.down(650)]: {
           justifyContent:"center"
          },
    },
    rightImgDiv:{
        background:"white",
            display:"flex",flex:"1",boxShadow:"none", 
            background:"#082032",
            height:"70vh",marginTop:"3rem",    
           [theme.breakpoints.down(650)]: {
            display:"none"
          },
    },
    text:{
        color:"white",
        fontSize:"3rem",
        [theme.breakpoints.down(650)]: {
            fontSize:"2.5rem"
          },
    },
    lowerDiv:{
        marginTop:"5rem",
        background:"#2C394B",
        height:"100%",
        width:"70vw",
        marginBottom:"5rem",
        display:"flex",
        flexDirection:"row",

        [theme.breakpoints.down(650)]: {
            fontSize:"1.5rem",
            flexDirection:"column",

        },

    },
    smallText:{
        color:"#DA5200",
        fontSize:"2rem",
        margin:"1rem",
        [theme.breakpoints.down(650)]: {
            fontSize:"1.5rem"
          },
    },
    extraSmallText:{
        color:"#f2f2f2",
        fontWeight:"400",
        fontSize:"1.3rem",
        margin:"1.1rem",
        [theme.breakpoints.down(650)]: {
            fontSize:"1rem"
          },
    },
    list:{
        fontWeight:"400",
        fontSize:"1.3rem",
        color:"#f2f2f2",
        [theme.breakpoints.down(650)]: {
            fontSize:"1rem"
          },
        
    }
  }));

  
const HomePage=()=>{
    const classes = useStyles();
    return(
        <div>
        <Navbar/>
        <Card  className={classes.root}>
            <div className={classes.upperDiv} >
            <Card 
            className={classes.leftDiv}
            style={{
               
                // textAlign:"right"
                // flexDirection:"column"
            }}>
                <h1
                className={classes.text}
               
                >Hi, I'm Sougata Das
                <br/>
                <span style={{color:"#DA5200"}}> 
                Web Developer
                </span>
                </h1>
            </Card>
            <Card className={classes.rightImgDiv}>
                <img className={classes.img} src={MyImg}/>
            </Card>
            </div>
            <Card className={classes.lowerDiv}>
                <div
                style={{background:"#2C394B",height:"100%",width:"100%"}}
                >
                    <h1 className={classes.smallText}>About Me</h1>
                    <h2 className={classes.extraSmallText}>
                    I am Sougata Das,currently pursuing B.Tech in Computer Science Engineering.I am interested in competetive coding and web development.
                    </h2>
                </div>
                <div
                 style={{background:"#2C394B",height:"100%",width:"100%"}}
                >
                     <h1 className={classes.smallText}>Experience</h1>
                    <ul className={classes.list}>
                        <li>Worked on a XYZ Company</li>
                        <li>Worked on a ZYX Company</li>
                    </ul>
                </div>
            </Card>
        </Card>
        </div>
        );
}

export default HomePage;