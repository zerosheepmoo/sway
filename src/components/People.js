import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { DataGrid } from '@material-ui/data-grid';
import NothingCon from './NothingCon';

const AddPerson = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const submit = props.submit

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(name, age);
        setName('');
        setAge(0);
    }

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                margin: 2
            }}
            autoComplete="off"
        >
            <TextField
                sx={{ flex: '0.4' }}
                id="employee-name"
                label="추가할 직원 명"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <TextField
                sx={{ flex: '0.4' }}
                id="employee-age"
                label="추가할 직원 나이"
                value={age}
                type="number"
                onChange={(e) => setAge(e.target.value)}
                required
            />
            <Button
                sx={{ flex: '0.15' }}
                type="submit"
                variant="contained"
                color="primary"
                style={{ width: "10%" }}
                onClick={(e) => handleSubmit(e)}
            >
                직원 추가
            </Button>
        </Box>
    )
}

const createColumns = (date) => [
    { field: 'id', headerName: 'ID', width: 110 },
    { field: 'name', headerName: '이름', width: 130 },
    {
      field: 'age',
      headerName: '나이',
      type: 'number',
      width: 150,
    },
    {
      field: 'twh',
      headerName: `${date} 일한 시간`,
      type: 'number',
      width: 250,
    }
]

const PeopleTable = (props) => {
    return (<div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={props.rows} columns={props.columns} checkboxSelection onSelectionModelChange={sModel => {
          props.setSelected(sModel);
      }}/>
    </div>)
}

const People = (props) => {
    const people = props.data.people;
    const workRecord = props.data.workRecord;

    const setPeople = props.data.setPeople
    const date = props.data.date

    const readonly = props.readonly
    const selectedDay = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

    const [selected, setSelected] = useState([]);

    const dispatchWorkRecord = () => {
        const newWR = {...workRecord, [selectedDay]: {}};
        setPeople({list: people, workRecord: newWR});
    }

    // 사람 추가
    const addPerson = (name, age) => {
        if (!name || age <= 0) {
            alert('이름이 입력되지 않았거나 나이가 올바르지 않습니다!')
            return;
        }
        const already = people.filter(person => person.name === name);
        if (already.length !== 0) {
            alert('똑같은 사람이 있습니다! 동명이인일 경우 (2)를 붙이는 등 다르게 표시해주세요');
            return;
        }
        people.push({name: name, age: age});
        setPeople({ list: people, workRecord: workRecord});
    }

    const deletePerson = (idx, name) => {
        people.splice(idx, 1);
        // for (let date in workRecord) {
        //     const exists = workRecord[date][name];
        //     if (exists) {
        //         delete workRecord[date][name];
        //     }
        // }
        setPeople({ list: people,  workRecord});
    }

    const caltwh = (name) => {
        if (!workRecord[selectedDay] || !workRecord[selectedDay][name]) {
            return;
        }
        const tws = workRecord[selectedDay][name];
        let twh = 0;
        for (let work in tws) {
            twh += Number(tws[work]);
        }
        return twh || undefined;
    }

    const createNewRows = () => {
        const newRows = []
        for (let i = 0; i < people.length; i++) {
            const name = people[i].name;
            const age = Number(people[i].age);
            const id = i;
            const twh = caltwh(name);
            const row = {id, name, age, twh}
            newRows.push(row);
        }
        return newRows
    }

    useEffect(() => {
        if (!workRecord[selectedDay]) {
            dispatchWorkRecord()
        }
    }, [date])

    return (
        <Paper
            elevation={3}
            sx={readonly ? {
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'scroll',
                position: 'relative',
                marginTop: 3,
                flex: '1',
                backgroundColor: props.bgColor || undefined
            } : { 
                height: '80vh', 
                padding: '20px', 
                overflow: 'scroll', 
                position: 'relative' 
                }}
                hidden={props.hidden}
            >
            <Typography
                variant={readonly ? "h5" : "h2"}
                color="primary"
                align="center"
                >
                {readonly ? selectedDay + ' 일한 직원' : '직원목록'}
            </Typography>

            {!readonly ? <AddPerson submit={addPerson} /> : <></>}
            {!readonly 
                ? <>
                <Button onClick={(e) => {
                    for (let i = selected.length -1; i > -1; i--) {
                        deletePerson(selected[i], people[i].name);
                    }
                }}>선택직원 삭제하기</Button>
                <PeopleTable rows={createNewRows()} columns={createColumns(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)} setSelected={setSelected}/>
            </>
                : workRecord[selectedDay] && Object.keys(workRecord[selectedDay]).length > 0
                ? Object.keys(workRecord[selectedDay]).map(personName => <Paper key={personName} sx={{p: 1, mt: 2, textAlign: 'center'}}>
                    <Typography variant='h5' role="body1">{personName}{': '}{caltwh(personName)}{'시간'}</Typography>
                    </Paper>)
                : <NothingCon readonly={readonly}/> }
        </Paper >
    )
}

export default People
