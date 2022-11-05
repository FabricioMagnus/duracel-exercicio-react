import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import BoxCardList from "./components/boxCardList";

function App() {
    const [numPilhas, setNumPilhas] = useState(1);

    return (
        <>
            <Flex mt={14} h={"10vh"} w={"80vw"} margin={"auto"} borderBottomRadius={"30px"} bgColor={"gray"} mb={30} justifyContent={"space-evenly"} alignItems="center">
                <Button onClick={() => setNumPilhas(numPilhas + 1)} h={"60px"} color="black" borderRadius={"16px"} cursor={"pointer"}>
                    Adicionar Pilha
                </Button>
                <Button onClick={() => setNumPilhas(numPilhas - 1)} h={"60px"} color="black" borderRadius={"16px"} cursor={"pointer"}>
                    Remover Pilha
                </Button>
            </Flex>
            <Flex justifyContent={"center"} px={10} py={10} alignItems={"center"}>
                <SimpleGrid columns={4} spacingY={40} spacingX={30}>
                    <BoxCardList />
                    <BoxCardList />
                    <BoxCardList />
                    <BoxCardList />
                    <BoxCardList />
                </SimpleGrid>
            </Flex>
        </>
    );
}

export default App;
