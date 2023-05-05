import {StudentType} from "../02/02";

const sum = (a: number, b: number) => {
    return
}


export const addSkill=
(student: StudentType, skill: string)=>
{
    student.technologies.push({
        id: new Date().getDate(),
        title: skill
    })
}