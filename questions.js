var questions = [
    {
	question: '<img class="allofthem" src="http://res.freestockphotos.biz/pictures/17/17887-cat-close-up-pv.jpg">What animal is this?',
	options: ['Cat', 'Dog', 'Mouse'],
	answer: ['Cat'],
    },
    {
	question: '<img class="allofthem" src="https://c1.staticflickr.com/9/8423/7836495462_d3f0e507ed_b.jpg">What type of car is this?',
	options: ['Mustang', 'Corvette', 'Challenger'],
	answer: ['Corvette'],
    },
    {
	question: '<img class="allofthem" src="data:image/jpeg;base64,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">What sport is this?',
	options: ['Football', 'Hockey', 'Basketball'],
	answer: ['Football'],
    },
    {
	question: '<img class="allofthem" src="http://upload.wikimedia.org/wikipedia/commons/7/7a/Bb_blue.jpg">What color is this?',
	options: ['Red', 'Green', 'Blue'],
	answer: ['Blue'],
    },
    {
	question: '<img class="allofthem" src="http://upload.wikimedia.org/wikipedia/commons/3/3a/NCI_Visuals_Food_Hot_Dog.jpg">What food is this?',
	options: ['Pizza', 'Cheeseburger', 'Hot Dog'],
	answer: ['Hot Dog'],
    },
    {
	question: '<img class="allofthem" src="http://upload.wikimedia.org/wikipedia/commons/d/dd/Chips-Deluxe-Rainbow.jpg">What dessert is this?',
	options: ['Ice Cream', 'Cookies', 'Cake'],
	answer: ['Cookies'],
    },
    {
	question: '<img class="allofthem" src="http://upload.wikimedia.org/wikipedia/commons/2/26/DenzelWashingtonMay05.jpg">What actor is this?',
	options: ['Denzel Washington', 'Tom Cruise', 'Will Ferrell'],
	answer: ['Denzel Washington'],
    },
    {
	question: '<img class="allofthem" src="http://upload.wikimedia.org/wikipedia/commons/1/11/Toy_Story_The_Musical_2008-1.jpg">What movie is this?',
	options: ['Space Jam', 'Toy Story', 'The Goonies'],
	answer: ['Toy Story'],
    },
    {
	question: '<img class="allofthem" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQqCPyOR7BkOo424peDMTPF2R9POD9F1PL1-e73oEH56MTHXIfozw">What country does this flag belong to?',
	options: ['Canada', 'United States', 'Mexico'],
	answer: ['United States'],
    },
];

