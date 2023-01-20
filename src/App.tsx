import {
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  VStack,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import IncrDecr from "./components/IncrDecr";

const studentPrice = 140;
const afPrice = 160;
const adultPrice = 200;

function App() {
  const [studentTickets, setStudentTickets] = useState(0);
  const [afTickets, setAfTickets] = useState(0);
  const [adultTickets, setAdultTickets] = useState(0);
  const [price, setPrice] = useState(0);

  function onReset() {
    setStudentTickets(0);
    setAfTickets(0);
    setAdultTickets(0);
  }

  useEffect(() => {
    setPrice(
      studentTickets * studentPrice +
        afTickets * afPrice +
        adultTickets * adultPrice
    );
  }, [studentTickets, afTickets, adultTickets]);

  return (
    <Flex w="100vw" h="100vh" justifyContent="center">
      <VStack maxW="40%" spacing="1rem">
        <Text fontSize="3xl">Jesperspexet intern biljettförsäljning</Text>
        <Button colorScheme="red" w="full" onClick={onReset}>
          Nollställ
        </Button>
        <HStack spacing="1rem" w="100%" justifyContent="space-between">
          <Text fontSize="xl">
            Studentlundsmedlem/under 15 år - {studentPrice} SEK
          </Text>
          <IncrDecr
            count={studentTickets}
            increment={() => setStudentTickets(studentTickets + 1)}
            decrement={() =>
              studentTickets === 0
                ? console.log("Already 0")
                : setStudentTickets(studentTickets - 1)
            }
          />
        </HStack>
        <HStack spacing="1rem" w="100%" justifyContent="space-between">
          <Text fontSize="xl">Särskild AF-medlem - {afPrice} SEK</Text>
          <IncrDecr
            count={afTickets}
            increment={() => setAfTickets(afTickets + 1)}
            decrement={() =>
              afTickets === 0
                ? console.log("Already 0")
                : setAfTickets(afTickets - 1)
            }
          />
        </HStack>
        <HStack spacing="1rem" w="100%" justifyContent="space-between">
          <Text fontSize="xl">Ordinarie - {adultPrice} SEK</Text>
          <IncrDecr
            count={adultTickets}
            increment={() => setAdultTickets(adultTickets + 1)}
            decrement={() =>
              adultTickets === 0
                ? console.log("Already 0")
                : setAdultTickets(adultTickets - 1)
            }
          />
        </HStack>

        {(studentTickets > 0 || afTickets > 0 || adultTickets > 0) && (
          <>
            <Text fontSize="2xl">
              Total: {price} SEK + 2.5 SEK i Swish avgift
            </Text>
            <QRCode
              value={`https://app.swish.nu/1/p/sw/?sw=1230634105&amt=${
                price + 2.5
              }&cur=SEK&msg=Biljetter&src=qr`}
            />
          </>
        )}
      </VStack>
    </Flex>
  );
}

export default App;
