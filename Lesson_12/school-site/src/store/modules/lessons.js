export default {
    namespaced: true,
    state: {
        lessons: [
            { id: '1', title: 'Ukrainian language' },
            { id: '2', title: 'Mathematics' },
            { id: '3', title: 'Geography' },
            { id: '4', title: 'History' },
            { id: '5', title: 'Chemistry' },
            { id: '6', title: 'Physics' },
        ],
    },
    getters: {
        lessons: ({ lessons }) => lessons,
        getLessonsById:
            ({ lessons }) =>
            (idList) => {
                return lessons.filter((lesson) => idList.includes(lesson.id))
            },
        getLessonById:
            ({ lessons }) =>
            (id) => {
                return lessons.find((lesson) => id == lesson.id)
            },
        isLessonsExist:
            ({ lessons }) =>
            (idList) => {
                return lessons.every((lesson) => idList.includes(lesson.id))
            },
    },
    mutations: {},
    actions: {},
}
