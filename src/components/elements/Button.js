
import React from 'react';
import styled from "styled-components";
import {Typography, Blue, Black, Gray} from "../utilities";


const AnchorButton = styled.a`
    
    color: #fff;
    display: block;
    background: ${Blue};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 24px;
    border-radius: 6px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.22);
    transition: all .5s ease;
    transform: translateY(0);
    cursor: pointer;
    height: 42px;
    width: 112px;
    white-space: nowrap;
    font-family: ${Typography.headingFont};
    font-size: 16px;
    border: 0;
    &:hover {
        background: #1676C4;
        transition: all .5s ease;
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.33);
        transform: translateY(-4px);
    }

`;

const Button = styled.button`
    border: 0;
    color: #fff;
    display: block;
    background: ${Blue};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 24px;
    border-radius: 6px;
    box-shadow: none;
    transition: background .5s ease;
    cursor: pointer;
    height: 42px;
    width: 112px;
    white-space: nowrap;
    font-family: ${Typography.headingFont};
    font-size: 16px;

    &:hover {
        background: #1676C4;
        transition: background .5s ease;
        box-shadow: inset 0 0 1px rgba(100,100,100,1);
    }

`;

export const LinkButton = ({href, target, children, className}) => (
    <AnchorButton className={className} href={href} target={target}>
        {children}
    </AnchorButton>
);


export const NormalButton = ({children, className}) => (
    <Button className={className}>
        {children}
    </Button>
);