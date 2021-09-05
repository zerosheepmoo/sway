import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Stack from '@material-ui/core/Stack';
import Box from '@material-ui/core/Box';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';
import DateViewerTools from './DateViewerTools';

const toolModes = ['반갑습니다', '월 선택기', '연 선택기'];

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DateViewer = (props) => {

    const date = props.date.val;
    const setDate = props.date.dispatch;
    const [toolMode, setToolMode] = useState(toolModes[0]);
    const orientation = props.ori ?? 'portrait';
    const notTool = props.notTool;

    const goToolLeft = () => {
        const idx = toolModes.indexOf(toolMode);
        idx === 0 ? setToolMode(toolModes[toolModes.length - 1]) : setToolMode(toolModes[idx - 1]);
    }

    const goToolRight = () => {
        const idx = toolModes.indexOf(toolMode);
        idx === toolModes.length - 1 ? setToolMode(toolModes[0]) : setToolMode(toolModes[idx + 1]);
    }

    return (
        <Stack sx={props.sx} spacing={3}>
            {
                !notTool && <Item elevation={3}>
                    <DateViewerTools date={date} setDate={setDate} mode={toolMode} goLeft={goToolLeft} goRight={goToolRight} />
                </Item>
            }
            <Item elevation={3} sx={{ height: notTool ? 'default' : '100%' }}>
                <StaticDatePicker
                    orientation={orientation}
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
        </Stack>
    );
}

export default DateViewer
