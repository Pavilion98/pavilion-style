import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { ReactComponent as HeaderIconSvg } from '../../assests/hairstyle1.svg'

// const OptionContainerStyles = css `
//     padding: 10px 15px;
//     cursor: pointer;
// `;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 50%;
    padding: 7px;
    display:flex;
`;

export const HeaderIcon = styled(HeaderIconSvg)`
  width: 50px;
  height: 50px;
`;

export const OptionsContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;


