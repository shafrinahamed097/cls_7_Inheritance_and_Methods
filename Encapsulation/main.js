/*
  1. Gathering Data & Actions
  2. Hides Complexity
  3. Data Protection
  4. Controlled Access
  5. Enhances Maintainability

*/

// Encapsulation Using Closures

function Profile() {
    let details = "profile Details";

    return {
        update: function () {
            console.log("Profile Update Process");
        },

        photoUpload: function () {
            console.log("Photo Upload Process");
        },
        passReset: function () {
            console.log("Pass Reset Process")
        }
    }
}

const LearnerProfile = Profile();
LearnerProfile.photoUpload();