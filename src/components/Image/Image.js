import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import images from '~/assets/images';
import styles from './Image.module.scss';
const cx = classNames.bind(styles);
function Image({ fallback: customFallback = images.noImage, className, src, ...props }, ref) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    const [myFallback, setMyFallback] = useState();

    return (
        <img
            className={classes}
            onError={() => setMyFallback(customFallback)}
            src={myFallback || src}
            ref={ref}
            {...props}
        />
    );
}
Image.propTypes = {
    fallback: PropTypes.string,
    className: PropTypes.string,
    src: PropTypes.string,
};

export default forwardRef(Image);
