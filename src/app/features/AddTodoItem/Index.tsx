import { IconChevronDown } from '@/shared/Icons/IconChevronDown'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'

export const AddTodoItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor={'black'}
        variant={'primary'}
        boxShadow={'xl'}
      >
        Add item to todo list
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        variant={'basic'}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerHeader>
            <HStack justifyContent={'space-between'}>
              <Text>Add item to todo list</Text>

              <DrawerCloseButton />
            </HStack>
          </DrawerHeader>

          <DrawerBody>
            <VStack width={'100%'}>
              <Input placeholder="Todo item" variant={'basic'} />

              <Menu variant={'basic'} matchWidth>
                <MenuButton
                  variant={'outline'}
                  width={'100%'}
                  justifyContent={'space-between'}
                  display={'flex'}
                  as={Button}
                  rightIcon={<IconChevronDown width={'24px'} height={'24px'} />}
                >
                  <Text textAlign={'start'}>Category</Text>
                </MenuButton>

                <MenuList width={'100%'} minWidth={'320px'}>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <HStack width={'100%'}>
              <Button variant="outline" onClick={onClose} width={'100%'}>
                Cancel
              </Button>

              <Button colorScheme="blue" variant={'primary'} width={'100%'}>
                Save
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
