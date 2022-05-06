export const filter = (list, column, operator, input) => {
    if (!column || !operator || !input) return list
    switch (operator) {
        case 'is equal':
            if (column !== 'name') {
                return [...list].filter(el => el[column] === Number(input))
            } else {
                return [...list].filter(el => el[column] === input)
            }
        case 'more than':
            return [...list].filter(el => el[column] > input)
        case 'less than':
            return [...list].filter(el => el[column] < input)
        case 'contains':
            return [...list].filter(el => {
                return (String(el[column])
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0)
            })
        default:
            return list
    }

}