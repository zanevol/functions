const timer = (deadline) => {

	const timerDays = document.querySelector('#days'),
		timerHours = document.querySelector('#hours'),
		timerMinutes = document.querySelector('#minutes'),
		timerSeconds = document.querySelector('#seconds'),
		timerAll = document.querySelector('.container1'),
		wordsDays = document.querySelector('.words-days'),
		wordsHours = document.querySelector('.words-hours'),
		wordsMinutes = document.querySelector('.words-minutes'),
		wordsSeconds = document.querySelector('.words-seconds');

	const getTimeRemaining = () => {
		let dateStop = new Date(deadline).getTime(),
			dateNow = new Date().getTime(),
			timeRemaining = (dateStop - dateNow) / 1000,
			seconds = Math.floor(timeRemaining % 60),
			minutes = Math.floor((timeRemaining / 60) % 60),
			hours = Math.floor(timeRemaining / 60 / 60) % 24,
			days = Math.floor(timeRemaining / 60 / 60 / 24);
		return { timeRemaining, days, hours, minutes, seconds };
	}

	const updateClock = () => {
		const timer = getTimeRemaining();
		timerDays.textContent = timer.days;
		timerHours.textContent = timer.hours;
		timerMinutes.textContent = timer.minutes;
		timerSeconds.textContent = timer.seconds;

		const wordForm = (num, word) => {
			let cases = [2, 0, 1, 1, 1, 2];
			return word[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
		}

		wordsDays.textContent = wordForm(timer.days, ['День', 'Дня', 'Дней']);
		wordsHours.textContent = wordForm(timer.hours, ['Час', 'Часа', 'Часов']);
		wordsMinutes.textContent = wordForm(timer.minutes, ['Минута', 'Минуты', 'Минут']);
		wordsSeconds.textContent = wordForm(timer.seconds, ['Секунда', 'Секунды', 'Секунд']);

		if (timerDays.textContent <= 9) { timerDays.textContent = '0' + timer.days; };
		if (timerHours.textContent <= 9) { timerHours.textContent = '0' + timer.hours; };
		if (timerMinutes.textContent <= 9) { timerMinutes.textContent = '0' + timer.minutes; };
		if (timerSeconds.textContent <= 9) { timerSeconds.textContent = '0' + timer.seconds; };

		if (timer.timeRemaining < 0) {
			clearInterval(1);
			timerDays.textContent = '00';
			timerHours.textContent = '00';
			timerMinutes.textContent = '00';
			timerSeconds.textContent = '00';
			timerAll.style.color = 'tomato';
		}
	}
	updateClock();

};

export default timer;