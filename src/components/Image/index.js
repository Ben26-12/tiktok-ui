import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Image.module.scss';
const cx = classNames.bind(styles);
function Image({ fallback: customFallback = images.noImage, className, src, ...props }, ref) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    const [fallback, setFallback] = useState();

    return (
        <img
            className={classes}
            onError={() => setFallback(customFallback)}
            src={customFallback || src}
            ref={ref}
            {...props}
        />
    );
}
export default forwardRef(Image);
