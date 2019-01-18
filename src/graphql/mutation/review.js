import gql from 'graphql-tag';

export const createReview = () => {
    return gql`
        mutation EditReview($Epi : Episode, $Input : ReviewInput!){
            createReview(episode : $Epi, review: $Input){
                stars,
                episode,
                commentary
            }
        }
    `;
}