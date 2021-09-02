import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';


const RecordWork = (props) => {
    const list = props.data.people;
    const workRecord = props.data.workRecord;
    const setPeople = props.data.setPeople;
    const date = props.data.date;

    const [wHours, setWHours] = useState(0);
    const [personName, setPersonName] = useState([]);

    const theme = useTheme();

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    function getStyles(name, personName, theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    return (
        <Paper sx={{
            height: '80vh',
            padding: '20px',
            overflow: 'scroll'
        }}>
            <Typography variant="h2">
                일한 시간 기록하기
            </Typography>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: 2,
                    width: '100%'
                }}
                noValidate
                autoComplete="off"
            >
                <Select
                    label="직원명"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput sx={{width: '90%'}} label="Name" />}
                    MenuProps={MenuProps}
                    xs={{flex: '0.8'}}
                >
                    {list.map((pInfo) => (
                        <MenuItem
                            key={pInfo.name}
                            value={pInfo.name}
                            xs={getStyles(pInfo.name, personName, theme)}
                        >
                            {pInfo.name}
                        </MenuItem>
                    ))}
                </Select>

                <TextField xs={{ flex: '0.5' }}>
                    시간 숫자만
                </TextField>
            </Box>
        </Paper>
    )
}

export default RecordWork
