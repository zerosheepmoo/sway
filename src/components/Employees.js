
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import MiddleNav from './MiddleNav';
import People from './People';
import RecordWork from './RecordWork';

const types = ['직원목록', '일한 시간 기록'];

const Employees = (props) => {
    const [mType, setMType] = useState(types[0]);
    const [navIdx, setNavIdx] = useState(0);

    const data = props.data;
    const handleNav = (idx) => {
        setNavIdx(idx);
        setMType(types[idx]);
    }

    return (
        <Paper elevation={3} sx={{ height: '80vh', p:2, overflow: 'scroll' }}>
            <MiddleNav idx={navIdx} texts={types} handler={handleNav} />
            <People hidden={navIdx!== 0} data={data} readonly={false}/>
            <RecordWork hidden={navIdx !== 1} data={data} readonly={false}/>
        </Paper>
    )
}

export default Employees

