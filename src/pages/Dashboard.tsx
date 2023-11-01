import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div>
        <Link to='/sign-in'>Sign-in</Link>
      </div>
      <Link to='/'>GO home</Link>
    </div>
  );
};

export default Dashboard;
