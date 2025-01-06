:root {
    --background-dark: #0a0a23;
    --text-light: #dfdfe2;
    --accent-blue: #99c9ff;
    --button-orange: #feac32;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: var(--background-dark);
    color: var(--text-light);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

main {
    text-align: center;
    padding: 20px;
}

.logo {
    width: 150px;
    margin-bottom: 20px;
}

h1 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.input-section {
    margin: 20px 0;
}

label {
    display: block;
    margin-bottom: 10px;
    font-size: 1rem;
}

.input-field {
    width: 200px;
    padding: 8px;
    font-size: 1rem;
    margin-bottom: 10px;
}

.action-btn {
    background: linear-gradient(#fecc4c, var(--button-orange));
    border: none;
    color: var(--background-dark);
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
}

.price-display {
    margin-top: 20px;
    padding: 10px;
    border: 2px solid var(--accent-blue);
    background: black;
    color: white;
    width: 200px;
    font-size: 1.2rem;
    display: inline-block;
}

.cash-drawer {
    margin-top: 20px;
    background: var(--accent-blue);
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#cash-drawer-display {
    background: white;
    width: 80%;
    height: 80%;
    color: black;
    padding: 10px;
    text-align: center;
}
