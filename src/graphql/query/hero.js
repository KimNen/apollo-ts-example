import gql from 'graphql-tag';

export const getHero = () => {
    return gql`
        query{
            hero(episode:EMPIRE){
                id
                friends {
                    id
                    name
                }
            }
        }
    `
}