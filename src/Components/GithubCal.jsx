import React from 'react'
import GitHubCalendar from 'react-github-calendar';


const GithubCal = () => {


    return (
        <>
            <h1 className="project-heading" style={{ paddingBottom: "20px",paddingLeft: "39px" }}>
                Days I <strong className="purple">Code</strong>
            </h1>
            <div className='githubcode' style={{ display: "flex", justifyContent: "center", paddingBottom: "10px", alignItems: "center", flexDirection: "column" }}>
                <GitHubCalendar
                    username="lokeshchoudharyprogrammer"
                    blockSize={15}
                    blockMargin={5}
                    color="#c084f5"
                    fontSize={16}
                />
            </div>

        </>
    )
}

export default GithubCal