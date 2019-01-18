import gql from 'graphql-tag';

export const getReview = (epi) => {
    console.log(epi)
    return gql`
        query{
            reviews(episode:${epi}){
                episode
                commentary
            }
        }
    `
}