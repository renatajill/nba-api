const url = "https://free-nba.p.rapidapi.com/players/237";
const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "559faf3456msh07f8cc2397f86d2p131c2bjsnf07f9ababf61",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
    },
};

fetch(url, options)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

var form1 = document.getElementById("Form");
form1.addEventListener("submit", (event) => {
    const playerName = document.getElementById("searchPlayer").value;
    const url2 = `https://free-nba.p.rapidapi.com/players?search=${playerName}&per_page=1000&page=0`;
    const options2 = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "559faf3456msh07f8cc2397f86d2p131c2bjsnf07f9ababf61",
            "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
        },
    };
    let output = "";

    console.log("options2", options2);

    fetch(url2, options2)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            let placeholder = document.querySelector("#player");
            let out = "";
            if (data.data.length > 0) {
                console.log("If");
                data.data.forEach((element) => {
                    out += `<tr>
                                <td>${element.first_name}</td>
                                <td>${element.last_name}</td>
                                <td>${element.position}</td>
                                <td>${element.team.name}</td>
                                <td>${element.team.city}</td>
                                <td>${element.team.conference}</td>
                            </tr>`;

                    placeholder.innerHTML = out;
                });
            } else {
                console.log("else");
                out = `<tr>
                <td>${data.first_name}</td>
                <td>${data.last_name}</td>
                <td>${data.position}</td>
                <td>${data.team.name}</td>
                <td>${data.team.city}</td>
                <td>${data.team.conference}</td>
                </tr>`;

                placeholder.innerHTML = out;
            }
        })
        .catch((error) => {
            console.log(error);
        });

    event.preventDefault();
});
