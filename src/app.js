import { HashRouter, Routes, Route } from "react-router-dom"

// Fixed Pages
import FixedSibar from "./fixedSidbar"

// Pages
import Settings from "./pages/settings"
import Files from "./pages/files"
import Friends from "./pages/friends"
import Plans from "./pages/plans"
import Profile from "./pages/profile"
import Projects from "./pages/projects"
import Courses from "./pages/courses"
import SingleCourse from "./pages/singleCourse"
import NotFound from "./pages/notFound"
import Dashboard from "./pages/dashboard"

// CSS
import './css/all.min.css'
import './css/style.css'
import './css/framwork.css'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="" element={<FixedSibar/>}>
          <Route path="" element={<Dashboard/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/courses/:courseId" element={<SingleCourse/>}/>
          <Route path="/friends" element={<Friends/>}/>
          <Route path="/files" element={<Files/>}/>
          <Route path="/plans" element={<Plans/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HashRouter>
  )
}