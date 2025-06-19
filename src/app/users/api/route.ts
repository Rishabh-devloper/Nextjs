import {users} from'@/data/user'

export function GET(){
    return Response.json(users)
}
export async function POST(request: Request){
    const user = await request.json()
    const newUser = {
        id: users.length+ 1,
        name: user.name,
        age:user.age,
        email: user.email,

    }
    users.push(newUser)
    return new Response(JSON.stringify(newUser),{
        headers: {'Content-Type':'application/json'},
        status: 201
    })
}