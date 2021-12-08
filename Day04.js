//1.How to compare two JSON have the same properties without order?
    •	var obj1 = {"name" : "Sam" , "class ": "MCA"};
    var obj2 = {"class" : "MCA" , "name" : "Sam"};

    var flag=true;
    if(Object.keys(obj1).length==Object.keys(obj2).length){
        for(key in obj1) { 
            if(obj1[key] == obj2[key]) {
                continue;
            }
            else {
                flag=false;
                break;
            }
        }
    }
    else {
        flag=false;
    }
    console.log("is object equal "+ flag);

    Output:
    is object equal false
//2.Use the rest countries API URL -> https://restcountries.eu/rest/v2/all and display all the country flags in console

    •	let countriesInfo = [{
        name : "india",
        population : "139 cr",
        capital : "new delhi",
        flag : "https://en.wikipedia.org/wiki/India#/media/File:Flag_of_India.svg"
    }
    ,
    {
        name : "china",
        population : "140 cr",
        capital : "beijing",
        flag : "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
    },
    {
        name : "United States",
        population : "32.95 cr",
        capital : "Washington, D.C",
        flag : "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
    },
    {
        name : "Canada",
        population : "3.8 cr",
        capital : "ottawa",
    flag:"https://en.wikipedia.org/wiki/Canada#/media/File:Flag_of_Canada_(Pantone).svg"
    },
    {

        name : "Russia",
        population : "14.41 cr",
        capital : "moscow",
        flag : "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg"
    }];
    for(i = 0; i < countriesInfo.length ; i++){
        console.log(i,countriesInfo[i].flag)
    }

//3.	Use the same rest countries and print all countries name, region, sub region and population
    •	let countriesInfo = [{
        name : "india",
        region:"asia",
        subregion:"south asia",
        population : "139 cr",
        capital : "new delhi",
        flag : "https://en.wikipedia.org/wiki/India#/media/File:Flag_of_India.svg"
    }
    ,
    {
        name : "china",
        region:"eastern, central and western",
        subregion: "Inner Mongolia, Guangxi, Chongqing, Sichuan, Guizhou, Yunnan, Tibet, Shaanxi, Gansu, Qinghai, Ningxia, and Xinjiang",
        population : "140 cr",
        capital: "Beijing",
        flag : "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
    }
    ,
    {
        name : "United States",
        region:"North America",
        subregion:"Northeast, the Midwest, the South, and the West",
        population : "32.95 cr",
        capital : "Washington, D.C",
        flag : "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
    }
    ,
    {
        name : "Canada",
        region:"The Atlantic Provinces",
        subregion:"Central Canada,The Prairie Provinces,The West Coast,The Northern Territories",
        population : "3.8 cr",
        capital : "ottawa",
        flag : "https://en.wikipedia.org/wiki/Canada#/media/File:Flag_of_Canada_(Pantone).svg"
    }
    ,
    {
        name : "Russia",
        region:"Kola-Karelian",
        subregion:"Ural Mountains,Russian Plain,West Siberian Plain",
        population : "14.41 cr",
        capital : "moscow",
        flag : "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg"       }];
    for(i=0;i<countriesInfo.length;i++){
        console.log(i,countriesInfo[i].name,countriesInfo[i].region,countriesInfo[i].subregion,countriesInfo[i].population)
    }
