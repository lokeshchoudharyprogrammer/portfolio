
import {
    Box,
    Flex,
    Avatar,
    HStack,

    IconButton,
    Button,
    Menu,
    MenuButton,

    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'




const NavLink = (props) => {
    const { children, href } = props


    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={href}
        >
            {children}
        </Box>
    )
}

export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} id='nav-menu'>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box> 𝐿𝒞</Box>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>

                            <NavLink href={'#skills'}>Home</NavLink>
                            <NavLink href={'#projects'}>Project</NavLink>
                            <NavLink href={'#contact'}>Contact</NavLink>
                            <NavLink href={'#contact'}>About</NavLink>
                            <NavLink href={'#skills'}>Skills</NavLink>
                            <NavLink href={'#resume'}>Resume</NavLink>

                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://avatars.githubusercontent.com/u/112642820?v=4'
                                    }
                                />
                            </MenuButton>

                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>

                            <NavLink href={'#skills'}>Home</NavLink>
                            <NavLink href={'#projects'}>Project</NavLink>
                            <NavLink href={'#contact'}>Contact</NavLink>
                            <NavLink href={'#contact'}>About</NavLink>
                            <NavLink href={'#skills'}>Skills</NavLink>
                            <NavLink href={'#resume'}>Resume</NavLink>   </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}