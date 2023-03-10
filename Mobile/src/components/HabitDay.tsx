import { TouchableOpacity, Dimensions } from "react-native";

const WEEK_DAYS = 7; // Numero de dias na semana
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5; // Padding padrão do app

export const DAY_MARGIN_BETWEEN = 8; // Espaçamento entre quadrados

// Pega a largura da tela do dispositivo para descobrir qual tamanho de cada quadrado pra permitir ter 7 na mesma linha
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5);

export function HabitDay() {
    return (
        <TouchableOpacity
            className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
            style={{ width: DAY_SIZE, height: DAY_SIZE }}
            activeOpacity={0.7} />
    )
}
