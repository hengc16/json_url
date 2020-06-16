const btn = document.querySelector('button');
//ajax to handle the request 
const getDegrees = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', "https://raw.githubusercontent.com/hengc16/json_url/master/degree.json", true);
  xhr.onreadystatechange = () => {
    //if we successfully get the json object 
    if ((xhr.readyState === XMLHttpRequest.DONE ) && (xhr.status === 200)) {
        const response = JSON.parse(xhr.responseText);
        const toInsert = buildDegrees(response);
        btn.insertAdjacentHTML('beforebegin', toInsert);
        btn.style.display = 'none';
    }
  };
  xhr.send();
};
//add even listener to button
btn.addEventListener('click', getDegrees);
//process the data from the json url
const buildDegrees = ({degrees}) => {
    let degreesOutput = '';
    //use multi-line string to form the degree infor
    for(a of degrees){
        degreesOutput += `
        <div id = 'degree'>
        <p>School: ${a.degree.School}</p>
        <p>Program: ${a.degree.Program}</p>
        <p>Type: ${a.degree.Type}</p>
        <p>Year: ${a.degree.Year}</p>
        </div>
        `;
    }
    return degreesOutput;
};


