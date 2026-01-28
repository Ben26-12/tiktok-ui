import styles from './Button.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
    children,
    className,
    to,
    href,
    small,
    text,
    large,
    rounded,
    onClick,
    outline,
    primary,
    disabled,
    leftIcon,
    rightIcon,
    ...restProps
}) {
    let Comp = 'button';
    let props = { onClick, ...restProps };
    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    //remove events listener when disabled = true
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        disabled,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {<span className={cx('title')}>{children}</span>}
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    small: PropTypes.bool,
    text: PropTypes.bool,
    large: PropTypes.bool,
    rounded: PropTypes.bool,
    onClick: PropTypes.func,
    outline: PropTypes.bool,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};

export default Button;
