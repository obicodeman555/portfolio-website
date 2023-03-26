import styled from "styled-components";

export const Text = styled.span`
    font-size: 1.4rem;
    color: ${props => (props.dark ? "#323232" : "#ccd6f6")};
    letter-spacing: .1em;
    
`

export const TextSmall = styled(Text)`
font-size: 1.2rem
`



export const Body = styled.body`
    background: ${props => (props.dark ? "#ECE7E1" : "#091E26")}
`

export const Container = styled.div`
    display: ${props => (props.flexContainer ? "flex" : "block")};
    position: relative;
    max-width: 90%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 5%;
    padding-left: 10%;
`

export const Wrapper = styled.div`
 display: ${props => (props.flex ? "flex" : "block")};
 flex-direction: ${props => (props.column ? "column" : "row")};
 align-items: ${props => props.center ? "center" : "flex-start"};
 height: 100%;
 gap: ${props => props.gap || "0"};
`
export const SideNav = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 3rem 2rem;
`
export const Slider = styled.div`
 position: fixed;
    top: 0;
    left: 0;
    right: 0;
`

