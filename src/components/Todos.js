import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Build from "@material-ui/icons/Build";
import Delete from "@material-ui/icons/Delete";
import Save from "@material-ui/icons/Save";
import Input from '@material-ui/core/Input';
import NothingCon from './NothingCon';
import PeopleSingleSelect from './PeopleSingleSelect';

// add todo component
const AddTodo = (props) => {
    const [todoText, setTodoText] = useState('');
    const [income, setIncome] = useState('');
    const [outcome, setOutcome] = useState('');
    const submit = props.submit;

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(todoText, income, outcome, props.p.person);
        setTodoText('');
    }
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                margin: 2
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                sx={{ flex: '1.8', mr:1 }}
                label="업무내용"
                multiline
                maxRows={2}
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <TextField
                sx={{ flex: '0.5', mr:1  }}
                type="number"
                label="수입"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
            />
            <TextField
                sx={{ flex: '0.5', mr:1  }}
                type="number"
                label="지출"
                value={outcome}
                onChange={(e) => setOutcome(e.target.value)}
            />
            <Box sx={{ flex: '0.5', mr:1  }} >
            <PeopleSingleSelect list={props.p.list} person={props.p.person} setPerson={props.p.setPerson} label={'담당자'}emptyVal/>
            </Box>
            <Button
                sx={{ flex: '0.15' }}
                type="submit"
                variant="contained"
                color="primary"
                style={{ width: "10%" }}
                onClick={(e) => handleSubmit(e)}
            >
                추가
            </Button>
        </Box>
    )
}

// todo component
const Todo = (props) => {

    const [status, setStatus] = useState('read');
    const [value, setValue] = useState(() => props.todo);

    useEffect(() => {
        setValue(props.todo)
    }, [props.todo])

    const styles = {
        Paper: {
            padding: 3,
            display: "flex",
            alignItems: "center",
            margin: 2
        }
    };

    const readonly = props.readonly
    const txt = props.todo.text.split('\n');
    let lineCount = 0;

    const update = (e) => {
        e.preventDefault();
        if (value.text !== props.todo.text) {
            props.edit(props.id, value)
            setValue({});
            setStatus('read');
        }
        setStatus('read');
    }

    const editModeTemplate = <Box component="form"
        sx={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: 2,
            width: '100%'
        }}
        noValidate
        autoComplete="off">
        <Input
            sx={{ flex: '2' }}
            defaultValue={value.text}
            onChange={(e) => setValue((prev) => { return { ...prev, text: e.target.value } })}
            multiline
        />
        <Input
            sx={{ flex: '0.5' }}
            type="number"
            defaultValue={value.income}
            onChange={(e) => setValue((prev) => { return { ...prev, income: e.target.value } })}
        />
        <Input
            sx={{ flex: '0.5' }}
            type="number"
            defaultValue={value.outcome}
            onChange={(e) => setValue((prev) => { return { ...prev, outcome: e.target.value } })}
        />
        <Input
            sx={{ flex: '0.5' }}
            defaultValue={value.assignee}
            onChange={(e) => setValue((prev) => { return { ...prev, assignee: e.target.value } })}
        />

        <IconButton
            type="submit"
            color="primary"
            aria-label="Save"
            onClick={(e) => update(e)}
        >
            <Save fontSize="small" />
        </IconButton>
    </Box>

    const readModeTemplate = <><Box sx={{ flex: '2' }}>
        {txt.map(t => {
            lineCount += 1;
            return (<Typography key={lineCount} variant="body1" xs={{ display: 'block' }}> {t} </Typography>)
        })}
    </Box>
        <Box hidden={readonly} sx={{ flex: '.5' }}>
            {value.income ? value.income + ' 원' : ''}
        </Box>
        <Box hidden={readonly} sx={{ flex: '.5' }}>
            {value.outcome ? value.outcome + ' 원' : ''}
        </Box>
        <Box hidden={readonly} sx={{ flex: '.5' }}>
            {value.assignee}
        </Box>
        {
            !readonly ? <>
                <IconButton
                    color="primary"
                    aria-label="Edit"
                    sx={{ marginLeft: "auto" }}
                    onClick={(e) => setStatus(e.target.value)}
                >
                    <Build fontSize="small" />
                </IconButton>
                <IconButton
                    color="secondary"
                    aria-label="Delete"
                    onClick={() => props.delete(props.id)}
                >
                    <Delete fontSize="small" />
                </IconButton>
            </>
                : <></>
        }</>
    return (
        <Grid
            xs={12}
            item
            sx={{ flex: '0.5' }}
        >
            <Paper elevation={2} sx={styles.Paper}>
                {status === 'read'
                    ? readModeTemplate
                    : editModeTemplate
                }
            </Paper>
        </Grid>
    )
}

const Todos = (props) => {

    const todos = props.data.todos
    const setTodos = props.data.setTodos
    const date = props.data.date

    const people = props.people;
    const [person, setPerson] = useState('');

    const readonly = props.readonly
    const selectedDay = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`


    const dispatchTodos = () => {
        const newTodos = { ...todos, [selectedDay]: [] };
        setTodos(newTodos);
    }

    const addTodo = (text, income, outcome, assignee) => {
        const sTodos = todos[selectedDay];
        const already = sTodos.filter(el => el.text === text);
        if (already.length !== 0) {
            alert('똑같은 내용의 기록이 있습니다!');
            return;
        }
        sTodos.push({ text, income, outcome, assignee });
        setTodos({ ...todos, [selectedDay]: sTodos });
    }

    const editTodo = (idx, newVal) => {
        const sTodos = todos[selectedDay];
        sTodos[idx] = newVal;
        const newTodos = { ...todos, [selectedDay]: sTodos }
        setTodos(newTodos);
    }

    const deleteTodo = (key) => {
        const sTodos = todos[selectedDay];
        sTodos.splice(key, 1);
        setTodos({ ...todos, [selectedDay]: sTodos });
    }

    useEffect(() => {
        if (!todos[selectedDay]) {
            dispatchTodos()
        }
    }, [])

    useEffect(() => {
        if (!todos[selectedDay]) {
            dispatchTodos()
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
                flex: '1',
                maxHeight: 300
            } : { height: '80vh', padding: '20px', overflow: 'scroll', position: 'relative' }}>
            <Typography variant={readonly ? "h5" : "h2"} color="primary" align="center">
                {selectedDay} 업무 기록
            </Typography>

            {!readonly ? <AddTodo submit={addTodo} p={{list: people, person: person, setPerson: setPerson}} /> : <></>}

            {todos[selectedDay] && todos[selectedDay].length > 0
                ? todos[selectedDay].map(todo => <Todo key={todos[selectedDay].indexOf(todo)} id={todos[selectedDay].indexOf(todo)} todo={todo} readonly={readonly} edit={editTodo} delete={deleteTodo} />)
                : <NothingCon readonly={readonly} />}
        </Paper >
    )
}

export default Todos
