type CityType={
    title:string
    countryTitle:string
}
type AddresType={
    streetTitle:string
    city:CityType
}
type TechType={
    id:number
    title:string
}
type StudentType = {
    id: number
    name:string
    age:number
    isActive:boolean
    addres:AddresType
    technologies:TechType[]
}


const student: StudentType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    addres: {
        streetTitle: "Surgunova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },
    ]
}