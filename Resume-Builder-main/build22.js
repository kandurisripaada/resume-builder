function generateResumeButton() {
    // Get values from the form
    const name = document.getElementById('namefield').value;
    const role = document.getElementById('desired-role').value;
    const age = document.getElementById('agefeild').value;
    const contact = document.getElementById('contactfield').value;
    const email = document.getElementById('emailfield').value;
    const github = document.getElementById('githubfield').value;
    const linkedin = document.getElementById('linkedinfield').value;
    const website = document.getElementById('websitefield').value;
    const objt = document.getElementById('objective').value;
    const languagesInput = document.getElementById('language').value;
    const toolsInput = document.getElementById('tool').value;
    const softwareInput = document.getElementById('softwares').value;


  
    //=====================Hobbies======================================
    let hobbiesInput = document.getElementsByClassName('hobbyInput');
    let hobbiesList = document.getElementById('Ht'); // Update to match the correct ID
    
    let hobbiesStr = "";
    for (let i = 0; i < hobbiesInput.length; i++) {
        hobbiesStr += `<li><p>${hobbiesInput[i].value}</p></li>`;
    }
    
    hobbiesList.innerHTML = hobbiesStr;
    // ======= Hobbies end ===================================================

    // =======work Experience=================================================
let roles = document.getElementsByClassName('roleInput');
let companies = document.getElementsByClassName('companyInput');
let durations = document.getElementsByClassName('durationInput');

let str = "";
for (let i = 0; i < roles.length; i++) {
  str += `<li>
            <p><strong>${i + 1}. ${roles[i].value}</strong></p>
          </li>
          <li>
           <p>${companies[i].value}</p>
          </li>
          <li>
            <p>${durations[i].value}</p>
          </li>`;
          
}

document.getElementById('weT').innerHTML = str;
// =======work Experience end==================================================================



// =======================Education==========
let clgs = document.getElementsByClassName('clgInput');
let degrees = document.getElementsByClassName('degInput');
let startYears = document.getElementsByClassName('startYearInput');
let endYears = document.getElementsByClassName('endYearInput');
let percentage = document.getElementsByClassName('percentInput');

let eduStr = "";
for (let i = 0; i < clgs.length; i++) {
  eduStr += `<li>
                <p><strong>${clgs[i].value}</strong></p>
              </li>
              <li>
                <p>${degrees[i].value}</p>
              </li>
              <li>
               <p>${startYears[i].value} - ${endYears[i].value}</p>
              </li>
              <li>
               <p>${percentage[i].value}</p>
              </li>`;
}

document.getElementById('edueT').innerHTML = eduStr;
// ===============================Education end==========
    

    // ==========================project Details ==============================
    let title = document.getElementsByClassName('titleInput');
    let Description = document.getElementsByClassName('projdescriptionInput');
    
    
    let prjStr = "";
    for (let i = 0; i < title.length; i++) {
      prjStr += `<li>
                    <p><strong>${i + 1}.${title[i].value}</strong></p>
                  </li>
                  <li>
                    <p>${Description[i].value}</p>
                  </li>`;
    }
    
    document.getElementById('prodet').innerHTML = prjStr;
    // ======================= project Details End ==========================

    // =============================getting values from form ends here=============================

    //========================== Update the template with the entered values ===============================
    document.getElementById('nameT').innerText = name;
    document.getElementById('roleT').innerText = role;
    document.getElementById('ageT').innerText = `Age: ${age}`;
    document.getElementById('numberT').innerText = `Contact No. : ${contact}`;
    document.getElementById('EmailT').innerText = `Email Id: ${email}`;
    document.getElementById('githubT').href = github;
    document.getElementById('linkedinT').href = linkedin;
    document.getElementById('portfolioT').href = website;
    document.getElementById('objtT').innerText = objt;
    document.getElementById('langT').innerHTML = `<strong>Programming Languages: </strong>${languagesInput}`;
    document.getElementById('toolsT').innerHTML = `<strong>Development Tools: </strong>${toolsInput}`;
    document.getElementById('softwareT').innerHTML = `<strong>Softwares: </strong>${softwareInput}`;
    document.getElementById('ExRoleT').innerText = roles;
    document.getElementById('wdT').innerText = `Work Duration: ${durations}`;
    document.getElementById('clgT').innerText = clgs;
    document.getElementById('courseT').innerText = `Degree/Course: ${degrees}`;
    document.getElementById('eduT').innerText = `Education Duration: ${startYears} - ${endYears}`;
    document.getElementById('perct').innerText = percentage;
    document.getElementById('titleT').innerText = title;
    document.getElementById('projdescpT').innerText = Description;

    // Display the generated resume section
    document.querySelector('.generated-resume').style.display = 'block';
    document.getElementById('cv-form').style.display='none';
    document.getElementById('resume-template').style.display='block';
    
    
    
}


// =================Function to update the profile picture in the template ====================
function updateProfilePicture(input) {
  const profilePicture = document.getElementById('profilePicture');
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      profilePicture.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
}
// ==============================Function to update the profile picture ends here ====================

// =============================Function to remove the template footer ====================
function toggleFooter() {
  var checkbox = document.getElementById("removeFooterCheckbox");
  var footer = document.querySelector('.resume footer');

  // Check if the checkbox is checked
  if (checkbox.checked) {
    // If checked, hide the footer
    footer.style.display = "none";
  } else {
    // If not checked, show the footer
    footer.style.display = "block";
  }
}


// Call the function when the checkbox state changes
document.getElementById("removeFooterCheckbox").addEventListener("change", toggleFooter);
// =============================Function to remove the template footer ends here ====================

// ===============================Function to download the pdf ====================================
document.getElementById("downloadButton").addEventListener("click", function () {
  // Select the element containing the resume template
  const element = document.getElementById("resume-template");

  // the screen width to adjust PDF format dynamically
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Generate the PDF from the element with custom options
  const options = {
    margin: [0, 0, 0, 0],
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "px", format: [1500, 1800], orientation: "portrait" } // Default size for larger screens
  };

  // Adjust format and orientation for smaller screens
  if (screenWidth <= 768) {
    options.jsPDF.format = [700, 900]; //  the format for smaller screens
    options.jsPDF.orientation = "portrait"; //  the orientation for smaller screens
  }

  html2pdf().set(options).from(element).toContainer().toCanvas().toPdf().save();
});

// ===============================Function to download the pdf ends here================================