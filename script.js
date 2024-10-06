// Form fields
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const favorite_color = document.getElementById("favorite_color");
const favHobby = document.getElementById("favHobby");
const profilePicUrl = document.getElementById("profilePicUrl");

// Profile card fields
const profilePic = document.getElementById("profilePic");
const fullName = document.getElementById("fullName");
const hobby = document.getElementById("hobby");
const profileCard = document.querySelector(".profile_card")

// Set initial background color to white so that when typing your name, the color doesn't automatically change to black

function updateProfileCard(){
    fullName.textContent = `${firstName.value} ${lastName.value}`;

    // update favorite hobby
    hobby.textContent = "Loves " + favHobby.selectedOptions[0].text;

    // update profile picture
    let file = profilePicUrl.files[0];
    if(file){
        profilePic.src = URL.createObjectURL(file);
    }

    // update background color to be the color that is selected by the user
    profileCard.style.backgroundColor = favorite_color.value;
}

// Update the values in real time using `oninput` and `onchange` (no `addEvenListener` allowed)
firstName.oninput = updateProfileCard;
lastName.oninput = updateProfileCard;
favorite_color.oninput = updateProfileCard;
favHobby.onchange = updateProfileCard;
profilePicUrl.onchange = updateProfileCard;



