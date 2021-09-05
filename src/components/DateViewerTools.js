import React from 'react';
import MonthPicker from '@material-ui/lab/MonthPicker';
import YearPicker from '@material-ui/lab/YearPicker';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const minDate = new Date('2020-01-01T00:00:00.000');
const maxDate = new Date('2028-01-01T00:00:00.000');

const DateViewerTools = (props) => {

    const date = props.date;
    const setDate = props.setDate;

    return (
        <Box>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button sx={{ flex: 0.5, m: 1 }} onClick={props.goLeft}>
                    <ChevronLeftIcon />
                </Button>
                <Typography variant="h5" sx={{ m: 1, flex: 1 }}>{props.mode}</Typography>
                <Button sx={{ flex: 0.5, m: 1 }} onClick={props.goRight}>
                    <ChevronRightIcon />
                </Button>
            </div>
            {
                props.mode === '월 선택기'
                    ? <MonthPicker
                        date={date}
                        minDate={minDate}
                        maxDate={maxDate}
                        onChange={(newDate) => setDate(newDate)}
                        sx={{ width: '100%'}}
                        />
                        : props.mode === '연 선택기'
                        ? <YearPicker
                        date={date}
                        minDate={minDate}
                        maxDate={maxDate}
                        onChange={(newD) => setDate(newD)}
                        isDateDisabled={() => false}
                        />
                        : <Typography>화살표를 클릭하여 더 편한 달력 도구를 찾아보세요!</Typography>
            }
        </Box>
    )
}

export default DateViewerTools
