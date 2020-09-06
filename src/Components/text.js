import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "./style.css";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function ResponsiveFontSizes() {
    return (
        <div >
            <Grid container>
                <ThemeProvider theme={theme}>
                    <Grid item xs={6}>
                        <Typography className="wrapper" style={{ marginTop: '70px', marginLeft: '170px', fontWeight: '100%', fontFamily: 'bold' }} variant="h4">Driver</Typography>
                        <ArrowForwardIcon style={{ marginLeft: '-30px' }} />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="wrapper2" style={{ marginTop: '70px', marginLeft: '30px', fontWeight: '100%', fontFamily: 'bold' }} variant="h4">Rider</Typography>
                        <ArrowForwardIcon style={{ marginLeft: '-30px' }} />
                    </Grid>
                </ThemeProvider>
            </Grid>
        </div>
    );
}
