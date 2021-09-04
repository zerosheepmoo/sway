import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import MiddleNav from './MiddleNav';
import RangeCal from './RangeCal';
import WageCal from './WageCal';

const types = ['범위계산기', '간단계산기'];

const ComplexCals = () => {

    const [calType, setCalType] = useState(types[0]);
    const [navIdx, setNavIdx] = useState(0);

    const handleNav = (idx) => {
        console.log('new Val is: ' + idx);
        setNavIdx(idx);
        setCalType(types[idx]);
    }

    return (
        <Paper sx={{ height: '80vh', padding: '20px', overflow: 'scroll' }}>
            <MiddleNav idx={navIdx} texts={types} handler={handleNav} />
            <RangeCal hidden={navIdx!== 0}/>
            <WageCal hidden={navIdx !== 1} />
        </Paper>
    )
}

export default ComplexCals
