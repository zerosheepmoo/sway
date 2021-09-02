import React from 'react';
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Stack from '@material-ui/core/Stack';
import Box from '@material-ui/core/Box';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';
import MonthPicker from '@material-ui/lab/MonthPicker';
import YearPicker from '@material-ui/lab/YearPicker';

import koLocale from 'date-fns/locale/ko';

const localeMap = {
    ko: koLocale
}

const minDate = new Date('2020-01-01T00:00:00.000');
const maxDate = new Date('2034-01-01T00:00:00.000');

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DateViewer = (props) => {

    // TODO multi lang
    const [locale, setLocale] = React.useState('ko');
    const date = props.date.val
    const setDate = props.date.dispatch

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[locale]}>
            <Box >
                <Stack spacing={3}>
                    <Item elevation={3}>
                        <StaticDatePicker
                            orientation="portrait"
                            toolbarTitle="날짜를 선택하세요."
                            toolbarFormat="yyyy-MM-dd"
                            openTo="day"
                            value={date}
                            onChange={(newDate) => {
                                setDate(newDate)
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />

                    </Item>
                    <Item elevation={3}>
                        <MonthPicker
                            date={date}
                            minDate={minDate}
                            maxDate={maxDate}
                            onChange={(newDate) => setDate(newDate)}
                            sx={{ width: '100%' }}
                        />
                    </Item>
                    <Item elevation={3}>
                        <YearPicker styles={{ width: '100%' }}
                            date={date}
                            isDateDisabled={() => false}
                            minDate={minDate}
                            maxDate={maxDate}
                            onChange={(newDate) => setDate(newDate)}
                        />
                    </Item>
                </Stack>
            </Box>
        </LocalizationProvider>
    );
}

export default DateViewer
