import React, {useState} from 'react';
import Select from '@material-ui/core/Select';
import { useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

const PeopleSelect = (props) => {

    const list = props.list;
    const {ps, setPs} = props;

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
        setPs(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <Select
            multiple
            displayEmpty
            renderValue={(selected) => {
                if (selected.length === 0) {
                    return <em>직원 선택</em>;
                }

                return <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                        <Chip key={value} label={value} />
                    ))}
                </Box>
            }}
            value={ps}
            onChange={handleChange}
            input={<OutlinedInput />}
            MenuProps={MenuProps}
            sx={props.sx}
        >
            {list.map((pInfo) => (
                <MenuItem
                    key={pInfo.name}
                    value={pInfo.name}
                    xs={getStyles(pInfo.name, ps, theme)}
                >
                    {pInfo.name}
                    
                </MenuItem>
            ))}
        </Select>
    )
}

export default PeopleSelect
