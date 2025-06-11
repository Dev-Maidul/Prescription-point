
import Banner from './Banner';
import Doctors from './Doctors';
import { useLoaderData } from 'react-router';

const Home = () => {
    const {doctors}= useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Doctors doctors={doctors}></Doctors>
        </div>
    );
};

export default Home;