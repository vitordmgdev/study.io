import styled from "styled-components";
import '@radix-ui/themes/styles.css';

interface StyledProps{
    sidebarState: boolean
}

const Styled = styled.div<StyledProps>`
    display: ${(props) => (props.sidebarState ? 'flex' : 'none')};
    height: 100dvh;
    width: 350px;
    padding: 20px 12px 12px 12px;
    border-right: 1px solid var(--gray-3);
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
`

export default Styled;