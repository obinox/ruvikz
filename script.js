const params = new URLSearchParams(window.location.search);
const colorparam = params.get("color");
const edgeparam = params.get("edge");
const cornerparam = params.get("corner");
const toggleparam = params.get("toggle");

const colorTable = {
    R: "#E30929",
    O: "#EF7D05",
    Y: "#FFFF05",
    W: "#FFFFFF",
    G: "#07A23A",
    B: "#0354A1",
    X: "#958B87",
    L: "#D8D4D3",
    K: "#000000",
};
const canvas = document.getElementById("colorCanvas");
const ctx = canvas.getContext("2d", { alpha: true });

const colorInput = document.getElementById("color-input");
const edgeInput = document.getElementById("edge-input");
const cornerInput = document.getElementById("corner-input");

const copyBtn = document.getElementById("copy");

if (colorparam && colorparam !== "") {
    colorInput.value = colorparam.toUpperCase().replace(/[^ROYWGBXLK]/g, "");
} else {
    colorInput.value = "";
}
if (edgeparam && edgeparam !== "") {
    edgeInput.value = edgeparam.toUpperCase().replace(/[^0-9A-F]/g, "");
} else {
    edgeInput.value = "";
}
if (cornerparam && cornerparam !== "") {
    cornerInput.value = cornerparam.toUpperCase().replace(/[^0-9A-F]/g, "");
} else {
    cornerInput.value = "";
}

const gridSize = 3;
const cellSize = 75;
const wpadSize = (canvas.width - gridSize * cellSize) / 2;
const hpadSize = (canvas.width - gridSize * cellSize) / 2;

