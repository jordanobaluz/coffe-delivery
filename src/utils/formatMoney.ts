export function formatMoney(value: number){
    //formata o numero passado para formato moeda brasileira adicionando duas casas decimais
    return value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2
    })
}