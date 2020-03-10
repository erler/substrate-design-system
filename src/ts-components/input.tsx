import React from 'react';
import styled from 'styled-components';

interface Props {
    className?: string
}

const InputField = ({className}:Props) => {
    return (
        <input className={className} type='text'></input>
    )
}

/* export default styled(InputField)`
    opacity: 1;
`; */

export default InputField;