
import Success from '../../Components/Success';
import Banner from './Banner';
import Doctors from './Doctors';
import { useLoaderData } from 'react-router';
import { motion } from "motion/react"
const Home = () => {
    const {doctors}= useLoaderData();
    return (
        <motion.div
        initial={{ backgroundColor: "rgb(23,106,229)", opacity: 0 }}
  whileInView={{ backgroundColor: "rgb(239,239,239)", opacity: 1 }}
  
        >
            <Banner></Banner>
            <Doctors doctors={doctors}></Doctors>
            <Success></Success>
        </motion.div>
    );
};

export default Home;