import React from 'react';
import PropTypes from 'prop-types'
const Photo = (props) => {
    return (
        <div>
           {props.children} 
        </div>
    );
}
Photo.defaultProps={img:"messi"}
Photo.prototype={img:PropTypes.string.isRequired}
export default Photo;
