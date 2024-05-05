import Banner from "../../components/Banner";
import TabComponent from "../../components/TabComponent";
import useJobs from "../../hooks/useJobs";


const Home = () => {
  const  { data, isLoading, refetch } = useJobs();
  console.log(data);
  return (
    <div className="container px-4 mx-auto space-y-20">
      <Banner />
      <TabComponent data={data}/>
    </div>
  );
};

export default Home;
