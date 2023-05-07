test("should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    //const predicate = (age: number) => age > 90
    //{return age > 90;}


    const oldAges = ages.filter(age => age > 90)//мы поместили predicate на прямую в фильтр что бы меньше писать

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100)

})


test("should take chipper 160", () => {
    //массив с исходными объектами
    const courses = [
        {title: "CSS", prices: 110},
        {title: "JS", prices: 200},
        {title: "REACT", prices: 150}
    ]
    //cheapPredicate функция которая получает элемент массива и проверяет на соответсвие условию
    const cheapPredicate = (course: CoursesType) => {
        return course.prices < 160;
    }

// содержит в себе метод filter который вызывает cheapPredicate тем самым он пробегает по всем элементам и срздает новый массив с элементами которые удволетворяют условию описаному в cheapPredicate
    const chipCourses = courses.filter(cheapPredicate)

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("CSS")
    expect(chipCourses[1].title).toBe("REACT")
})


test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Salt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]
    const completedTasks = tasks.filter((task) => task.isDone)


    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})

