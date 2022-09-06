import { HStack, Image, Link, Flex } from '@chakra-ui/react';
import Button from '../elements/Button';
import logoImg from '../assets/images/logo-img.png';
import { useEffect, useState } from 'react';
import SideMenu from './SideMenu';

const Nav = props => {
  const [currWidth, updateCurrWith] = useState(window.innerWidth);

  let rightNavElements = () => {
    return (
      <Flex
        direction={['column', 'row']}
        alignItems="center"
        gap={10}
        className="right-nav-elements"
      >
        <Link color="blk" fontWeight="600" href="#scr-abt">
          About
        </Link>
        <Link color="blk" fontWeight="600" href="#scr-cnt">
          Contact
        </Link>
        <Button>Shop</Button>
      </Flex>
    );
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      updateCurrWith(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', null);
    };
  }, []);

  return (
    <nav>
      <HStack justifyContent="space-between">
        <div className="logo">
          <Image h={['40px']} src={logoImg} />
        </div>
        {currWidth < 500 ? (
          <SideMenu content={rightNavElements()} />
        ) : (
          rightNavElements()
        )}
      </HStack>
    </nav>
  );
};

export default Nav;
