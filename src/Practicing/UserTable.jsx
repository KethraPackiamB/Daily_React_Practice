export const UserTable = ({users}) => {

    return(
        <div>
            <table >
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email ID</th>
                        <th>Street</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.street}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    ))}

                </tbody>            
            </table>
        </div>
    )
}