import * as React from 'react'

// import styles from './index.scss';

// export interface ICommonProps {
//     name: string;
//     age: number;
// }

// interface IFooterProps extends ICommonProps {
//     aaa: string;
//     bbb?: number;
// }

// interface IFooterState {
//     ccc: string;
// }

class Footer extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            ccc: 'asdad',
        }
    }

    public render() {
        return (
            <div>
                FooterPagefdsfaf
            </div>
        )
    }
}
export default Footer