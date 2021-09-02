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

// add todo component
const AddTodo = (props) => {
    const [todoText, setTodoText] = useState('')
    const submit = props.submit

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(todoText);
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
                sx={{ flex: '0.8' }}
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={4}
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <Button
                sx={{ flex: '0.15' }}
                type="submit"
                variant="contained"
                color="primary"
                style={{ width: "10%" }}
                onClick={(e) => handleSubmit(e)}
            >
                Add
            </Button>
        </Box>
    )
}

// todo component
const Todo = (props) => {

    const [status, setStatus] = useState('read');
    const [value, setValue] = useState(() => props.todo)
    const prevVal = props.todo

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
    const todo = props.todo.split('\n');

    const update = (e) => {
        e.preventDefault();
        if (value !== props.todo) {
            props.edit(props.id, value)
            setValue('');
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
            sx = {{ flex: '0.9'}}
            defaultValue={value}
            onChange={(e) => setValue(e.target.value)}
            multiline
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

    const readModeTemplate = <><Box>
        {todo.map(t => (<Typography key={t} variant="body1" xs={{ display: 'block' }}> {t} </Typography>))}
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
            >
                <Paper elevation={2} sx={styles.Paper}>
                    {status === 'read' ?
                        readModeTemplate
                        :
                        editModeTemplate
                    }
                </Paper>
            </Grid>
        )
    }

    const Todos = (props) => {

        const todos = props.data.todos
        const setTodos = props.data.setTodos
        const date = props.data.date

        const readonly = props.readonly
        const selectedDay = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`


        const dispatchTodos = () => {
            const newTodos = { ...todos, [selectedDay]: [] };
            setTodos(newTodos);
        }

        const addTodo = (val) => {
            const sTodos = todos[selectedDay];
            const already = sTodos.filter(el => el === val);
            if (already.length !== 0) {
                alert('똑같은 내용의 기록이 있습니다!');
                return;
            }
            sTodos.push(val);
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
                sx={readonly ? {
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
                    overflow: 'scroll',
                    position: 'relative'
                } : { height: '80vh', padding: '20px', overflow: 'scroll', position: 'relative' }}>
                <Typography variant={readonly ? "h5" : "h2"} color="primary" align="center">
                    {selectedDay} 업무 기록
                </Typography>

                {!readonly ? <AddTodo submit={addTodo} /> : <></>}

                {todos[selectedDay] && todos[selectedDay].length > 0 ? todos[selectedDay].map(todo => <Todo key={todos[selectedDay].indexOf(todo)} id={todos[selectedDay].indexOf(todo)} todo={todo} readonly={readonly} edit={editTodo} delete={deleteTodo}/>) : <Typography variant={readonly ? "h6" : "h3"} sx={{ paddingLeft: 2, marginTop: 5 }}>없음</Typography>}

                <Typography sx={{ marginTop: 3 }}>
                    {readonly ? 'readonly' : 'edit'}
                </Typography>
            </Paper >
        )
    }

    export default Todos
