import React from 'react';
import PropTypes from 'prop-types'
const Profession = (props) => {
    return (
        <div>
            <h3>{props.job}  </h3>
        </div>
    );
}
Profession.defaultProps={job:"plyer"}
Profession.propTypes={job:PropTypes.string.isRequired}
export default Profession;
