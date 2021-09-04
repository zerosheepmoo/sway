import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

const MiddleNav = (props) => {
    const texts = props.texts;
    const handler = props.handler
    const idx = props.idx;

    const a11yProps = (index) => {
        return {
            id: `tab-${index}`,
            'aria-controls': `tab-panel-${index}`,
        };
    }

    const handleChange = (e, newVal) => {
        handler(newVal)
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={idx} onChange={handleChange} aria-label="tabs">
            { texts.map(text => <Tab key={text} label={text} {...a11yProps(0)}/>)}
            </Tabs>
        </Box>

    )
}

export default MiddleNav
