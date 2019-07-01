import React from 'react';
import PropTypes from 'prop-types';

const NextPageButton = ({ css, page, pages, handleNextClick }) => {
    const nextClass = `
    ${css ? css : 'btn btn-sm btn-link pl-0 ml-n3 text-white'}
    ${page === pages ? ' disabled' : ''}
  `;

    return (
        <button className={nextClass} onClick={handleNextClick}>
            <i className="material-icons">keyboard_arrow_right</i>
        </button>
    );
};
NextPageButton.propTypes = {
    css: PropTypes.string,
    page: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    handleNextClick: PropTypes.func.isRequired
};

export default NextPageButton;
