import axios from "axios"

export default async function Users() {
    const users = await getUsersList();
    // console.log(users);

    return (
        <div className="flex items-center justify-center gap-[20px] flex-col">
            <h1>List of users:</h1>
            <ol className="list-decimal">
                {users.map(({name, id}: any) => {
                    return (<div key={id}><li>{name}</li></div>)
                })}
            </ol>
        </div>
    )
}

async function getUsersList() {
    const { data } = (await axios.get('https://jsonplaceholder.typicode.com/users'));
    return data;
}