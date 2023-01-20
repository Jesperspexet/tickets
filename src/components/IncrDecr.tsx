import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { IconButton, Text, VStack } from "@chakra-ui/react";

interface Props {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export default function IncrDecr({ count, increment, decrement }: Props) {
  return (
    <VStack>
      <IconButton
        icon={<AddIcon />}
        onClick={increment}
        aria-label="Increment"
      />
      <Text>{count}</Text>
      <IconButton
        icon={<MinusIcon />}
        onClick={decrement}
        aria-label="Decrement"
      />
    </VStack>
  );
}
