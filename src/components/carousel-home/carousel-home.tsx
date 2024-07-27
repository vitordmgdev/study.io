import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Box, Heading, Text } from "@radix-ui/themes"
import { MdAddCircleOutline } from "react-icons/md";

interface ArrayInterface{
    title: string
}

const HomeCarousel = () => {
    const Array: ArrayInterface[] = [
        {
            title: "Matemática"
        },
        {
            title: "Português"
        },
        {
            title: "Inglês"
        },
        {
            title: "Francês"
        }
    ]
    return(
        <Carousel 
        opts={{ align: "end", loop: false }} 
        className="w-[100%] 
        overflow-visible">
            <CarouselContent>
                {
                    Array.length > 0 && Array.map((element) => {
                        return(
                            <Item title={element.title} />
                        )
                    })                    
                }
                {
                    Array.length === 0 && <CarouselItem 
                    className="md:basis-1/2 lg:basis-1/3">
                    <Box className="p-3 
                    aspect-video bg-[var(--gray-2)] 
                    rounded-md border border-[var(--gray-6)] 
                    flex justify-center items-center">
                        <Text size="4" className="flex 
                        items-center 
                        gap-3">
                            Criar Flashcard
                            <MdAddCircleOutline />
                        </Text>
                    </Box>
                </CarouselItem>
                }
            </CarouselContent>
            <CarouselPrevious 
            variant="ghost" 
            className="rounded-sm 
            translate-x-[80%]" 
            />
            <CarouselNext 
            variant="ghost" 
            className="rounded-sm 
            translate-x-[-80%]"  
            />
        </Carousel>
    )
}

interface Item{
    title:string
}

const Item = ({title}:Item) => {
    return(
        <CarouselItem 
            className="md:basis-1/2 lg:basis-1/3">
            <Box className="p-3 
            aspect-video 
            bg-[var(--gray-1)] 
            rounded-md 
            border 
            border-[var(--gray-3)]">
                <Heading size="4" weight="medium">
                    {title}
                </Heading>
            </Box>
        </CarouselItem>
    )
}

export default HomeCarousel;