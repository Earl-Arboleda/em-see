import Body from "./Body"
import Footer from "./Footer"
import Header from "./Header"
import { useAsync } from "./Hooks/useAsync"
import Slider from "./Slider"

const Home = () => {
    const { loading, error, value} = useAsync();
    return(
        <>
        <Slider/>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}
export default Home;