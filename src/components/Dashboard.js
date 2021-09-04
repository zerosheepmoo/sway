import React, {useEffect, useState} from 'react';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiDrawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DateViewer from './DateViewer';
import { secondaryListItems, mainListItems } from './ListItems'
import People from './People';
import Todos from './Todos';
import Notice from './Notice';
import RecordWork from './RecordWork';
import { saveAs } from 'file-saver'
import ComplexCals from './ComplexCals';

function Footer(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Simple Workbook Application for You, Last updated: 2021-09-01'}
        </Typography>
    );
}

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    backgroundColor: theme.primary
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const MainDashboard = (date, setDate, data, peopleData) => (

    <Grid container spacing={3}>
        {/* DatePicker */}
        <Grid item xs={12} md={6} lg={6} >
            <DateViewer date={{ val: date, dispatch: setDate }} />
        </Grid>
        {/* Todos */}
        <Grid item xs={12} md={6} lg={6}>
            <Todos data={data} readonly={true} />
            <People data={peopleData} readonly={true}/>
        </Grid>
    </Grid>)

const DashboardContent = () => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const [date, setDate] = useState(new Date())
    const [notifiCount, setNotifiCount] = useState(1)
    const [pageState, setPageState] = useState('dashboard')
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("swayTodos");
        const initialValue = JSON.parse(saved);
        return initialValue || {};
    });
    const [people, setPeople] = useState(() => {
        const saved = localStorage.getItem("swayPeople");
        const initialValue = JSON.parse(saved);
        return initialValue || {list: [], workRecord: {}};
    });


    const saveData = () => {
        window.localStorage.setItem("swayTodos", JSON.stringify(todos));
    };

    const loadData = () => {
        const input = document.createElement('input');
        const handleFiles = () => {
            const file = input.files[0]; /* now you can work with the file list */
            console.log(file)
            const fr = new FileReader();
            fr.addEventListener("load", e => {
                const filecontent = JSON.parse(fr.result);
                setTodos(filecontent)
                input.parentElement?.removeChild(input);
            });
            fr.readAsText(file);
        }
        input.type = 'file'
        input.addEventListener("change", handleFiles, false);
        input.click()
    };

    const deleteData = () => {
        setTodos({});
    }

    const exportData = () => {
        const data = JSON.stringify(todos)
        console.log(data)
        const file = new File([data], `sway-todos-${new Date().getTime()}.json`);
        saveAs(file);
    }

    const savePeopleData = () => {
        window.localStorage.setItem("swayPeople", JSON.stringify(people));
    }

    const exportPeopleData = () => {
        const data = JSON.stringify(people)
        console.log(data)
        const file = new File([data], `sway-people-${new Date().getTime()}.json`);
        saveAs(file);
    }

    const loadPeopleData = () => {
        const input = document.createElement('input');
        const handleFiles = () => {
            const file = input.files[0]; /* now you can work with the file list */
            console.log(file)
            const fr = new FileReader();
            fr.addEventListener("load", e => {
                const filecontent = JSON.parse(fr.result);
                setPeople(filecontent)
                input.parentElement?.removeChild(input);
            });
            fr.readAsText(file);
        }
        input.type = 'file'
        input.addEventListener("change", handleFiles, false);
        input.click()
    };

    const dataRel = {
        todos,
        setTodos: setTodos,
        upload: loadData,
        delete: deleteData,
        export: exportData,
        date,
        setDate
    }

    const peopleDataRel = {
        people: people.list,
        workRecord: people.workRecord,
        setPeople,
        date,
        export: exportPeopleData,
        upload: loadPeopleData
    }

    useEffect(() => {
        saveData()
    }, [todos])

    useEffect(() => {
        savePeopleData()
    }, [people])

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar position="absolute" open={open}>
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        SWAY
                    </Typography>
                    <IconButton color="inherit" onClick={() => { alert('장식입니다!'); setNotifiCount(0) }}>
                        <Badge badgeContent={notifiCount} color="secondary" >
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List> {mainListItems(setPageState)}</List>
                <Divider />
                <List> {secondaryListItems(dataRel, peopleDataRel)}</List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    {pageState === 'dashboard' ? MainDashboard(date, setDate, dataRel, peopleDataRel) 
                    : pageState === 'people' ? <People data={peopleDataRel} readonly={false}/> 
                    : pageState === 'calculator' ? <ComplexCals />
                    : pageState === 'todos' ? <Todos data={dataRel} readonly={false} /> 
                    : pageState === 'notice' ? <Notice /> 
                    : pageState === 'addem' ? <RecordWork data={peopleDataRel}/> :'Nothing ever happens'}
                    <Footer sx={{ pt: 4 }} />
                </Container>
            </Box>
        </Box>
    );
}

export default DashboardContent