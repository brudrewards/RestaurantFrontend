import React from 'react'
import MainLayout from '../layouts/mainLayout/MainLayout'
import Image from 'next/image'
import images from '../utils/images'

import {
    Container,
    Box,
    Button,
    Typography as Font,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material'
// const DATABASE_URL = 'http://54.177.165.108:3000/api/items/list'
const fakeData = {
    categories: [
        {
            category_name: 'Coffee',
            status: 1,
            id: '623d2e80c033cff3c713b2b2',
        },
        {
            category_name: 'Cold Coffee',
            status: 1,
            id: '623d2ebfc033cff3c713b2b3',
        },
        {
            category_name: 'Hot Coffee',
            status: 1,
            id: '623d2ed3c033cff3c713b2b4',
        },
        {
            category_name: 'Tea',
            status: 1,
            id: '623d2ef9c033cff3c713b2b5',
        },
        {
            category_name: 'Pastries',
            status: 1,
            id: '623d2f10c033cff3c713b2b6',
        },
        {
            category_name: 'Sandwich',
            status: 1,
            id: '623d2f26c033cff3c713b2b7',
        },
    ],
    items: [
        {
            item_name: 'Cappuccino Banana',
            id: '1',
            description:
                'Banana dried chips on the top and sprinkle some sesame seeds ',
            price: '$5.50',
            image: '../public/assets/Coffee.png',
        },
        {
            item_name: 'Cappuccino Caramel',
            id: '2',
            description:
                ' Banana dried chips on the top and sprinkle some sesame seeds',
            price: '$5.50',
            image: '../public/assets/Coffee.png',
        },
        {
            item_name: 'Cappuccino Oriental',
            id: '3',
            description:
                ' Banana dried chips on the top and sprinkle some sesame seeds',
            price: '$5.50',
            image: '../public/assets/Coffee.png',
        },
    ],
}
const Menu = () => {
    const [name, setName] = React.useState('')

    const [items, setItems] = React.useState(fakeData.items)
    const handleClick = (e) => {
        console.log('hello')
    }
    return (
        <MainLayout>
            <Container>
                <Box display='flex' flexDirection='row' justifyContent='center'>
                    <List id='categories'>
                        {fakeData.categories.map((category) => (
                            <ListItem
                                button
                                key={category.id}
                                value={category.category_name}
                                onClick={handleClick}
                                sx={{
                                    width: '15vw',
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: '18px',
                                    lineHeight: '15px',
                                    pl: '2.5vw',
                                    pr: '5vw',
                                    '&:focus': {
                                        bgcolor: '#051821',
                                        color: '#FFFFFF',
                                        borderRadius: '17px 0px 0px 17px',
                                        boxShadow:
                                            '-2px 0px 7px rgba(0, 0, 0, 0.25)',
                                        borderRight: '3px solid #E25730',
                                    },
                                    '&:hover': {
                                        borderRadius: '17px 0px 0px 17px',
                                    },
                                }}
                            >
                                <ListItemText
                                    value={category.category_name}
                                    primary={category.category_name}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <Box
                        id='items'
                        sx={{
                            width: '74vw',
                            borderLeft: '1px solid #848484',
                            pl: '1.7vw',
                        }}
                    >
                        <Box display='flex' justifyContent='space-between'>
                            <Font
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    fontSize: '22px',
                                    lineHeight: '30px',
                                }}
                            >
                                Your Menu
                            </Font>
                            <Button
                                variant='rounded'
                                type='submit'
                                sx={{ px: 3 }}
                            >
                                + Add New
                            </Button>
                        </Box>
                        <Box>
                            {items.map((item, id) => (
                                <>
                                    <Box
                                        button
                                        key={item.id}
                                        display='flex'
                                        flexDirection='row'
                                        my={2}
                                        pr='6.5vw'
                                    >
                                        <Image
                                            src={images.coffee.src}
                                            alt={images.coffee.alt}
                                            quality={50}
                                            layout='intrinsic'
                                        ></Image>
                                        <Box
                                            display='flex'
                                            flexDirection='column'
                                            width='100%'
                                            ml={3}
                                        >
                                            <Box>
                                                <Font
                                                    variant='heading'
                                                    sx={{
                                                        fontFamily:
                                                            'Montserrat',
                                                        fontStyle: 'normal',
                                                        fontWeight: 500,
                                                        fontSize: '21px',
                                                        lineHeight: '15px',
                                                        my: '4rem',
                                                    }}
                                                >
                                                    {item.item_name}
                                                </Font>
                                                <Font
                                                    variant='body1'
                                                    sx={{
                                                        fontFamily:
                                                            'Montserrat',
                                                        fontStyle: 'normal',
                                                        fontWeight: 400,
                                                        fontSize: '15px',
                                                        lineHeight: '25px',
                                                        color: '#848484',
                                                        my: ' 1rem',
                                                        width: '15vw',
                                                    }}
                                                >
                                                    {item.description}
                                                </Font>
                                            </Box>
                                            <Box
                                                display='flex'
                                                justifyContent='space-between'
                                                mb={2}
                                            >
                                                <Font variant='heading'>
                                                    {item.price}
                                                </Font>
                                                <Button
                                                    variant='rounded'
                                                    type='submit'
                                                    sx={{ px: 3 }}
                                                >
                                                    EDIT
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                    {fakeData.items.length - 1 !== id && (
                                        <Divider
                                            variant='middle'
                                            sx={{
                                                borderColor: 'black !important',
                                                ml: 0,
                                                mr: '4rem',
                                            }}
                                        />
                                    )}
                                </>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </MainLayout>
    )
}

export default Menu
