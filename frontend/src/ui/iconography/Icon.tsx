import React, { CSSProperties } from 'react';
import cx from 'clsx';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export interface IconProps extends FontAwesomeIconProps {
    className?: string;
    style?: CSSProperties;
}

export default function Icon({ className, style, ...props }: IconProps) {
    return (
        <span className={cx('inline-block', className)} aria-hidden="true" style={style}>

        </span>
    );
}