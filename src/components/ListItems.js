import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import CalculateIcon from '@material-ui/icons/Calculate';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';;
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Assignment from '@material-ui/icons/Assignment';
import Delete from '@material-ui/icons/Delete';
import UploadFile from '@material-ui/icons/UploadFile';

export const mainListItems = (dispatch) => (
  <div>
    <ListItem button onClick={() => {dispatch('dashboard')}}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="대시보드" />
    </ListItem>
    <ListItem button onClick={() => dispatch('people')}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="직원관리" />
    </ListItem>
    <ListItem button onClick={() => dispatch('acc')}>
      <ListItemIcon>
        <AccountBalanceWalletIcon />
      </ListItemIcon>
      <ListItemText primary="장부" />
    </ListItem>
    <ListItem button onClick={() => dispatch('calculator')}>
      <ListItemIcon>
        <CalculateIcon />
      </ListItemIcon>
      <ListItemText primary="임금계산기" />
    </ListItem>
    <ListItem button onClick={() => dispatch('todos')}>
      <ListItemIcon>
        <AssignmentInd />
      </ListItemIcon>
      <ListItemText primary="업무일지" />
    </ListItem>
    <ListItem button onClick={() => dispatch('notice')}>
      <ListItemIcon>
        <Assignment/>
      </ListItemIcon>
      <ListItemText primary="안내" />
    </ListItem>
  </div>
);

export const secondaryListItems = (data, peopleData) => (
  <div>
    <ListSubheader inset>자동 저장은 위험합니다!</ListSubheader>

    <ListItem button onClick={() => data.delete()}>
      <ListItemIcon>
        <Delete />
      </ListItemIcon>
      <ListItemText primary="전체일지 삭제하기" sx={{color: '#ff1744'}}/>
    </ListItem>

    <ListItem button onClick={() => data.upload()}>
      <ListItemIcon>
        <UploadFile />
      </ListItemIcon>
      <ListItemText primary="업무일지 파일 불러오기"/>
    </ListItem>

    <ListItem button onClick={() => data.export()}>
      <ListItemIcon>
        <SaveAltIcon />
      </ListItemIcon>
      <ListItemText primary="업무일지 파일 저장하기"/>
    </ListItem>

    <ListItem button onClick={() => peopleData.upload()}>
      <ListItemIcon>
        <UploadFile />
      </ListItemIcon>
      <ListItemText primary="직원기록 파일 불러오기"/>
    </ListItem>

    <ListItem button onClick={() => peopleData.export()}>
      <ListItemIcon>
        <SaveAltIcon />
      </ListItemIcon>
      <ListItemText primary="직원기록 파일 저장하기"/>
    </ListItem>
  </div>
);