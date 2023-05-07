export type ManType = {
    name: string
    age: number
}

export const people: ManType[] = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
]


const dimychTransformator = (man: ManType) => ({
        stack: ["css,html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1],
})

const devs = [
    {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: "Alexander", lastName: "Petrov"
    }, {
        stack: ["css,html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    }
]

const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]


//Самый правильный метод переборки масива что бы не было хардкода и все автоматически для неизвестного количества входных данных. На выходе мы получим новый масссив
const dev3 = people.map(dimychTransformator)
// еще более првавильная запись если мы поместим dimychTransformator точнее ее код напрямую в map

const dev4 = people.map(man => ({
    stack: ["css,html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
}))