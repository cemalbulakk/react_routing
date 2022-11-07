import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function User() {
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <div>User Detail</div>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div>
          <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
          <ul>
            <Link to={`/user/${parseInt(id) + 1}`}>Next User</Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default User;
