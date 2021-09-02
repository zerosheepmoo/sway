import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

const Calculator = () => {
    const [extra, setExtra] = useState(true)
    const [wage, setWage] = useState(8720)
    const [hours, setHours] = useState("");
    const [days, setDays] = useState("");
    const calculate = () => {
        let res = wage * hours * days;
        extra ? res += res/5 : true;
        return res
    }
    return (
        <Paper sx={{ height: '80vh', padding: '20px', overflow: 'scroll'}}>
            <Typography variant='h2'color='primary'>임금계산기</Typography>
            <Typography variant='h6'color='secondary'>* 2021년 기준 최저시급 8720원</Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    marginTop: 4
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="wage" label="시간 당 임금" variant="outlined" value={wage} onChange={e => setWage(e.target.value)}/>
                <TextField id="hours" label="시간" variant="outlined" value={hours} onChange={e => setHours(e.target.value)}/>
                <TextField id="dayS" label="일 수" variant="outlined" value={days} onChange={e => setDays(e.target.value)}/>
                <FormControlLabel control={<Checkbox checked={extra} onClick={() => setExtra(!extra)}/>} label="주휴수당 포함" />
            </Box>

            <Typography variant='h2' sx={{marginTop: 3}}>{calculate()} 원</Typography>
        </Paper>
    )
}

export default Calculator
