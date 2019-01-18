import gql from 'graphql-tag';

export const getReview = (epi) => {
    return gql`
        query{
            reviews(episode:${epi}){
                episode
                commentary
            }
        }
    `
}