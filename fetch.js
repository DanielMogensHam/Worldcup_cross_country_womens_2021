
    // Etappe 1 Overall
        fetch("./assets/etappe1.json")
        .then(function(response){
            return response.json();
        })
        .then(function(athletes){
            let placeholder = document.querySelector("#data-output1");
            let out = "";
                for(let athlete of athletes){
                    out += `
                        <tr>
                            <td>${athlete.rank}</td>
                            <td>${athlete.duration}</td>
                            <td>${athlete.person.name}</td>
                            <td>${athlete.person.country}</td>
                        </tr>
                    `;
                }
                placeholder.innerHTML = out;
            });
        
    // Etappe 2 Overall
    fetch("./assets/etappe2.json")
        .then(function(response){
            return response.json();
        })
        .then(function(athletes){
            let placeholder = document.querySelector("#data-output2");
            let out = "";
                for(let athlete of athletes){
                    out += `
                        <tr>
                            <td>${athlete.rank}</td>
                            <td>${athlete.duration}</td>
                            <td>${athlete.person.name}</td>
                            <td>${athlete.person.country}</td>
                        </tr>
                    `;
                }
                placeholder.innerHTML = out;
            });
       
    // Etappe 3 Overall        
    fetch("./assets/etappe3.json")
        .then(function(response){
            return response.json();
        })
        .then(function(athletes){
            let placeholder = document.querySelector("#data-output3");
            let out = "";
                for(let athlete of athletes){
                    out += `
                        <tr>
                            <td>${athlete.rank}</td>
                            <td>${athlete.duration}</td>
                            <td>${athlete.person.name}</td>
                            <td>${athlete.person.country}</td>
                        </tr>
                    `;
                }
                placeholder.innerHTML = out;
            });

    // Etappe 4 Overall        
    fetch("./assets/etappe4.json")
        .then(function(response){
            return response.json();
        })
        .then(function(athletes){
            let placeholder = document.querySelector("#data-output4");
            let out = "";
                for(let athlete of athletes){
                    out += `
                        <tr>
                            <td>${athlete.rank}</td>
                            <td>${athlete.duration}</td>
                            <td>${athlete.person.name}</td>
                            <td>${athlete.person.country}</td>
                        </tr>
                    `;
                }
                placeholder.innerHTML = out;
            });

    // Etappe 5 Overall        
    fetch("./assets/etappe5.json")
        .then(function(response){
            return response.json();
        })
        .then(function(athletes){
            let placeholder = document.querySelector("#data-output5");
            let out = "";
                for(let athlete of athletes){
                    out += `
                        <tr>
                            <td>${athlete.rank}</td>
                            <td>${athlete.duration}</td>
                            <td>${athlete.person.name}</td>
                            <td>${athlete.person.country}</td>
                        </tr>
                    `;
                }
                placeholder.innerHTML = out;
            });
    // Etappe 6 Overall        
    fetch("./assets/etappe6.json")
        .then(function(response){
            return response.json();
        })
        .then(function(athletes){
            let placeholder = document.querySelector("#data-output6");
            let out = "";
                for(let athlete of athletes){
                    out += `
                        <tr>
                            <td>${athlete.rank}</td>
                            <td>${athlete.duration}</td>
                            <td>${athlete.person.name}</td>
                            <td>${athlete.person.country}</td>
                        </tr>
                    `;
                }
                placeholder.innerHTML = out;
            });

        /// Norske deltageres plassering i denne etappe ///
        // Etappe 1 Nordmenn  
        fetch("./assets/etappe1.json")
                .then(function(response){
                    return response.json();
                })
                .then(function(athletes){
                    let placeholder = document.querySelector("#norske-deltagere1");
                    let out = "";

                        for(let athlete of athletes){
                            if (athlete.person.country === "Norway") {
                            out += `
                                <tr>
                                    <td>${athlete.rank}</td>
                                    <td>${athlete.duration}</td>
                                    <td>${athlete.person.name}</td>
                                </tr>
                            `;
                        }
                    }
                    placeholder.innerHTML = out;
                });

        // Etappe 2 Nordmenn  
        fetch("./assets/etappe2.json")
                .then(function(response){
                    return response.json();
                })
                .then(function(athletes){
                    let placeholder = document.querySelector("#norske-deltagere2");
                    let out = "";

                        for(let athlete of athletes){
                            if (athlete.person.country === "Norway") {
                            out += `
                                <tr>
                                    <td>${athlete.rank}</td>
                                    <td>${athlete.duration}</td>
                                    <td>${athlete.person.name}</td>
                                </tr>
                            `;
                        }
                    }
                    placeholder.innerHTML = out;
                });

        // Etappe 3 Nordmenn  
        fetch("./assets/etappe3.json")
                .then(function(response){
                    return response.json();
                })
                .then(function(athletes){
                    let placeholder = document.querySelector("#norske-deltagere3");
                    let out = "";

                        for(let athlete of athletes){
                            if (athlete.person.country === "Norway") {
                            out += `
                                <tr>
                                    <td>${athlete.rank}</td>
                                    <td>${athlete.duration}</td>
                                    <td>${athlete.person.name}</td>
                                </tr>
                            `;
                        }
                    }
                    placeholder.innerHTML = out;
                });

        // Etappe 4 Nordmenn  
        fetch("./assets/etappe4.json")
                .then(function(response){
                    return response.json();
                })
                .then(function(athletes){
                    let placeholder = document.querySelector("#norske-deltagere4");
                    let out = "";

                        for(let athlete of athletes){
                            if (athlete.person.country === "Norway") {
                            out += `
                                <tr>
                                    <td>${athlete.rank}</td>
                                    <td>${athlete.duration}</td>
                                    <td>${athlete.person.name}</td>
                                </tr>
                            `;
                        }
                    }
                    placeholder.innerHTML = out;
                });

        // Etappe 5 Nordmenn  
        fetch("./assets/etappe5.json")
                .then(function(response){
                    return response.json();
                })
                .then(function(athletes){
                    let placeholder = document.querySelector("#norske-deltagere5");
                    let out = "";

                        for(let athlete of athletes){
                            if (athlete.person.country === "Norway") {
                            out += `
                                <tr>
                                    <td>${athlete.rank}</td>
                                    <td>${athlete.duration}</td>
                                    <td>${athlete.person.name}</td>
                                </tr>
                            `;
                        }
                    }
                    placeholder.innerHTML = out;
                });

        // Etappe 6 Nordmenn  
        fetch("./assets/etappe6.json")
                .then(function(response){
                    return response.json();
                })
                .then(function(athletes){
                    let placeholder = document.querySelector("#norske-deltagere6");
                    let out = "";

                        for(let athlete of athletes){
                            if (athlete.person.country === "Norway") {
                            out += `
                                <tr>
                                    <td>${athlete.rank}</td>
                                    <td>${athlete.duration}</td>
                                    <td>${athlete.person.name}</td>
                                </tr>
                            `;
                        }
                    }
                    placeholder.innerHTML = out;
                });
 