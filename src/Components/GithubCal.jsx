import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const GithubCal = () => {


    return (
        <>
            <h1 className="project-heading" style={{ paddingBottom: "20px", paddingLeft: "39px" }}>
                Github <strong className="purple"> Activity</strong>
            </h1>
            <div class="github-stats-container">
                <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=lokeshchoudharyprogrammer" alt='' />
                <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=lokeshchoudharyprogrammer&amp;layout=compact" alt='' />
                <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=lokeshchoudharyprogrammer&amp;show_icons=true&amp;theme=radical" alt='' />
            </div>

        </>
    )
}

export default GithubCal