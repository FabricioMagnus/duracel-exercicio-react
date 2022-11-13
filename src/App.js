import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import BoxCardList from "./components/boxCardList";

function App() {
    const [numPilhas, setNumPilhas] = useState([]);

    function PushValue() {
      setNumPilhas([...numPilhas, 1]);
  }

  function PopValue() {
      const last = numPilhas.length - 1;
      setNumPilhas(numPilhas.slice(0,last))
  }
//teste
    return (
        <>
            <Flex mt={14} h={"10vh"} w={"80vw"} margin={"auto"} borderBottomRadius={"30px"} bgColor={"gray"} mb={30} justifyContent={"space-evenly"} alignItems="center">
                <Button onClick={() => PushValue()} h={"60px"} color="black" borderRadius={"16px"} cursor={"pointer"}>
                    Adicionar Pilha
                </Button>
                <Button onClick={() => PopValue()} h={"60px"} color="black" borderRadius={"16px"} cursor={"pointer"}>
                    Remover Pilha
                </Button>
                <Button isDisabled onClick={() => PopValue()} h={"60px"} color="white" borderRadius={"16px"} >
                    Número de Pilhas: {numPilhas.length}
                </Button>
            </Flex>
            <Flex justifyContent={"center"} px={10} py={10} alignItems={"center"}>
                <SimpleGrid columns={5} spacingY={40} spacingX={30}>
                    {numPilhas.length? numPilhas.map((item, index)=>{
                      return (
                        <BoxCardList/>
                      )
                    }): "Nenhuma pilha na lista"}
                </SimpleGrid>
            </Flex>
        </>
    );
}

export default App;
