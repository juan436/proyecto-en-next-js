async function useList() {
    let response = await fetch("https://dummyjson.com/users");
    let data = await response.json();
    return data.users;
}

export default async function Page() {
    let users = await useList();
    console.log(users);
    return (
        <div>
            <h1>SERVER API</h1>
            {users.map((item) => (
                <h3 key={item.id}>Name: {item.firstName}</h3>
            ))}
        </div>
    );
}
