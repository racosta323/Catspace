function CatCard({ name, image }) {
    return (
        <div className = "cat-card"> 
        {/* the cat-card will be wrapped in a Link that will route the user to the corresponding profile */}
            <div className="cat-name">{name}</div>
            <div className="pic-cropper"> 
                <img className="profile-pic" src={image} alt={name + " profile pic"} />
            </div>
        </div>
    );
}

export default CatCard;