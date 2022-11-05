import { Flex, SimpleGrid } from '@chakra-ui/react';
import BoxCardList from './components/boxCardList';

function App() {
  return (
    <Flex w={'100vw'} h={'100vh'}  justifyContent={"center"} px={10} py={10} alignItems={"center"}> 
      <SimpleGrid>
      <BoxCardList/>
      </SimpleGrid>
    </Flex>
      
    
  );
}

export default App;
