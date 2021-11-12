import React, { Component } from "react";
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import DashboardChild from '../components/DashboardChild';
const SortableItem = SortableElement(({ value }) => {
    console.log(value)
    var data;
    if (value === "Item 1") {
        data = "Tables"
    } else if (value === "Item 2") {
        data = "Bar Charts"
    } else if (value === "Item 3") {
        data = "Images"
    } else if (value === "Item 4") {
        data = "Tasks"
    } else if (value === "Item 5") {
        data = "Graphs"
    } else if (value === "Item 6") {
        data = "Some another Data"
    }
    return (
        <Grid item xs={6} sm={6} md={4} onClick={() => console.debug(value)}>
            <DashboardChild index={value} renderData={data} />
        </Grid>
    )
});
const SortableList = SortableContainer(({ items }) => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={4}>
                {items.map((value, index) => (
                    <SortableItem key={`item-${value}`} index={index} value={value} />  
                ))}
            </Grid>
        </Container>
    );
});
export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            listItems: ["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]
        };
    };
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ listItems }) => ({
            listItems: arrayMoveImmutable(listItems, oldIndex, newIndex),
        }));
    };
    render() {
        return <SortableList items={this.state.listItems} onSortEnd={this.onSortEnd} distance={1} />;
    }
};