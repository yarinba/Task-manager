require('../src/db/mongoose')
const Task = require('../src/models/task')

/* Task.findByIdAndDelete('6073e44a55335316585460f6').then((task) => {
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
}) */

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments( {completed: false} )
    return count
}

deleteTaskAndCount('6073e519bef9a3570ca00b46').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})