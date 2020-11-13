
import React, { Component } from "react";
import Menu from './Components/Menu/Menu'
import CustomLayout from "./Components/Layout/index";
import { HashRouter, Route, Switch, Router as BrowserRouter } from "react-router-dom";
import SurahList from "./Components/Quran/SurahList/SurahList";
import SurahDetail from "./Components/Quran/SurahDetail/SurahDetail";
import VerseDetail from "./Components/Quran/VerseDetail/VerseDetail";
import HadithHome from "./Components/Hadith/HadithHome/HadithHome";
import Chapters from "./Components/Hadith/chapters/Chapters";
import HadithList from "./Components/Hadith/HadithList/HadithList";
import NewRoutes from "./Components/NewRoutes";
import Login from "./Components/AdminPanel/Login/Login";
import UpdateNaat from "./Components/AdminPanel/UpdateNaat/UpdateNaat";
import NaatData from "./Components/AdminPanel/UpdateNaat/NaatData";
import AddNaat from "./Components/AdminPanel/AddNaat/AddNaat";
import DataManage from "./Components/AdminPanel/Home/DataManage";
import 'antd/dist/antd.css';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

export default class App extends Component {
  render() {
    return (<Switch>
      <Route path="/surahlist/:surahId/:ayahId" component={VerseDetail} ></Route>
      <Route path="/surahlist/:surahId" component={SurahDetail} />
      <Route path="/surahlist" component={SurahList} />
      <Route path="/naats" component={NewRoutes} ></Route>
      <Route path="/hadithchapter/:chapterNumber" component={HadithList}></Route>

      <Route path="/hadithchapter" component={Chapters}></Route>
      <Route path="/hadith" component={HadithHome}></Route>

      <Route path="/addNaat" component={AddNaat} />
      <Route path="/naatData" component={NaatData} />
      <Route path="/updateNaat/:naatId" component={UpdateNaat} />
      <Route path="/dataManage" component={DataManage} />
      <Route exact path="/admin" component={Login} />
      <Route exact path="/" component={Menu}></Route>

    </Switch>

    );
  }
}
// <BrowserRouter>
      //   <React.Suspense fallback={loading}>
      //     <Switch>
      //       <Route
      //         exact
      //         path="/"
      //         name="HomePage"
      //         render={(props) => (
      //           <CustomLayout {...props}>
      //             <Menu />
      //           </CustomLayout>
      //         )}
      //       />
      //       <Route
      //         exact
      //         path="/surahlist"
      //         name="Surah List"
      //         render={(props) => <SurahList {...props} />}
      //       />
      //       <Route
      //         exact
      //         path="/surahlist/:surahId"
      //         name="Surah Deatil"
      //         render={(props) => <SurahDetail {...props} />}
      //       />
      //       <Route
      //         exact
      //         path="/surahlist/:surahId/:ayahId"
      //         name="Verse Detail"
      //         render={(props) => <VerseDetail {...props} />}
      //       />
      //       <Route
      //         exact
      //         path="/hadith"
      //         name="Hadith Home"
      //         render={(props) => <HadithHome {...props} />}
      //       />
      //       <Route
      //         exact
      //         path="/hadithchapter"
      //         name="Chapters"
      //         render={(props) => <Chapters {...props} />}
      //       />
      //       <Route
      //         exact
      //         path="/hadithchapter/:chapterNumber"
      //         name="Hadith List"
      //         render={(props) => <HadithList {...props} />}
      //       />
      //       <Route
      //         exact
      //         path="/naats"
      //         name="New Routes"
      //         render={(props) => <NewRoutes {...props} />}
      //       />
      //       <Route
      //         exact
      //         path="/admin"
      //         name="Login"
      //         render={(props) => <Login {...props} />}
      //       />
      //       <Route
      //         exact
      //         path="/updateNaat/:naatId"
      //         name="Update Naat"
      //         render={(props) => <UpdateNaat {...props} />}
      //       />
      //       <Route
      //         exact
      //         path="/naatData"
      //         name="Naat Data"
      //         render={(props) => <NaatData {...props} />}
      //       />
      //       <Route
      //         exact
      //         path="/addNaat"
      //         name="Add Naat"
      //         render={(props) => <AddNaat {...props} />}
      //       />
      //       <Route
      //         exact
      //         path="/dataManage"
      //         name="Data Manage"
      //         render={(props) => <DataManage {...props} />}
      //       />
      //     </Switch>
      //   </React.Suspense>
      // </BrowserRouter>