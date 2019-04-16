Class Artist ()
Poets
Painters
Writers
Actors
Singers

function Artist (type, age, gender, agency, rate){
  this .type= type,
  this .age= age,
  this .gender= gender,
  this .agency= agency,
  this .rate= rate,
    this .getName= function (){return
  this .type + ""+ this .gender;}
}