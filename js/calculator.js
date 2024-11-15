
// Function to insert symbols into the function input field
function insertSymbol(symbol) {
  let input = document.getElementById('limitInput');
  input.value += symbol;
}

// Function to clear the inputs
function clearInput() {
  document.getElementById('limitInput').value = '';
  document.getElementById('approachesInput').value = '';
  document.getElementById('limitResult').innerHTML = '';
  Plotly.purge('graph'); // Clear the graph
}

// Function to calculate the limit
function calculateLimit() {
  let func = document.getElementById('limitInput').value;
  let xApproaches = document.getElementById('approachesInput').value;

  try {
    // Define the expression and substitute x -> xApproaches
    let limitExpression = func.replace(/x/g, `(${xApproaches})`);
    let limitResult = math.evaluate(limitExpression);
    
    document.getElementById('limitResult').innerHTML = `Limit as x → ${xApproaches}: ${limitResult}`;
    plotFunction(func, xApproaches); // Plot the graph of the function
  } catch (e) {
    alert("Error: Invalid input, please check your function syntax");
  }
}

// Function to plot the graph
function plotFunction(func, xApproaches) {
  let xValues = [];
  let yValues = [];

  // Define the range for x values, avoiding the value xApproaches
  for (let x = -10; x <= 10; x += 0.1) {
    xValues.push(x);
    let expression = func.replace(/x/g, `(${x})`);
    try {
      let y = math.evaluate(expression);
      yValues.push(y);
    } catch {
      yValues.push(null); // Handle potential math errors
    }
  }

  // Plot the function graph
  let trace = {
    x: xValues,
    y: yValues,
    type: 'scatter'
  };

  let layout = {
    title: `Graph of the Function f(x) with x → ${xApproaches}`,
    xaxis: {
      title: 'x',
      zeroline: true
    },
    yaxis: {
      title: 'f(x)',
      zeroline: true
    }
  };

  Plotly.newPlot('graph', [trace], layout);
}
