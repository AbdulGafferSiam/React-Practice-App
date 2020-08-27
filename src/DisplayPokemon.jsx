import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './index.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function DisplayPokemon(props) {
    const classes = useStyles();
    console.log(classes.root);
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <div className="card_img">
                    <CardMedia
                        component="img"
                        alt="Front image"
                        height="140"
                        image={props.pokemon.img_front}
                        title={props.pokemon.name}
                    />
                    <CardMedia
                        component="img"
                        alt="Back image"
                        height="140" 
                        image={props.pokemon.img_back}
                        title={props.pokemon.name}
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ textTransform: "capitalize" }}>
                        {props.pokemon.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Weight: {props.pokemon.weight}
                        <br />
            Moves: {props.pokemon.moves}
                    </Typography>
                </CardContent>
            </CardActionArea>
            
        </Card>
    );
}