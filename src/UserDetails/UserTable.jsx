export const UserTable = ({userData}) => {

    return(
        <div>
            <table>
                <thead>
                    <th>User_ID</th>
                    <th>User_Name</th>
                    <th>User_Email</th>
                </thead>
                <tbody>
                    {userData?.map((users)=>{ 
                        <tr key={UserID}>
                        <td>{users.id}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                    </tr>})}
                    
                </tbody>
            </table>
        </div>
    )
}