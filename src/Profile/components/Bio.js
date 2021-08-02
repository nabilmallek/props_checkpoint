import React from 'react';
import PropTypes from 'prop-types'
const Bio = (props) => {
    return (
        <div>
            <p>{props.country} professional footballer who plays for and captains the Argentina national team</p>
        </div>
    );
}
Bio.defaultProps={country:"my country"}
Bio.propTypes={country:PropTypes.string.isRequired}
export default Bio;
