import { View, Text, TouchableOpacity } from "react-native";
import { Trash2 } from "lucide-react-native";

import { FilterStatus } from "@/types/FilterStatus";
import { StatusIcon } from "../StatusIcon";
import { styles } from "./styles";

type ItemData = {
    status: FilterStatus
    description: string
}

type Props = {
    data: ItemData
}

export function Item({ data }: Props ) {
    return (
        <View style={styles.container} >
            <TouchableOpacity activeOpacity={0.8} >
                <StatusIcon status={data.status} />
            </TouchableOpacity>
        </View>
    )
}