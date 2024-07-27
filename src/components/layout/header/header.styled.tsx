import styled from "styled-components";
import '@radix-ui/themes/styles.css';

interface StyledProps{
    sidebarState: boolean
}

const Styled = styled.header<StyledProps>`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 24px;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray-3);
`

export default Styled;