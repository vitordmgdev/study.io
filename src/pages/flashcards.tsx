import { Heading } from "@radix-ui/themes";
import styled from "styled-components"

const Flashcards = () => {
    return(
        <Section>
            <Heading>
                Flashcards
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

export default Flashcards;