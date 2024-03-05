function startGame() {
    // Get player names, selected icon, matrix size, and number of players
    const form = document.getElementById('form');
    const player1Name = document.getElementById('player1').value;
    //const selectedIcon = document.getElementById('icon').value;
    const matrixSize = document.getElementById('matrix-size').value;
    
   const difficulty = document.getElementById('difficulty').value;

    // Perform game setup and start the game
    console.log('Starting Tic Tac Toe game...');
    console.log('Player 1 Name:', player1Name);
   // console.log('Selected Icon:', selectedIcon);
    console.log('Matrix Size:', matrixSize);
   
  console.log('Difficulty:', difficulty);

    // Store matrix size in localStorage
  
    if (!player1Name) {
        alert('Please enter Player 1 name.');
        return; // Exit the function if player1Name is empty
    }

  // Store values in localStorage
  localStorage.setItem('player1Name', player1Name);
 // localStorage.setItem('selectedIcon', selectedIcon);
  localStorage.setItem('matrixSize', matrixSize);

 localStorage.setItem('difficulty', difficulty);

  // Redirect to 'a2.html'
  window.location.href = 'a2.html';

  // Prevent form submission
  form.preventDefault();




}
