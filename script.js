function tellFortune(jobTitle, geolocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geolocation + ' and married to ' +
    partner + ' with ' + numKids + ' kids.';
    console.log(future);
  }
  
  tellFortune('engineer', 'United Kingdom', 'Sam', 4);
  tellFortune('doctor', 'China', 'Martin', 1);
  tellFortune('Musican', 'Italy', 'Mike', 2);
  