function signInObj () {

  //Attributes declaration
  this.username;
  this.name;
  this.surname;
  this.email;
  this.birthday;
  this.gender;
  this.phone;
  this.state;
  this.city;
  this.privacyPolicy;

  //Methods declaration
  this.construct = function (username, name, surname, email, birthday, gender, phone, state, city, privacyPolicy) {
    this.setUsername(username);
    this.setName(name);
    this.setSurname(surname);
    this.setEmail(email);
    this.setBirthday(birthday);
    this.setGender(gender);
    this.setPhone(phone);
    this.setState(state);
    this.setCity (city);
    this.setPrivacyPolicy(privacyPolicy);
	}

  //Getters
  this.getUsername = function () {return this.username;}
  this.getName = function () {return this.name;}
  this.getSurname = function () {return this.surname;}
  this.getEmail = function () {return this.email;}
  this.getBirthday = function () {return this.birthday;}
  this.getGender = function () {return this.gender;}
  this.getPhone = function () {return this.phone;}
  this.getState = function () {return this.state;}
  this.getCity = function () {return this.city;}
  this.getPrivacyPolicy = function () {return this.privacyPolicy;}

  //Setters
  this.setUsername = function (username){this.username=username;}
  this.setName = function (name){this.name=name;}
  this.setSurname = function (surname){this.surname=surname;}
  this.setEmail = function (email){this.email=email;}
  this.setBirthday = function (birthday){this.birthday=birthday;}
  this.setGender = function (gender){this.gender=gender;}
  this.setPhone = function (phone){this.phone=phone;}
  this.setState = function (state){this.state=state;}
  this.setCity = function (city){this.city=city;}
  this.setPrivacyPolicy = function (privacyPolicy){this.privacyPolicy=privacyPolicy;}

}
