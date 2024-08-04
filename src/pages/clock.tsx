import { Heading } from "@radix-ui/themes";
import styled from "styled-components"

const Clock = () => {
    return(
        <Section>
            <Heading size="7" color="indigo">
                Clock
            </Heading>
        </Section>
    )
}

const Section = styled.section`
    width: 100%;
    height: calc(100dvh - 89px);
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow-x: auto;
`

export default Clock;