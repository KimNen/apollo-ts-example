import React, { Component } from 'react'

import './Human.css'
import { Query } from 'react-apollo';
import * as humanGql from '../../graphql/query/human';
// import { Table, TableHead, TableBody, TableCell, TableRow, Button, MenuItem, TextField } from '@material-ui/core';



class Human extends Component<any, any> {

    public render() {
        return (
            <Query
                query={humanGql.getHuman(1000)}
            >
                {({loading, error, data}) => {
                    console.log('Human data : ', data)
                    return (
                        <div className="Human">

                        </div>
                    )
                }}
            </Query>
        )
    }

}

export default Human