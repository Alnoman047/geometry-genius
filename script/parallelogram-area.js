function calculateParallelogramArea() {
    // const baseInput = document.getElementById('Parallelogram-base');
    // const baseText = baseInput.value;
    // const base = parseFloat(baseText);

    const base = getParallelogramBase();
}

function getParallelogramBase(){
    const baseInput = document.getElementById('Parallelogram-base');
    const baseText = baseInput.value;
     const base = parseFloat(baseText);
     return base;
}