import { Button } from "@/components/ui/button";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { MdAddBox } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import styled from "styled-components"

const Flashcards = () => {
    return(
        <>
            <Section>
                <Heading weight="bold" className="font-inter" size="7" color="indigo">
                    Flashcards 
                </Heading>
                <Flex direction="column" gap="4">
                    <Heading weight="bold" className="font-inter" size="5">
                        Gerenciamento de flashcard
                    </Heading>
                    <Flex>
                        <Card className="aspect-video basis-1/4 flex justify-center items-center gap-2 cursor-pointer hover:bg-[var(--gray-2)] hover:text-[var(--gray-11)] transition-all duration-300">
                            <Text size="3" weight="regular">Criar Flashcard</Text>
                            <MdAddBox size="24" />
                        </Card>
                    </Flex>
                </Flex>

            </Section>
        </>
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