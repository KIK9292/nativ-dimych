const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100];//>90

type CoursesType = {
    title: string
    prices: number
}


const courses = [
    {title: "CSS", prices: 110},
    {title: "JS", prices: 200},
    {title: "REACT", prices: 150}
]

const cheapPredicate = (course: CoursesType) => {
    return course.prices < 160;
}

const chipCourses = [
    {title: "CSS", prices: 110},
    {title: "REACT", prices: 150}
]