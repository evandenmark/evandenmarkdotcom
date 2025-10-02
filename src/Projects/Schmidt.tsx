import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./pages.module.css"
import { Stack } from '@mui/material';

interface SchmidtParams {
    navFunc: (link: string) => void
}


const Schmidt = ({navFunc} : SchmidtParams) => {
    return <>

    <div className={styles.menu}>
            <nav>
                <ul className={styles.navList}>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/intertidal">Intertidal</Link></li>
                    <li><Link to="https://docs.google.com/document/d/1SKFlFGR8Am_kIG0-sL_NDgGAwZA2eXAljyl3XXZKHag/edit?usp=sharing" target="_blank">CV</Link></li>

                </ul>
            </nav>
    </div>

    <div className={styles.container}>

        <Stack
            spacing={2}
            style={{padding: '2%' }}
            alignItems="center"
        >

            <div style={{width: '50%', textAlign: 'center', marginBottom: '2%'}}>
                <h1>Schmidt Sciences</h1>
                <h4 className={styles.paragraph}>
                Schmidt Sciences is part of the philanthropic organizations and initiatives created and funded by Eric and Wendy Schmidt to work toward a healthy, resilient, secure world for all.
                </h4>
                <p className={styles.paragraph}>
                In the below videos, I led all production aspects - from scriptwriting to art direction to voiceover to final animation - to highlight their cutting-edge ocean research. 
                </p>

            </div>
            
            {/* ALB */}
            <div style={{textAlign: 'center', marginBottom: '2%'}}>
                <h3>Animals as Living Bioreactor</h3>
                <iframe src="https://drive.google.com/file/d/1ibBvNatw42GwsBKm8k0mrkZgu16xmTow/preview" width="800" height="450" allow="autoplay"></iframe>
            </div>

            {/* OMI */}
            <div style={{textAlign: 'center', marginBottom: '2%'}}>
                <h3>Ocean Margins Initiative</h3>
                <iframe src="https://drive.google.com/file/d/1cu_S9n78oo1gwb3WeI9iEgzh6DtBd5tq/preview" width="800" height="450" allow="autoplay"></iframe>
            </div>

            {/* SUBSEA*/}
            <div style={{textAlign: 'center', marginBottom: '2%'}}>
                <h3>SUBSEA</h3>
                <iframe src="https://drive.google.com/file/d/16TCXkBCSmHc7al900TCobw0B9yYFWRI4/preview" width="800" height="450" allow="autoplay"></iframe>

            </div>
            
            {/* WAM */}
            <div style={{textAlign: 'center', marginBottom: '2%'}}>
                <h3>West African Margin</h3>
                <iframe src="https://drive.google.com/file/d/1dtKiYUu-psDA-eb-r9DoWJuZ-gyEFlcQ/preview" width="800" height="450" allow="autoplay"></iframe>

            </div>
            
            {/* InMOS */}
            <div style={{textAlign: 'center', marginBottom: '2%'}}>
                <h3>InMOS</h3>
                <iframe src="https://drive.google.com/file/d/1G1t8dccblLo9PkN1Ri_TH0n8kNNPKjrV/preview" width="800" height="450" allow="autoplay"></iframe>

            </div>
            
            
            
        </Stack>
    </div>

    </>

    
}

export default Schmidt;