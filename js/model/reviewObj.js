
function reviewObj ()
{
	//Attributes declaration
	this.id;
	this.rate;
	this.opinion;
	this.email;


	//Methods declaration
	this.construct = function (id,rate,opinion,email)
	{
		this.setId(id);
		this.setRate(rate);
		this.setOpinion(opinion);
		this.setEmail(email);

	}

	this.setId = function (id){this.id=id;}
	this.setRate = function (rate){this.rate=rate;}
	this.setOpinion = function (opinion){this.opinion=opinion;}
	this.setEmail = function (email){this.email=email;}


	this.getId = function () {return this.id;}
	this.getRate = function () {return this.rate;}
	this.getOpinion = function () {return this.opinion;}
	this.getEmail = function () {return this.email;}



	this.arrayToString = function (arrayReviewObj)
	{
		var reviewString ="";
		$.each(arrayReviewObj, function (index, review){
			reviewString+="stock number "+(index+1)+":"+review.toString()+"\n";
		});
		return reviewString;

	}

	this.toString = function ()
	{
		var reviewString ="REVIEW - ID="+this.getId()+" RATE="+this.getRate()+" OPINION="+this.getOpinion();
		reviewString +=" EMAIL="+this.getEmail();
		return reviewString;
	}
}
