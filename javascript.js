var quotes = ['I cannot tell people how my actions made them feel, but I want to apologize if anything I did or said made them feel wronged.',
	'I am sorry my behaviour was perceived as inappropriate.',
	'We are listening.',
	'I decided to take some time to reflect and listen',
	'I said something I should not have said.',
	'I want you to know, I am listening.',
	'I did failed as an ally and for that I am deeply sorry',
	'I could have been better.',
	'I have always been an ally of women, POC and their causes.',
	'I should not take space at the moment.',
	'I dissapointed my fans and I should not have.',
	'Some people felt the things I did were not appropriate and I am sorry they felt that way.',
	'I am a feminist.',
	'I have been abusive to myself and others for years. I have a history of hurting the people I love most. I’m ashamed of that history and am sorry to those I hurt.',
	'It has always been easy for me to accept responsibility when my behavior reflects poorly on myself, but it’s much harder to accept the knowledge that I may have caused great pain to others.',
	'The severity of my behavior is not lost on me. I am certain that my actions warrant a very sincere apology.',
	'Due to my addictions, I have hurt myself and others in the past. I am sober now.',
	'This was a lapse in judgment and not only it will not happen again, but I will make sure reparations are made.',
	'This is not the example I want to set for my children. The truth is, I am ashamed.',
	'I am a father, a son, a friend, a husband. And I am sorry I dissapointed the women in my life.',
	'I will do my best to give up space and allow others to have their voices heard.',
	'Discrimination in the workspace is unacceptable. I am deeply sorry some people felt discriminated by my actions.',
	'I now realize my advances were not welcome and I am sorry for that.',
	'I now realize my behaviour was wrong and I am sorry it took so long for me to see that.',
	'I will continue to work on myself.',
	'I have reviewed my actions and I am deeply embarrased by them.',
	'I allowed the situation to get the better of me.',
	'But, I understand, this apology does not excuse my behaviour.',
	'It might be too late for apologies. However, I want all the people I hurt to know that I am truly sorry.',
	'Words cannot express how sorry I am, and how necessary it is for me to apologize.',
	'We hope, however, that time and action, and the forgiving human spirit, will not result in the wholesale condemnation of an individual who we have otherwise known to be a decent person at core.',
	'I am sorry if I hurt anybody. The actions this controversy documents are not a reflection of who I truly am.',
	'This incident has made me a better person.',
	'I will be working through this together with my loving wife.',
	'I was blinded by my power and did not allow others to take space and be heard',
	'I am sorry. I hope, in this era of radical condemnation, people can understand it was a separated incident and I am a better person now.',
	'I, like all people, have made mistakes.',
	'Humans make mistakes. I deeply regret if my mistakes hurt anyone.',
	'We wanna say, to everybody who was hurt, we are listening.',
	'We cannot change the past but we can promise you we are holding ourselves accountable so that nobody has to experience anything like this again',
	'I look back at those actions with regret and embarrasment.',
	'The thing is, I am a gay man.',
	'I came of age in a different time and this is a wake-up call.',
	'These stories at true. At the time, I told myself these actions were ok.',
	'I am deeply, deeply sorry. I have learned so much of this experience. I will explore these life lessons in my upcoming book.',
	'I have become a symbol of societal evil, but at my core I am a family man.'


]


function newQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
		document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}
