
import React from 'react';
import { Text, TextSmall, Slider, SideNav, Container, Wrapper } from '../styles';
import { Icon } from '@iconify/react';
import githubLogo from '@iconify/icons-radix-icons/github-logo';
import { Link } from 'react-router-dom';
export const Home = () => {
    return (
        <>

            <Slider></Slider>

            <SideNav>
                <Wrapper flex column center>
                    <Wrapper flex column spaceBtw gap="2rem">
                        <Link to={"//github.com/obicodeman555"} target="_blank" rel='non-referer'>
                            <Text>
                                <Icon icon={githubLogo} className="icon-svg" />
                            </Text>
                        </Link>
                        <Link to={"//linkedin.com/in/obinna-ofe-8b07a8124"}>
                            <Text>
                                <Icon icon="entypo-social:linkedin-with-circle" className="icon-svg" />
                            </Text>
                        </Link>
                    </Wrapper>
                    <TextSmall className='font-sm'>
                        &#169;/2023
                    </TextSmall>
                </Wrapper>
            </SideNav>
            <Container>
                <Text>Hello</Text>
                <Text>
                    Flex
                </Text>
            </Container>
        </>
    )
}
