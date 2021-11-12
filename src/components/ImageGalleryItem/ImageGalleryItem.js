import React, { Component } from 'react'
import s from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types'

export default class ImageGalleryItem extends Component {
    render() {
        return (
        <li className={s.ImageGalleryItem}>
            <img src="" alt="" className={s.ImageGalleryItemImage} />
        </li>
        )
    }
}