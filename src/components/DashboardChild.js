import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import MinimizeIcon from '@material-ui/icons/Minimize';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MaximizeIcon from '@material-ui/icons/Maximize';
//import LineChart from './LineChart';
const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        //  paddingTop: '56.25%', // 16:9
    },
    paperst: {
        display: "flex",
        justifyContent: "end",
        background: "#000"
    },
    minst: {
        marginRight: "10px",
        color: "#ddd",
        cursor: "pointer"
    },
    maxst: {
        marginTop: '12px'
    },
    mins: {
        marginBottom: '12px'
    }

}));
export default function DashboardChild(props) {
    console.log(props)
    const classes = useStyles();
    const [min, setMin] = useState(true);
    const [indexVal, setIndexVal] = useState(props.index);
    const minClose = (value) => {
        if (min) {
            setMin(false);
            setIndexVal(props.index);
        } else {
            setMin(true);
        }
    }
    return (
        <div style={{ marginTop: '40px' }}>
            <Paper className={classes.paperst}>
                {min && indexVal === props.index ?
                    <MaximizeIcon className={`${classes.maxst} ${classes.minst}`} onClick={() => minClose()} /> :
                    <MinimizeIcon className={`${classes.minst} ${classes.mins}`} onClick={() => minClose()} />}
            </Paper>
            {min && indexVal === props.index ?
                <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia}>
                        <p>{props.renderData}</p>
                    </CardMedia>
                </Card> : null
            }
        </div>
    );
};