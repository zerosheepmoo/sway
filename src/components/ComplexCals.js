import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import MiddleNav from './MiddleNav';
import RangeCal from './RangeCal';
import WageCal from './WageCal';

const types = ['범위계산기', '간단계산기'];

const ComplexCals = (props) => {

    const [calType, setCalType] = useState(types[0]);
    const [navIdx, setNavIdx] = useState(0);

    const list = props.data.people;
    const workRecord = props.data.workRecord;

    const handleNav = (idx) => {
        console.log('new Val is: ' + idx);
        setNavIdx(idx);
        setCalType(types[idx]);
    }

    return (
        <Paper elevation={3} sx={{ height: '80vh', padding: 2, overflow: 'scroll' }}>
            <MiddleNav idx={navIdx} texts={types} handler={handleNav} />
            <RangeCal hidden={navIdx!== 0} list={list} workRecord={workRecord}/>
            <WageCal hidden={navIdx !== 1} />
        </Paper>
    )
}

export default ComplexCals
