import styled from "styled-components";

export const Body = styled.div`
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    margin: auto;
    display: flex;
    justify-content: center;
    padding: 50px 0px;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`

export const info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;

    @media (max-width: 750px) {
        margin-bottom: 50px;
        align-items: center;
    }
`

export const logoLink = styled.a`
    display: block;
`

export const infoArea = styled.div`
    width: 100%;
    margin: 10px 0;

    @media (max-width: 750px) {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
`

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 750px) {
        justify-content: center;
        margin: 0 20px;
    }
`

export const Grid = styled.div`
    width: 400px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media (max-width: 460px) {
        grid-template-columns: repeat(3, 1fr);
    }

`