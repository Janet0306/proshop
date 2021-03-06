import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'


const ShippingScreen = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart


    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postCode, setPostCode] = useState(shippingAddress.postCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postCode, country }))
        history.push('/payment')
    }


    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address' className='py-1'>
                    <Form.Label className='py-1'>Address</Form.Label>
                    <Form.Control type='text' placeholder='Enter Address' value={address} required onChange={(e) => setAddress(e.target.value)}></Form.Control>
                </Form.Group>

                 <Form.Group controlId='city' className='py-1'>
                    <Form.Label className='py-1'>City</Form.Label>
                    <Form.Control type='text' placeholder='Enter City' value={city} required onChange={(e) => setCity(e.target.value)}></Form.Control>
                </Form.Group>

                 <Form.Group controlId='postCode' className='py-1'>
                    <Form.Label className='py-1'>Post Code</Form.Label>
                    <Form.Control type='text' placeholder='Enter Post Code' value={postCode} required onChange={(e) => setPostCode(e.target.value)}></Form.Control>
                </Form.Group>

                 <Form.Group controlId='country' className='py-1'>
                    <Form.Label className='py-1'>Country</Form.Label>
                    <Form.Control type='text' placeholder='Enter Country' value={country} required onChange={(e) => setCountry(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='my-5'>Continue</Button>

            </Form>
            
        </FormContainer>
    )
}

export default ShippingScreen
