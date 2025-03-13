export default {
    namespaced: true,
    state: {
        teachers: [
            { id: '1', name: 'Jane Austen' },
            { id: '2', name: 'George Martin' },
            { id: '3', name: 'Ivan Murakami' },
            { id: '4', name: 'Agatha Christie' },
            { id: '5', name: 'John Rowling' },
        ],
    },
    getters: {
        teachers: ({ teachers }) => teachers,
        getTeacherById:
            ({ teachers }) =>
            (id) => {
                return teachers.find((teacher) => id == teacher.id)
            },
        isTeachersExist:
            ({ teachers }) =>
            (idList) => {
                return teachers.every((teacher) => idList.includes(teacher.id))
            },
    },
    mutations: {},
    actions: {},
}
