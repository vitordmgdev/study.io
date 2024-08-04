import { Button, Dialog, Flex } from "@radix-ui/themes";
import { IoMdAdd } from "react-icons/io";
import TextField from '@mui/material/TextField';

const CreateDesktopDialog = () => {
  return (
    <Dialog.Root>
        <Dialog.Trigger>
            <Button 
            variant="surface"
            color="gray"
            highContrast 
            className="cursor-pointer flex justify-start"
            size="3">
                Criar área de trabalho
            </Button>
        </Dialog.Trigger>
        <Dialog.Content maxWidth="450px" className="bg-[var(--gray-1)]">
            <Dialog.Title 
            weight="medium"
            size="5" 
            color="indigo">
                Criar tarefa
            </Dialog.Title>
            <Flex direction="column" gap="3">
                <Flex direction="column" gap="1">
                    
                </Flex>
                <Flex justify="start" gap="3">
                    <Dialog.Close>
                        <Button
                        variant="surface"
                        size="3"
                        color="indigo"
                        className="cursor-pointer">
                            Criar tarefa
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button
                        variant="surface"
                        color="indigo"
                        size="3"
                        className="cursor-pointer">
                          Cancelar
                        </Button>
                    </Dialog.Close>
                </Flex>
            </Flex>
        </Dialog.Content>
    </Dialog.Root>
  );
};

export default CreateDesktopDialog;
