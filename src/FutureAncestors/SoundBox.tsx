import { Box } from "@mui/system";
import { colors } from "./theme";
import { SoundRecord } from "./types";

interface SoundBoxProps {
    data: SoundRecord,
    index: number
}


const SoundBox = ({data, index}: SoundBoxProps) => {

    const boxSize = ((window.screen.width*0.5)/3)*0.9;
    return (
            <Box
                style={{
                    backgroundColor: colors[index%colors.length],
                    borderRadius: 25,
                    color: '#eee',
                    height: boxSize,
                    padding: 12,
                    width: boxSize,
                    opacity: 0.75
                }} >
                    <div className={"soundbox"}>
                        <h1>{data.speaker}</h1>
                        <p>{data.topic}</p>
                        <div className={"audiocontainer"}>
                            <audio 
                            controls 
                            >
                                <source src={data.link} type="audio/mpeg"/>
                                Your browser does not support the audio tag.
                            </audio>
                        </div>
                    </div>
            </Box>
    )
}

export default SoundBox;