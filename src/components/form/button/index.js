import React from 'react';
import styles from './_button.module.scss';

function Button(props) {
  const {
    isLoading = false,
    loadingText = '',
    text = '',
    children,
    ...restOfProps
  } = props;

  return (
    <div>
      <button {...restOfProps} className={styles['button']}>
        {loadingText ? loadingText : text || children}
      </button>
    </div>
  );
}

export default Button;
