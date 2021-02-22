import React from 'react';
import {
  Card,
  CardHeader,
  CardActionArea,
  Typography
} from '@material-ui/core';

const JobDescription = (props) => {
  const {
    job: {
      jobTitle,
      companyName,
      location
    }
  } = props;
  const showDetails = () => {
    console.log('TODO!')
  }
  return (
    <Card
      variant="outlined">
        <CardActionArea>
          <CardHeader
            title={<Typography color="primary">{jobTitle}</Typography>}
            subheader={
              <>
                <Typography>{companyName}</Typography>
                <Typography>{location}</Typography>
              </>
            }
            onClick={showDetails}/>
        </CardActionArea>
    </Card>
  )
}

export default JobDescription;
