import React from 'react';
import PropTypes from 'prop-types'
const FullName = (props) => {
    return (
        <div>
            <h1 style={{backgroundColor:"turquoise"}}> {props.name}  </h1>
        </div>
    );
}
FullName.defaultProps={name:"My name"}


FullName.propTypes={name:PropTypes.string.isRequired}


export default FullName;
