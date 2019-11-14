import React, { Fragment } from "react"

// import Layout from "../components/Layout";
import Seo from "../components/utilities/Seo";

import styled from "styled-components";

import { Typography, Gray, Blue, Black, Sizes, Section, Container } from "../components/utilities";

import { LinkButton, NormalButton } from "../components/elements/Button";

const SectionHeading = styled.h2`
    font-weight: 600;
    margin-bottom: 16px;
    text-align: center;
`;

const Description = styled.p`
    text-align: center;
`;

const InputFieldSet = styled.div`
    padding: 0;
    margin: 16px 0 0 0;
    border: 0;
    width: 100%;

    ${({ mR }) => (mR ? `margin-right: 16px` : ``)};
    ${({ mL }) => (mL ? `margin-left: 16px` : ``)};

    &.flexed {
        display: flex;
        justify-content: space-between;
    }

`;

const FlexWrapper = styled.div`
    display: flex;
`;

const ContactForm = styled.form`
    /* margin-top: ${Sizes.large}; */
`;

const InputLabel = styled.label`
    text-align: left;
    font-size: ${Typography.body};
    font-family: ${Typography.headingFont};
    /* color: ${Blue}; */
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    width: 100%;
    cursor: text;
`;

const ContactInput = styled.input`
    color: inherit;
    border: 1px solid ${Gray};
    padding: 8px 16px;
    outline: 0;
    width: 100%;
    border-radius: 6px;
    font-family: ${Typography.bodyFont};
    font-size: ${Typography.body};
    box-shadow: none;
    outline: none;
    box-shadow: none !important;
    -webkit-appearance: none;

    &:focus {
        border-color: ${Blue};    
    }

`;

const ContactArea = styled.textarea`
    border: 1px solid ${Gray};
    padding: 16px 16px;
    outline: 0;
    width: 100%;
    border-radius: 6px;
    font-family: ${Typography.bodyFont};
    min-height: 180px;
    font-size: ${Typography.body};
    color: inherit;

    box-shadow: none !important;
    -webkit-appearance: none;

    resize: none;

    &:focus {
        border-color: ${Blue};    
    }
`;

const SuccessMsg = styled.p`

`;

const ContactEmail = styled.a`
    text-align: center;
    margin-top: 16px;
    display: block;
    color: ${Blue};
`;


const ContactPage = () => (
    <Fragment>
        <Seo title="Contact" />

        <Section border paddingTop={Sizes.xlarge} paddingBottom={Sizes.xlarge} paddingLeft={Sizes.xxlarge} paddingRight={Sizes.xxlarge}>
            <Container>
                <SectionHeading>Drop Me a Line...</SectionHeading>
                <Description>
                    Fill out the form below if you have any inquries/questions about anything or just want to chat, feel free to reach out.
                </Description>
                <ContactEmail href="mailto:jake.schroeder@isophex.com">
                    jake.schroeder@isophex.com
                </ContactEmail>
            </Container>
        </Section>

        
        <Section paddingTop={Sizes.xlarge} paddingBottom={Sizes.xlarge} paddingLeft={Sizes.xxlarge} paddingRight={Sizes.xxlarge}>
            <Container>
                <ContactForm name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/contact/">
                            <input type="hidden" name="bot-field" style={{display: 'none'}}/>
                <input type="hidden" name="form-name" value="contact"/>
                    <FlexWrapper>
                        <InputFieldSet mR>
                            <InputLabel htmlFor="userFirstName">First Name</InputLabel>
                            <ContactInput id="userFirstName" name="firstName" type="text" />
                        </InputFieldSet>

                        <InputFieldSet mL>
                            <InputLabel htmlFor="userLastName">Last Name</InputLabel>
                            <ContactInput id="userLastName" name="lastName" type="text" />
                        </InputFieldSet>


                    </FlexWrapper>

                    <InputFieldSet>
                        <InputLabel htmlFor="userEmail">Email</InputLabel>
                        <ContactInput id="userEmail" type="email" name="email" />
                    </InputFieldSet>

                    <InputFieldSet>
                        <InputLabel htmlFor="userMessage">Message</InputLabel>
                        <ContactArea id="userMessage" name="message" type="text" />
                    </InputFieldSet>

                    <InputFieldSet className={"flexed"}>
                        <NormalButton name="submit" type="submit">Submit</NormalButton>
                    </InputFieldSet>



                </ContactForm>
            </Container>

        </Section>

    </Fragment>
);

export default ContactPage;


