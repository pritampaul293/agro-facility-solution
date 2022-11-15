import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";


class Analysis extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {Technology: 'Dhaka', Project: '100'},
                {Technology: 'Chittagong', Project: '40'},
                {Technology: 'Sylhet', Project: '90'},
                {Technology: 'Barisal', Project: '95'},
                {Technology: 'Khulna', Project: '60'},
                {Technology: 'M.sing', Project: '90'},
                {Technology: 'Rajshahi', Project: '100'},
                {Technology: 'Rangpur', Project: '65'}


            ]
        }
    }


    render() {
        var blue = "rgba(0,115,230,0.8)"
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                        <Col style={{width: '50%', height: '300px'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={50} height={300} data={this.state.data}>

                                    <XAxis dataKey="Technology"/>
                                    <Tooltip/>
                                    <Bar dataKey="Project" fill={blue}>

                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>


                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <p className="text-start des">Searching for the perfect place to live on? Well, look no
                                further, as RH Real estate is here with everything you have been looking for with the
                                largest real estate marketing portal in Bangladesh. Whether your concern is a land rent
                                for in Bangladesh or property for sale in Bangladesh, we have the most desired solution
                                for you. With over 1.5 lac+ listings, 2 lacs+ users, 150 developers over 4 thousand+ new
                                Projects, our web portal guarantee that everything you wish for the perfect sale and
                                rent land just a few clicks away!
                            </p>
                        </Col>
                    </Row>

                </Container>


            </Fragment>
        )
            ;
    }
}

export default Analysis;