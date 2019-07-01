import React from 'react';
import PropTypes from 'prop-types';
import NextPageButton from './NextPageButton';
import PagesIndicator from './PagesIndicator';
import PreviousPageButton from './PreviousPageButton';
import ZoomIn from './ZoomIn';
import ZoomOut from './ZoomOut';
import ResetZoom from './ResetZoom';
import RotateLeft from './RotateLeft';
import ResetRotation from './ResetRotation';
import RotateRight from './RotateRight';
import styles from '../Styles';

const Navigation = ({
    page,
    pages,
    scale,
    maxScale,
    rotationAngle,
    hideZoom,
    hideRotation,
    css,
    elements,
    handlePrevClick,
    handleNextClick,
    handleZoomIn,
    handleResetZoom,
    handleZoomOut,
    handleRotateLeft,
    handleResetRotation,
    handleRotateRight
}) => {
    let prevEl, nextEl, pagesEl;
    if (elements.previousPageBtn) {
        prevEl = (
            <elements.previousPageBtn
                page={page}
                pages={pages}
                handlePrevClick={handlePrevClick}
            />
        );
    } else {
        prevEl = (
            <PreviousPageButton
                css={css.previousPageBtn}
                page={page}
                pages={pages}
                handlePrevClick={handlePrevClick}
            />
        );
    }

    if (elements.nextPageBtn) {
        nextEl = (
            <elements.nextPageBtn
                page={page}
                pages={pages}
                handleNextClick={handleNextClick}
            />
        );
    } else {
        nextEl = (
            <NextPageButton
                css={css.nextPageBtn}
                page={page}
                pages={pages}
                handleNextClick={handleNextClick}
            />
        );
    }

    if (elements.pages) {
        pagesEl = <elements.pages page={page} pages={pages} />;
    } else {
        pagesEl = <PagesIndicator css={css.pages} page={page} pages={pages} />;
    }

    const wrapperClass = css.wrapper
        ? css.wrapper
        : 'container rounded bg-dark text-white';

    return (
        <div
            className={wrapperClass}
            style={wrapperClass ? {} : styles.wrapper}>
            <div className="row">
                <div className="col-sm-4">
                    {hideZoom ? (
                        undefined
                    ) : (
                        <div className="btn-group" role="group">
                            <ZoomOut
                                scale={scale}
                                css={css.zoomOutBtn}
                                handleZoomOut={handleZoomOut}
                            />
                            <ResetZoom
                                css={css.restZoomBtn}
                                handleResetZoom={handleResetZoom}
                            />
                            <ZoomIn
                                scale={scale}
                                maxScale={maxScale}
                                css={css.zoomInBtn}
                                handleZoomIn={handleZoomIn}
                            />
                        </div>
                    )}
                </div>
                <div className="col-sm-4">
                    <div className="row">
                        <div className="col-sm-4 text-right">{prevEl}</div>
                        <div className="col-sm-4 text-center">{pagesEl}</div>
                        <div className="col-sm-4 text-left">{nextEl}</div>
                    </div>
                </div>
                <div className="col-sm-4">
                    {hideRotation ? (
                        undefined
                    ) : (
                        <div className="btn-group" role="group">
                            <RotateLeft
                                css={css.RotateLeftBtn}
                                rotationAngle={rotationAngle}
                                handleRotateLeft={handleRotateLeft}
                            />
                            <ResetRotation
                                css={css.ResetRotationBtn}
                                rotationAngle={rotationAngle}
                                handleResetRotation={handleResetRotation}
                            />
                            <RotateRight
                                css={css.RotateRightBtn}
                                rotationAngle={rotationAngle}
                                handleRotateRight={handleRotateRight}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

Navigation.propTypes = {
    page: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,

    css: PropTypes.shape({
        previousPageBtn: PropTypes.string,
        nextPageBtn: PropTypes.string,
        pages: PropTypes.string,
        wrapper: PropTypes.string
    }),
    elements: PropTypes.shape({
        previousPageBtn: PropTypes.any,
        nextPageBtn: PropTypes.any,
        pages: PropTypes.any
    }),

    handlePrevClick: PropTypes.func.isRequired,
    handleNextClick: PropTypes.func.isRequired
};

Navigation.defaultProps = {
    css: {},
    elements: {}
};

export default Navigation;
