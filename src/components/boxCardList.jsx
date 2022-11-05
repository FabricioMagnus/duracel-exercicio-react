import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NumericFormat } from 'react-number-format';

export default function BoxCardList() {
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");
    const [topo, setTopo] = useState();

    function PushValue() {
        setList([...list, value]);
        setValue("");
    }

    function PopValue() {
        const last = list.length - 1;
        setList(list.slice(0,last))
        setValue("");
    }

    useEffect(() =>{
        const last = list.length - 1;
        setTopo(list.length? list[last]: "Nenhum Item na Lista!")
    },[list])
   

    return (
        <Flex w={"300px"} h={"fit-content"} flexDirection={"column"} alignItems={"center"}>
            <Flex flexDirection={"row"} h={"30%"}>
                <NumericFormat
                    value={value}                                        
                    max={999}
                    maxLength={3}
                    customInput={Input}
                    px={5}
                    py={5}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
                <Button
                    onClick={() => {
                        PushValue();
                    }}
                >
                    <Icon as={AddIcon} />
                </Button>
                <Button
                    onClick={() => {
                        PopValue();
                    }}
                >
                    <Icon as={MinusIcon} />
                </Button>
            </Flex>
            {list &&
                list.map((item, index) => {
                    return (
                        <Flex key={index} w={"232px"} h={"30px"} backgroundColor={'#FFFACD'}justifyContent={"center"} alignItems={"center"} border={"2px solid #000000"}>
                            <Text  fontWeight={"bold"}>
                                {item}
                            </Text>
                        </Flex>
                    );
                })}
                <Flex h={'fit-content'} w={"232px"} flexDirection={'column'}>
                    <Text fontWeight={'bold'} m={2} p={2}>Tamanho: {list.length} itens</Text>
                    <Text fontWeight={'bold'} m={2} p={2}>Topo: {topo}</Text>
                    <Text fontWeight={'bold'} m={2} p={2}>Vazia: {list.length? "false": "true"}</Text>
                </Flex>
        </Flex>
    );
}
