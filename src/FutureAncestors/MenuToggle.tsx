import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { Display, MenuToggleProps } from "./types";

const MenuToggle = ({display, setDisplay}: MenuToggleProps) => {

    

    const toggleAudioDisplay = (d: number) => {
        if (d === 2) {
          setDisplay(Display.STORYSLAM)
        } else if (d === 1) {
          setDisplay(Display.FULL)
        } else {
          setDisplay(Display.SHORT)
        }
    }

    return (
        <ToggleButtonGroup
          value={display}
          exclusive
          onChange={(e, v) => toggleAudioDisplay(v)}
          aria-label="text alignment"
        >
          <ToggleButton value={Display.SHORT} aria-label="left aligned">
            Shorts
          </ToggleButton>
          <ToggleButton value={Display.FULL} aria-label="centered">
            Full Audio
          </ToggleButton>
          <ToggleButton value={Display.STORYSLAM} aria-label="right aligned">
            Storyslam
          </ToggleButton>
        </ToggleButtonGroup>
      );
}

export default MenuToggle;