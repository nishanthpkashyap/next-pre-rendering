export function DisplayUsersList({users}: {users: Array<Object>}){
    return (
        <div>
            <ol className="list-decimal">
                {users.map(({name, id}: any) => {
                    return (<div key={id}><li>{name}</li></div>)
                })}
            </ol>
        </div>
    )
}