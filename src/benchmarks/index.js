import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import VanillaBenchmark from "./VanillaBenchmark";
import PreactBenchmark from "./PreactBenchmark";
import ReactBenchmark from "./ReactBenchmark";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 45,
    marginTop: theme.spacing.unit * 3,
  }),
});

class Benchmarks extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Grid container justify="center">
          <Grid item xs={12} sm={6}>
            <header>
              <Typography variant="display3" gutterBottom>
                AI Benchmark
              </Typography>
            </header>
          </Grid>
        </Grid>

        <Grid container styles={{flexGrow: 1}}>
          <Grid container justify="center">
            <Grid item xs={12} sm={6}>
              <Paper className={classes.root} elevation={1}>
                <Grid item xs={12}>
                  <Typography variant="display2" gutterBottom style={{paddingBottom: 10}}>
                    Vanilla
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <VanillaBenchmark />
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Grid item xs={12} sm={6}>
              <Paper className={classes.root} elevation={1}>
                <Grid item xs={12}>
                  <Typography variant="display2" gutterBottom style={{paddingBottom: 10}}>
                    React
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <ReactBenchmark />
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Grid item xs={12} sm={6}>
              <Paper className={classes.root} elevation={1}>
                <Grid item xs={12}>
                  <Typography variant="display2" gutterBottom style={{paddingBottom: 10}}>
                    Preact
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <PreactBenchmark />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item xs={12} sm={6}>
            <footer>
              <a href="https://www.themodernjs.com" target="_blank">© 2018 The Modern Javascript</a>
            </footer>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Benchmarks);
