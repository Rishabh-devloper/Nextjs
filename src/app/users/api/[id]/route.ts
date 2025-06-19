import { users } from "@/data/user";

export async function GET(request:Request , {params}:{params:Promise<{id:string}>}){
    const id = (await params).id;
    const user = users.find(item => item.id === Number(id))
    return Response.json(user)

}

export async function PATCH(
    request: Request,
    {params}:{params : Promise<{id:string}>}
){
    const id = (await params).id;
    const user = await request.json()
    const userIndex = users.findIndex(item => item.id === Number(id))
    users[userIndex]['name'] = user.name
    return Response.json(users[userIndex])
}