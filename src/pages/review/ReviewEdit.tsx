import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { TextField, Button, MenuItem } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import * as reviewMutation from '../../graphql/mutation/review';
import * as reviewQuery from '../../graphql/query/review';
import './Review.css';

interface IEditProps {
    history : any;
}

const episode = [
    {
        value: 'EMPIRE',
    },
    {
        value: 'JEDI',
    },
    {
        value: 'NEWHOPE',
    },
]

interface IEditState {
    episodeState : string;
    commentary : string;
}

class ReviewEdit extends React.Component <IEditProps, IEditState>{

    constructor(props) {
        super(props);
        this.state= {
            episodeState : 'EMPIRE' ,
            commentary : ''
        }
    }

    public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    public handleSubmit = (e, createReview) => {
        const { episodeState, commentary } = this.state;
        e.preventDefault();
        createReview({
            variables : {
                Epi : episodeState,
                Input : {
                    stars : 1,
                    commentary : commentary,
                    favorite_color : {
                        red : 255,
                        green : 255,
                        blue : 255
                    }
                }
            }
        })
        this.props.history.push('/review')
    }

    public render() {

        const { episodeState } = this.state;

        return (
            <div className="fadeIn ReviewEdit">

                <Mutation mutation={reviewMutation.createReview()}
                    refetchQueries={[{ query: reviewQuery.getReview(episodeState) }]}>
                    {(createReview) => (
                        <form className="container" noValidate autoComplete="off" onSubmit={
                            (e) => this.handleSubmit(e, createReview)
                        }>
                            <div className="form-table">
                                <TextField
                                    id="outlined-select-episode"
                                    select
                                    label="Episode"
                                    name="episodeState"
                                    className="textField"
                                    value={episodeState}
                                    onChange={this.handleChange}
                                    margin="normal"
                                    variant="outlined"
                                    style={{width:'200px'}}
                                >
                                    {episode.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    required
                                    id="outlined-text-input"
                                    label="commentary"
                                    className="textField"
                                    name="commentary"
                                    value={this.state.commentary}
                                    onChange={this.handleChange}
                                    type="text"
                                    autoComplete="current-commentary"
                                    margin="normal"
                                    variant="outlined"
                                />
                                <Button type="submit" >Submit</Button>
                            </div>
                        </form>
                    )}
                </Mutation>
            </div>
        );
    }
}


export default withRouter(ReviewEdit);