import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background:linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
    
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 460px;
    max-height: 100vh;
`


export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
    box-shadow: 0px 0px 15px #fff;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

