import { Callout, Flex } from "@radix-ui/themes";
import { Dispatch, createContext, SetStateAction, useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import styled from "styled-components"
import ProgressTasks from "@/components/ui/progressTaskBar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { randomUUID } from "crypto";

export interface ITasks{
    id: any,
    taskName: string,
    progress: "completed" | "in-progress"| "not-started"
}

type TodoContextType = [
    ITasks[],
    Dispatch<SetStateAction<ITasks[]>>
]

export const TodoContext = createContext<TodoContextType>([[], () => {}]);

const Todo = () => {
    const [ tasks, setTasks ] = useState<ITasks[]>(
        [
            {
                id: crypto.randomUUID(),
                taskName: "Programar",
                progress: "completed"
            },
            {
                id: crypto.randomUUID(),
                taskName: "Programar",
                progress: "completed"
            },
            {
                id: crypto.randomUUID(),
                taskName: "Programar",
                progress: "completed"
            }
        ]
    )

    return(
        <TodoContext.Provider value={[ tasks, setTasks ]}>
            <Section>
                <Bread />
                {tasks.length > 0 && <ProgressTasks />}
                {tasks.length === 0 && <CalloutT />}
                                
            </Section>
        </TodoContext.Provider>
        
    )
}

const Bread = () => {
    return(
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>To-do list</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

const CalloutT = () => {
    return(
        <Callout.Root variant="surface" color="gray">
            <Callout.Icon>
                <IoIosInformationCircleOutline size="20" />
            </Callout.Icon>
            <Callout.Text>
                Você não possuí nenhuma tarefa!
            </Callout.Text>
        </Callout.Root>
    )
}

const Section = styled.section`
    width: 100%;
    height: calc(100dvh - 89px);
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-x: auto;
`

export default Todo;