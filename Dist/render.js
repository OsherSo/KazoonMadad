const calculator = new Calculator();

const render = function (arr) {
  $(".data2").empty();
  $(".data2").append(`
    <div class="render">
    
    <div class="card">
        <div class="label">Fulltime Result</div>
        <div class="information">
          <div>1 - ${(calculator.homeWin(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
          <div>X - ${(calculator.draw(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
          <div>2 - ${(calculator.awayWin(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>

          <div> <span class="result"></span> </div>
          <div class="label">Home Handicap</div>
          <div>X:(+1) - ${(calculator.homeInOneGoal(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
          <div>X:(+2) - ${(calculator.homeInTwoGoal(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
          <div>1:(+1) - ${(calculator.homeInTwoGoalOrMore(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
          <div>1:(+2) - ${(calculator.homeInThreeGoalOrMore(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>

          <div> <span class="result"></span> </div>
          <div class="label">Away Handicap</div>
          <div>(+1):X - ${(calculator.awayInOneGoal(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
          <div>(+2):X - ${(calculator.awayInTwoGoal(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
          <div>(+1):2 - ${(calculator.awayInTwoGoalOrMore(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
          <div>(+2):2 - ${(calculator.awayInThreeGoalOrMore(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
         </div>
    </div>

    <div class="card">
      <div class="label">Over Goals</div>
      <div class="information">
        <div>Over 0.5 - ${(100 - calculator.under05Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
        <div>Over 1.5 - ${(100 - calculator.under15Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
        <div>Over 2.5 - ${(100 - calculator.under25Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
        <div>Over 3.5 - ${(100 - calculator.under35Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
        <div>Over 4.5 - ${(100 - calculator.under45Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
        <div>Over 5.5 - ${(100 - calculator.under55Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
      </div>
      <div class="label">Under Goals</div>
            <div class="information">
                <div>Under 0.5 - ${(calculator.under05Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>Under 1.5 - ${(calculator.under15Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>Under 2.5 - ${(calculator.under25Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>Under 3.5 - ${(calculator.under35Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>Under 4.5 - ${(calculator.under45Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>Under 5.5 - ${(calculator.under55Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
            </div>
    </div>
        
    </div>
    `);
};
