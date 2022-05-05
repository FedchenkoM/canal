export const filter = (list, column, operator, input) => {
    if (!column || !operator || !input) return list
    switch (operator) {
        case 'is equal':
            if (column !== 'name') {
                return [...list].filter(el => el[column] === Number(input))
            } else {
                return [...list].filter(el => el[column] == input)
            }
        case 'more than':
            return [...list].filter(el => el[column] > input)
        case 'less than':
            return [...list].filter(el => el[column] < input)
        case 'contains':
            console.log(column)
            return [...list].filter(el => !String(el[column]).toLowerCase()
                .indexOf(input.toLowerCase()))
        default:
            return list
    }

}