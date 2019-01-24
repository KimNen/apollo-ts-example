import * as React from 'react';
import { Link } from 'react-router-dom'
import { Table, TableHead, TableBody, TableCell, TableRow, Button, MenuItem, TextField } from '@material-ui/core';
import { Query } from 'react-apollo';
import * as reviewGql from '../../graphql/query/review';
import Loading from '../loading/Loading'
import Error from '../error/Error'
import Blank from '../blank'
import client from 'src/components/client';

interface IRowData {
    episode: string;
    commentary: string;
    __typename: string;
}

interface IReviewState {
    episode : string;
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

    private handleChange = (e : React.ChangeEvent<HTMLInputElement>) : void => {
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        })
    }

    componentDidMount = () => {}

    ButtonClick = () => {
        const todo = client.readQuery({
            query : reviewGql.getReview(this.state.episode),
        })
        console.log('Todo : ',todo)
    }

    public render() {
        return (
            <div className="Review">
                <div className="table-header">
                    <Link to="/review/edit">
                        <Button>리뷰 추가</Button>
                    </Link>
                    <Button onClick={() => this.ButtonClick()}>ReadQuery</Button>
                    <TextField
                        id="outlined-select-episode"
                        select
                        label="Episode"
                        name="episode"
                        className="textField"
                        value={this.state.episode}
                        onChange={this.handleChange}
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
                    // variables={{ //쿼리에 들어갈 값을 이런식으로 넣어줄 수도 있음
                    //     type: match.params.type.toUpperCase() || "TOP",
                    //     offset: 0,
                    //     limit: 10
                    //   }}
                    //   fetchPolicy="cache-and-network"
                >
                    {({ loading, error, data }) => {
                        if (loading) return <Loading />
                        if (error) return <Error />
                        if (!data) return <Blank />
                        return (
                            <React.Fragment>
                                <div className="table">
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
            </div>
            )
    }
}

export default Review;