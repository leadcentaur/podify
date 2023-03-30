import React from 'react';
import cx from 'clsx';
import { sizes, TextSize, transforms, weights } from './Text';
import { TypographyProps } from './types';

export type LinkVariant = 'muted' | 'primary'

export interface LinkProps extends Pick<TypographyProps, 'transform' | 'weight'> {
	size?: TextSize;
	variant?: LinkVariant;
}

const variants: Record<LinkVariant, string> = {
	muted: 'text-gray-700 hover:text-gray-800 dark:text-gray-600 dark:hover:text-gray-500',
	primary:
		'text-blurple-300 hover:text-blurple-500 dark:text-purple-400 dark:hover:text-purple-200',
};

