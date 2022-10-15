import { BrowserRouter, Routes, Route } from "react-router-dom"

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
import './css/style.css'
import './css/framwork.css'
import './css/all.min.css'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-project" element={<FixedSibar/>}>
          <Route path="/react-project" element={<Dashboard/>}/>
          <Route path="/react-project/settings" element={<Settings/>}/>
          <Route path="/react-project/profile" element={<Profile/>}/>
          <Route path="/react-project/projects" element={<Projects/>}/>
          <Route path="/react-project/courses" element={<Courses/>}/>
          <Route path="/react-project/courses/:courseId" element={<SingleCourse/>}/>
          <Route path="/react-project/friends" element={<Friends/>}/>
          <Route path="/react-project/files" element={<Files/>}/>
          <Route path="/react-project/plans" element={<Plans/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}