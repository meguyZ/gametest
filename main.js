fetch("https://gamertocoder.garena.co.th/api/minigames")
    .then(res =>{
      return res.json();
    })
    .then(data => {
      data.forEach(user => {
        console.log(data)
        const icon = `<img src="${user.icon}" alt="">`;
        const name = ` <li> ${user.name}</li>`;
        const description = ` <p> ${user.no} ${user.description}</p>`;
        const genre  =  ` <b> ${user.no} ${user.genre}<br> </b>`;
        const imgs = `<img src="${user.images}" alt="">`;
    
      });

    })
