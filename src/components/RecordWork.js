import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PeopleSelect from './PeopleMultiSelect';
import DateViewer from './DateViewer';
import Grid from '@material-ui/core/Grid';
import People from './People';


const RecordWork = (props) => {
    const list = props.data.people;
    const workRecord = props.data.workRecord;
    const setPeople = props.data.setPeople;
    const date = props.data.date;
    const setDate = props.data.setDate;

    const [wHours, setWHours] = useState(0);
    const [work, setWork] = useState('기본 업무');
    const [peopleName, setPeopleName] = useState([]);;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formatted = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        const newWRecord = {};

        if (workRecord[formatted]) {
            newWRecord[formatted] = workRecord[formatted];
        }
        else {
            newWRecord[formatted] = {};
        }
        for (let i = 0; i < peopleName.length; i++) {
            if (newWRecord[formatted][peopleName[i]]) {
                newWRecord[formatted][peopleName[i]][work] = wHours;
            }
            else {
                newWRecord[formatted][peopleName[i]] = {[work]: wHours};
            }
        }
        const newData = {
            list: list, workRecord: {...workRecord, ...newWRecord}
        }
        
        setPeople(newData);
    }

    return (
        <Paper sx={{
            height: '80vh',
            padding: '20px',
            overflow: 'scroll'
        }} 
        hidden={props.hidden}
        elevation={3}
        >
            <Grid container sx={{ mb: 4, overflow: 'scroll' }}>
                <Grid item xs={12} md={6} lg={6} sx={{ mb: 3}}>
                    <DateViewer date={{ val: date, dispatch: setDate }} notTool sx={{ mr: 2, ml: 2.5 }} />
                </Grid>

                <Grid item xs={12} md={6} lg={6} >
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            width: '100%',
                            flexDirection: 'column',
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        
                        <PeopleSelect list={list} ps={peopleName} setPs={setPeopleName} sx={{ mb: 1.5, ml: 1.5, mr: 1.5 }} />

                        <TextField label="업무" required value={work} onChange={(e) => setWork(e.target.value)} sx={{m: 1.5 }} />

                        <TextField type="number" required value={wHours} onChange={(e) => setWHours(e.target.value)} inputProps={{ min: 0, max: 24 }} label="시간" sx={{m: 1.5 }} />

                        <Button
                            sx={{m: 1.5 }}
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={(e) => handleSubmit(e)}
                        >
                            기록
                        </Button>
                        <Box sx={{maxHeight: 180, overflow: 'scroll'}}>
                            <People data={props.data} readonly bgColor='grey.300'/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default RecordWork
