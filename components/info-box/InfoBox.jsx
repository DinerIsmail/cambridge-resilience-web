import React from 'react';
import PropTypes from 'prop-types';

import styles from './InfoBox.module.scss';

const InfoBox = ({ title, description, website }) => {
	return (
		<div className={styles.root}>
			<h1 className={styles.title}>{title}</h1>
			{description && <p className={styles.description}>{description}</p>}
			{website && (
				<a
					className={styles.website}
					href={website}
					rel="noreferrer"
					target="_blank"
				>
					{website}
				</a>
			)}
		</div>
	);
};

InfoBox.propTypes = {
	description: PropTypes.string,
	title: PropTypes.string.isRequired,
	website: PropTypes.string,
};

export default InfoBox;