let toggle = false;
if (toggleparam && toggleparam !== "") {
    toggle = true;
}

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "rgba(255, 255, 255, 50)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const edgeCorr = [
    [wpadSize + cellSize / 2, hpadSize + cellSize / 2],
    [wpadSize + (5 * cellSize) / 2, hpadSize + cellSize / 2],
    [wpadSize + (5 * cellSize) / 2, hpadSize + (5 * cellSize) / 2],
    [wpadSize + cellSize / 2, hpadSize + (5 * cellSize) / 2],
];
const cornerCorr = [
    [wpadSize + (3 * cellSize) / 2, hpadSize + cellSize / 2],
    [wpadSize + (5 * cellSize) / 2, hpadSize + (3 * cellSize) / 2],
    [wpadSize + (3 * cellSize) / 2, hpadSize + (5 * cellSize) / 2],
    [wpadSize + cellSize / 2, hpadSize + (3 * cellSize) / 2],
];
const arrowSize = 10;

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const index = i * gridSize + j;
            ctx.beginPath();
            ctx.fillStyle = colorTable[colorInput.value.charAt(index).toUpperCase()] ?? colorTable["X"];
            ctx.roundRect(wpadSize + j * cellSize, hpadSize + i * cellSize, cellSize, cellSize, 10);
            ctx.fill();
            ctx.closePath();
        }
    }
    if (toggle) {
        for (let i = 0; i < gridSize; i++) {
            const index = i + 9;
            ctx.beginPath();
            ctx.fillStyle = colorTable[colorInput.value.charAt(index).toUpperCase()] ?? colorTable["X"];
            ctx.roundRect(wpadSize + i * cellSize, hpadSize - cellSize / 2, cellSize, cellSize / 2);
            ctx.fill();
            ctx.closePath();
        }
        for (let i = 0; i < gridSize; i++) {
            const index = i + 9 + 3;
            ctx.beginPath();
            ctx.fillStyle = colorTable[colorInput.value.charAt(index).toUpperCase()] ?? colorTable["X"];
            ctx.roundRect(wpadSize + cellSize * gridSize, hpadSize + i * cellSize, cellSize / 2, cellSize);
            ctx.fill();
            ctx.closePath();
        }
        for (let i = 0; i < gridSize; i++) {
            const index = i + 9 + 6;
            ctx.beginPath();
            ctx.fillStyle = colorTable[colorInput.value.charAt(index).toUpperCase()] ?? colorTable["X"];
            ctx.roundRect(wpadSize + (gridSize - i - 1) * cellSize, hpadSize + cellSize * gridSize, cellSize, cellSize / 2);
            ctx.fill();
            ctx.closePath();
        }
        for (let i = 0; i < gridSize; i++) {
            const index = i + 9 + 9;
            ctx.beginPath();
            ctx.fillStyle = colorTable[colorInput.value.charAt(index).toUpperCase()] ?? colorTable["X"];
            ctx.roundRect(wpadSize - cellSize / 2, hpadSize + (gridSize - i - 1) * cellSize, cellSize / 2, cellSize);
            ctx.fill();
            ctx.closePath();
        }
    }
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            ctx.strokeRect(wpadSize + j * cellSize, hpadSize + i * cellSize, cellSize, cellSize);
        }
    }
    if (toggle) {
        for (let i = 0; i < gridSize; i++) {
            ctx.strokeRect(wpadSize - cellSize / 2, hpadSize + i * cellSize, cellSize / 2, cellSize);
            ctx.strokeRect(wpadSize + cellSize * gridSize, hpadSize + i * cellSize, cellSize / 2, cellSize);
            ctx.strokeRect(wpadSize + i * cellSize, hpadSize - cellSize / 2, cellSize, cellSize / 2);
            ctx.strokeRect(wpadSize + i * cellSize, hpadSize + cellSize * gridSize, cellSize, cellSize / 2);
        }
    }
    ctx.closePath();

    ctx.lineWidth = 4;
    ctx.strokeStyle = "#8427db";
    ctx.fillStyle = "#8427db";

    for (let i = 0; i < edgeInput.value.length; i++) {
        const sPoint = edgeCorr[parseInt(parseInt(edgeInput.value.charAt(i), 16) / 4)];
        const ePoint = edgeCorr[parseInt(edgeInput.value.charAt(i), 16) % 4];

        const delta = [ePoint[0] - sPoint[0], ePoint[1] - sPoint[1]];
        const len = Math.sqrt(delta[0] * delta[0] + delta[1] * delta[1]);
        const unit = [delta[0] / len, delta[1] / len];

        const sPointback = [sPoint[0] + (unit[0] * arrowSize) / 2, sPoint[1] + (unit[1] * arrowSize) / 2];
        const ePointback = [ePoint[0] - (unit[0] * arrowSize) / 2, ePoint[1] - (unit[1] * arrowSize) / 2];

        const headEnd = [ePoint[0], ePoint[1]];
        const headLeft = [ePoint[0] + arrowSize * Math.cos(Math.atan2(unit[1], unit[0]) - (3 * Math.PI) / 4) - unit[0] * arrowSize, ePoint[1] + arrowSize * Math.sin(Math.atan2(unit[1], unit[0]) - (3 * Math.PI) / 4) - unit[1] * arrowSize];
        const headRight = [ePoint[0] + arrowSize * Math.cos(Math.atan2(unit[1], unit[0]) + (3 * Math.PI) / 4) - unit[0] * arrowSize, ePoint[1] + arrowSize * Math.sin(Math.atan2(unit[1], unit[0]) + (3 * Math.PI) / 4) - unit[1] * arrowSize];

        ctx.beginPath();
        ctx.moveTo(...sPointback);
        ctx.lineTo(...ePointback);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(...headEnd);
        ctx.lineTo(...headLeft);
        ctx.lineTo(...headRight);
        ctx.lineTo(...headEnd);
        ctx.closePath();
        ctx.fill();
    }
    for (let i = 0; i < cornerInput.value.length; i++) {
        const sPoint = cornerCorr[parseInt(parseInt(cornerInput.value.charAt(i), 16) / 4)];
        const ePoint = cornerCorr[parseInt(cornerInput.value.charAt(i), 16) % 4];

        const delta = [ePoint[0] - sPoint[0], ePoint[1] - sPoint[1]];
        const len = Math.sqrt(delta[0] * delta[0] + delta[1] * delta[1]);
        const unit = [delta[0] / len, delta[1] / len];

        const sPointback = [sPoint[0] + (unit[0] * arrowSize) / 2, sPoint[1] + (unit[1] * arrowSize) / 2];
        const ePointback = [ePoint[0] - (unit[0] * arrowSize) / 2, ePoint[1] - (unit[1] * arrowSize) / 2];

        const headEnd = [ePoint[0], ePoint[1]];
        const headLeft = [ePoint[0] + arrowSize * Math.cos(Math.atan2(unit[1], unit[0]) - (3 * Math.PI) / 4) - unit[0] * arrowSize, ePoint[1] + arrowSize * Math.sin(Math.atan2(unit[1], unit[0]) - (3 * Math.PI) / 4) - unit[1] * arrowSize];
        const headRight = [ePoint[0] + arrowSize * Math.cos(Math.atan2(unit[1], unit[0]) + (3 * Math.PI) / 4) - unit[0] * arrowSize, ePoint[1] + arrowSize * Math.sin(Math.atan2(unit[1], unit[0]) + (3 * Math.PI) / 4) - unit[1] * arrowSize];

        ctx.beginPath();
        ctx.moveTo(...sPointback);
        ctx.lineTo(...ePointback);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(...headEnd);
        ctx.lineTo(...headLeft);
        ctx.lineTo(...headRight);
        ctx.lineTo(...headEnd);
        ctx.closePath();
        ctx.fill();
    }
}

drawGrid();

colorInput.addEventListener("input", drawGrid);
edgeInput.addEventListener("input", drawGrid);
cornerInput.addEventListener("input", drawGrid);

async function copyCanvasToClipboard() {
    try {
        const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
        const item = new ClipboardItem({ "image/png": blob });
        await navigator.clipboard.write([item]);
    } catch (err) {
        console.error(err);
    }
}

copyBtn.addEventListener("click", () => {
    drawGrid();
    copyCanvasToClipboard();
});

document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "c") {
        copyCanvasToClipboard();
        e.preventDefault();
    }
});

const resetBtn = document.getElementById("resetBtn");
const clearBtn = document.getElementById("clearBtn");
const toggleBtn = document.getElementById("toggleBtn");

const colorButtons = document.querySelectorAll(".color-input");

colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (colorInput.value.length < 21) {
            colorInput.value += button.value;
            drawGrid();
        }
    });
});

resetBtn.addEventListener("click", () => {
    colorInput.value = "";
    toggle = false;

    drawGrid();
});

clearBtn.addEventListener("click", () => {
    colorInput.value = colorInput.value.slice(0, -1);
    drawGrid();
});
toggleBtn.addEventListener("click", () => {
    toggle = !toggle;
    drawGrid();
});

document.getElementById("downloadBtn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = colorInput.value.slice(0, toggle ? 21 : 9).padEnd(toggle ? 21 : 9, "X") + "e" + edgeInput.value + "c" + cornerInput.value + "-ruvikz.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
});
