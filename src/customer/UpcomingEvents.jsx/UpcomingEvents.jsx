import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import techImage from '../../Data/tech-fest.png';
import cluImage from '../../Data/clutural-night.png';
import sportImage from '../../Data/sports-fest.png';

const UpcomingEvents = () => {
  const events = [
    {
      title: 'Tech Fest',
      date: 'December 5, 2024',
      description: 'A showcase of innovative projects and workshops.',
      image: techImage
    },
    {
      title: 'Cultural Night',
      date: 'December 10, 2024',
      description: 'A night to celebrate culture and diversity.',
      image: cluImage
    },
    {
      title: 'Sports Meet',
      date: 'December 15, 2024',
      description: 'An inter-departmental sports competition.',
      image: sportImage
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 className="text-3xl font-extrabold text-gray-800 py-5">Upcoming Events</h1>
      <Grid container spacing={4}>
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={event.image}
                alt={event.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {event.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {event.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UpcomingEvents;
