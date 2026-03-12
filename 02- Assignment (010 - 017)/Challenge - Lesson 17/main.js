var theTitle = "Elzero",
theDesc = 'Elzero Web School',
theDate = "15/10";
var theEssay = `
    <div class="card">
        <h3>Hello ${theTitle}</h3>
        <p>${theDesc}</p>
        <span>${theDate}</span>
    </div>
`;

// document.write(theEssay);
// document.write(theEssay);
// document.write(theEssay);
// document.write(theEssay);

document.write(theEssay.repeat(4));