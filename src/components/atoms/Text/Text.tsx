import React, {FC, ReactNode} from 'react';

import {StyledText} from './Text.sc';

interface Props {
    fontSize?: number,
    fontWeight?: string,
    lineHeight?: number,
    text: string,
    width?: number,
    padding?: number,
    children?: ReactNode,
}

const Text: FC<Props> = ({fontSize = 20, fontWeight = 'normal', lineHeight = 22, text = '', width = 0, padding = 0, children}: Props) => (
    <>
        <StyledText fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight} width={width} padding={padding}>{text}</StyledText>
        {children}
    </>
);

export default Text;
