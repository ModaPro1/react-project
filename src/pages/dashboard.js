// Images

import avatar from "../imgs/avatar.png"
import welcome from "../imgs/welcome.png"
import news1 from "../imgs/news-01.png"
import news2 from "../imgs/news-02.png"
import news3 from "../imgs/news-03.png"
import news4 from "../imgs/news-04.png"
import pdf from "../imgs/pdf.svg"
import avi from "../imgs/avi.svg"
import psd from "../imgs/psd.svg"
import zip from "../imgs/zip.svg"
import dll from "../imgs/dll.svg"
import eps from "../imgs/eps.svg"
import project from "../imgs/project.png"
import team1 from "../imgs/team-01.png"
import team2 from "../imgs/team-02.png"
import team3 from "../imgs/team-03.png"
import team4 from "../imgs/team-04.png"
import team5 from "../imgs/team-05.png"

export default function Dashboard () {
  return (
    <>
      <h1 className="p-relative">Dashboard</h1>
      <div className="wrapper d-grid gap-20">

        <div className="welcome bg-white rad-10 txt-c-mobile block-mobile">
          <div className="intro p-20 d-flex space-between bg-eee">
            <div>
              <h2 className="m-0">Welcome</h2>
              <p className="c-gery mt-5">Mahmoud</p>
            </div>
            <img className="hide-mobile" src={welcome} alt=""/>
          </div>
          <img src={avatar} className="avatar" alt=""/>
          <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
            <div>Mahmoud Ahmed<span className="d-block c-grey fs-14 mt-10">Web Developer</span></div>
            <div>75<span className="d-block c-grey fs-14 mt-10">Projects</span></div>
            <div>$5000<span className="d-block c-grey fs-14 mt-10">Earned</span></div>
          </div>
          <a href="profile.html" className="visit d-block fs-14 bg-blue c-white w-fit btn-shape">Profile</a>
        </div>

        <div className="draft p-20 bg-white rad-10">
          <h2 className="mt-0 mb-10">Quick Draft</h2>
          <p className="mt-0 mb-20 fs-15 c-grey">Write A Draft For Your Ideas</p>
          <form action="">
            <input type="text" className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" placeholder="Title"/>
            <textarea className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" placeholder="Your Thougth"></textarea>
            <input type="submit" className="save d-block fs-14 bg-blue c-white b-none w-fit btn-shape" value="Save"/>
          </form>
        </div>

        <div className="targets p-20 bg-white rad-10">
          <h2 className="mt-0 mb-10">Yearly Targets</h2>
          <p className="mt-0 mb-20 c-grey fs-15">Targets Of The Year</p>
          <div className="target-row mb-20 blue center-flex">
            <div className="icon center-flex">
              <i className="fa-solid fa-dollar-sign fa-lg c-blue"></i>
            </div>
            <div className="details">
              <span className="fs-14 c-grey">Money</span>
              <span className="d-block mt-5 mb-10 fw-bold">$20.000</span>
              <div className="progress p-relative">
                <span className="bg-blue blue" style={{width: "80%"}}>
                  <span className="bg-blue">80%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="target-row mb-20 center-flex orange">
            <div className="icon center-flex">
              <i className="fa-solid fa-code fa-lg c-orange"></i>
            </div>
            <div className="details">
              <span className="fs-14 c-grey">Projects</span>
              <span className="d-block mt-5 mb-10 fw-bold">24</span>
              <div className="progress p-relative">
                <span className="bg-orange orange" style={{width: "55%"}}>
                  <span className="bg-orange">55%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="target-row mb-20 center-flex green">
            <div className="icon center-flex">
              <i className="fa-solid fa-user fa-lg c-green"></i>
            </div>
            <div className="details">
              <span className="fs-14 c-grey">Team</span>
              <span className="d-block mt-5 mb-10 fw-bold">12</span>
              <div className="progress p-relative">
                <span className="bg-green green" style={{width: "75%"}}>
                  <span className="bg-green">75%</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="tickets p-20 bg-white rad-10">
          <h2 className="mt-0 mb-10">Tickets Statistics</h2>
          <p className="mt-0 mb-20 c-grey fs-15">Everything About Support Tickets</p>
          <div className="d-flex txt-c gap-20 f-wrap">
            <div className="box p-20 rad-10 fs-13 c-grey">
              <i className="fa-regular fa-rectangle-list fa-2x mb-10 c-orange"></i>
              <span className="d-block c-black fw-bold fs-25 mb-5">2500</span>
              Total
            </div>
            <div className="box p-20 rad-10 fs-13 c-grey">
              <i className="fa-solid fa-spinner fa-2x mb-10 c-blue"></i>
              <span className="d-block c-black fw-bold fs-25 mb-5">500</span>
              Pending
            </div>
            <div className="box p-20 rad-10 fs-13 c-grey">
              <i className="fa-regular fa-circle-check fa-2x mb-10 c-green"></i>
              <span className="d-block c-black fw-bold fs-25 mb-5">1900</span>
              Closed
            </div>
            <div className="box p-20 rad-10 fs-13 c-grey">
              <i className="fa-regular fa-rectangle-xmark fa-2x mb-10 c-red"></i>
              <span className="d-block c-black fw-bold fs-25 mb-5">100</span>
              Deleted
            </div>
          </div>
        </div>

        <div className="latest-news p-20 bg-white rad-10 txt-c-mobile">
          <h2 className="mt-0 mb-20">Latest News</h2>
          <div className="news-row d-flex align-center">
            <img src={news1} alt="" />
            <div className="info">
              <h3>Created SASS Section</h3>
              <p className="m-0 fs-14 c-grey">New SASS Examples & Tutorials</p>
            </div>
            <div className="btn-shape bg-eee fs-13 label">3 Days Ago</div>
          </div>
          <div className="news-row d-flex align-center">
            <img src={news2} alt="" />
            <div className="info">
              <h3>Changed The Design</h3>
              <p className="m-0 fs-14 c-grey">A Brand New Website Design</p>
            </div>
            <div className="btn-shape bg-eee fs-13 label">5 Days Ago</div>
          </div>
          <div className="news-row d-flex align-center">
            <img src={news3} alt="" />
            <div className="info">
              <h3>Team Increased</h3>
              <p className="m-0 fs-14 c-grey">3 Developers Joined The Team</p>
            </div>
            <div className="btn-shape bg-eee fs-13 label">7 Days Ago</div>
          </div>
          <div className="news-row d-flex align-center">
            <img src={news4} alt="" />
            <div className="info">
              <h3>Added Payment Gateway</h3>
              <p className="m-0 fs-14 c-grey">Many New Payment Gateways Added</p>
            </div>
            <div className="btn-shape bg-eee fs-13 label">9 Days Ago</div>
          </div>
        </div>

        <div className="tasks p-20 bg-white rad-10">
          <h2 className="mt-0 mb-20">Latest Tasks</h2>
          <div className="task-row between-flex">
            <div className="info">
              <h3 className="mt-0 mb-5 fs-15">Record One New Video</h3>
              <p className="m-0 c-grey">Record Python Create Exe Project</p>
            </div>
            <i className="fa-regular fa-trash-can delete"></i>
          </div>
          <div className="task-row between-flex">
            <div className="info">
              <h3 className="mt-0 mb-5 fs-15">Write Article</h3>
              <p className="m-0 c-grey">Write Low Level vs High Level Languages</p>
            </div>
            <i className="fa-regular fa-trash-can delete"></i>
          </div>
          <div className="task-row between-flex">
            <div className="info">
              <h3 className="mt-0 mb-5 fs-15">Finish Project</h3>
              <p className="m-0 c-grey">Publish Academy Programming Project</p>
            </div>
            <i className="fa-regular fa-trash-can delete"></i>
          </div>
          <div className="task-row between-flex done">
            <div className="info">
              <h3 className="mt-0 mb-5 fs-15">Attend The Meeting</h3>
              <p className="m-0 c-grey">Attend The Project Business Analysis Meeting</p>
            </div>
            <i className="fa-regular fa-trash-can delete"></i>
          </div>
          <div className="task-row between-flex">
            <div className="info">
              <h3 className="mt-0 mb-5 fs-15">Finish Lesson</h3>
              <p className="m-0 c-grey">Finish Teaching Flex Box</p>
            </div>
            <i className="fa-regular fa-trash-can delete"></i>
          </div>
        </div>

        <div className="search-items p-20 bg-white rad-10">
          <h2 className="mt-0 mb-20">Top Search Items</h2>
          <div className="items-head d-flex space-between c-grey mb-10">
            <div>Keyword</div>
            <div>Search Count</div>
          </div>
          <div className="items d-flex space-between pt-15 pb-15">
            <span>Programming</span>
            <span className="bg-eee fs-13 btn-shape">220</span>
          </div>
          <div className="items d-flex space-between pt-15 pb-15">
            <span>JavaScript</span>
            <span className="bg-eee btn-shape fs-13">180</span>
          </div>
          <div className="items d-flex space-between pt-15 pb-15">
            <span>PHP</span>
            <span className="bg-eee btn-shape fs-13">160</span>
          </div>
          <div className="items d-flex space-between pt-15 pb-15">
            <span>Code</span>
            <span className="bg-eee btn-shape fs-13">145</span>
          </div>
          <div className="items d-flex space-between pt-15 pb-15">
            <span>Design</span>
            <span className="bg-eee btn-shape fs-13">110</span>
          </div>
          <div className="items d-flex space-between pt-15 pb-15">
            <span>Logic</span>
            <span className="bg-eee btn-shape fs-13">95</span>
          </div>
        </div>

        <div className="latest-uploads p-20 bg-white rad-10">
          <h2 className="mt-0 mb-20">Latest Uploads</h2>
          <ul className="m-0">
            <li className="between-flex pb-10 mb-10">
              <div className="d-flex align-center">
                <img className="mr-10" src={pdf} alt="" />
                <div>
                  <span className="d-block">my-file.pdf</span>
                  <span className="fs-15 c-grey">Elzero</span>
                </div>
              </div>
              <div className="bg-eee btn-shape fs-13">2.9mb</div>
            </li>
            <li className="between-flex pb-10 mb-10">
              <div className="d-flex align-center">
                <img className="mr-10" src={avi} alt="" />
                <div>
                  <span className="d-block">My-Video-File.avi</span>
                  <span className="fs-15 c-grey">Admin</span>
                </div>
              </div>
              <div className="bg-eee btn-shape fs-13">4.9mb</div>
            </li>
            <li className="between-flex pb-10 mb-10">
              <div className="d-flex align-center">
                <img className="mr-10" src={psd} alt="" />
                <div>
                  <span className="d-block">My-Psd-File.pdf</span>
                  <span className="fs-15 c-grey">Osama</span>
                </div>
              </div>
              <div className="bg-eee btn-shape fs-13">4.5mb</div>
            </li>
            <li className="between-flex pb-10 mb-10">
              <div className="d-flex align-center">
                <img className="mr-10" src={zip} alt="" />
                <div>
                  <span className="d-block">My-Zip-File.pdf</span>
                  <span className="fs-15 c-grey">User</span>
                </div>
              </div>
              <div className="bg-eee btn-shape fs-13">8.9mb</div>
            </li>
            <li className="between-flex pb-10 mb-10">
              <div className="d-flex align-center">
                <img className="mr-10" src={dll} alt="" />
                <div>
                  <span className="d-block">My-DLL-File.pdf</span>
                  <span className="fs-15 c-grey">Admin</span>
                </div>
              </div>
              <div className="bg-eee btn-shape fs-13">4.9mb</div>
            </li>
            <li className="between-flex">
              <div className="d-flex align-center">
                <img className="mr-10" src={eps} alt="" />
                <div>
                  <span className="d-block">My-Eps-File.pdf</span>
                  <span className="fs-15 c-grey">Designer</span>
                </div>
              </div>
              <div className="bg-eee btn-shape fs-13">8.9mb</div>
            </li>
          </ul>
        </div>

        <div className="last-project p-20 bg-white rad-10 p-relative">
          <h2 className="mt-0 mb-20">Last Project Progress</h2>
          <ul className="m-0 p-relative">
            <li className="mt-25 d-flex align-center done">Got The Project</li>
            <li className="mt-25 d-flex align-center done">Started The Project</li>
            <li className="mt-25 d-flex align-center done">The Project About To Finish</li>
            <li className="mt-25 d-flex align-center current">Test The Project</li>
            <li className="mt-25 d-flex align-center">Finish The Project & Get Money</li>
          </ul>
          <img className="launch-icon hide-mobile" src={project} alt="" />
        </div>

        <div className="reminders p-20 bg-white rad-10 p-relative">
          <h2 className="mt-0 mb-25">Reminders</h2>
          <ul className="m-0">
            <li className="d-flex align-center mt-15">
              <span className="key bg-blue mr-15 d-block rad-half"></span>
              <div className="pl-15 blue">
                <p className="fs-14 fw-bold mt-0 mb-5">Check My Tasks List</p>
                <span className="fs-13 c-grey">17/09/2022 - 12:00am</span>
              </div>
            </li>
            <li className="d-flex align-center mt-15">
              <span className="key bg-green mr-15 d-block rad-half"></span>
              <div className="pl-15 green">
                <p className="fs-14 fw-bold mt-0 mb-5">Check My Projects</p>
                <span className="fs-13 c-grey">25/10/2022 - 12:00am</span>
              </div>
            </li>
            <li className="d-flex align-center mt-15">
              <span className="key bg-orange mr-15 d-block rad-half"></span>
              <div className="pl-15 orange">
                <p className="fs-14 fw-bold mt-0 mb-5">Call All My Clients</p>
                <span className="fs-13 c-grey">08/11/2022 - 12:00am</span>
              </div>
            </li>
            <li className="d-flex align-center mt-15">
              <span className="key bg-red mr-15 d-block rad-half"></span>
              <div className="pl-15 red">
                <p className="fs-14 fw-bold mt-0 mb-5">Finish The Development Workshop</p>
                <span className="fs-13 c-grey">22/12/2022 - 12:00am</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="latest-post p-20 bg-white rad-10 p-relative">
          <h2 className="mt-0 mb-25">Latest Post</h2>
          <div className="top d-flex align-center">
            <img className="avatar mr-15" src={avatar} alt="" />
            <div className="info">
              <span className="d-block mb-5 fw-bold">Mahmoud Ahmed</span>
              <span className="c-grey">About 2 Hours Ago</span>
            </div>
          </div>
          <div className="post-content txt-c-mobile pt-20 pb-20 mt-20 mb-20">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum omnis commodi quis? Enim fugit voluptatum maxime. Quis, adipisci, consequuntur omnis numquam ipsa autem fugiat accusamus debitis id facilis
          </div>
          <div className="post-stats between-flex c-grey">
            <div>
              <i className="fa-regular fa-heart mr-10"></i>
              <span>1.8K</span>
            </div>
            <div>
              <i className="fa-regular fa-comments mr-10"></i>
              <span>500</span>
            </div>
          </div>
        </div>

        <div className="social-media p-20 bg-white rad-10 p-relative">
          <h2 className="mt-0 mb-25">Social Media Stats</h2>
          <div className="box twitter p-15 p-relative mb-10 between-flex">
            <i className="fa-brands fa-twitter fa-2x c-white h-full d-flex center-flex"></i>
            <span>90K Followers</span>
            <a className="fs-13 c-white btn-shape" href="#">Follow</a>
          </div>
          <div className="box facebook p-15 p-relative mb-10 between-flex">
            <i className="fa-brands fa-facebook-f fa-2x c-white h-full d-flex center-flex"></i>
            <span>2M Like</span>
            <a className="fs-13 c-white btn-shape" href="#">Like</a>
          </div>
          <div className="box youtube p-15 p-relative mb-10 between-flex">
            <i className="fa-brands fa-youtube fa-2x c-white h-full d-flex center-flex"></i>
            <span>1M Subs</span>
            <a className="fs-13 c-white btn-shape" href="#">Subscribe</a>
          </div>
          <div className="box linkedin p-15 p-relative mb-10 between-flex">
            <i className="fa-brands fa-linkedin fa-2x c-white h-full d-flex center-flex"></i>
            <span>70K Followers</span>
            <a className="fs-13 c-white btn-shape" href="#">Follow</a>
          </div>
        </div>

      </div>
      <div className="projects p-20 bg-white rad-10 m-20">
        <h2 className="mt-0 mb-20">Projects</h2>
        <div className="responsive-table">
          <table className="fs-15 w-full">
            <thead>
              <tr>
                <td>Name</td>
                <td>Finish Date</td>
                <td>Client</td>
                <td>Price</td>
                <td>Team</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ministry Wikipedia</td>
                <td>10 May 2022</td>
                <td>Ministry</td>
                <td>$5300</td>
                <td>
                  <img src={team1} alt="" />
                  <img src={team2} alt="" />
                  <img src={team3} alt="" />
                  <img src={team5} alt="" />
                </td>
                <td>
                  <span className="label btn-shape bg-orange c-white">Pending</span>
                </td>
              </tr>
              <tr>
                <td>Mody Shop</td>
                <td>12 Oct 2021</td>
                <td>Mody Company</td>
                <td>$1800</td>
                <td>
                  <img src={team1} alt="" />
                  <img src={team2} alt="" />
                  <img src={team5} alt="" />
                </td>
                <td><span className="label btn-shape bg-blue c-white">In Progress</span></td>
              </tr>
              <tr>
                <td>Ahmed App</td>
                <td>05 Sep 2021</td>
                <td>Ahmed</td>
                <td>$800</td>
                <td>
                  <img src={team2} alt="" />
                  <img src={team3} alt="" />
                </td>
                <td><span className="label btn-shape bg-green c-white">Completed</span></td>
              </tr>
              <tr>
                <td>Mahmoud Website</td>
                <td>22 May 2021</td>
                <td>Mahmoud</td>
                <td>$600</td>
                <td>
                  <img src={team1} alt="" />
                  <img src={team2} alt="" />
                </td>
                <td><span className="label btn-shape bg-green c-white">Completed</span></td>
              </tr>
              <tr>
                <td>Sayed Website</td>
                <td>24 May 2021</td>
                <td>Sayed</td>
                <td>$300</td>
                <td>
                  <img src={team1} alt="" />
                  <img src={team3} alt="" />
                </td>
                <td><span className="label btn-shape bg-red c-white">Rejected</span></td>
              </tr>
              <tr>
                <td>Arena Application</td>
                <td>01 Mar 2021</td>
                <td>Arena Company</td>
                <td>$2600</td>
                <td>
                  <img src={team1} alt="" />
                  <img src={team2} alt="" />
                  <img src={team3} alt="" />
                  <img src={team4} alt="" />
                </td>
                <td><span className="label btn-shape bg-green c-white">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}