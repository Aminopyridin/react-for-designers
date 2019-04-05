import React from 'react';
import styles from './style.less';
import Button from '@skbkontur/react-ui/Button';
import Input from '@skbkontur/react-ui/Input';

export default class Example extends React.Component {
    render () {
        return (
            <div className={ styles.root }>
                <h2>It's Example Component.</h2>
                <Input placeholder='Example Text' />
                <Button>Example Button</Button>
            </div>
        );
    }
}
