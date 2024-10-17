import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    height: 50px;
    max-width: 200px;
    
    opacity: 1;
    cursor: pointer;
    border-radius: 10px;
    transition: all ease .3s;
    background-color: #1550FF;

    &:hover {
        opacity: .8;
    }

    @media (max-width: 740px) {
        
        min-width: 150px;

    }

`

export const Label = styled.div`
    font-size: 15px;
    color: #fff;
    flex: 1;
    display: flex;
    justify-content: center;
`

export const IconArea = styled.div`
    border-right: 1px solid rgba(255, 255, 255, .2);
    padding: 0 15px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Icon = styled.img`
    height: 20px;
`