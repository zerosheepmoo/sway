import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { DataGrid } from '@material-ui/data-grid';

const createColumns = () => [
    { field: 'id', headerName: 'ID', width: 110 },
    { field: 'category', headerName: '카테고리', width: 130 },
    {
        field: 'income',
        headerName: '수입',
        type: 'number',
        width: 150,
    },
    {
        field: 'outcome',
        headerName: '지출',
        type: 'number',
        width: 150,
    }
]

const colors = [
    '#003f5c',
    '#374c80',
    '#7a5195',
    '#bc5090',
    '#ef5675',
    '#ff764a',
    '#ffa600'
]

const data = [
    {
        "name": "Group A",
        "value": 2400
    },
    {
        "name": "Group B",
        "value": 4567
    },
    {
        "name": "Group C",
        "value": 1398
    },
    {
        "name": "Group D",
        "value": 9800
    },
    {
        "name": "Group E",
        "value": 3908
    },
    {
        "name": "Group F",
        "value": 4800
    }
];

const AccountBook = () => {
    return (
        <Paper>
            <Typography
                variant='h2'
                role='h2'
                color='primary'
                sx={{ m: 2, p: 2, textAlign: 'center' }}
            >
                가계장부
            </Typography>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <ResponsiveContainer height={250}>
                        <PieChart >
                            <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />

                            <Pie 
                            data={data}
                            cx="50%" 
                            cy="50%" 
                            innerRadius={0} 
                            outerRadius={80} 
                            fill="#82ca9d"
                            label 
                            >
                                {
                                    data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index]} />
                                    ))
                                }
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AccountBook
