import React, { Component } from 'react'
import s from './ImageGallery.module.css'

export default class ImageGallery extends Component{
    render() {
        return (
            <ul className={s.ImageGallery}></ul>
        )
    }
}