const teams = {
    team1: [
        { name: "Shahriar(c)", img: "fold/ami.jpg" },
        { name: "Eiasin", img: "fold/eiasin.jpg" },
        { name: "Tamim", img: "fold/tamim.jpg" },
        { name: "Fahad", img: "fold/fahad.jpg" },
        { name: "Liakot", img: "fold/liton.jpg" },
        { name: "Mamun", img: "fold/mamun.jpg" },
        { name: "Galib", img: "fold/galib.jpg" },
        { name: "Jim", img: "fold/jim.jpg" }
    ],
    team2: [
        { name: "Siam(c)", img: "fold/siam.jpg" },
        { name: "Muttakin", img: "fold/muttakin.jpg" },
        { name: "Jahid", img: "fold/user.jpg" },
        { name: "Ariful", img: "fold/bijoy.jpg" },
        { name: "Punno", img: "fold/punno.jpg" },
        { name: "Jobayer", img: "fold/jobear.jpg" },
        { name: "Riad", img: "fold/riad.jpg" },
        { name: "Shimanto", img: "fold/user.jpg" }
    ],
    team3: [
        { name: "Milon(c)", img: "fold/milon.jpg" },
        { name: "Sanjid", img: "fold/user.jpg" },
        { name: "Rafi", img: "fold/rafi.jpg" },
        { name: "Fahim", img: "fold/fahim.jpg" },
        { name: "Saif", img: "fold/saif.jpg" },
        { name: "Tanxid", img: "fold/tanxid.jpg" },
        { name: "Shahabul", img: "fold/shahabul.jpg" },
        { name: "Siam", img: "fold/user.jpg" }
    ]
};

document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', function () {
        const teamKey = this.dataset.team;
        const players = teams[teamKey];
        const playerSection = document.getElementById('player-section');
        const playerContainer = playerSection.querySelector('.players');

        playerContainer.innerHTML = ''; // Clear previous players

        players.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('player-card');
            playerCard.innerHTML = `
                <img src="${player.img}" alt="${player.name}">
                <h4>${player.name}</h4>
            `;
            playerContainer.appendChild(playerCard);
        });

        playerSection.classList.add('active');
    });
});
