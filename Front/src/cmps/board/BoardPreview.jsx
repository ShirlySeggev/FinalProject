
import { Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 95,
    },
    media: {
        height: 40,
    },
});

export function BoardPreview({ board }) {
    const { _id, title } = board;
    const classes = useStyles();

    return (
        
        <Link to={`/board/${_id}`}>
                <div className="single-board-preview">
            <h4>{title}</h4>
            </div>
            </Link>
        
    );

}

