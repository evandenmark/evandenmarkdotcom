import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SoundBox from './SoundBox';
import { FormRowProps, GridSystemProps } from './types';

const GridSystem = ({data}: GridSystemProps) => {

    const NUM_ROWS = Math.ceil(data.length/3);
    const VERTICAL_SPACE = 5;

    const FormRow = ({rowNum} : FormRowProps) => 
        (
            <React.Fragment>
              <Grid key={rowNum*3} item >
                <SoundBox data={data[rowNum*3]} index={rowNum*3}/>
              </Grid>
              <Grid key={rowNum*3+1} item  >
                {data.length > rowNum*3 + 1 
                    && (<SoundBox data={data[rowNum*3 + 1]} index={rowNum*3 + 1}/>)
                }
              </Grid>
              <Grid key={rowNum*3+2} item  >
                {data.length > rowNum*3 + 2 
                    && (<SoundBox data={data[rowNum*3 + 2]} index={rowNum*3 + 2}/>)
                }
              </Grid>
            </React.Fragment>
          );

    return (
        <Box sx={{ paddingTop:5}}>
             <Grid container >
                 {
                     Array.from(Array(NUM_ROWS).keys()).map(
                        i => (
                            <Grid container 
                            key={-1*i}
                            item 
                            marginBottom={VERTICAL_SPACE} 
                            marginTop={VERTICAL_SPACE}
                            justifyContent={"space-between"}
                            display= {"flex"}
                            >
                                <FormRow rowNum={i} />
                            </Grid>
                        )
                     )
                 }
                
            </Grid>
        </Box>
  );
}

export default GridSystem;