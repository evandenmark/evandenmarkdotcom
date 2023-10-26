import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SoundBox from './SoundBox';
import { Display, FormRowProps, GridSystemProps } from './types';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { shuffleArray } from './utils';

const GridSystem = ({
    data,
    width,
    height,
    display
  }: GridSystemProps
  ) => {

    const aspectRatio = width / height;
    const numColumns = aspectRatio > 1.5 ? 3 : aspectRatio > 0.8 ? 2 : 1
    const containerWidth = width < 720 ? width : width*0.8
    
    const [filter, setFilter] = useState("");
    const audioData = data.filter(a => a.speaker.toLowerCase().startsWith(filter.toLowerCase()))
    
    const NUM_ROWS = Math.ceil(audioData.length/numColumns);

    const FormRowThree = ({rowNum} : FormRowProps) => 
        (
            <React.Fragment>
              <Grid key={rowNum*3} item >
                <SoundBox data={audioData[rowNum*3]} index={rowNum*3} containerWidth={containerWidth} numColumns={numColumns}/>
              </Grid>
              <Grid key={rowNum*3+1} item  >
                {audioData.length > rowNum*3 + 1 
                    && (<SoundBox data={audioData[rowNum*3 + 1]} index={rowNum*3 + 1} containerWidth={containerWidth} numColumns={numColumns}/>)
                }
              </Grid>
              <Grid key={rowNum*3+2} item  >
                {audioData.length > rowNum*3 + 2 
                    && (<SoundBox data={audioData[rowNum*3 + 2]} index={rowNum*3 + 2} containerWidth={containerWidth} numColumns={numColumns}/>)
                }
              </Grid>
            </React.Fragment>
          );
    
    const FormRowTwo = ({rowNum} : FormRowProps) => 
          (
              <React.Fragment>
                <Grid key={rowNum*2} item >
                  <SoundBox data={audioData[rowNum*2]} index={rowNum*2} containerWidth={containerWidth} numColumns={numColumns}/>
                </Grid>
                <Grid key={rowNum*2+1} item  >
                  {audioData.length > rowNum*2 + 1 
                      && (<SoundBox data={audioData[rowNum*2 + 1]} index={rowNum*2 + 1} containerWidth={containerWidth} numColumns={numColumns}/>)
                  }
                </Grid>
              </React.Fragment>
            );
    
    const FormRowSingle = ({rowNum} : FormRowProps) => 
            (
                <React.Fragment>
                  <Grid key={rowNum} item >
                    <SoundBox data={audioData[rowNum]} index={rowNum} containerWidth={containerWidth} numColumns={numColumns}/>
                  </Grid>
                </React.Fragment>
              );

    return (
      <Paper elevation={0}>
        <TextField 
                id="outlined-basic" 
                label="Search" 
                variant="outlined" 
                onChange={(e) => setFilter(e.target.value)} 
                style={{
                  marginTop: 5
                }}
        />
        {
          display===Display.STORYSLAM && (
            <p><i>Held in March 2023, this slam asked speakers
              to prepare a 5-8 minute story under the theme "Future Ancestors: 
              stories you want the next generation to hear"</i></p>
          )
        }
        <Box sx={{ paddingTop:5, }}>
             <Grid container >
                 {
                     Array.from(Array(NUM_ROWS).keys()).map(
                        i => (
                            <Grid container 
                            key={-1*i}
                            item 
                            justifyContent={"space-between"}
                            display= {"flex"}
                            paddingBottom={2}
                            >
                              {
                                numColumns === 3 ? (
                                  <FormRowThree rowNum={i} />
                                ) :
                                numColumns === 2 ? (
                                  <FormRowTwo rowNum={i} />
                                ) : 
                                <FormRowSingle rowNum={i} />
                              }
                            </Grid>
                        )
                     )
                 }
                
            </Grid>
        </Box>
        </Paper>
  );
}

export default GridSystem;