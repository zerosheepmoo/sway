import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { DataGrid } from '@material-ui/data-grid';

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

const columns = [
    { field: 'id', headerName: 'ID', width: 110 },
    { field: 'name', headerName: 'Name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 150,
    },
    {
      field: 'todaysWork',
      headerName: 'Today Work Hours',
      type: 'number',
      width: 210,
    }
]

const PeopleTable = (props) => {
    return (<div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={props.rows} columns={columns} checkboxSelection onSelectionModelChange={sModel => {
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
        people.push({name: name, age: age || NaN});
        setPeople({ list: people, workRecord: workRecord});
    }

    // 사람 삭제
    const deletePerson = (idx, name) => {
        people.splice(idx, 1);
        for (let date in workRecord) {
            const exists = workRecord[date][name];
            if (exists) {
                delete workRecord[date];
            }
        }
        setPeople({ list: people,  workRecord});
    }

    const createNewRows = () => {
        const newRows = []
        for (let i = 0; i < people.length; i++) {
            const name = people[i].name;
            const age = Number(people[i].age);
            const id = i;
            const twh = workRecord[selectedDay][name] ?? 0;
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
            sx={readonly ? {
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 400,
                overflow: 'scroll',
                position: 'relative',
                marginTop: 3
            } : { height: '80vh', padding: '20px', overflow: 'scroll', position: 'relative' }}>
            <Typography variant={readonly ? "h5" : "h2"} color="primary" align="center">
                {readonly ? selectedDay + ' 일한 직원' : '직원목록'}
            </Typography>

            {!readonly ? <AddPerson submit={addPerson} /> : <></>}
            {!readonly ? <>
            <Button onClick={(e) => {
                for (let i = selected.length -1; i > -1; i--) {
                    deletePerson(selected[i], people[i].name);
                }
            }}>선택직원 삭제하기</Button>
            <PeopleTable rows={createNewRows()} setSelected={setSelected}/>
            </>
                : workRecord[selectedDay] && Object.keys(workRecord[selectedDay]).length > 0
                ? Object.keys(workRecord[selectedDay]).maps(personName => <Paper><Typography variant='h3'>{personName}{': '}{workRecord[selectedDay][personName] ?? 0}</Typography></Paper>)
                : <Typography variant={readonly ? "h6" : "h3"} sx={{ paddingLeft: 2, marginTop: 5 }}>없음</Typography>}
        </Paper >
    )
}

export default People
