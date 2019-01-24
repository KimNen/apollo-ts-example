import gql from 'graphql-tag';

export const createHuman = () => {
    return gql`
        mutation EditHuman($Epi : Episode, $Input : HumanInput!){
            createHuman(episode : $Epi, human: $Input){
                stars,
                episode,
                commentary
            }
        }
    `;
}