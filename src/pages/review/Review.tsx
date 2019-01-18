import * as React from 'react';
import { Link } from 'react-router-dom'
import { Table, TableHead, TableBody, TableCell, TableRow, Button, MenuItem, TextField } from '@material-ui/core';
import { Query } from 'react-apollo';
import * as reviewGql from '../../graphql/query/review';
import Loading from '../loading'
import Error from '../error'
import Blank from '../blank'

interface IRowData {
    episode: string;
    commentary: string;
    __typename: string;
}

interface IReviewState {
    episode: string;
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

class Review extends React.Component<any, IReviewState> {

    constructor(props) {
        super(props);
        this.state = {
            episode: 'EMPIRE'
        }
    }

    public handleChange = (name: string) => (e) => {
        this.setState({
            episode: e.target.value
        })
    }

    public render() {
        console.log('aa')
        return (
            <React.Fragment>
                <div className="table-header">
                    <Link to="/review/edit">
                        <Button>리뷰 추가</Button>
                    </Link>
                    <TextField
                        id="outlined-select-episode"
                        select
                        label="Episode"
                        name="episode"
                        className="textField"
                        value={this.state.episode}
                        onChange={this.handleChange('episode')}
                        margin="normal"
                        variant="outlined"
                    >
                        {episode.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>

                <Query
                    query={reviewGql.getReview(this.state.episode)}
                    partialRefetch={true}
                >
                    {({ loading, error, data }) => {
                        if (loading) return <Loading />
                        if (error) return <Error />
                        if (!data) return <Blank />
                        console.log(data)
                        return (
                            <React.Fragment>
                                <div>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Episode</TableCell>
                                                <TableCell >Commentary</TableCell>
                                                <TableCell >Type</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {data.reviews.map((row: IRowData, idx) => {
                                                console.log(row)
                                                return (
                                                    <TableRow className="tableRow" key={idx}>
                                                        <TableCell component="th" scope="row">
                                                            {row.episode}
                                                        </TableCell>
                                                        <TableCell >{row.commentary}</TableCell>
                                                        <TableCell >{row.__typename}</TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </div>
                            </React.Fragment>
                        )
                    }}
                </Query>
            </React.Fragment>
            )
    }
}

export default Review;