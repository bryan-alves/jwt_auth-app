import React from 'react'
import styled from 'styled-components'
import { AuthContext } from '../contexts/AuthContext'

const HeaderComponent = styled.header`
    height:60px;
    border-bottom: 1px solid #d3d3d3;
    display: flex;
    position:absolute;
    width: 100%;
    align-items:center;
    justify-content:space-between;
    padding: 0px 3rem;
    background:#ffffffe0;
`

const AppName = styled.h1`
    font-weight: '700';
    font-size: '1.5rem';
`

const Username = styled.span`
`

const Logout = styled.a`
    cursor: pointer;
    color: blue;
`

const Header = () => {
    const Auth = React.useContext(AuthContext)

    return (
        <HeaderComponent>
            <AppName>MY EMPLOYEES</AppName>
            <Username>
                {Auth.user.name}, <Logout onClick={() => Auth.logout()}>sair</Logout>
            </Username>
        </HeaderComponent>
    )
}

export default Header
