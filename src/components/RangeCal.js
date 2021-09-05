import React, { useState } from 'react';
import DatePicker from '@material-ui/lab/DatePicker';
import PeopleSelect from './PeopleSingleSelect';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const RangeCal = (props) => {

    const [startDate, setStartDate] = useState(() => {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    });
    const [endDate, setEndDate] = useState(() => {
        const d = new Date();
        d.setHours(23, 59, 59, 999);
        return d;
    });
    const [wage, setWage] = useState(8720);
    const [person, setPerson] = useState('')
    const list = props.list;
    const workRecord = props.workRecord;

    const calculate = () => {
        let hrs = 0;
        for (let date in workRecord) {
            console.log('today is ' + date);

            const pr = workRecord[date][person];
            const tD = new Date(date);
            if (tD >= startDate && tD <= endDate) {
                console.log('The date is' + date);
                console.log('The person is' + person);
                console.log(pr);
                console.log('여기는 성공!');
                for (let work in pr) {
                    hrs += Number(pr[work]);
                }
            }
        }
        return hrs * wage;
    }

    return (
        <div hidden={props.hidden}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} >
                    <Typography
                        variant='h3'
                        role='h2'
                        color='primary'
                        sx={{ marginLeft: 1, paddingTop: 6, paddingBottom: 4 }}
                    >
                        {calculate()} 원
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <PeopleSelect list={list} person={person} setPerson={setPerson} sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    <DatePicker
                        mask='____.__.__'
                        label="시작 날짜"
                        value={startDate}
                        allowSameDateSelection
                        onChange={(newValue) => {
                            if (newValue > endDate) {
                                alert('불가능!');
                                return;
                            }
                            setStartDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} sx={{ width: '100%' }} helperText={null} />}
                    />
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    <DatePicker
                        mask='____.__.__'
                        label="끝 날짜"
                        value={endDate}
                        allowSameDateSelection
                        onChange={(newValue) => {
                            if (newValue < startDate) {
                                alert('불가능!');
                                return;
                            }
                            setEndDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} sx={{ width: '100%' }} helperText={null} />}
                    />
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <TextField
                        id="days"
                        type="number"
                        label="시급"
                        variant="outlined"
                        inputProps={{ min: 0 }}
                        sx={{ width: '100%' }}
                        value={wage}
                        onChange={e => setWage(e.target.value)}
                    />
                </Grid>
                
            </Grid>
        </div>
    )
}

export default RangeCal
