import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'

const PeopleSingleSelect = (props) => {
    const list = props.list;
    const {person, setPerson} = props;
    const label = props.label ?? '직원';

    const handleChange = (e) => {
        setPerson(e.target.value);
    }

    return (
        <FormControl fullWidth>
            <InputLabel id='pssl'>{label}</InputLabel>
            <Select
                displayEmpty
                value={person}
                onChange={handleChange}
                label={label}
                labelId="pssl"
                sx={props.sx}
            >
                {props.emptyVal && <MenuItem value={''} sx={{height: 35}}>  </MenuItem>}
                {list.map((pInfo) => (
                    <MenuItem
                        key={pInfo.name}
                        value={pInfo.name}
                    >
                        {pInfo.name}

                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}


export default PeopleSingleSelect;