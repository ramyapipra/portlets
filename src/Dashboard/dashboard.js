import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DashboardChild from '../components/DashboardChild';
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
        paddingTop: '56.25%', // 16:9
    },
    paperst: {
        display: "flex",
        justifyContent: "end",
        background: "#000"
    },
    minst: {
        marginBottom: "12px",
        marginRight: "10px",
        color: "#ddd",
        cursor: "pointer"
    }

}));

export default function Dashboard() {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item xs={6} sm={6} md={4} style={{ marginBottom: '20px' }}>
                        <DashboardChild index={0} />
                    </Grid>

                    <Grid item xs={6} sm={6} md={4} style={{ marginBottom: '20px' }}>
                        <DashboardChild index={1} />
                    </Grid>

                    <Grid item xs={6} sm={6} md={4} style={{ marginBottom: '20px' }}>
                        <DashboardChild index={2} />
                    </Grid>

                    <Grid item xs={6} sm={6} md={4} style={{ marginBottom: '20px' }}>
                        <DashboardChild index={3} />
                    </Grid>

                    <Grid item xs={6} sm={6} md={4} style={{ marginBottom: '20px' }}>
                        <DashboardChild index={4} />
                    </Grid>

                    <Grid item xs={6} sm={6} md={4} style={{ marginBottom: '20px' }}>
                        <DashboardChild index={5} />
                    </Grid>
                </Grid>
            </Container>
        </div>
        // <Container className={classes.cardGrid} maxWidth="xl">
        //     <Grid container spacing={4}>
        //         {cards.map((card, index) => (
        //             <Grid item key={card} xs={6} sm={6} md={4} style={{ marginBottom: '20px' }}>
        //                 <Paper className={classes.paperst}>
        //                     <MinimizeIcon className={classes.minst} onClick={() => minClose(index)} />
        //                 </Paper>
        //                 {!min && !indexVal ?
        //                     <Card className={classes.card}>
        //                         <CardMedia className={classes.cardMedia}>
        //                         </CardMedia>
        //                     </Card> : min & indexVal === index ? <Card className={classes.card}>
        //                         <CardMedia className={classes.cardMedia}>
        //                         </CardMedia>
        //                     </Card> : null
        //                 }
        //             </Grid>
        //         ))}
        //     </Grid>
        // </Container>
    );
};