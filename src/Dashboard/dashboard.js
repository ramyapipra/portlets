import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DashboardChild from '../components/DashboardChild';
import { Responsive, WidthProvider } from "react-grid-layout";
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
    const ResponsiveGridLayout = WidthProvider(Responsive);
    var layout1 = [
        { i: "a", x: 4, y: 0, w: 4, h: 1 },
        { i: "b", x: 4, y: 0, w: 4, h: 1 },
        { i: "c", x: 8, y: 0, w: 4, h: 1 },
        { i: "d", x: 0, y: 1, w: 4, h: 1 },
        { i: "e", x: 8, y: 1, w: 4, h: 1 },
        { i: "f", x: 0, y: 1, w: 4, h: 1 }
    ];
    var value = true;
    var layout = { lg: value === true ? layout1 : layout1 };
    return (
        <div>
         
            <Container className={classes.cardGrid} maxWidth="xl">
                <Grid container spacing={4}>
                <ResponsiveGridLayout
                        className="layout"
                        layouts={layout}
                        breakpoints={{ lg: 1500 }}
                        cols={{ lg: 12 }}
                        rowHeight={300}
                        width={1500}
                    >
                        <Grid key="a" item xs={6} sm={6} md={4} style={{ marginBottom: '20px' }}>
                        <DashboardChild index={0} data={[340,230,40,370,560]} />
                        </Grid>

                        <Grid key="b" item xs={6} sm={6} md={4} style={{ marginBottom: '20px' }}>
                        <DashboardChild index={1} data={[140,220,140,170,420]}  />
                        </Grid>

                        <Grid key="c" item xs={6} sm={6} md={4} style={{ marginBottom: '20px' }}>
                        <DashboardChild index={2} data={[410,130,240,270,330]}  />
                        </Grid>

                        <Grid key="d" item xs={6} sm={6} md={4}>
                        <DashboardChild index={3} data={[400,290,540,170,260]}  />
                        </Grid>

                        <Grid key="e" item xs={6} sm={6} md={4}>
                        <DashboardChild index={4} data={[140,330,440,270,90]}  />
                        </Grid>

                        <Grid key="f" item xs={6} sm={6} md={4}>
                        <DashboardChild index={5} data={[340,230,140,570,250]}  />
                        </Grid>
</ResponsiveGridLayout>                    
                </Grid>

            </Container>
        </div>

    );
};