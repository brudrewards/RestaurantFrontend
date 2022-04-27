import React from 'react'
import MainLayout from '../layouts/mainLayout/MainLayout'
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
                'Banana dried chips on the top and sprinkle some sesame seeds ',
            price: '$5.50',
            image: '../public/assets/Coffee.png',
        },
        {
            item_name: 'Cappuccino Oriental',
            id: '3',
            description:
                'Banana dried chips on the top and sprinkle some sesame seeds ',
            price: '$5.50',
            image: '../public/assets/Coffee.png',
        },
    ],
}
const Menu = () => {
    return (
        <MainLayout>
            <Container>
                <Box display='flex' flexDirection='row'>
                    <List id='categories'>
                        {fakeData.categories.map((category) => (
                            <ListItem button key={category.id}>
                                <ListItemText
                                    primary={category.category_name}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <Box id='items'>
                        <Box display='flex' justifyContent='space-between'>
                            Your Menu
                            <Button variant='rounded' type='submit'>
                                + Add New
                            </Button>
                        </Box>
                        <Box>
                            {fakeData.items.map((item, id) => (
                                <>
                                    <Box
                                        button
                                        key={item.id}
                                        display='flex'
                                        flexDirection='column'
                                    >
                                        <Box>
                                            <Font variant='heading' my={2}>
                                                {item.item_name}
                                            </Font>
                                            <Font variant='body1'>
                                                {item.description}
                                            </Font>
                                        </Box>
                                        <Box
                                            display='flex'
                                            justifyContent='space-between'
                                        >
                                            <Font variant='heading'>
                                                {item.price}
                                            </Font>
                                            <Button
                                                variant='rounded'
                                                type='submit'
                                            >
                                                EDIT
                                            </Button>
                                        </Box>
                                    </Box>
                                    {fakeData.items.length - 1 !== id && (
                                        <Divider
                                            variant='middle'
                                            sx={{
                                                borderColor: 'black !important',
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
