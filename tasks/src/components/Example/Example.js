import React from 'react';
import styles from './style.less'

export default class Example extends React.Component {
    render () {
        return (
            <div className={ styles.root }>
                <h2>It's Example Component.</h2>
                <input placeholder='Example Text' />
                <button>Example Button</button>
            </div>
        );
    }
}
