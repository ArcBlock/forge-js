import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class IndexPage extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          Hello World
          <Button onClick={() => window.alert('clicked')}>Click me</Button>
        </Grid>
      </Grid>
    );
  }
}

export default IndexPage;
