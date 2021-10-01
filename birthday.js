var day_born;

//days of the week using array function
function createDays(d) {
    this.length = d;
    for (var i = 1; i <= d; i++) {
        this[i] = 0;
    }
}
//use array function to create 7days and give them names
day_born = new createDays(7);
day_born[0] = 'Saturday';
day_born[1] = 'Sunday';
day_born[2] = 'Monday';
day_born[3] = 'Tuesday';
day_born[4] = 'Wednesday';
day_born[5] = 'Thursday';
day_born[6] = 'Friday';

//Function to calculate day of birth from Birthday date
function birthday(form) {
    var dd = parseInt(form.day.value, 10);
    var mm = parseInt(form.month.value, 10);
    var yy = parseInt(form.year.value, 10);
    var mmInteger = parseInt(form.month.value, 10);
    //Checking gender selected in input form using jQuery
    var gender = $("input[name='gender']:checked").val();

    //This if is checking if all values are filled to run the computation, else it will throw an error
    if (dd && mm && yy && gender) {
        if (mm == 1) {
            mmInteger = 13;
            yy = yy - 1;
        }
        if (mm == 2) {
            mmInteger = 14;
            yy = yy - 1;
        }

        var birthday1 = parseInt(((mmInteger + 1) * 3) / 5, 10);
        var birthday2 = parseInt(yy / 4, 10);
        var birthday3 = parseInt(yy / 100, 10);
        var birthday4 = parseInt(yy / 400, 10);
        var birthday5 =
            dd +
            mmInteger * 2 +
            birthday1 +
            yy +
            birthday2 -
            birthday3 +
            birthday4 +
            2;
        var birthday6 = parseInt(birthday5 / 7, 10);
        var day = birthday5 - birthday6 * 7;

        //The Actual Logic
        if (dd <= 0 || dd > 31) {
            alert('Error, Date can only range from 1-31!');
            document.getElementById('myForm').reset();
        } else if (mm <= 0 || mm > 12) {
            alert('Error, Month can only range from 1-12!');
            document.getElementById('myForm').reset();
        }

        //Year Should not be less than zero
        else if (yy < 0) {
            alert('Error, Year can only be a positive integer or 0!');
            document.getElementById('myForm').reset();
        }

        //If Month is february and it is not a leap year
        else if (mm === 2) {
            //If month is February and it is not a leap year
            //adding yy+1 because at the top, if mm==2, yy was set to yy-1
            if ((yy + 1) % 4 != 0) {
                if (dd > 28) {
                    alert(
                        'Error, February ' +
                            (yy + 1).toString() +
                            ' only has 28 Days!'
                    );
                    document.getElementById('myForm').reset();
                }
                //If month is February and it is a leap year
                //adding yy+1 because at the top, if mm==2, yy was set to yy-1
            } else if ((yy + 1) % 4 === 0 && dd > 29) {
                alert(
                    'Error, February ' +
                        (yy + 1).toString() +
                        ' only has 29 Days!'
                );
                document.getElementById('myForm').reset();
            }
        }

        //If it is Apr/Jun/Sept/Nov, the date should be 1-30
        else if (mm === 4 || mm === 6 || mm === 9 || mm === 11) {
            if (dd > 30) {
                alert('SORRY, Invalid Date!');
                document.getElementById('myForm').reset();
            }
        }

        document.getElementById('result').innerHTML =
            'Born On ' + day_born[day];

        //Checking both day and gender and giving an Akan Name
        if (gender === 'male' && day_born[day] === 'Monday') {
            form.result2.value = 'Kwadwo';
        } else if (gender === 'female' && day_born[day] === 'Monday') {
            form.result2.value = 'Adwoa';
        } else if (gender === 'male' && day_born[day] === 'Tuesday') {
            form.result2.value = 'Kwabena';
        } else if (gender === 'female' && day_born[day] === 'Tuesday') {
            form.result2.value = 'Abenaa';
        } else if (gender === 'male' && day_born[day] === 'Wednesday') {
            form.result2.value = 'Kwaku';
        } else if (gender === 'female' && day_born[day] === 'Wednesday') {
            form.result2.value = 'Akua';
        } else if (gender === 'male' && day_born[day] === 'Thursday') {
            form.result2.value = 'Yaw';
        } else if (gender === 'female' && day_born[day] === 'Thursday') {
            form.result2.value = 'Yaa';
        } else if (gender === 'male' && day_born[day] === 'Friday') {
            form.result2.value = 'Kofi';
        } else if (gender === 'female' && day_born[day] === 'Friday') {
            form.result2.value = 'Afua';
        } else if (gender === 'male' && day_born[day] === 'Saturday') {
            form.result2.value = 'Kwame';
        } else if (gender === 'female' && day_born[day] === 'Saturday') {
            form.result2.value = 'Ama';
        } else if (gender === 'male' && day_born[day] === 'Sunday') {
            form.result2.value = 'Kwasi';
        } else if (gender === 'female' && day_born[day] === 'Sunday') {
            form.result2.value = 'Akosua';
        }
    } else {
        alert('Error, Some fields are Empty!!');
        document.getElementById('myForm').reset();
    }
}
