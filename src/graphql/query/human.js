import gql from 'graphql-tag';

export const getHuman = (id) => {
    return gql`
        query{
            human(id:${id}){
                id
                name
                homePlanet
                height
                mass
                friends {
                    id
                    name
                }
                appearsIn
                starships {
                    id
                    name
                    length
                    coordinates
                }
            }
        }
    `
}