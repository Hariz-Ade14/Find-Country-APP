
const BTN = document.querySelector(".btn");
const Country = document.querySelector(".country");
const Flag= document.querySelector(".flag");
const countryName = document.querySelector(".NAME");
const countryContinent = document.querySelector(".CONTINENT");
const countryRegion = document.querySelector(".REGION");
const countryCurrency = document.querySelector(".CURRENCY");
// const COA = document.querySelector(".COA");
const countryCapital = document.querySelector(".CAPITAL");
const countryLang = document.querySelector(".LANG");

const Input = document.querySelector(".INPUT");

BTN.addEventListener("click" , () => {
      
        const apiCALL = (country) => {
                // API/ AJAX call Using Public API 
                const request = new XMLHttpRequest();
                request.open("GET",`https://restcountries.com/v3.1/name/${country}`);
                request.send();
                request.addEventListener("load" , () => {
                    const data = JSON.parse(request.responseText);
                    const DATA = data[0]
                    console.log(data);
                
                    Country.classList.remove("hidden");
                    Flag.src = `${DATA.flags.png}`
                    countryName.innerHTML = `${DATA.name.official}`;
                    countryContinent.innerHTML = `${DATA.region}`;
                    countryRegion.innerHTML = `${DATA.subregion}`;
                    countryCapital.innerHTML = `${DATA.capital[0]}`;


                    var lang = DATA.languages;
                    var langVal = Object.values(lang)[0];
                    countryLang.innerHTML = `${langVal}`;

                    let val = DATA.currencies;
                    let VAL = Object.values(val)[0].name;
                    
                    countryCurrency.innerHTML = `${VAL}`;
                    
                    let COUNTRY = [countryName,countryContinent,countryRegion,countryCurrency,countryCapital];

                    COUNTRY[0].style.color = "skyblue";
                    COUNTRY[1].style.color = "";
                    COUNTRY[2].style.color = "purple";
                    COUNTRY[3].style.color = "yellow";
                    COUNTRY[4].style.color = "white";

                    COUNTRY[0].style.fontSize = "30px";
                    COUNTRY[1].style.fontSize = "20px";
                    COUNTRY[2].style.fontSize = "20px";
                    COUNTRY[3].style.fontSize = "20px";
                    COUNTRY[4].style.fontSize = "20px";

                    if(countryName.style.fontSize > "20px" && countryName.innerHTML.length > 20){
                        countryName.style.fontSize = "15px";
                    }
                });
            
                // window.addEventListener("load",apiCALL);
            }

        apiCALL(Input.value);

});
