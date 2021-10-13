import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <div>
            <Container>
                <CTA>
                    <CTALogoOne  src="/images/cta-logo-one.svg"/>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo  src="/images/cta-logo-Two.png"/>
                </CTA>
            </Container>
        </div>
    )
}

export default Login


const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before{
        content: "";
        background-image: url("/images/login-background.jpg");
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        opacity: 0.8;
        z-index: -1;
    }
`

const CTA = styled.div`
      margin-bottom: 100px;
      width: 90%;
      max-width: 650px;
      padding: 80px 40px;
      display: flex;
      flex-direction: column;
`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    text-align: center;
    width: 100%;
    background-color: #0063e5;
    color: #f9f9f9;
    font-size: 18px;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    padding: 17px 0;
    transition: all 250ms ease;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 8px;

    &:hover{
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
const CTALogoTwo = styled.img`
    
`