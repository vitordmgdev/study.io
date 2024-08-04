import { Flex, Heading, Link } from "@radix-ui/themes";
import styled from "styled-components";
import '../App.css'

const Home = () => {
    return(
        <Section>
            <Heading weight="bold" className="font-inter" size="7" color="indigo">
                Bem-vindo ao study.io
            </Heading>
            <Flex direction="column" gap="4">
                <Flex align="center" gap="3">
                    <Heading weight="bold" className="font-inter" size="5">
                        Coleções de Flashcards
                    </Heading>
                    <Link weight="regular" 
                    size="2" 
                    href="/flashcards">
                        Todas as coleções
                    </Link>
                </Flex>

            </Flex>
        </Section>
    )
}

export default Home;

const Section = styled.section`
    width: 100%;
    height: calc(100dvh - 89px);
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow-x: auto;
`