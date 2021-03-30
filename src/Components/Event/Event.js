import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const Event = ({event}) => {
    const classes = useStyles();
    
    const handleDelete= ( id) =>{
        fetch(`http://localhost:4000/deleteEvent/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((result) => {
              if (result) {
                console.log("Event Deleted");
window.location.reload(false);
              }
  
            })
    }
    return (
<div className="col-md-4 p-2">
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={event.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {event.event}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => {handleDelete(event._id)}} size="small" color="primary">
          Delete
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
</div>
    )
};

export default Event;