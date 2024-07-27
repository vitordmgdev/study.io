import { Flex, Heading, Link } from "@radix-ui/themes";
import styled from "styled-components";
import '../App.css'
import HomeCarousel from "@/components/carousel-home/carousel-home";

const Home = () => {
    return(
        <Section>
            <Heading weight="bold" className="font-inter" size="7" color="indigo">
                Bem-vindo ao study.io! VITOR.
            </Heading>
            <Flex direction="column" gap="4">
                <Flex align="center" gap="3">
                    <Heading weight="bold" className="font-inter" size="5">
                        Coleções de Flashcards
                    </Heading>
                    <Link weight="regular" 
                    size="2" 
                    href="/flashcards">
                        Ver coleção
                    </Link>
                </Flex>
                <HomeCarousel />
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