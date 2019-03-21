import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
  const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

  return (
    <Grid container spacing={32} justify="space-evenly">
      {footers.map(x => (
        <Grid item xs key={x.title}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {x.title}
          </Typography>
          {x.description.map(item => (
            <Typography key={item} variant="subtitle1" color="textSecondary">
              {item}
            </Typography>
          ))}
        </Grid>
      ))}
    </Grid>
  );
}
