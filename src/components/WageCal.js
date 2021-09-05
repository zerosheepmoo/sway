import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const WageCal = (props) => {
    const [extra, setExtra] = useState(false)
    const [wage, setWage] = useState(8720)
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);
    const calculate = () => {
        let res = wage * hours * days;
        extra ? res += res / 5 : true;
        return res
    }
    return (
        <div hidden={props.hidden}>
            <Typography variant='h3' role='body1' color='primary' sx={{ marginLeft: 1, paddingTop: 6, paddingBottom: 4 }}> {calculate()} 원</Typography>
            <Typography variant='h6' color='secondary' sx={{ marginLeft: 1 }}>* 2021년 기준 최저시급 8720원</Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    marginTop: 6,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="wage"
                    type="number"
                    label="시간 당 임금"
                    variant="outlined"
                    inputProps={{ min: 0 }}
                    value={wage}
                    onChange={e => setWage(e.target.value)}
                />
                <div style={{ width: 'fit-content', display: 'flex', alignItems: 'center' }}>
                    <HighlightOffIcon />
                </div>
                <TextField
                    id="hours"
                    type="number"
                    label="시간"
                    variant="outlined"
                    inputProps={{ min: 0, max: 24}}
                    value={hours}
                    onChange={e => setHours(e.target.value)}
                />
                <div style={{ width: 'fit-content', display: 'flex', alignItems: 'center' }}>
                    <HighlightOffIcon />
                </div>
                <TextField
                    id="days"
                    type="number"
                    label="일 수"
                    variant="outlined"
                    inputProps={{min: 0}}
                    value={days}
                    onChange={e => setDays(e.target.value)}
                    />
                <FormControlLabel control={<Checkbox checked={extra} onClick={() => setExtra(!extra)} />} label="주휴수당 포함" />
            </Box>
        </div>
    )
}

export default WageCal
