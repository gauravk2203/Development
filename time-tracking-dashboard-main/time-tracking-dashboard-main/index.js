document.addEventListener('DOMContentLoaded', () => {
    const Timefrequency = document.querySelectorAll('span');

    handleclick = (timeframe) => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                const cards = document.querySelectorAll('.card');

                if (cards.length > 0 && data.length > 0) {
                    cards.forEach((card, index) => {
                        const cardData = data[index];

                        if (cardData && cardData.timeframes && cardData.timeframes[timeframe]) {
                            const timeframeData = cardData.timeframes[timeframe];
                            card.querySelector('.cardtitle').textContent = cardData.title;
                            card.querySelector('.hours').textContent = `${timeframeData.current}hrs`;
                            card.querySelector('.records').textContent = `Last ${timeframe}: ${timeframeData.previous}hrs`;
                        }
                    });
                }
            })
            .catch(error => {
                console.error("Error fetching or processing data:", error);
            });
    };

    Timefrequency.forEach((element) => {
        element.addEventListener('click', () => {
            const action = element.getAttribute('data-action');
            handleclick(action);
        });
    });
});
