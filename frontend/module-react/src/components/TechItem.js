import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
    return (
        <li key={tech}>
            {tech}                     
            <button type="button" onClick={onDelete}>Remove</button>
        </li>
    )
}

TechItem.defaultProps = {
    tech: 'Default'
}

TechItem.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired
}

export default TechItem;
