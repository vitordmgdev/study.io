import CreateDesktopDialog from "@/components/createDesktopDialog";
import { Heading, Separator, Flex } from "@radix-ui/themes";

const Todo = () => {
    return(
        <>
            <Separator orientation="horizontal" size="4" />
            <Heading size="3" color="indigo" weight="medium">
                To-do list
            </Heading>
            <Flex direction="column" gap="2">
                Você não possuí nenhuma área de trabalho
            </Flex>
        </>
        
    )
}

export default Todo;