import { ViewProps } from "react-native";

import { VStack } from "../ui/vstack";

interface Props extends ViewProps {
}
export function Main({ ...props }: Props) {
    return (
        <VStack {...props} space="lg">
            {props.children}
        </VStack>
    );
}