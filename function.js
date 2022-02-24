async function getAllDataStudent(pg_client){
    let query
    let value
    let success
    let result

    try {
        query = `select * from students`
        value=[]
        const temp = await pg_client.query(query)
        if(temp == null || temp==undefined){
            throw new Error(`query Resulted on : ${temp}`)
        }else{
            result = temp.rows
            success = true
        }
    } catch (err) {
        console.log(err.message);
        success=false
        result = err.message
    }
    return [success,result]
}

async function getStudentFromId(pg_client,id){
    let query
    let value
    let success
    let result

    try {
        query = `select * from students
                where student_id =$1`
        value=[
            id
        ]
        const temp = await pg_client.query(query,value)
        if(temp == null || temp==undefined){
            throw new Error(`query Resulted on : ${temp}`)
        }else{
            result = temp.rows
            success = true
        }
    } catch (err) {
        console.log(err.message);
        success=false
        result = err.message
    }
    return [success,result]
}

async function insertStudent(pg_client,name,age,gender){
    let query
    let value
    let success
    let result

    try {
        query = `insert into students (name,age,gender)
                Values($1,$2,$3)`
        value=[
            name,
            age,
            gender
        ]
        const temp = await pg_client.query(query,value)
        if(temp == null || temp==undefined){
            throw new Error(`query Resulted on : ${temp}`)
        }else{
            result = temp.rows
            success = true
        }
    } catch (err) {
        console.log(err.message);
        success=false
        result = err.message
    }
    return [success,result]
}

async function updateStudentFromID(pg_client,id,name,age,gender){
    let query
    let value
    let success
    let result

    try {
        query = `update students
                set "name" = $2,
                "age" = $3,
                "gender" = $4
                where student_id =$1`
        value=[
            id,name,age,gender
        ]
        const temp = await pg_client.query(query,value)
        if(temp == null || temp==undefined){
            throw new Error(`query Resulted on : ${temp}`)
        }else{
            result = temp.rows
            success = true
        }
    } catch (err) {
        console.log(err.message);
        success=false
        result = err.message
    }
    return [success,result]
}

async function deleteStudentFromId(pg_client,id){
    let query
    let value
    let success
    let result

    try {
        query = `delete from students
                where student_id =$1`
        value=[
            id
        ]
        const temp = await pg_client.query(query,value)
        if(temp == null || temp==undefined){
            throw new Error(`query Resulted on : ${temp}`)
        }else{
            result = temp.rows
            success = true
        }
    } catch (err) {
        console.log(err.message);
        success=false
        result = err.message
    }
    return [success,result]
}




exports.alldata = getAllDataStudent
exports.viewdataById = getStudentFromId
exports.insertData = insertStudent
exports.updateById = updateStudentFromID
exports.deleteById = deleteStudentFromId