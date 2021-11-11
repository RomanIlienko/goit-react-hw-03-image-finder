import React from 'react';
import s from './Modal.module.css'

export default class Modal extends React.Component {
    render() {
        return (
            <div className={s.Overlay}>
                <div className={s.Modal}>{this.props.children}</div>
            </div>
        )
    }
}