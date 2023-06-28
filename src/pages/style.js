import styled from "styled-components";
import image from "../../src/pages/image.jpg"

export const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url('${image}');
    background-size: cover;
    animation: animateBg 5s linear infinite;
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 300px;
    border: 2px solid #5cdbd3;
    border-radius: 8px;
    margin: 15px; 
    background-color: transparent;
    backdrop-filter: blur(15px)
`

export const Input = styled.input`
    width: 300px;
    height: 20px;
    padding: 6px 16px;
    border: 2px solid #e6fffb;
    border-radius: 8px;
    background: transparent;
    color: #5cdbd3;
    outline: none;
`

export const Button = styled.button`
    width: 336px;
    height: 32px;
    padding: 8px 16px;
    background: #9CE2F8;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: #33bcb7;
        background: #ffffff;
    }
    &:active {
        background: #efdbff;
    }

    &:disabled {
        color: #5cdbd3;
        background: #f0f5ff;
    }
`

export const H1 = styled.span`
    color: #5cdbd3;
    font-size: 20px;
    margin-bottom: 15px;
`
export const Text = styled.span`
    color: #5cdbd3;
    font-size: 14px;
`
export const TextLink = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #5cdbd3;
    cursor: pointer;
`