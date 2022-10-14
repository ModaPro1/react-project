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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FixedSibar/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/courses/:courseId" element={<SingleCourse/>}/>
          <Route path="/friends" element={<Friends/>}/>
          <Route path="/files" element={<Files/>}/>
          <Route path="/plans" element={<Plans/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}