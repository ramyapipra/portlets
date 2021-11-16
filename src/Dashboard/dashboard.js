import React, { useState, useRef,useLayoutEffect,useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
//import DashboardChild from '../components/DashboardChild';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import MinimizeIcon from '@material-ui/icons/Minimize';
import CardMedia from '@material-ui/core/CardMedia';
import Table from './Table';
import LineChart from '../components/LineChart';
import Barchart from './Barchart';
function Dashboard() {
    const draggingItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState([1, 2, 3, 4, 5, 6]);
    const handleDragStart = (e, position) => {
        draggingItem.current = position;
        console.log(e.target.innerHTML);
        console.log('Ram', e.target.innerHTML.slice(e.target.getInnerHTML().indexOf('<p>') + 3, e.target.getInnerHTML().indexOf('</p>')))
    };
    const handleDragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
        console.log('Ram', e.target.innerHTML.slice(e.target.getInnerHTML().indexOf('<p>') + 3, e.target.getInnerHTML().indexOf('</p>')))
    };
    const handleDragEnd = (e, index) => {
        const listCopy = [...list];
        const draggingItemContent = listCopy[draggingItem.current];
        // if(draggingItemContent === listCopy[draggingItem.current]){
        //     listCopy[draggingItem.current] = draggingItemContent;
        //     listCopy[dragOverItem.current] = dragOverItemContent;
        // };
        // if(dragOverItemContent === listCopy[dragOverItem.current]){
        //     listCopy[draggingItemContent] = draggingItem.current
        // };
        listCopy.splice(draggingItem.current, 1);
        listCopy.splice(dragOverItem.current, 0, draggingItemContent);
        draggingItem.current = null;
        dragOverItem.current = null;
        setList(listCopy);
    };
    const [min, setMin] = useState(false);
    const [indexVal, setIndexVal] = useState();
    const minClose = (value) => {
        if (min) {
            setMin(true);
            setIndexVal(value);
        } else {
            setMin(false);
        }
    };
    const isLoggedIn = (value) => {
        if (indexVal || value === 1) {
           return <Table/>
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
            <Container maxWidth="xl">
                <Grid container spacing={4} style={{padding: '10px',marginBottom: '40px'}}>
                    {list.map((value, index) => (
                        <Grid item xs={6} sm={6} md={4}
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragEnter={(e) => handleDragEnter(e, index)}
                            onDragEnd={(e) => handleDragEnd(e, index)}
                            onDragOver={(e) => e.preventDefault()}
                            key={index}
                            draggable
                            style={{ marginBottom: "40px" }} >
                            <Paper style={{ display: "flex", justifyContent: "end", background: "#000", marginTop: '30px' }}>
                                <MinimizeIcon style={{ marginBottom: '12px', marginRight: "10px", color: "#ddd", cursor: "pointer" }} onClick={() => minClose(index)} />
                            </Paper>

                            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia style={{ height: 300 }}>
                                        {isLoggedIn(value)}
                                </CardMedia>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};
export default Dashboard;