const teams = {
    team1: [
        { name: "Player 1", img: "player1.jpg" },
        { name: "Player 2", img: "player2.jpg" },
        { name: "Player 3", img: "player3.jpg" },
        { name: "Player 4", img: "player4.jpg" },
        { name: "Player 5", img: "player5.jpg" },
        { name: "Player 6", img: "player6.jpg" },
        { name: "Player 7", img: "player7.jpg" },
        { name: "Player 8", img: "player8.jpg" }
    ],
    team2: [
        { name: "Player A", img: "playerA.jpg" },
        { name: "Player B", img: "playerB.jpg" },
        { name: "Player C", img: "playerC.jpg" },
        { name: "Player D", img: "playerD.jpg" },
        { name: "Player E", img: "playerE.jpg" },
        { name: "Player F", img: "playerF.jpg" },
        { name: "Player G", img: "playerG.jpg" },
        { name: "Player H", img: "playerH.jpg" }
    ],
    team3: [
        { name: "Player X", img: "playerX.jpg" },
        { name: "Player Y", img: "playerY.jpg" },
        { name: "Player Z", img: "playerZ.jpg" },
        { name: "Player W", img: "playerW.jpg" },
        { name: "Player V", img: "playerV.jpg" },
        { name: "Player U", img: "playerU.jpg" },
        { name: "Player T", img: "playerT.jpg" },
        { name: "Player S", img: "playerS.jpg" }
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
