import React from 'react';
import {Flex} from '@chakra-ui/react'
import NavItems from './navItems';


const DesktopNav = ({...rest}) => {
    return (
        <Flex alignItems='center' {...rest}>
           

<NavItems/>


        </Flex>
    );
}

export default DesktopNav;
