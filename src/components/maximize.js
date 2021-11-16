import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import MinimizeIcon from '@material-ui/icons/Minimize';
import Table from '../Dashboard/Table'
import Barchart from '../Dashboard/Barchart';
import LineChart from './LineChart';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import FilterNoneIcon from '@material-ui/icons/FilterNone';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${left}%, -${top}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "100%",
    height:"100%",
    backgroundColor: theme.palette.background.paper,
    //border: '2px solid #000',
    //boxShadow: theme.shadows[5],
    //padding: theme.spacing(2, 4, 3),
    overflow:'auto'
  },
  maximunIcon:{
    background: "#000",
    color: "white",
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px"
  },
  webIcon:{
      cursor:'pointer',
      transform: "rotate(180deg)"

  }
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  let value = props.value
  console.log("value",value)

  const isLoggedIn = () => {
    if ( value === 1) {
        console.log("value2",value)
       return <Table style={{padding:"10px"}}/>
    } else if (value === 2) {
       return <LineChart />
    } else if (value === 3) {
        return <p style={{textAlign:'justify',padding:"10px"}}>Many novice writers tend to make a sharp distinction between content and style, thinking that a paper can be strong in one and weak in the other, but focusing on organization shows how content and style converge in deliberative academic writing. Your professors will view even the most elegant prose as rambling and tedious if there isn’t a careful, coherent argument to give the text meaning. Paragraphs are the “stuff ” of academic writing and, thus, worth our attention here.Many novice writers tend to make a sharp distinction between content and style, thinking that a paper can be strong in one and weak in the other, but focusing on organization shows how content and style converge in deliberative academic writing. </p>
    } else if (value === 4) {
        return <img src="https://cdn.builtin.com/sites/www.builtin.com/files/styles/blog_medium/public/blockchain-companies.jpg" width = "100%" height = "100%" style={{padding:"10px"}} alt= "Block Chain Pic"/>
    } else if (value === 5) {
        return <Barchart />
    } else if (value === 6) {
        return <img src="https://i.pinimg.com/originals/52/9f/25/529f25f81ca4569611d5db724c29d4b1.png"  width = "100%" height = "100%" style={{padding:"10px"}} alt= "Block Chain Pic"/>
    }
};

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
       <WebAssetIcon style={{ marginBottom: '7px',marginTop:'7px', marginRight: "10px", color: "#ddd", cursor: "pointer" }}  onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
    
        <div style={modalStyle} className={classes.paper} >
            <div className={classes.maximunIcon} ><FilterNoneIcon className={classes.webIcon} onClick={handleClose}/></div>
      {/* <h2 id="simple-modal-title" onClick={handleClose}>Text in a modal</h2> */}
      {/* <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p> */}
      {isLoggedIn()}
     
    </div>
      </Modal>
    </div>
  );
}