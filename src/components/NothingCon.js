import React from 'react';
import Typography from '@material-ui/core/Typography'

const NothingCon = (props) => {
    return (
        <Typography 
        variant={props.readonly ? "h6" : "h3"} 
        color='grey.500'
        sx={{ paddingLeft: 2, marginTop: 5 }}>
            없음...
        </Typography>
    )
}

export default NothingCon
