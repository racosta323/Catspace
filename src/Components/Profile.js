function Profile() {
    return (
        <div id='profile-section'>
            <img id='profile-banner' src='/banner_placeholder.jpg'/>
            <img id='profile-pic' src='/profile_page_placeholder.png' width={200}/>
            <div id='name-and-loc'>
                <h3 id='profile-name'>Name</h3>
                <h4 id='profile-location'>Location</h4>
            </div>
            <hr></hr>
            <div id='photos-section'>
                <button id='photos-button'>Photos</button>
            </div>
            <div id='about-section'>
                <h3 id='about-title'>About</h3>
                <h4 id='about-lives'><b>Lives in: </b>value</h4>
                <h4 id='about-from'><b>From: </b>value</h4>
                <h4 id='about-nicknames'><b>Nickname(s): </b>value</h4>
                <h4 id='about-pronunciation'><b>Pronounces Name: </b>value</h4>
            </div>
            <div id='comments-section'>
                <h3 id='comments-title'>Comments</h3>
                {/* will put map of comments here */}
            </div>
        </div>
    )
}

export default Profile;