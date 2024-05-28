import './App.scss'
import {Header} from "./components/header/header.jsx";
import {Intro} from "./components/intro/intro.jsx";
import {Companies} from "./components/companies/companies.jsx";
import {CompanieFeatures} from "./components/features/features.jsx";
import {RoadMap} from "./components/roadMap/roadMap.jsx";
import {OurAchievements} from "./components/ourAchievements/ourAchievements.jsx";
import {Information} from "./components/information/information.jsx";
import {Footer} from "./components/footer/footer.jsx";
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/login/login.jsx";
import {Profile} from "./pages/profile/profile.jsx";
import {EditProfile} from "./pages/editProfile/editProfile.jsx";
import {EditPassword} from "./pages/editPassword/editPassword.jsx";
import SuccessPaymentPage from './pages/successPayment/successPayment.jsx';
import {HistoryOfTrip} from "./pages/historyOfTrip/historyOfTrip";

function App() {

  return (
    <>
        <Routes>
            <Route path={'/'}
                element={(
                    <>
                        <Header />
                        <Intro />
                        <Companies />
                        <CompanieFeatures />
                        <RoadMap />
                        <OurAchievements />
                        <Information />
                        <Footer />
                    </>
                )}
            />
            <Route path={'/auth'} element={<LoginPage />} />
            <Route path={'/profile'} element={<Profile />} />
            <Route path={'/profile/edit'} element={<EditProfile />} />
            <Route path={'/history_of_trip'} element={<HistoryOfTrip />}/>
            <Route path={'/payment/status'} element={<SuccessPaymentPage />} />
            <Route path={'/profile/edit_password'} element={<EditPassword />} />
        </Routes>

    </>
  )
}

export default App
