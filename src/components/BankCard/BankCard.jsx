import React, { useEffect, useState } from "react";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "./BankCard.css";
import "react-credit-cards/es/styles-compiled.css";
import { useForm } from "../../hooks/useForm";
import Cards from "react-credit-cards";
import { useDispatch } from "react-redux";
import { deleteAllItemsFromCart } from '../../store/cart/reducer';
import { useNavigate } from "react-router-dom";
import { randomOrderNumber } from "../helpers/utils";



const BankCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();

    const [showForm, setShowForm] = useState(true);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    useEffect(() => {
        if (paymentSuccess) {
            const timer = setTimeout(() => {
                setPaymentSuccess(false);
                navigate('/');
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [paymentSuccess, navigate]);

    const handlePay = () => {
        if (!errors.show || errors.message === "Credit Card is valid") {
            dispatch(deleteAllItemsFromCart());
            setShowForm(false);
            setPaymentSuccess(true);
        }
    }

    return (
        <div className={`${paymentSuccess ? 'bg-black' : 'bg-white'} pt-[120px] pb-[90px] min-h-screen w-[100vw]`}>
            <div className="box flex flex-col justify-center mx-auto align-items-center">
                {showForm && errors.message !== "Credit Card is valid" && (
                    <>
                        <div className="flex text-black text-[25px] mx-auto font-bold">Your order: #{randomOrderNumber}</div>
                        <div className="bg-white shadow-2xl max-w-[400px] pt-5 mx-auto rounded-lg">
                            <div className="creditCard">
                                <Cards
                                    cvc={values.cardSecurityCode}
                                    expiry={values.cardExpiration}
                                    focused={values.focus}
                                    name={values.cardName}
                                    number={values.cardNumber}
                                />
                            </div>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        id="cardName"
                                        data-testid="cardName"
                                        name="cardName"
                                        placeholder="Cardholder Name"
                                        value={values.cardName}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        isValid={errors.cname}
                                        className="outline-none border-2 px-5 py-1.5 border-gray-500 rounded-md "
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        type="number"
                                        id="cardNumber"
                                        data-testid="cardNumber"
                                        name="cardNumber"
                                        placeholder="Card Number"
                                        value={values.cardNumber}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        isValid={errors.cnumber}
                                        className="outline-none border-2 px-5 py-1.5 border-gray-500 rounded-md mt-2"
                                    />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                name="cardType"
                                                id="cardType"
                                                data-testid="cardType"
                                                placeholder="Card Type"
                                                value={values.cardType}
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                isValid={errors.ctype}
                                                className="outline-none border-2 px-5 py-1.5 border-gray-500 rounded-md mt-2"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                id="cardExpiration"
                                                data-testid="cardExpiration"
                                                name="cardExpiration"
                                                placeholder="Expiration Date"
                                                value={values.cardExpiration}
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                isValid={errors.cexp}
                                                className="outline-none border-2 px-5 py-1.5 border-gray-500 rounded-md mt-2"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Control
                                                type="number"
                                                id="cardSecurityCode"
                                                data-testid="cardSecurityCode"
                                                name="cardSecurityCode"
                                                placeholder="Security Code"
                                                value={values.cardSecurityCode}
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                isValid={errors.ccvv}
                                                className="outline-none border-2 px-5 py-1.5 border-gray-500 rounded-md mt-2"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                id="cardPostalCode"
                                                data-testid="cardPostalCode"
                                                name="cardPostalCode"
                                                placeholder="Postal Code"
                                                value={values.cardPostalCode}
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                isValid={errors.cpostal}
                                                className="outline-none border-2 px-5 py-1.5 border-gray-500 rounded-md mt-2"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button
                                    size={"block"}
                                    data-testid="validateButton"
                                    id="validateButton"
                                    type="submit"
                                    className="bg-blue-500 px-10 text-white py-3 mt-5 mb-5 rounded-2xl hover:bg-blue-600 active:bg-blue-700"
                                    onClick={handlePay}
                                >
                                    Pay
                                </Button>
                            </Form>
                        </div>
                    </>
                )}
                {paymentSuccess && (
                    <Alert variant="success" className="font-bold text-white text-[25px]">
                        Payment Success and you will be redirect to main page...
                    </Alert>
                )}
                <Alert
                    id="alertMessage"
                    data-testid="alertMessage"
                    variant={errors.variant}
                    show={errors.show}
                    className='text-red-500  py-2 shadow-2xl px-10 max-w-[400px] mx-auto rounded-xl'
                >
                    {errors.message}
                </Alert>{" "}
            </div>
        </div>
    );
};


export default BankCard;