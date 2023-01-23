import Statistics from "../components/statistics";
import MeetTheBoard from "../components/meet-the-board";
import BlogShowcase from "../components/blog-showcase";
import MakingMemories from "../components/making-memories";
import WhyYouShouldJoin from "../components/why-you-should-join";
import Partners from "../components/partners";
import MissionVision from "../components/mission-vision";
import LandingPage from "../components/landing-page";
import Footer from "../components/shared/footer";

const Home = () => {
  return (
    <>
      <LandingPage />

      <MissionVision />

      <Statistics />

      <WhyYouShouldJoin />

      <MakingMemories />

      <BlogShowcase />

      <MeetTheBoard />

      <Partners />
    </>
  );
};

export default Home;
