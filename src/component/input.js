import React from 'react';

import styles from "./module.css";

export default function Input(props)
{
    return <input
        className={styles.input}
        {...props}
    />
}

Input.defaultProps = {
    placeholder:"Enter UserName",
    style:{}
}